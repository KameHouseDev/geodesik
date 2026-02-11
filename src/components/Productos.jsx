import { FaSpa, FaHotTub, FaFire, FaSwimmingPool } from 'react-icons/fa'

const Productos = () => {
  const productos = [
    {
      icon: <FaHotTub className="text-6xl" />,
      title: 'Tinas de Madera Artesanales',
      description: 'Fabricadas con maderas nobles seleccionadas. Cada tina es una obra de arte única, construida a mano por nuestros maestros carpinteros.',
      features: [
        'Madera de cedro o roble premium',
        'Ensamblaje artesanal tradicional',
        'Acabados naturales ecológicos',
      ],
      gradient: 'from-primary to-primary-dark',
    },
    {
      icon: <FaSpa className="text-6xl" />,
      title: 'Saunas Finlandeses de Madera',
      description: 'Saunas tradicionales fabricados con técnicas milenarias. Utilizamos maderas aromáticas que potencian la experiencia térmica.',
      features: [
        'Madera de pino o abeto finlandés',
        'Construcción tradicional escandinava',
        'Paneles de madera maciza',
      ],
      gradient: 'from-gold to-gold-dark',
    },
    {
      icon: <FaFire className="text-6xl" />,
      title: 'Saunas Secos Artesanales',
      description: 'Saunas de calor seco fabricados con madera seleccionada. Diseño y construcción 100% personalizada según tus necesidades.',
      features: [
        'Madera de cedro canadiense',
        'Fabricación a medida',
        'Acabados personalizables',
      ],
      gradient: 'from-slate-600 to-slate-800',
    },
    {
      icon: <FaSwimmingPool className="text-6xl" />,
      title: 'Tinas Exteriores de Madera',
      description: 'Tinas de madera tratada para exteriores. Resistentes y duraderas, fabricadas para soportar cualquier clima.',
      features: [
        'Madera tratada para intemperie',
        'Construcción reforzada',
        'Capacidad para 4-8 personas',
      ],
      gradient: 'from-primary-dark to-accent',
    },
  ]

  return (
    <section id="productos" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Nuestros Productos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-gold/50 transition-all duration-300 hover:-translate-y-2 hover:scale-105 group border-2 border-gold/30"
            >
              <div className={`bg-gradient-to-br ${producto.gradient} p-8 flex items-center justify-center text-white`}>
                {producto.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {producto.title}
                </h3>
                <p className="text-gold-light mb-4">
                  {producto.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {producto.features.map((feature, idx) => (
                    <li key={idx} className="text-gold-light flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="block text-center px-6 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-slate-900 transition-all duration-300"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Productos
