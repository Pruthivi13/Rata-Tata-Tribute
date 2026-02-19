import './App.css'
import SplineHero from './components/SplineHero'
import Hero from './components/Hero'
import Quote from './components/Quote'
import Biography from './components/Biography'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <SplineHero />
      <Hero />
      <Quote />
      <Biography />
      <hr className="border divider" />
      <Achievements />
      <Footer />
    </div>
  )
}

export default App
