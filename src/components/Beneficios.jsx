import { FaTrophy, FaTools, FaStar, FaLightbulb } from 'react-icons/fa'

const Beneficios = () => {
  const beneficios = [
    {
      icon: <FaTrophy className="text-5xl" />,
      title: 'Fabricación Artesanal',
      description: 'Cada pieza es fabricada a mano por maestros carpinteros con técnicas tradicionales.',
    },
    {
      icon: <FaTools className="text-5xl" />,
      title: 'Maderas Premium',
      description: 'Seleccionamos maderas nobles como cedro, roble y pino finlandés de primera calidad.',
    },
    {
      icon: <FaStar className="text-5xl" />,
      title: '100% Personalizables',
      description: 'Diseñamos y fabricamos cada tina o sauna según tus especificaciones exactas.',
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: 'Taller Propio',
      description: 'Controlamos todo el proceso de fabricación en nuestro taller con maquinaria especializada.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            ¿Por Qué Elegir Geodesik?
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-block gradient-text mb-4">
                {beneficio.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {beneficio.title}
              </h3>
              <p className="text-gray-600">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Beneficios
