import { useState } from 'react'
import { FaWhatsapp, FaTools } from 'react-icons/fa'

const opciones = {
  tipo: [
    { id: 'tina', label: 'Tina de baño', emoji: '🛁' },
    { id: 'sauna', label: 'Sauna', emoji: '🧖' },
  ],
  tamaño: {
    tina: [
      { id: '2p', label: '2 personas — Terraza', basePrice: 800000 },
      { id: '4p', label: '4 personas', basePrice: 1200000 },
      { id: '6p', label: '6 personas', basePrice: 1400000 },
    ],
    sauna: [
      { id: '2p', label: '2 personas (1.80×1.06 m)', basePrice: 1300000 },
      { id: '4p', label: '4 personas (1.80×1.60 m)', basePrice: 1990000 },
      { id: '6p', label: '6 personas (1.90×2.00 m)', basePrice: 2490000 },
    ],
  },
  madera: [
    { id: 'pino', label: 'Pino Insigne', extraPrice: 0, desc: 'Incluido en precio base' },
    { id: 'roble', label: 'Roble Nativo', extraPrice: 150000, desc: '+$150.000 — Mayor durabilidad' },
    { id: 'alerce', label: 'Alerce (Larch)', extraPrice: 250000, desc: '+$250.000 — Premium resistente al agua' },
  ],
  calefaccion: {
    tina: [
      { id: 'lena', label: 'Leña', extraPrice: 0, desc: 'Incluido — Calidez natural' },
      { id: 'gas', label: 'Gas', extraPrice: 80000, desc: '+$80.000 — Calentamiento rápido' },
      { id: 'electrica', label: 'Eléctrica', extraPrice: 120000, desc: '+$120.000 — Fácil de controlar' },
    ],
    sauna: [
      { id: 'electrica', label: 'Eléctrica', extraPrice: 0, desc: 'Incluido — Control digital de temperatura' },
    ],
  },
  extras: {
    tina: [
      { id: 'led', label: 'LED interior', extraPrice: 0, desc: 'Incluido' },
      { id: 'hidromasaje', label: 'Sistema Hidromasaje', extraPrice: 80000, desc: '+$80.000' },
      { id: 'cascada', label: 'Cascada', extraPrice: 60000, desc: '+$60.000' },
      { id: 'cubierta', label: 'Cubierta aislante', extraPrice: 45000, desc: '+$45.000 — Mantiene el calor' },
    ],
    sauna: [
      { id: 'luz', label: 'Luz interior', extraPrice: 0, desc: 'Incluido' },
      { id: 'ventana', label: 'Ventana panorámica', extraPrice: 70000, desc: '+$70.000' },
      { id: 'aromaterapia', label: 'Kit aromaterapia', extraPrice: 35000, desc: '+$35.000' },
    ],
  },
}

const formatPrice = (price) =>
  '$' + price.toLocaleString('es-CL')

