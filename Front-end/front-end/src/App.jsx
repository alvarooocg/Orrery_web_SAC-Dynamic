import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>

      <main>
        <section class="hero">
            <div class="hero-text">
                <h1>The <span class="highlight">solar system</span> at your hands.</h1>
            </div>
            <div class="hero-image">
                <img src="/img/solarSystem.png" alt="Solar System" />
            </div>
        </section>

        <section class="explore-section">
            <div class="explore-text">
                <h2><span class="explore-highlight">Start Exploring</span></h2>
                <p>"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500."</p>
                <button>Enter simulation</button>
            </div>
        </section>
      </main>
    </>
  )
}

export default App
