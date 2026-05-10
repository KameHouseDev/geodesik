import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    interes: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: data.message })
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          interes: '',
          mensaje: '',
        })
      } else {
        setSubmitStatus({ type: 'error', message: data.message })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Dirección',
      content: 'Osorno 0561\nLa Granja, Santiago, Chile',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Teléfono',
      content: '+56 9 39036058',
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      content: 'ventas@geodesik.cl',
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Horario',
      content: 'Lun - Sab: 9:00 AM - 6:00 PM\nDom: Cerrado',
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 border-2 border-gold rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-gold rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border-2 border-gold rounded-lg rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Contáctanos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-4"></div>
          <p className="text-gold-light text-lg max-w-2xl mx-auto">
            Estamos listos para hacer realidad tu proyecto. Compártenos tus ideas y te ayudaremos a crear el espacio perfecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Información de Contacto */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Información de Contacto
            </h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-gold/30 hover:border-gold transition-all duration-300 hover:scale-105">
                <div className="flex-shrink-0 text-gold">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                  <p className="text-gold-light whitespace-pre-line">{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-gold/30 hover:border-gold transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors text-white placeholder-gold-light/60"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors text-white placeholder-gold-light/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 bg-white/10 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors text-white placeholder-gold-light/60"
                  />
                </div>
                <div>
                  <select
                    name="interes"
                    value={formData.interes}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors text-white placeholder-gold-light/60"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-slate-800 text-white">Selecciona un producto</option>
                    <option value="tina-madera" className="bg-slate-800 text-white">Tina de Madera Artesanal</option>
                    <option value="sauna-finlandes" className="bg-slate-800 text-white">Sauna Finlandés de Madera</option>
                    <option value="sauna-seco" className="bg-slate-800 text-white">Sauna Seco Artesanal</option>
                    <option value="tina-exterior" className="bg-slate-800 text-white">Tina Exterior de Madera</option>
                    <option value="personalizado" className="bg-slate-800 text-white">Diseño Personalizado</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none text-white placeholder-gold-light/60"
                ></textarea>
              </div>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 border-2 border-green-500 text-green-200' 
                    : 'bg-red-500/20 border-2 border-red-500 text-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-slate-900 font-bold rounded-full transition-all duration-300 shadow-lg shadow-gold/50 ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>

        {/* Mapa de ubicación */}
        <div className="mt-12 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl">
          <div className="bg-white/10 px-6 py-4 flex items-center gap-3">
            <FaMapMarkerAlt className="text-gold text-xl" />
            <div>
              <p className="text-white font-semibold">Visítanos en nuestro taller</p>
              <p className="text-gold-light text-sm">Osorno 0561, La Granja, Santiago, Chile</p>
            </div>
          </div>
          <iframe
            title="Ubicación Geodesik"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.5!2d-70.6456!3d-33.5612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c3b0c0a0b0c1%3A0x0!2sOsorno+0561%2C+La+Granja%2C+Santiago!5e0!3m2!1ses!2scl!4v1"
            width="100%"
            height="320"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Contacto
