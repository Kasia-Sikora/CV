import './App.scss'
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
      <div className='scrollProgress' />
      <SideBar />
      <LeafUp className="leaf up" aria-hidden="true" />
      <LeafDown className="leaf down" aria-hidden="true" />
      <main>
        <h1>Hello, I'm Kasia.</h1>
        <Resume />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
