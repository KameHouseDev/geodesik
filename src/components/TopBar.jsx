import { FaFacebook, FaInstagram } from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className="bg-navy-dark text-white py-5 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-gray-300">9:00 - 18:00</span>
            <span className="text-gray-400 hidden sm:inline">Horario Lun - Vie</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="tel:+56939036058" className="text-gray-300 hover:text-gold transition-colors">
              +56939036058
            </a>
            <span className="text-gray-400 hidden sm:inline">Agenda tu visita!</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400 hidden md:inline mr-2">Tinajas y Saunas de madera</span>
            <a href="https://www.instagram.com/geodesikspa?igsh=YXlrM212Y2MyaWtj" className="text-gray-300 hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
