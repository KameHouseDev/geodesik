// Comprime y redimensiona las imágenes del proyecto para web.
// Procesa src/assets/images y public/images IN-PLACE (los originales están en
// git, así que siempre puedes revertir con `git checkout`).
//
// Reglas:
//  - Redimensiona a un ancho máximo (MAX_WIDTH), nunca agranda.
//  - Re-codifica WebP/JPG/PNG con compresión razonable para web.
//  - Solo sobrescribe si el resultado pesa MENOS que el original.
//
// Uso:  node scripts/optimize-images.mjs
//       node scripts/optimize-images.mjs --dry   (solo reporta, no escribe)

import sharp from 'sharp';
import { readdir, stat, writeFile, readFile } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const DIRS = ['src/assets/images', 'public/images'];
const MAX_WIDTH = 1600;        // ancho máximo en píxeles
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;
const DRY_RUN = process.argv.includes('--dry');

const fmtKB = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function encode(buffer, ext) {
  const img = sharp(buffer, { failOn: 'none' }).rotate(); // respeta orientación EXIF
  const meta = await img.metadata();
  if (meta.width && meta.width > MAX_WIDTH) {
    img.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  const e = ext.toLowerCase();
  if (e === '.jpg' || e === '.jpeg') {
    return img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
  }
  if (e === '.webp') {
    return img.webp({ quality: WEBP_QUALITY }).toBuffer();
  }
  if (e === '.png') {
    return img.png({ compressionLevel: 9, palette: true }).toBuffer();
  }
  return null; // formato no soportado (p. ej. .mp4)
}

async function processDir(relDir) {
  const absDir = join(ROOT, relDir);
  let entries;
  try {
    entries = await readdir(absDir);
  } catch {
    console.warn(`(omitido, no existe) ${relDir}`);
    return { before: 0, after: 0, count: 0 };
  }

  let before = 0, after = 0, count = 0;
  for (const name of entries) {
    const ext = extname(name);
    if (!/\.(jpe?g|webp|png)$/i.test(ext)) continue;

    const abs = join(absDir, name);
    const { size: origSize } = await stat(abs);
    // Leemos a buffer con fs (no pasamos la ruta a sharp) para no dejar el
    // archivo abierto y poder sobrescribirlo en Windows.
    const input = await readFile(abs);

    let output;
    try {
      output = await encode(input, ext);
    } catch (err) {
      console.warn(`  ⚠ error en ${name}: ${err.message}`);
      continue;
    }
    if (!output) continue;

    before += origSize;
    if (output.length < origSize) {
      if (!DRY_RUN) await writeFile(abs, output);
      after += output.length;
      count++;
      const pct = (100 * (1 - output.length / origSize)).toFixed(0);
      console.log(`  ✓ ${name}: ${fmtKB(origSize)} → ${fmtKB(output.length)} (-${pct}%)`);
    } else {
      after += origSize;
      console.log(`  – ${name}: ya optimizada (${fmtKB(origSize)})`);
    }
  }
  return { before, after, count };
}

console.log(DRY_RUN ? '== DRY RUN (no se escriben archivos) ==\n' : '');
let totalBefore = 0, totalAfter = 0, totalCount = 0;
for (const dir of DIRS) {
  console.log(`\n${dir}:`);
  const { before, after, count } = await processDir(dir);
  totalBefore += before; totalAfter += after; totalCount += count;
}

console.log('\n──────────────────────────────');
console.log(`Optimizadas: ${totalCount} imágenes`);
console.log(`Total: ${fmtKB(totalBefore)} → ${fmtKB(totalAfter)} ` +
  `(-${(100 * (1 - totalAfter / (totalBefore || 1))).toFixed(0)}%)`);
if (DRY_RUN) console.log('(dry run: no se modificó nada)');
