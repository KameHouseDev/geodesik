const Footer = () => {
  const footerLinks = {
    quickLinks: [
      { name: 'Inicio', href: '#inicio' },
      { name: 'Productos', href: '#productos' },
      { name: 'Galería', href: '#galeria' },
      { name: 'Nosotros', href: '#nosotros' },
    ],
    products: [
      { name: 'Tinas de Madera Artesanales', href: '#productos' },
      { name: 'Saunas Finlandeses de Madera', href: '#productos' },
      { name: 'Saunas Secos Artesanales', href: '#productos' },
      { name: 'Tinas Exteriores de Madera', href: '#productos' },
    ],
    social: [
      { name: 'Facebook', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 border-2 border-gold rounded-lg rotate-12"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 border-2 border-gold rounded-lg -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent mb-4">
              GEODESIK
            </h3>
            <p className="text-gold-light leading-relaxed">
              Fabricación artesanal de tinas y saunas de madera. Calidad, tradición y diseño personalizado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gold-light hover:text-gold hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Productos</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gold-light hover:text-gold hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Síguenos</h4>
            <div className="space-y-2">
              {footerLinks.social.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gold-light hover:text-gold hover:pl-2 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/30 pt-8">
          <p className="text-center text-gold-light">
            &copy; 2026 Geodesik. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
