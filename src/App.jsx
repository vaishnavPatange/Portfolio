import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
