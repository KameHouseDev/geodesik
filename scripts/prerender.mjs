// scripts/prerender.mjs
// Prerenderiza el HTML usando Vite SSR + react-dom/server
// Se ejecuta automáticamente después de `npm run build`

import { build } from 'vite'
import { readFileSync, writeFileSync, rmSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

async function prerender() {
  // 1. Build SSR bundle
  await build({
    root,
    build: {
      ssr: './src/entry-server.jsx',
      outDir: 'dist-ssr',
      rollupOptions: {
        output: { format: 'esm' },
      },
    },
    ssr: {
      noExternal: true,
    },
  })

  // 2. Importar el módulo SSR generado
  const entryPath = pathToFileURL(resolve(root, 'dist-ssr', 'entry-server.js')).href
  const { render } = await import(entryPath)

  // 3. Renderizar app a HTML
  const appHtml = render()

  // 4. Inyectar en el index.html buildado
  const templatePath = resolve(root, 'dist', 'index.html')
  const template = readFileSync(templatePath, 'utf-8')
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )
  writeFileSync(templatePath, html)

  // 5. Limpiar bundle SSR temporal
  rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

  console.log('✅ Prerender completado — dist/index.html contiene HTML estático')
}

prerender().catch((err) => {
  console.error('❌ Error en prerender:', err)
  process.exit(1)
})
