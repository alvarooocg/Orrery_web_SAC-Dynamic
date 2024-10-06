import { useState } from 'react'

import './App.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Explore />
      <Container />
    </>
  )
}

export default App
