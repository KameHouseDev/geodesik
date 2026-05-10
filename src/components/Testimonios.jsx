import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

const testimonios = [
  {
    nombre: 'Rodrigo Salinas',
    ubicacion: 'Las Condes, Santiago',
    calificacion: 5,
    texto:
      'Compramos una tina para 4 personas y superó todas nuestras expectativas. La calidad de la madera es increíble y el equipo de Geodesik fue muy profesional en todo momento. La instalación fue rápida y quedamos encantados. ¡100% recomendados!',
    producto: 'Tina 4 personas',
  },
  {
    nombre: 'Valentina Morales',
    ubicacion: 'Providencia, Santiago',
    calificacion: 5,
    texto:
      'Llevamos 2 años con nuestro sauna y sigue como nuevo. El acabado artesanal se nota en cada detalle. Muy buen servicio postventa también, respondieron todas mis dudas. Vale cada peso.',
    producto: 'Sauna 4 personas',
  },
  {
    nombre: 'Carlos Fuentes',
    ubicacion: 'Viña del Mar',
    calificacion: 5,
    texto:
      'Pensé que iba a ser complicado traer la tina a Viña, pero Geodesik coordinó todo el envío sin problemas. La instalación fue profesional y quedó perfecta en mi terraza. Mis invitados no paran de hablar de ella.',
    producto: 'Tina para Terraza',
  },
  {
    nombre: 'Ana María Pérez',
    ubicacion: 'La Florida, Santiago',
    calificacion: 5,
    texto:
      'Buscaba algo de calidad a buen precio y lo encontré aquí. Me ayudaron a elegir el modelo ideal para mi espacio. El trato fue muy cercano y personalizado. Recomiendo Geodesik sin dudarlo.',
    producto: 'Sauna 2 personas',
  },
  {
    nombre: 'Tomás Vega',
    ubicacion: 'Melipilla',
    calificacion: 5,
    texto:
      'Excelente inversión. La tina llegó en perfecto estado y me dieron financiamiento en cómodas cuotas. El asesor fue muy amable y resolvió todas mis preguntas por WhatsApp. Producto de primera.',
    producto: 'Tina 6 personas',
  },
]

const Stars = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} className="text-gold text-sm" />
    ))}
  </div>
)

const Testimonios = () => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola! Vi los testimonios de clientes en su web y me gustaría cotizar un producto.')
    window.open(`https://wa.me/+56939036058?text=${msg}`, '_blank')
  }

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-20 w-40 h-40 border-2 border-gold rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-gold rounded-lg -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/40 text-gold rounded-full text-sm font-semibold mb-4">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Clientes Satisfechos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-6"></div>
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <FaStar key={i} className="text-gold" />)}
            </div>
            <span className="font-semibold text-white">5.0</span>
            <span className="text-gray-400">· +200 proyectos realizados en Chile</span>
          </div>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonios.slice(0, 3).map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-gold/20 hover:border-gold/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10 flex flex-col"
            >
              <FaQuoteLeft className="text-gold/40 text-2xl mb-4" />
              <p className="text-gray-300 leading-relaxed flex-1 mb-5 text-sm">
                "{t.texto}"
              </p>
              <div className="border-t border-gold/20 pt-4">
                <Stars count={t.calificacion} />
                <p className="text-white font-semibold mt-2">{t.nombre}</p>
                <p className="text-gold-light text-xs">{t.ubicacion}</p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-gold/10 text-gold text-xs rounded-full">
                  {t.producto}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Segunda fila - solo 2 centradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {testimonios.slice(3).map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-gold/20 hover:border-gold/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10 flex flex-col"
            >
              <FaQuoteLeft className="text-gold/40 text-2xl mb-4" />
              <p className="text-gray-300 leading-relaxed flex-1 mb-5 text-sm">
                "{t.texto}"
              </p>
              <div className="border-t border-gold/20 pt-4">
                <Stars count={t.calificacion} />
                <p className="text-white font-semibold mt-2">{t.nombre}</p>
                <p className="text-gold-light text-xs">{t.ubicacion}</p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-gold/10 text-gold text-xs rounded-full">
                  {t.producto}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-14">
          <p className="text-gray-400 mb-6 text-base">
            Únete a cientos de familias que ya disfrutan de su tina o sauna Geodesik
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transform hover:scale-105 transition-all duration-300 text-lg"
          >
            <FaWhatsapp size={24} />
            ¡Quiero mi cotización GRATIS!
          </button>
          <p className="text-gray-500 text-xs mt-3">Sin costo · Sin compromiso · Respuesta inmediata</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonios
