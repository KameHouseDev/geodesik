import { useState } from 'react'
import { FaTruck, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const regiones = [
  { nombre: 'Región Metropolitana (Santiago)', costo: 'Gratis', dias: '3–5 días hábiles', nota: 'Instalación incluida en Santiago y alrededores' },
  { nombre: 'Valparaíso (V Región)', costo: '$45.000', dias: '5–7 días hábiles', nota: null },
  { nombre: "O'Higgins (VI Región)", costo: '$40.000', dias: '4–6 días hábiles', nota: null },
  { nombre: 'Maule (VII Región)', costo: '$60.000', dias: '5–7 días hábiles', nota: null },
  { nombre: 'Ñuble (XVI Región)', costo: '$70.000', dias: '6–8 días hábiles', nota: null },
  { nombre: 'Biobío (VIII Región)', costo: '$75.000', dias: '6–8 días hábiles', nota: null },
  { nombre: 'La Araucanía (IX Región)', costo: '$90.000', dias: '7–10 días hábiles', nota: null },
  { nombre: 'Los Ríos (XIV Región)', costo: '$100.000', dias: '8–10 días hábiles', nota: null },
  { nombre: 'Los Lagos (X Región)', costo: '$120.000', dias: '8–12 días hábiles', nota: null },
  { nombre: 'Aysén (XI Región)', costo: 'Consultar', dias: 'A coordinar', nota: 'Costo y fecha según disponibilidad de transporte' },
  { nombre: 'Magallanes (XII Región)', costo: 'Consultar', dias: 'A coordinar', nota: 'Costo y fecha según disponibilidad de transporte' },
  { nombre: 'Atacama (III Región)', costo: '$110.000', dias: '8–10 días hábiles', nota: null },
  { nombre: 'Coquimbo (IV Región)', costo: '$85.000', dias: '6–8 días hábiles', nota: null },
  { nombre: 'Antofagasta (II Región)', costo: '$130.000', dias: '9–12 días hábiles', nota: null },
  { nombre: 'Tarapacá (I Región)', costo: '$140.000', dias: '10–14 días hábiles', nota: null },
  { nombre: 'Arica y Parinacota (XV Región)', costo: '$150.000', dias: '10–14 días hábiles', nota: null },
]

const Calculadora = () => {
  const [regionSeleccionada, setRegionSeleccionada] = useState('')

  const region = regiones.find((r) => r.nombre === regionSeleccionada)

  const mensajeWsp = region
    ? `Hola! Quiero cotizar un envío a ${regionSeleccionada}. ¿Pueden confirmarme el costo y plazo de despacho?`
    : `Hola! Me gustaría consultar sobre el costo de envío.`

  return (
    <section id="calculadora" className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
            <FaTruck /> Despacho a todo Chile
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Calculadora de envío
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-4"></div>
          <p className="text-gold-light text-base max-w-xl mx-auto">
            Selecciona tu región y te mostramos el costo estimado y plazo de despacho.
          </p>
        </div>

        {/* Selector */}
        <div className="bg-white/5 border border-gold/20 rounded-2xl p-6 md:p-8 shadow-xl">
          <label className="block text-sm font-semibold text-gold-light mb-2">
            <FaMapMarkerAlt className="inline mr-1" />
            ¿A qué región envías?
          </label>
          <select
            value={regionSeleccionada}
            onChange={(e) => setRegionSeleccionada(e.target.value)}
            className="w-full bg-slate-800 border border-gold/30 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors cursor-pointer"
          >
            <option value="">— Selecciona tu región —</option>
            {regiones.map((r) => (
              <option key={r.nombre} value={r.nombre}>
                {r.nombre}
              </option>
            ))}
          </select>

          {/* Resultado */}
          {region && (
            <div className="mt-6 animate-fadeIn">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-800/80 border border-gold/30 rounded-xl p-4 text-center">
                  <p className="text-xs text-gold-light uppercase tracking-widest mb-1">Costo estimado</p>
                  <p className={`text-2xl font-bold ${region.costo === 'Gratis' ? 'text-green-400' : region.costo === 'Consultar' ? 'text-yellow-400' : 'text-white'}`}>
                    {region.costo}
                  </p>
                  {region.costo === 'Gratis' && (
                    <p className="text-green-400 text-xs mt-1">¡Sin costo de despacho!</p>
                  )}
                </div>
                <div className="bg-slate-800/80 border border-gold/30 rounded-xl p-4 text-center">
                  <p className="text-xs text-gold-light uppercase tracking-widest mb-1">Plazo estimado</p>
                  <p className="text-xl font-bold text-white">{region.dias}</p>
                </div>
              </div>

              {region.nota && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-4 py-3 mb-4">
                  <p className="text-yellow-300 text-sm">ℹ️ {region.nota}</p>
                </div>
              )}

              <p className="text-gold-light text-xs mb-4">
                * Los costos son referenciales según el tamaño del producto. Confirmamos el valor exacto al cotizar.
              </p>

              <a
                href={`https://wa.me/+56939036058?text=${encodeURIComponent(mensajeWsp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg text-sm"
              >
                <FaWhatsapp size={18} />
                Confirmar envío por WhatsApp
              </a>
            </div>
          )}
        </div>

        {/* Info adicional */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white/5 border border-gold/10 rounded-xl p-4">
            <p className="text-2xl mb-1">🏭</p>
            <p className="text-white text-sm font-semibold">Fabricación directa</p>
            <p className="text-gold-light text-xs">Sin intermediarios</p>
          </div>
          <div className="bg-white/5 border border-gold/10 rounded-xl p-4">
            <p className="text-2xl mb-1">📦</p>
            <p className="text-white text-sm font-semibold">Embalaje protegido</p>
            <p className="text-gold-light text-xs">Llega en perfectas condiciones</p>
          </div>
          <div className="bg-white/5 border border-gold/10 rounded-xl p-4">
            <p className="text-2xl mb-1">🔧</p>
            <p className="text-white text-sm font-semibold">Instalación disponible</p>
            <p className="text-gold-light text-xs">En Santiago y zona central</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculadora
