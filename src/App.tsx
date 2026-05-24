import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Parcours from './sections/Parcours'
import Projects from './sections/Projects'
import Competences from './sections/Competences'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Parcours />
        <Projects />
        <Competences />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
