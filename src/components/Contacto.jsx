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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      interes: '',
      mensaje: '',
    })
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Dirección',
      content: 'Av. Principal 1234\nCiudad, País',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Teléfono',
      content: '+1 (555) 123-4567',
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      content: 'info@geodesik.com',
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Horario',
      content: 'Lun - Vie: 9:00 AM - 6:00 PM\nSáb: 10:00 AM - 2:00 PM',
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Información de Contacto */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Información de Contacto
            </h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 gradient-text">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                  <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="interes"
                    value={formData.interes}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Selecciona un producto</option>
                    <option value="tina-madera">Tina de Madera Artesanal</option>
                    <option value="sauna-finlandes">Sauna Finlandés de Madera</option>
                    <option value="sauna-seco">Sauna Seco Artesanal</option>
                    <option value="tina-exterior">Tina Exterior de Madera</option>
                    <option value="personalizado">Diseño Personalizado</option>
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 gradient-primary text-white font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
