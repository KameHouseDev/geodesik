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
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-gold rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-gold rounded-lg rotate-45"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            ¿Por Qué Elegir Geodesik?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-4"></div>
          <p className="text-gold-light text-lg max-w-2xl mx-auto">
            Descubre lo que nos hace diferentes y por qué somos la mejor elección para tu proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-gold/30 hover:border-gold transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-gold/50 hover:scale-105 group"
            >
              <div className="inline-block text-gold mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {beneficio.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {beneficio.title}
              </h3>
              <p className="text-gold-light leading-relaxed">
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
