import { useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Productos from './components/Productos'
import Beneficios from './components/Beneficios'
import Galeria from './components/Galeria'
import Precios from './components/Precios'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <Productos />
      <Beneficios />
      <Nosotros />
      <Galeria />
      <Precios />
      <Contacto />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
