const Galeria = () => {
  const proyectos = [
    {
      title: 'Tina de Cedro Artesanal',
      subtitle: 'Fabricación a medida para terraza',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Sauna Finlandés Premium',
      subtitle: 'Madera de pino y cedro canadiense',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      title: 'Taller de Fabricación',
      subtitle: 'Proceso artesanal de construcción',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Tina Exterior de Roble',
      subtitle: 'Diseño rústico personalizado',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Sauna de Madera Maciza',
      subtitle: 'Construcción tradicional escandinava',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Proyecto Personalizado',
      subtitle: 'Spa completo en madera noble',
      gradient: 'from-indigo-500 to-purple-900',
    },
  ]

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Galería de Proyectos
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${proyecto.gradient} transition-transform duration-300 group-hover:scale-110`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-2">{proyecto.title}</h4>
                <p className="text-white/90">{proyecto.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria
