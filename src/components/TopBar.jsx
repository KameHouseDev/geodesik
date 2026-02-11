import { FaFacebook, FaInstagram } from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className="bg-navy-dark text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-gray-300">9:00 - 18:00</span>
            <span className="text-gray-400 hidden sm:inline">Horario Lun - Vie</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-300">+56939036058</span>
            <span className="text-gray-400 hidden sm:inline">Agenda tu visita!</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400 hidden md:inline mr-2">Tinajas y Saunas de madera</span>
            <a href="#" className="text-gray-300 hover:text-gold transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="text-gray-300 hover:text-gold transition-colors">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
