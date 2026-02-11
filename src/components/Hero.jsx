import proyectoImage from '../assets/images/proyecto_14.WebP';
import tinaMatanzaImage from '../assets/images/tina_matanza.jpg';

const Hero = () => {
  // Elementos decorativos X en el lado izquierdo
  const xMarks = [
    { top: '20%' },
    { top: '35%' },
    { top: '50%' },
    { top: '65%' },
  ]

  // Elementos geométricos cuadrados
  const decorativeSquares = [
    { size: 45, top: '25%', left: '35%', delay: 0 },
    { size: 60, top: '35%', left: '38%', delay: 0.2 },
    { size: 50, top: '50%', left: '32%', delay: 0.4 },
    { size: 40, top: '60%', left: '36%', delay: 0.6 },
    { size: 55, top: '20%', right: '35%', delay: 0.3 },
    { size: 50, top: '30%', right: '32%', delay: 0.5 },
    { size: 65, top: '45%', right: '38%', delay: 0.7 },
    { size: 45, top: '55%', right: '34%', delay: 0.9 },
    { size: 70, top: '40%', right: '30%', delay: 1.1 },
  ]

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      {/* Imagen de fondo para mobile */}
      <div className="absolute inset-0 md:hidden z-0">
        <img 
          src={proyectoImage} 
          alt="Proyecto Geodesik"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/80 via-slate-800/60 to-slate-800/80"></div>
      </div>

      {/* Imagen de sauna izquierda - solo desktop */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[35%] h-[70vh] opacity-95 z-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-800 to-transparent z-10"></div>
          <img 
            src={proyectoImage} 
            alt="Proyecto 14"
            className="w-full h-full object-cover rounded-r-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* Imagen de tina derecha - solo desktop */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[35%] h-[70vh] opacity-95 z-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-800 to-transparent z-10"></div>
          <img 
            src={tinaMatanzaImage} 
            alt="Tina Matanza"
            className="w-full h-full object-cover rounded-l-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* Marcas X decorativas - solo desktop */}
      <div className="hidden lg:flex absolute left-[32%] top-0 h-full flex-col justify-center gap-8 z-20">
        {xMarks.map((mark, index) => (
          <div 
            key={index} 
            className="text-white text-3xl font-light opacity-50"
            style={{ marginTop: mark.top }}
          >
            ✕
          </div>
        ))}
      </div>

      {/* Elementos geométricos cuadrados - solo desktop */}
      {decorativeSquares.map((square, index) => (
        <div
          key={index}
          className="hidden lg:block absolute border-2 border-gold/40 rounded-lg animate-float z-20"
          style={{
            width: `${square.size}px`,
            height: `${square.size}px`,
            top: square.top,
            left: square.left,
            right: square.right,
            animationDelay: `${square.delay}s`,
          }}
        />
      ))}

      {/* Grid de puntos decorativo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-20 z-15">
        <div className="grid grid-cols-12 gap-3">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Contenido central */}
      <div className="relative z-30 text-center px-6 md:px-4 max-w-5xl mx-auto">
        <p className="text-gray-300 text-[0.6rem] sm:text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase mb-3 md:mb-4 animate-fade-in">
          TINAS DE MADERA
        </p>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-gold mb-4 md:mb-6 animate-fade-in-up tracking-wide md:tracking-wider leading-tight">
          GEODESIK
        </h1>
        
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="hidden md:block w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <p className="text-gray-200 text-lg sm:text-xl md:text-2xl tracking-[0.2em] md:tracking-[0.3em] uppercase animate-fade-in animation-delay-200">
            SAUNAS
          </p>
          <div className="hidden md:block w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent via-gold to-transparent"></div>
        </div>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in animation-delay-400 px-4">
          Fabricación artesanal de tinas y saunas de madera premium
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in animation-delay-600 px-4">
          <a
            href="#productos"
            className="px-8 md:px-10 py-3 md:py-4 bg-transparent border-2 border-gray-800 text-gray-800 bg-white/90 font-semibold hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 uppercase tracking-wider text-xs md:text-sm rounded-md md:rounded-none">
            VER PRODUCTOS
          </a>
          <a
            href="#contacto"
            className="px-8 md:px-10 py-3 md:py-4 border-2 border-gray-800 bg-white/90 text-gray-800 font-semibold hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 uppercase tracking-wider text-xs md:text-sm rounded-md md:rounded-none">
            CONTÁCTANOS
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  )
}

export default Hero
