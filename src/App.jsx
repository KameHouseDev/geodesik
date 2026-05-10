import { useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Productos from './components/Productos'
import Beneficios from './components/Beneficios'
import Testimonios from './components/Testimonios'
import Nosotros from './components/Nosotros'
import Galeria from './components/Galeria'
import Precios from './components/Precios'
import FAQ from './components/FAQ'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import StickyWhatsApp from './components/StickyWhatsApp'
import ExitIntentPopup from './components/ExitIntentPopup'

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <Productos />
      <Beneficios />
      <Testimonios />
      <Nosotros />
      <Galeria />
      <Precios />
      <FAQ />
      <Contacto />
      <Footer />
      <FloatingButtons />
      <StickyWhatsApp />
      <ExitIntentPopup />
    </div>
  )
}

export default App
