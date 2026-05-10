import { useState, useEffect } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleMouseLeave = (e) => {
      if (e.clientY <= 5 && !dismissed) {
        setVisible(true)
      }
    }

    // En mobile: mostrar después de 40s de inactividad
    let mobileTimer
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      mobileTimer = setTimeout(() => {
        if (!dismissed) setVisible(true)
      }, 40000)
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [dismissed])

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
  }

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola! Estaba mirando su web y me gustaría cotizar una tina o sauna.')
    window.open(`https://wa.me/+56939036058?text=${msg}`, '_blank')
    handleDismiss()
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-gold/60 rounded-2xl shadow-2xl shadow-gold/20 max-w-md w-full p-8 text-center animate-pop-in">
        {/* Botón cerrar */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>

        {/* Emoji + título */}
        <div className="text-5xl mb-4">🛁</div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">
          ¡Espera un momento!
        </h3>
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Oferta especial para ti
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Antes de irte, solicita tu <strong className="text-white">cotización GRATIS</strong> y recibe asesoría personalizada sin compromiso.
          Respondemos en minutos.
        </p>

        {/* Beneficios rápidos */}
        <div className="bg-white/5 rounded-xl p-4 mb-6 text-left space-y-2">
          {['Sin costo · Sin compromiso', 'Financiamiento disponible en cuotas', 'Envío a todo Chile', 'Respuesta en minutos por WhatsApp'].map((b, i) => (
            <p key={i} className="text-gray-300 text-sm flex items-center gap-2">
              <span className="text-green-400 text-base">✓</span> {b}
            </p>
          ))}
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center gap-3 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 text-lg mb-3"
        >
          <FaWhatsapp size={24} />
          Cotizar GRATIS ahora
        </button>

        <button
          onClick={handleDismiss}
          className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
        >
          No gracias, me voy sin cotizar
        </button>
      </div>

      <style>{`
        @keyframes pop-in {
          0%   { opacity: 0; transform: scale(0.8) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pop-in {
          animation: pop-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  )
}

export default ExitIntentPopup
