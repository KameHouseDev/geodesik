import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaWhatsapp } from 'react-icons/fa'

const faqs = [
  {
    pregunta: '¿Hacen envíos a regiones fuera de Santiago?',
    respuesta:
      'Sí, hacemos envíos a todo Chile. El costo y plazo de envío varía según la región. Coordinamos la logística directamente contigo para asegurar que el producto llegue en perfectas condiciones. Contáctanos para cotizar el envío a tu ciudad.',
  },
  {
    pregunta: '¿Cuánto demora la fabricación y entrega?',
    respuesta:
      'El plazo promedio de fabricación es de 15 a 25 días hábiles dependiendo del modelo y personalizaciones. Para pedidos estándar sin modificaciones el plazo puede ser menor. Te informamos el plazo exacto al momento de confirmar tu pedido.',
  },
  {
    pregunta: '¿Se puede instalar en un departamento o terraza pequeña?',
    respuesta:
      'Sí. Fabricamos modelos compactos especialmente diseñados para terrazas y espacios reducidos. La tina para terraza de 2 personas es ideal para estos casos. El peso debe ser considerado si es en un piso alto — podemos asesorarte según el espacio que tengas.',
  },
  {
    pregunta: '¿Qué mantenimiento requiere una tina o sauna de madera?',
    respuesta:
      'El mantenimiento es sencillo. Para las tinas se recomienda un tratamiento con aceite de linaza cada 6-12 meses. El agua debe ser drenada si no se usa por períodos prolongados. Para los saunas, solo se requiere ventilación adecuada después de cada uso. Entregamos una guía de mantenimiento con cada compra.',
  },
  {
    pregunta: '¿Los precios incluyen instalación?',
    respuesta:
      'Los precios de referencia son por el producto. La instalación se puede cotizar aparte — tenemos técnicos que realizan la instalación en la Región Metropolitana. Para otras regiones te ayudamos con instrucciones detalladas para que un maestro local pueda hacerla sin problema.',
  },
  {
    pregunta: '¿Ofrecen financiamiento o pago en cuotas?',
    respuesta:
      'Sí. Contamos con opciones de financiamiento disponibles. Puedes consultar directamente por WhatsApp o en el formulario de contacto y te indicamos los planes disponibles según el monto de tu compra.',
  },
  {
    pregunta: '¿Puedo personalizar el diseño de mi tina o sauna?',
    respuesta:
      'Absolutamente. Cada uno de nuestros productos es 100% personalizable: dimensiones, tipo de madera, sistema de calefacción (leña, gas o eléctrico), accesorios, acabados y más. Nos ajustamos a tus necesidades y espacio disponible.',
  },
  {
    pregunta: '¿Con qué garantía vienen los productos?',
    respuesta:
      'Todos nuestros productos cuentan con 1 año de garantía en fabricación y estructuras. Cubrimos defectos de fabricación y materiales. La garantía no cubre daños por mal uso o falta de mantenimiento.',
  },
]

const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border border-gold/20 rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-gold/60' : 'hover:border-gold/40'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white/5 hover:bg-white/10 transition-colors duration-200"
      >
        <span className="text-white font-semibold text-sm sm:text-base leading-snug">{faq.pregunta}</span>
        <span className="text-gold flex-shrink-0">
          {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <p className="px-6 pb-5 pt-1 text-gray-300 text-sm leading-relaxed border-t border-gold/10">
          {faq.respuesta}
        </p>
      </div>
    </div>
  )
}

const FAQ = () => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola! Tengo una consulta sobre sus tinas y saunas.')
    window.open(`https://wa.me/+56939036058?text=${msg}`, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-20 w-36 h-36 border-2 border-gold rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border-2 border-gold rounded-lg -rotate-12"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/40 text-gold rounded-full text-sm font-semibold mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            ¿Tienes dudas?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Aquí respondemos las preguntas más comunes. Si no encuentras lo que buscas, escríbenos directamente.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-5">¿No encontraste tu respuesta?</p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/20 transform hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp size={22} />
            Pregúntanos por WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
