import { useEffect, useRef, useState } from 'react'
import { FaBuilding } from 'react-icons/fa'
import logo from '../assets/images/logo.png'

const Nosotros = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
    <section id="nosotros" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-gold rounded-lg rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-gold rounded-lg -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-gold rounded-lg rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-gold to-gold-dark text-slate-900 rounded-full text-sm font-semibold">
                Nuestra Historia
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Sobre Geodesik
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mb-8"></div>
            <div className="space-y-6 text-gold-light text-lg leading-relaxed">
              <p className="flex items-start">
                <span className="text-gold mr-3 mt-1">✓</span>
                <span>Con más de <span className="text-white font-semibold">15 años fabricando tinas y saunas de madera</span>, Geodesik es sinónimo de calidad artesanal y tradición. Nuestro taller combina técnicas centenarias con tecnología moderna.</span>
              </p>
              <p className="flex items-start">
                <span className="text-gold mr-3 mt-1">✓</span>
                <span>Trabajamos únicamente con <span className="text-white font-semibold">maderas nobles seleccionadas</span>: ciprés, oregón, cedro, etc. Cada pieza es tratada y ensamblada por maestros carpinteros especializados.</span>
              </p>
              <p className="flex items-start">
                <span className="text-gold mr-3 mt-1">✓</span>
                <span>Desde el diseño hasta la instalación, <span className="text-white font-semibold">controlamos cada etapa del proceso</span> de fabricación para garantizar productos excepcionales que durarán generaciones.</span>
              </p>
            </div>
            
            {/* Botón CTA */}
            <div className="mt-8">
              <a
                href="#contacto"
                className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-slate-900 font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-gold/50"
              >
                Contáctanos
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Cuadro decorativo de fondo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] border-2 border-gold/30 rounded-2xl rotate-6"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] border-2 border-gold/50 rounded-2xl -rotate-6"></div>
            </div>
            
            {/* Contenedor del logo */}
            <div className="relative h-[400px] w-[400px] rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl shadow-gold/20 flex items-center justify-center border-2 border-gold hover:scale-105 transition-transform duration-500">
              <img src={logo} alt="Geodesik Logo" className="h-3/4 w-auto drop-shadow-2xl rounded-3xl" />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 py-16 mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Nuestras Estadísticas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-2xl p-8 text-center hover:scale-105 transition-transform duration-300 border-2 border-gold">
              <h3 className="text-6xl font-extrabold text-white mb-4">500+</h3>
              <p className="text-gold-light text-lg font-semibold">Proyectos Completados</p>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-2xl p-8 text-center hover:scale-105 transition-transform duration-300 border-2 border-gold">
              <h3 className="text-6xl font-extrabold text-white mb-4">15+</h3>
              <p className="text-gold-light text-lg font-semibold">Años de Experiencia</p>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-2xl p-8 text-center hover:scale-105 transition-transform duration-300 border-2 border-gold">
              <h3 className="text-6xl font-extrabold text-white mb-4">100%</h3>
              <p className="text-gold-light text-lg font-semibold">Satisfacción Garantizada</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Nosotros
