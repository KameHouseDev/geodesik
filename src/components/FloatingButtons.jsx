import { useState, useEffect } from 'react'
import { FaWhatsapp, FaInstagram, FaComment, FaTimes } from 'react-icons/fa'

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  const toggleButtons = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-8 right-4 z-50 flex flex-col items-end">
      {/* Botones de redes sociales */}
      <div className={`flex flex-col-reverse items-end space-y-reverse space-y-3 mb-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/+56939036058"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <FaWhatsapp size={24} />
          <span className="font-semibold text-lg">WhatsApp</span>
        </a>

        {/* Botón de Instagram */}
        <a
          href="https://www.instagram.com/geodesikspa?igsh=YXlrM212Y2MyaWtj"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <FaInstagram size={24} />
          <span className="font-semibold text-lg">Instagram</span>
        </a>
      </div>

      {/* Botón principal */}
      <button
        onClick={toggleButtons}
        className={`flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 ${
          isOpen 
            ? 'bg-navy-dark hover:bg-navy border-2 border-gold rotate-45' 
            : 'bg-gold hover:bg-gradient-to-br hover:from-gold hover:to-yellow-600 hover:shadow-gold/50'
        }`}
      >
        {isOpen ? (
          <FaTimes size={28} className="text-gold" />
        ) : (
          <FaComment size={28} className="text-navy-dark" />
        )}
      </button>
    </div>
  )
}

export default FloatingButtons
