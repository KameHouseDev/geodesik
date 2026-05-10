import { FaTruck, FaShieldAlt, FaTools, FaStar, FaLeaf } from 'react-icons/fa'

const items = [
  { icon: <FaTruck />, text: 'Envío a todo Chile' },
  { icon: <FaShieldAlt />, text: 'Garantía 1 año' },
  { icon: <FaStar />, text: '15 años de experiencia' },
  { icon: <FaTools />, text: 'Fabricación propia' },
  { icon: <FaLeaf />, text: 'Madera certificada' },
  { icon: <FaTruck />, text: 'Envío a todo Chile' },
  { icon: <FaShieldAlt />, text: 'Garantía 1 año' },
  { icon: <FaStar />, text: '15 años de experiencia' },
  { icon: <FaTools />, text: 'Fabricación propia' },
  { icon: <FaLeaf />, text: 'Madera certificada' },
]

const TrustBar = () => {
  return (
    <div className="bg-slate-900 border-y border-gold/20 py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-8 text-sm font-semibold text-gray-300">
            <span className="text-gold text-base">{item.icon}</span>
            {item.text}
            <span className="text-gold/40 ml-6">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default TrustBar
