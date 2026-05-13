import { useState } from 'react'
import { FaTruck, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const regiones = [
  'Región Metropolitana (Santiago)',
  'Valparaíso (V Región)',
  "O'Higgins (VI Región)",
  'Maule (VII Región)',
  'Ñuble (XVI Región)',
  'Biobío (VIII Región)',
  'La Araucanía (IX Región)',
  'Los Ríos (XIV Región)',
  'Los Lagos (X Región)',
  'Aysén (XI Región)',
  'Magallanes (XII Región)',
  'Coquimbo (IV Región)',
  'Atacama (III Región)',
  'Antofagasta (II Región)',
  'Tarapacá (I Región)',
  'Arica y Parinacota (XV Región)',
]

const Calculadora = () => {
  const [regionSeleccionada, setRegionSeleccionada] = useState('')

  const mensajeWsp = regionSeleccionada
    ? `Hola! Quiero consultar el costo de envío a ${regionSeleccionada}. ¿Pueden cotizarme el despacho?`
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
            ¿Cuánto cuesta el envío?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-4"></div>
          <p className="text-gold-light text-base max-w-xl mx-auto">
            Despachamos a todo Chile. El costo varía según la región y el producto — contáctanos y te cotizamos el flete al instante.
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
            className="w-full bg-slate-800 border border-gold/30 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors cursor-pointer mb-6"
          >
            <option value="">— Selecciona tu región —</option>
            {regiones.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>

          {regionSeleccionada && (
            <div className="animate-fadeIn">
              <div className="bg-gold/10 border border-gold/30 rounded-xl px-5 py-4 mb-5 text-center">
                <p className="text-white font-semibold text-sm">
                  📦 Cotizamos el envío a <span className="text-gold">{regionSeleccionada}</span> directamente contigo.
                </p>
                <p className="text-gold-light text-xs mt-1">
                  El valor depende del producto y la dirección exacta. Te respondemos en minutos.
                </p>
              </div>
              <a
                href={`https://wa.me/+56939036058?text=${encodeURIComponent(mensajeWsp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg text-sm"
              >
                <FaWhatsapp size={18} />
                Consultar costo de envío por WhatsApp
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

