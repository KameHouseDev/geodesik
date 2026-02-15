import React, { useState, useEffect } from 'react';

// Import all local images
import proyecto1 from '../assets/images/proyecto_1.WebP';
import proyecto2 from '../assets/images/proyecto_2.WebP';
import proyecto3 from '../assets/images/proyecto_3.WebP';
import proyecto4 from '../assets/images/proyecto_4.WebP';
import proyecto5 from '../assets/images/proyecto_5.WebP';
import proyecto6 from '../assets/images/proyecto_6.WebP';
import proyecto7 from '../assets/images/proyecto_7.WebP';
import proyecto8 from '../assets/images/proyecto_8.WebP';
import proyecto9 from '../assets/images/proyecto_9.WebP';
import proyecto10 from '../assets/images/proyecto_10.WebP';
import proyecto11 from '../assets/images/proyecto_11.WebP';
import proyecto12 from '../assets/images/proyecto_12.WebP';
import proyecto13 from '../assets/images/proyecto_13.WebP';
import proyecto14 from '../assets/images/proyecto_14.WebP';
import sauna1 from '../assets/images/sauna_1.WebP';
import sauna2 from '../assets/images/sauna_2.WebP';
import sauna3 from '../assets/images/sauna_3.WebP';
import sauna4 from '../assets/images/sauna_4.WebP';
import sauna5 from '../assets/images/sauna_5.WebP';
import tinaja6 from '../assets/images/tinaja_6.WebP';
import tinaMatanza from '../assets/images/tina_matanza.jpg';
import tinaMaiten from '../assets/images/tina_maiten.jpg';

const Galeria = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    { src: proyecto1, category: 'proyecto', title: 'Proyecto 1' },
    { src: proyecto2, category: 'proyecto', title: 'Proyecto 2' },
    { src: proyecto3, category: 'proyecto', title: 'Proyecto 3' },
    { src: proyecto4, category: 'proyecto', title: 'Proyecto 4' },
    { src: proyecto5, category: 'proyecto', title: 'Proyecto 5' },
    { src: proyecto6, category: 'proyecto', title: 'Proyecto 6' },
    { src: proyecto7, category: 'proyecto', title: 'Proyecto 7' },
    { src: proyecto8, category: 'proyecto', title: 'Proyecto 8' },
    { src: proyecto9, category: 'proyecto', title: 'Proyecto 9' },
    { src: proyecto10, category: 'proyecto', title: 'Proyecto 10' },
    { src: proyecto11, category: 'proyecto', title: 'Proyecto 11' },
    { src: proyecto12, category: 'proyecto', title: 'Proyecto 12' },
    { src: proyecto13, category: 'proyecto', title: 'Proyecto 13' },
    { src: proyecto14, category: 'proyecto', title: 'Proyecto 14' },
    { src: sauna1, category: 'sauna', title: 'Sauna Finlandés' },
    { src: sauna2, category: 'sauna', title: 'Sauna Premium' },
    { src: sauna3, category: 'sauna', title: 'Sauna Artesanal' },
    { src: sauna4, category: 'sauna', title: 'Sauna Exterior' },
    { src: sauna5, category: 'sauna', title: 'Sauna Tradicional' },
    { src: tinaja6, category: 'tinaja', title: 'Tinaja de Madera' },
    { src: tinaMatanza, category: 'tinaja', title: 'Tina Matanza' },
    { src: tinaMaiten, category: 'tinaja', title: 'Tina Maitén' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(image => image.category === filter);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredImages.length]);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 border-2 border-gold rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-gold rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 border-2 border-gold rounded-lg rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Galería de Proyectos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full mb-6"></div>
          <p className="text-gold-light text-lg mb-8 max-w-2xl mx-auto">
            Explora nuestros proyectos completados y encuentra inspiración para tu próximo espacio de relajación
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-slate-900 shadow-lg shadow-gold/50'
                  : 'bg-white/10 backdrop-blur-sm text-gold border-2 border-gold/30 hover:border-gold hover:bg-white/20'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('tinaja')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === 'tinaja'
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-slate-900 shadow-lg shadow-gold/50'
                  : 'bg-white/10 backdrop-blur-sm text-gold border-2 border-gold/30 hover:border-gold hover:bg-white/20'
              }`}
            >
              Tinajas
            </button>
            <button
              onClick={() => setFilter('sauna')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === 'sauna'
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-slate-900 shadow-lg shadow-gold/50'
                  : 'bg-white/10 backdrop-blur-sm text-gold border-2 border-gold/30 hover:border-gold hover:bg-white/20'
              }`}
            >
              Saunas
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer border-2 border-gold/30 hover:border-gold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-gold/50"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Contenido del overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-gold to-gold-dark text-slate-900 rounded-full text-sm font-semibold">
                  {image.category === 'tinaja' ? 'Tinaja' : image.category === 'sauna' ? 'Sauna' : 'Proyecto'}
                </span>
              </div>
              
              {/* Icono de ampliar */}
              <div className="absolute top-4 right-4 bg-gold text-slate-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Botón Cerrar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-[110] bg-navy-dark/80 backdrop-blur-sm rounded-full p-3 hover:scale-110 transition-transform duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flecha Izquierda */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gold transition-colors z-[110] bg-navy-dark/80 backdrop-blur-sm rounded-full p-3 hover:scale-110 transition-transform duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Imagen */}
          <div 
            className="max-w-7xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImageIndex]?.src}
              alt={filteredImages[selectedImageIndex]?.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            {/* Título de la imagen */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">{filteredImages[selectedImageIndex]?.title}</h3>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gold to-gold-dark text-slate-900 rounded-full text-sm font-semibold">
                {filteredImages[selectedImageIndex]?.category === 'tinaja' ? 'Tinaja' : 
                 filteredImages[selectedImageIndex]?.category === 'sauna' ? 'Sauna' : 'Proyecto'}
              </span>
            </div>
          </div>

          {/* Flecha Derecha */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gold transition-colors z-[110] bg-navy-dark/80 backdrop-blur-sm rounded-full p-3 hover:scale-110 transition-transform duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contador de imágenes */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-navy-dark/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
            {selectedImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria
