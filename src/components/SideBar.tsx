import './SideBar.css'
import { useState, type ReactElement } from "react";
import githubLogo from "./../assets/github.png"
import linkedInLogo from "./../assets/linkedin-icon-black.png"
import photo from "./../assets/zdjecieCV.png"
import PersonIcon from '../assets/person.svg?react'
import DocIcon from '../assets/doc.svg?react'
import ProjectsIcon from '../assets/projects.svg?react'
import ContactIcon from '../assets/contact.svg?react'

type ActiveSection = 'about' | 'resume' | 'projects' | 'contact'

const sections: ActiveSection[] = ['about', 'resume', 'projects', 'contact']

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>()


  const getIcon = (section: ActiveSection): ReactElement => {
    switch (section) {
      case 'about':
        return <PersonIcon />
      case 'resume':
        return <DocIcon />
      case 'projects':
        return <ProjectsIcon />
      case 'contact':
        return <ContactIcon />
      default:
        return <div className="imgPlaceholder" />
    }
  }

  return (
    <aside className='sidebar'>
      <div>
        <div className="personalDetails">
          <img src={photo} alt="personal" width={'64px'} height={'64px'} />
          <div>
            <p>Katarzyna Sikora - Dywelska</p>
            <p className="meta">Frontend Developer</p>
          </div>
        </div>
        <nav>
          {sections.map(section => (
            <a href={`#${section}`} key={section} onClick={() => setActiveSection(section)} className={`${section === activeSection ? 'active' : ''}`}><div className='pill' />{getIcon(section)}<span>{section}</span></a>
          ))}
        </nav>
      </div>
      <footer className='sidebarFooter'>
        <div className='socialLinks'>
          <a className="logoButton" href="https://github.com/Kasia-Sikora"><img src={githubLogo} alt="github logo" /><span>Github</span></a>
          <a className="logoButton" href='https://www.linkedin.com/in/katarzyna-sikora/'><img src={linkedInLogo} alt="linkedIn logo" /><span>LinkedIn</span></a>
        </div>
        <button className="primaryButton">Download CV (PDF)</button>
      </footer>
    </aside>
  )
}

export default Sidebar