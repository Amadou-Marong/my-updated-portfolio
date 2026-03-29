import About from "./About"
import Experience from "./components/portfolio/ExperienceSection"
import Hero from "./components/portfolio/HeroSection"
import Navbar from "./components/common/Navbar"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Footer from "./components/common/Footer"
import { Button } from "./components/ui/button"; 


function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