const Configurador = () => {
  const [tipo, setTipo] = useState('')
  const [tamano, setTamano] = useState('')
  const [madera, setMadera] = useState('pino')
  const [calefaccion, setCalefaccion] = useState('')
  const [extrasSeleccionados, setExtrasSeleccionados] = useState([])

  const resetFromTipo = (nuevoTipo) => {
    setTipo(nuevoTipo)
    setTamano('')
    setMadera('pino')
    setCalefaccion(nuevoTipo === 'sauna' ? 'electrica' : '')
    setExtrasSeleccionados(nuevoTipo === 'tina' ? ['led'] : ['luz'])
  }

  const toggleExtra = (id) => {
    setExtrasSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    )
  }

  const calcularPrecio = () => {
    if (!tipo || !tamano) return null
    const tamanoOpt = opciones.tamaño[tipo].find((t) => t.id === tamano)
    if (!tamanoOpt) return null

    let total = tamanoOpt.basePrice
    const maderaOpt = opciones.madera.find((m) => m.id === madera)
    if (maderaOpt) total += maderaOpt.extraPrice

    const calOpts = opciones.calefaccion[tipo] || []
    const calOpt = calOpts.find((c) => c.id === calefaccion)
    if (calOpt) total += calOpt.extraPrice

    const extrasOpts = opciones.extras[tipo] || []
    extrasSeleccionados.forEach((eId) => {
      const e = extrasOpts.find((ex) => ex.id === eId)
      if (e) total += e.extraPrice
    })

    return total
  }

  const precio = calcularPrecio()

  const mensajeWsp = () => {
    if (!tipo || !tamano) return 'Hola! Me interesa cotizar un producto.'
    const tamanoOpt = opciones.tamaño[tipo].find((t) => t.id === tamano)
    const maderaOpt = opciones.madera.find((m) => m.id === madera)
    const calOpt = (opciones.calefaccion[tipo] || []).find((c) => c.id === calefaccion)
    const extrasOpts = opciones.extras[tipo] || []
    const extrasNombres = extrasSeleccionados
      .map((id) => extrasOpts.find((e) => e.id === id)?.label)
      .filter(Boolean)
      .join(', ')

    return `Hola! Quiero cotizar:
• Producto: ${tipo === 'tina' ? 'Tina de baño' : 'Sauna'}
• Tamaño: ${tamanoOpt?.label}
• Madera: ${maderaOpt?.label}
• Calefacción: ${calOpt?.label}
• Extras: ${extrasNombres || 'Sin extras adicionales'}
• Precio estimado: ${precio ? formatPrice(precio) : 'por cotizar'}

¿Pueden confirmarme disponibilidad y plazo de entrega?`
  }

  const pasoCompleto = tipo && tamano && calefaccion

  return (
    <section id="configurador" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
            <FaTools /> Configura tu producto
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Arma tu tina o sauna ideal
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-4"></div>
          <p className="text-gold-light text-base max-w-xl mx-auto">
            Elige las opciones que necesitas y ve el precio estimado al instante.
          </p>
        </div>

        <div className="space-y-6">
          {/* Paso 1: Tipo */}
          <div className="bg-white/5 border border-gold/20 rounded-2xl p-6">
            <p className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-gold text-slate-900 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              ¿Qué producto te interesa?
            </p>
            <div className="grid grid-cols-2 gap-3">
              {opciones.tipo.map((t) => (
                <button
                  key={t.id}
                  onClick={() => resetFromTipo(t.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 font-semibold transition-all duration-200 ${
                    tipo === t.id
                      ? 'border-gold bg-gold/10 text-white'
                      : 'border-gold/20 text-gold-light hover:border-gold/50'
                  }`}
                >
                  <span className="text-3xl">{t.emoji}</span>
                  <span className="text-sm">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Paso 2: Tamaño */}
          {tipo && (
            <div className="bg-white/5 border border-gold/20 rounded-2xl p-6 animate-fadeIn">
              <p className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-gold text-slate-900 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                Tamaño / Capacidad
              </p>
              <div className="space-y-2">
                {opciones.tamaño[tipo].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTamano(t.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                      tamano === t.id
                        ? 'border-gold bg-gold/10 text-white'
                        : 'border-gold/20 text-gold-light hover:border-gold/50'
                    }`}
                  >
                    <span className="text-sm font-medium">{t.label}</span>
                    <span className="text-xs font-bold text-gold">{formatPrice(t.basePrice)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Paso 3: Madera */}
          {tamano && (
            <div className="bg-white/5 border border-gold/20 rounded-2xl p-6 animate-fadeIn">
              <p className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-gold text-slate-900 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                Tipo de madera
              </p>
              <div className="space-y-2">
                {opciones.madera.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMadera(m.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                      madera === m.id
                        ? 'border-gold bg-gold/10 text-white'
                        : 'border-gold/20 text-gold-light hover:border-gold/50'
                    }`}
                  >
                    <div className="text-left">
                      <p className="text-sm font-medium">{m.label}</p>
                      <p className="text-xs text-gold-light/70">{m.desc}</p>
                    </div>
                    {m.extraPrice > 0 && (
                      <span className="text-xs font-bold text-gold whitespace-nowrap ml-2">
                        +{formatPrice(m.extraPrice)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Paso 4: Calefacción */}
          {tamano && tipo === 'tina' && (
            <div className="bg-white/5 border border-gold/20 rounded-2xl p-6 animate-fadeIn">
              <p className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-gold text-slate-900 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                Sistema de calefacción
              </p>
              <div className="space-y-2">
                {opciones.calefaccion[tipo].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCalefaccion(c.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                      calefaccion === c.id
                        ? 'border-gold bg-gold/10 text-white'
                        : 'border-gold/20 text-gold-light hover:border-gold/50'
                    }`}
                  >
                    <div className="text-left">
                      <p className="text-sm font-medium">{c.label}</p>
                      <p className="text-xs text-gold-light/70">{c.desc}</p>
                    </div>
                    {c.extraPrice > 0 && (
                      <span className="text-xs font-bold text-gold whitespace-nowrap ml-2">
                        +{formatPrice(c.extraPrice)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Paso 5: Extras */}
          {pasoCompleto && (
            <div className="bg-white/5 border border-gold/20 rounded-2xl p-6 animate-fadeIn">
              <p className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-gold text-slate-900 rounded-full flex items-center justify-center text-xs font-bold">
                  {tipo === 'tina' ? '5' : '4'}
                </span>
                Complementos (opcional)
              </p>
              <div className="space-y-2">
                {(opciones.extras[tipo] || []).map((e) => {
                  const incluido = e.extraPrice === 0
                  const seleccionado = extrasSeleccionados.includes(e.id)
                  return (
                    <button
                      key={e.id}
                      onClick={() => !incluido && toggleExtra(e.id)}
                      disabled={incluido}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                        incluido
                          ? 'border-green-500/30 bg-green-500/5 text-green-400 cursor-default'
                          : seleccionado
                          ? 'border-gold bg-gold/10 text-white'
                          : 'border-gold/20 text-gold-light hover:border-gold/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-left">
                        <span className="text-sm">{incluido ? '✓' : seleccionado ? '✓' : '+'}</span>
                        <div>
                          <p className="text-sm font-medium">{e.label}</p>
                          <p className="text-xs opacity-70">{e.desc}</p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Resultado de precio */}
          {pasoCompleto && precio !== null && (
            <div className="bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold rounded-2xl p-6 text-center animate-fadeIn shadow-xl shadow-gold/20">
              <p className="text-gold-light text-sm uppercase tracking-widest mb-1 font-semibold">Precio estimado</p>
              <p className="text-5xl font-bold text-white mb-1">{formatPrice(precio)}</p>
              <p className="text-gold-light/70 text-xs mb-6">
                * Precio referencial. Confirmamos el valor exacto al cotizar.
              </p>
              <a
                href={`https://wa.me/+56939036058?text=${encodeURIComponent(mensajeWsp())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg text-base"
              >
                <FaWhatsapp size={20} />
                Cotizar esta configuración por WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Configurador
