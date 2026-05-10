import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import tinaMaiten from '../assets/images/tina_maiten.jpg';
import sauna5 from '../assets/images/sauna_5.WebP';

const Precios = () => {
  const productos = [
    {
      id: 1,
      imagen: tinaMaiten,
      titulo: 'Tina para Terraza',
      capacidad: '2 personas',
      madera: 'Leña / Gas / Eléctrica',
      calefaccion: 'Leña / Gas / Eléctrica',
      complementos: 'LED Interior, Hidromasaje, Cascada (opcional)',
      precio: '$800.000',
      popular: false,
    },
    {
      id: 2,
      imagen: tinaMaiten,
      titulo: 'Tina 4 Personas',
      capacidad: '4 personas',
      madera: 'Pino Insigne',
      calefaccion: 'Leña / Gas / Eléctrica',
      complementos: 'LED Interior, Hidromasaje, Cascada (opcional)',
      precio: '$1.200.000',
      popular: true,
    },
    {
      id: 3,
      imagen: tinaMaiten,
      titulo: 'Tina 6 Personas',
      capacidad: '6 personas',
      madera: 'Pino Insigne',
      calefaccion: 'Leña / Gas / Eléctrica',
      complementos: 'LED Interior, Hidromasaje, Cascada (opcional)',
      precio: '$1.400.000',
      popular: false,
    },
    {
      id: 4,
      imagen: sauna5,
      titulo: 'Sauna 1.80 x 1.06 m.',
      capacidad: '2 personas',
      madera: 'Pino Insigne',
      calefaccion: 'Eléctrica',
      complementos: 'Luz Interior, Valde, Cuchara, Piedras Volcánicas, Repisas',
      precio: '$1.300.000',
      popular: false,
    },
    {
      id: 5,
      imagen: sauna5,
      titulo: 'Sauna 1.80 x 1.60 m.',
      capacidad: '4 personas',
      madera: 'Pino Insigne',
      calefaccion: 'Eléctrica',
      complementos: 'Luz Interior, Valde, Cuchara, Piedras Volcánicas, Repisas',
      precio: '$1.990.000',
      popular: true,
    },
    {
      id: 6,
      imagen: sauna5,
      titulo: 'Sauna 1.90 x 2.0 m.',
      capacidad: '6 personas',
      madera: 'Pino Insigne',
      calefaccion: 'Eléctrica',
      complementos: 'Luz Interior, Valde, Cuchara, Piedras Volcánicas, Repisas',
      precio: '$2.490.000',
      popular: false,
    },
  ];

  const handleWhatsAppClick = (producto) => {
    const mensaje = `Hola! Estoy interesado en cotizar el producto: ${producto.titulo}`;
    const url = `https://wa.me/+56939036058?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="precios" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 border-2 border-gold rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-gold rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 border-2 border-gold rounded-lg rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Precios
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-6"></div>
          <p className="text-gold-light text-lg max-w-2xl mx-auto mb-6">
            Conoce nuestros precios de referencia. Cada proyecto es único y puede personalizarse según tus necesidades.
          </p>
          {/* Urgencia de stock */}
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/40 text-red-300 rounded-full px-5 py-2 text-sm font-semibold">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block"></span>
            Producción limitada este mes — quedan pocos cupos disponibles
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold/50 transform hover:scale-105 transition-all duration-300 border-2 ${producto.popular ? 'border-gold shadow-gold/30' : 'border-gold/30 hover:border-gold'}`}
            >
              {/* Badge Más Popular */}
              {producto.popular && (
                <div className="absolute top-0 left-0 right-0 z-10 bg-gold text-slate-900 text-center text-xs font-bold py-1.5 tracking-widest uppercase">
                  ⭐ Más Popular
                </div>
              )}

              {/* Badge stock limitado en productos no populares */}
              {!producto.popular && (
                <div className="absolute top-3 right-3 z-10 bg-red-500/90 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                  Cupos limitados
                </div>
              )}

              {/* Imagen del producto */}
              <div className={`relative h-64 overflow-hidden ${producto.popular ? 'mt-7' : ''}`}>
                <img
                  src={producto.imagen}
                  alt={producto.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido de la card */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {producto.titulo}
                </h3>

                <div className="space-y-2 text-sm text-gold-light">
                  <p>
                    <span className="font-semibold text-white">Capacidad:</span> {producto.capacidad}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Madera:</span> {producto.madera}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Calefacción:</span> {producto.calefaccion}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Complementos:</span> {producto.complementos}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/30">
                  <p className="text-2xl font-bold text-white mb-1">
                    Desde: <span className="text-gold">{producto.precio}</span>
                  </p>
                  <p className="text-green-400 text-xs font-medium mb-4 flex items-center gap-1">
                    <span>💳</span> Financiamiento disponible en cuotas
                  </p>

                  <button
                    onClick={() => handleWhatsAppClick(producto)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <FaWhatsapp size={20} />
                    Cotizar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gold-light text-sm mb-6">
            * Los precios son referenciales y pueden variar según personalizaciones y ubicación de instalación.
          </p>
          <a
            href="#contacto"
            className="inline-block px-10 py-4 bg-gold hover:bg-yellow-400 text-slate-900 font-bold rounded-xl shadow-lg shadow-gold/30 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Solicitar cotización personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Precios;
