import { FaWhatsapp } from 'react-icons/fa'

const StickyWhatsApp = () => {
  const handleClick = () => {
    const msg = encodeURIComponent('Hola! Me interesa cotizar una tina o sauna de madera.')
    window.open(`https://wa.me/+56939036058?text=${msg}`, '_blank')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-4 text-base shadow-2xl transition-colors duration-200"
      >
        <FaWhatsapp size={22} />
        💬 Cotiza GRATIS por WhatsApp
      </button>
    </div>
  )
}

export default StickyWhatsApp
