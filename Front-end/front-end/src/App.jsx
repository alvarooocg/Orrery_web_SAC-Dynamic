import { useState } from 'react'

import './App.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Container />
      <Footer />
    </>
  )
}

export default App
