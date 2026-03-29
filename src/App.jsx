import About from "./About"
import Experience from "./Experience"
import Hero from "./Hero"
import Navbar from "./components/common/Navbar"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Footer from "./components/Footer"
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
