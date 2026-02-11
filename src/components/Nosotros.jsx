import { useEffect, useRef, useState } from 'react'
import { FaBuilding } from 'react-icons/fa'

const Nosotros = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { number: 500, label: 'Proyectos Completados', suffix: '+' },
    { number: 15, label: 'Años de Experiencia', suffix: '+' },
    { number: 100, label: 'Satisfacción Garantizada', suffix: '%' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const AnimatedCounter = ({ end, suffix = '' }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }, [isVisible, end])

    return <span>{count}{suffix}</span>
  }

  return (
    <section id="nosotros" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Sobre Geodesik
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Con más de 15 años fabricando tinas y saunas de madera, Geodesik es sinónimo de calidad artesanal y tradición. Nuestro taller combina técnicas centenarias con tecnología moderna.
              </p>
              <p>
                Trabajamos únicamente con maderas nobles seleccionadas: cedro canadiense, roble europeo, pino finlandés y abeto. Cada pieza es tratada y ensamblada por maestros carpinteros especializados.
              </p>
              <p>
                Desde el diseño hasta la instalación, controlamos cada etapa del proceso de fabricación para garantizar productos excepcionales que durarán generaciones.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="h-[500px] rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-2xl">
              <FaBuilding className="text-white text-9xl opacity-50" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
