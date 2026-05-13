import { useState } from 'react'
import { FaWhatsapp, FaTools, FaCheck, FaFire, FaBolt, FaLeaf } from 'react-icons/fa'
import tinaMaiten from '../assets/images/tina_maiten.jpg'
import tinaMatanza from '../assets/images/tina_matanza.jpg'
import tinaja6 from '../assets/images/tinaja_6.WebP'
import sauna1 from '../assets/images/sauna_1.WebP'
import sauna3 from '../assets/images/sauna_3.WebP'
import sauna5 from '../assets/images/sauna_5.WebP'

const imagenesPorSeleccion = {
  tina: { '2p': tinaMaiten, '4p': tinaMatanza, '6p': tinaja6 },
  sauna: { '2p': sauna1, '4p': sauna3, '6p': sauna5 },
}

const imagenDefault = {
  tina: tinaMaiten,
  sauna: sauna1,
}

const opciones = {
  tipo: [
    { id: 'tina', label: 'Tina de baño', emoji: '🛁', desc: 'Madera tratada, calefacción a elección' },
    { id: 'sauna', label: 'Sauna', emoji: '🧖', desc: 'Calefacción eléctrica, varios tamaños' },
  ],
  tamaño: {
    tina: [
      { id: '2p', label: '2 personas', sub: 'Ideal para terraza', basePrice: 800000 },
      { id: '4p', label: '4 personas', sub: 'El más pedido', basePrice: 1200000, popular: true },
      { id: '6p', label: '6 personas', sub: 'Para familias grandes', basePrice: 1400000 },
    ],
    sauna: [
      { id: '2p', label: '2 personas', sub: '1.80 × 1.06 m', basePrice: 1300000 },
      { id: '4p', label: '4 personas', sub: '1.80 × 1.60 m', basePrice: 1990000, popular: true },
      { id: '6p', label: '6 personas', sub: '1.90 × 2.00 m', basePrice: 2490000 },
    ],
  },
  madera: [
    { id: 'pino-insigne', label: 'Pino Insigne',  extraPrice: 0,       desc: 'Incluido — Madera base, clásica y resistente' },
    { id: 'pino-oregon',  label: 'Pino Oregon',   extraPrice: 150000,  desc: 'Mayor densidad y durabilidad que el pino insigne' },
    { id: 'pino-cipres',  label: 'Pino Ciprés',   extraPrice: 250000,  desc: 'Premium — Aroma natural, alta resistencia a la humedad' },
  ],
  calefaccion: {
    tina: [
      { id: 'lena-galv',   label: 'Leña — Calefactor galvanizado', icon: <FaFire />,  extraPrice: 0,        desc: 'Incluido — Calidez natural, sistema estándar' },
      { id: 'lena-inox',   label: 'Leña — Calefactor acero inox',  icon: <FaFire />,  extraPrice: 200000,   desc: 'Mayor durabilidad y resistencia a la corrosión' },
      { id: 'gas-calefont', label: 'Gas — Calefont',               icon: <FaBolt />,  extraPrice: 600000,   desc: 'Calentamiento rápido, control de temperatura' },
      { id: 'elec-bomba',  label: 'Eléctrica — Bomba de calor',    icon: <FaBolt />,  extraPrice: 1500000,  desc: 'Alta eficiencia energética, sin humo ni llama' },
    ],
    sauna: [
      { id: 'electrica', label: 'Eléctrica', icon: <FaBolt />, extraPrice: 0, desc: 'Control digital de temperatura, incluido' },
    ],
  },
  hidromasaje: [
    { id: 'ninguno',        label: 'Sin hidromasaje',     extraPrice: 0,       desc: 'Solo la experiencia de la tina natural' },
    { id: 'movimiento',     label: 'Solo movimiento',     extraPrice: 150000,  desc: 'Agitación básica del agua, efecto relajante' },
    { id: 'jets',           label: 'Jets a presión',      extraPrice: 300000,  desc: 'Chorros de agua a presión para masaje muscular' },
    { id: 'cascada-inox',  label: 'Cascada acero inox',  extraPrice: 250000,  desc: 'Caída de agua sobre hombros en acero inoxidable' },
  ],
  extras: {
    tina: [
      { id: 'led',      label: 'LED interior',                extraPrice: 50000,   desc: 'Iluminación interior sumergible' },
      { id: 'resina',   label: 'Impermeabilización con resina', extraPrice: 300000,  desc: 'Protección interior con resina epóxica, mayor durabilidad' },
      { id: 'cubierta', label: 'Cubierta aislante',             extraPrice: 60000,   desc: 'Mantiene el calor entre usos, reduce consumo' },
    ],
    sauna: [
      { id: 'luz',         label: 'Luz interior',         extraPrice: 0,     desc: 'Incluido en todos los modelos' },
      { id: 'ventana',     label: 'Ventana panorámica',   extraPrice: 70000,  desc: 'Vidrio templado con vista al exterior' },
      { id: 'aromaterapia', label: 'Kit aromaterapia',   extraPrice: 35000,  desc: 'Esencias para una experiencia completa' },
    ],
  },
}

const fmt = (n) => '$' + n.toLocaleString('es-CL')

const StepHeader = ({ num, label, done, active }) => (
  <div className={`flex items-center gap-3 mb-4 ${!active && !done ? 'opacity-40' : ''}`}>
    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${done ? 'bg-green-500 text-white' : active ? 'bg-gold text-slate-900' : 'bg-white/10 text-white'}`}>
      {done ? <FaCheck size={10} /> : num}
    </span>
    <p className="text-white font-semibold text-sm">{label}</p>
  </div>
)

const Configurador = () => {
  const [tipo, setTipo] = useState('')
  const [tamano, setTamano] = useState('')
  const [madera, setMadera] = useState('pino-insigne')
  const [calefaccion, setCalefaccion] = useState('')
  const [hidromasaje, setHidromasaje] = useState('')
  const [extras, setExtras] = useState([])

  const resetFromTipo = (t) => {
    setTipo(t)
    setTamano('')
    setMadera('pino-insigne')
    setCalefaccion(t === 'sauna' ? 'electrica' : '')
    setHidromasaje(t === 'tina' ? '' : 'n/a')
    setExtras(t === 'sauna' ? ['luz'] : [])
  }

  const toggleExtra = (id) => {
    setExtras((prev) => prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id])
  }

  const pasos = {
    tipo: !!tipo,
    tamano: !!tamano,
    calefaccion: !!calefaccion,
    hidromasaje: tipo === 'sauna' ? true : !!hidromasaje,
  }
  const pasoCompleto = pasos.tipo && pasos.tamano && pasos.calefaccion && pasos.hidromasaje

  // Imagen dinámica
  const imagenActual = tipo
    ? (tamano ? imagenesPorSeleccion[tipo][tamano] : imagenDefault[tipo])
    : null

  // Cálculo desglosado
  const tamanoOpt = tipo && tamano ? opciones.tamaño[tipo].find((t) => t.id === tamano) : null
  const maderaOpt = opciones.madera.find((m) => m.id === madera)
  const calOpt = tipo ? (opciones.calefaccion[tipo] || []).find((c) => c.id === calefaccion) : null
  const hidro = opciones.hidromasaje.find((h) => h.id === hidromasaje)
  const extrasOpts = tipo ? (opciones.extras[tipo] || []) : []
  const extrasSeleccionados = extrasOpts.filter((e) => extras.includes(e.id) && e.extraPrice > 0)

  const precioBase    = tamanoOpt?.basePrice || 0
  const precioMadera  = maderaOpt?.extraPrice || 0
  const precioCal     = calOpt?.extraPrice || 0
  const precioHidro   = (hidro && hidro.id !== 'ninguno') ? hidro.extraPrice : 0
  const precioExtras  = extrasSeleccionados.reduce((acc, e) => acc + e.extraPrice, 0)
  const precioTotal   = precioBase + precioMadera + precioCal + precioHidro + precioExtras

  const numPaso = (n) => tipo === 'sauna' ? n - 1 : n

  const mensajeWsp = () => {
    const extrasNombres = extrasOpts
      .filter((e) => extras.includes(e.id))
      .map((e) => e.label)
      .join(', ')
    const hidroLabel = hidro && hidro.id !== 'ninguno' ? hidro.label : 'Sin hidromasaje'
    const lineasTina = tipo === 'tina' ? `\n• Hidromasaje: ${hidroLabel}` : ''
    return `Hola! Quiero cotizar:\n• Producto: ${tipo === 'tina' ? 'Tina de baño' : 'Sauna'}\n• Tamaño: ${tamanoOpt?.label} — ${tamanoOpt?.sub}\n• Madera: ${maderaOpt?.label}\n• Calefacción: ${calOpt?.label}${lineasTina}\n• Extras: ${extrasNombres || 'Sin extras'}\n• Precio estimado: ${fmt(precioTotal)}\n\n¿Pueden confirmarme disponibilidad y plazo de entrega?`
  }

  return (
    <section id="configurador" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
            <FaTools /> Configurador
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Arma tu tina o sauna ideal
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-4"></div>
          <p className="text-gold-light text-base max-w-xl mx-auto">
            Elige las opciones y ve el precio estimado al instante.
          </p>
        </div>

        {/* Layout 2 columnas */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Columna izquierda: pasos ── */}
          <div className="flex-1 space-y-5">

            {/* Paso 1: Tipo */}
            <div className="bg-white/5 border border-gold/20 rounded-2xl p-6">
              <StepHeader num="1" label="¿Qué producto te interesa?" done={pasos.tipo} active={true} />
              <div className="grid grid-cols-2 gap-3">
                {opciones.tipo.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => resetFromTipo(t.id)}
                    className={`flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all duration-200 ${tipo === t.id ? 'border-gold bg-gold/10 text-white' : 'border-gold/20 text-gold-light hover:border-gold/50'}`}
                  >
                    <span className="text-4xl">{t.emoji}</span>
                    <span className="text-sm font-semibold">{t.label}</span>
                    <span className="text-xs opacity-60 text-center leading-tight">{t.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 2: Tamaño */}
            <div className={`bg-white/5 border rounded-2xl p-6 transition-all duration-300 ${pasos.tipo ? 'border-gold/20' : 'border-gold/10 opacity-50 pointer-events-none'}`}>
              <StepHeader num="2" label="Tamaño / Capacidad" done={pasos.tamano} active={pasos.tipo} />
              <div className="space-y-2">
                {(tipo ? opciones.tamaño[tipo] : opciones.tamaño.tina).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => pasos.tipo && setTamano(t.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 ${tamano === t.id ? 'border-gold bg-gold/10 text-white' : 'border-gold/20 text-gold-light hover:border-gold/50'}`}
                  >
                    <div className="text-left">
                      <p className="text-sm font-semibold">{t.label}</p>
                      <p className="text-xs opacity-60">{t.sub}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gold">{fmt(t.basePrice)}</p>
                      {t.popular && <p className="text-[10px] text-gold/60">Más pedido</p>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 3: Madera */}
            <div className={`bg-white/5 border rounded-2xl p-6 transition-all duration-300 ${pasos.tamano ? 'border-gold/20' : 'border-gold/10 opacity-50 pointer-events-none'}`}>
              <StepHeader num="3" label="Tipo de madera" done={pasos.tamano} active={pasos.tamano} />
              <div className="space-y-2">
                {opciones.madera.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => pasos.tamano && setMadera(m.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 ${madera === m.id ? 'border-gold bg-gold/10 text-white' : 'border-gold/20 text-gold-light hover:border-gold/50'}`}
                  >
                    <div className="text-left">
                      <p className="text-sm font-semibold flex items-center gap-2">
                        <FaLeaf className="text-green-400 text-xs" /> {m.label}
                      </p>
                      <p className="text-xs opacity-60">{m.desc}</p>
                    </div>
                    {m.extraPrice > 0 && (
                      <span className="text-xs font-bold text-gold ml-2 whitespace-nowrap">+{fmt(m.extraPrice)}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 4: Calefacción (solo tina) */}
            {tipo === 'tina' && (
              <div className={`bg-white/5 border rounded-2xl p-6 transition-all duration-300 ${pasos.tamano ? 'border-gold/20' : 'border-gold/10 opacity-50 pointer-events-none'}`}>
                <StepHeader num="4" label="Sistema de calefacción" done={!!calefaccion} active={pasos.tamano} />
                <div className="space-y-2">
                  {opciones.calefaccion.tina.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => pasos.tamano && setCalefaccion(c.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 ${calefaccion === c.id ? 'border-gold bg-gold/10 text-white' : 'border-gold/20 text-gold-light hover:border-gold/50'}`}
                    >
                      <div className="text-left">
                        <p className="text-sm font-semibold">{c.label}</p>
                        <p className="text-xs opacity-60">{c.desc}</p>
                      </div>
                      {c.extraPrice > 0 && (
                        <span className="text-xs font-bold text-gold ml-2 whitespace-nowrap">+{fmt(c.extraPrice)}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Paso 5: Hidromasaje (solo tina) */}
            {tipo === 'tina' && (
              <div className={`bg-white/5 border rounded-2xl p-6 transition-all duration-300 ${pasos.calefaccion ? 'border-gold/20' : 'border-gold/10 opacity-50 pointer-events-none'}`}>
                <StepHeader num="5" label="Sistema de hidromasaje" done={pasos.hidromasaje} active={pasos.calefaccion} />
                <div className="space-y-2">
                  {opciones.hidromasaje.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => pasos.calefaccion && setHidromasaje(h.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 ${hidromasaje === h.id ? 'border-gold bg-gold/10 text-white' : 'border-gold/20 text-gold-light hover:border-gold/50'}`}
                    >
                      <div className="text-left">
                        <p className="text-sm font-semibold">{h.label}</p>
                        <p className="text-xs opacity-60">{h.desc}</p>
                      </div>
                      {h.extraPrice > 0 && (
                        <span className="text-xs font-bold text-gold ml-2 whitespace-nowrap">+{fmt(h.extraPrice)}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Paso 6 / 5: Extras */}
            <div className={`bg-white/5 border rounded-2xl p-6 transition-all duration-300 ${pasoCompleto ? 'border-gold/20' : 'border-gold/10 opacity-50 pointer-events-none'}`}>
              <StepHeader num={tipo === 'tina' ? '6' : '5'} label="Complementos opcionales" done={false} active={pasoCompleto} />
              <div className="space-y-2">
                {(tipo ? opciones.extras[tipo] : []).map((e) => {
                  const incluido = e.extraPrice === 0
                  const sel = extras.includes(e.id)
                  return (
                    <button
                      key={e.id}
                      onClick={() => !incluido && pasoCompleto && toggleExtra(e.id)}
                      disabled={incluido}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                        incluido ? 'border-green-500/30 bg-green-500/5 cursor-default' :
                        sel ? 'border-gold bg-gold/10 text-white' :
                        'border-gold/20 text-gold-light hover:border-gold/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 text-left">
                        <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-[10px] ${incluido ? 'border-green-500 bg-green-500 text-white' : sel ? 'border-gold bg-gold text-slate-900' : 'border-gold/40'}`}>
                          {(incluido || sel) && <FaCheck />}
                        </span>
                        <div>
                          <p className={`text-sm font-semibold ${incluido ? 'text-green-400' : ''}`}>{e.label}</p>
                          <p className="text-xs opacity-60">{e.desc}</p>
                        </div>
                      </div>
                      {e.extraPrice > 0 && (
                        <span className="text-xs font-bold text-gold ml-2 whitespace-nowrap">+{fmt(e.extraPrice)}</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ── Columna derecha: resumen sticky ── */}
          <div className="w-full lg:w-80 xl:w-96 lg:sticky lg:top-24">
            <div className="bg-white/5 border border-gold/20 rounded-2xl overflow-hidden shadow-xl">

              {/* Imagen dinámica */}
              <div className="relative h-52 bg-slate-800 overflow-hidden">
                {imagenActual ? (
                  <img
                    key={imagenActual}
                    src={imagenActual}
                    alt="Preview producto"
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gold-light/40 text-sm">Selecciona un producto</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                {tipo && (
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-serif font-bold text-lg leading-tight">
                      {tipo === 'tina' ? 'Tina de baño' : 'Sauna'}
                      {tamanoOpt && ` · ${tamanoOpt.label}`}
                    </p>
                  </div>
                )}
              </div>

              {/* Desglose */}
              <div className="p-5 space-y-3">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Resumen de tu configuración</p>

                {tamanoOpt ? (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gold-light">
                      <span>Precio base ({tamanoOpt.label})</span>
                      <span className="text-white font-semibold">{fmt(precioBase)}</span>
                    </div>
                    {precioMadera > 0 && (
                      <div className="flex justify-between text-gold-light">
                        <span>Madera {maderaOpt?.label}</span>
                        <span className="text-white font-semibold">+{fmt(precioMadera)}</span>
                      </div>
                    )}
                    {precioCal > 0 && (
                      <div className="flex justify-between text-gold-light">
                        <span>Calefacción</span>
                        <span className="text-white font-semibold">+{fmt(precioCal)}</span>
                      </div>
                    )}
                    {precioHidro > 0 && (
                      <div className="flex justify-between text-gold-light">
                        <span>{hidro?.label}</span>
                        <span className="text-white font-semibold">+{fmt(precioHidro)}</span>
                      </div>
                    )}
                    {extrasSeleccionados.map((e) => (
                      <div key={e.id} className="flex justify-between text-gold-light">
                        <span>{e.label}</span>
                        <span className="text-white font-semibold">+{fmt(e.extraPrice)}</span>
                      </div>
                    ))}
                    <div className="border-t border-gold/20 pt-3 flex justify-between items-end">
                      <span className="text-gold-light text-xs">Precio estimado</span>
                      <span className="text-3xl font-bold text-white">{fmt(precioTotal)}</span>
                    </div>
                    <p className="text-gold-light/50 text-[11px]">* Valor referencial. Confirmamos al cotizar.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {['Tipo de producto', 'Tamaño', 'Madera', 'Calefacción', 'Extras'].map((item) => (
                      <div key={item} className="flex justify-between text-sm">
                        <span className="text-gold-light/50">{item}</span>
                        <span className="text-white/20 text-xs">—</span>
                      </div>
                    ))}
                    <div className="border-t border-gold/10 pt-3">
                      <p className="text-gold-light/40 text-xs text-center">Completa la configuración para ver el precio</p>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <a
                  href={pasoCompleto ? `https://wa.me/+56939036058?text=${encodeURIComponent(mensajeWsp())}` : '#configurador'}
                  target={pasoCompleto ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`mt-2 w-full flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-xl transition-all duration-300 text-sm ${pasoCompleto ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20 hover:scale-105' : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/10'}`}
                >
                  <FaWhatsapp size={18} />
                  {pasoCompleto ? 'Cotizar esta configuración' : 'Completa los pasos para cotizar'}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Configurador

