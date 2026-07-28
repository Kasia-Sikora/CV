import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import SideBar from './components/SideBar'
import LeafUp from './assets/leaf1.svg?react'
import LeafDown from './assets/leaf2.svg?react'

function App() {

  return (
    <>
      <SideBar />
      <LeafUp className="leafUp" />
      <LeafDown className="leafDown" />
      <main>
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
