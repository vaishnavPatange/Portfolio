import { useState } from 'react'
import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'

function App() {

  const [text, setText] = useState("hello")

  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <NavBar />
      <Home />
      <About />
      <Experience />
    </div>
  )
}

export default App
