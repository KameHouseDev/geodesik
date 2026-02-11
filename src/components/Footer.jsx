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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold gradient-text mb-4">
              GEODESIK
            </h3>
            <p className="text-gray-400">
              Fabricación artesanal de tinas y saunas de madera. Calidad, tradición y diseño personalizado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="space-y-2">
              {footerLinks.social.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-white hover:pl-2 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; 2026 Geodesik. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
