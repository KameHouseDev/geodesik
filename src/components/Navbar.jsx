import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// Import the logo image
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'NUESTROS PROYECTOS', href: '#galeria' },
    { name: 'CONTACTO', href: '#contacto' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-dark/95 backdrop-blur-lg shadow-lg' : 'bg-navy-dark/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="relative flex items-center justify-center py-2 mt-4">
              {/* Cuadros decorativos de fondo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[110px] h-[110px] border-2 border-gold/30 rounded-2xl animate-glow-float"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[105px] h-[105px] border-2 border-gold/50 rounded-2xl animate-glow-float-reverse"></div>
              </div>
              
              {/* Contenedor del logo */}
              <div className="relative w-[100px] h-[100px] rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl shadow-gold/20 flex items-center justify-center border-2 border-gold hover:scale-105 transition-transform duration-500">
                <img 
                  src={logo} 
                  alt="Geodesik Logo" 
                  className="h-20 w-auto drop-shadow-2xl rounded-3xl" 
                />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-gold font-medium transition-colors relative group uppercase text-sm tracking-wider"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-gold transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-navy-dark border-t border-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-300 hover:text-gold hover:bg-navy rounded-md font-medium transition-colors uppercase text-sm tracking-wider"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
