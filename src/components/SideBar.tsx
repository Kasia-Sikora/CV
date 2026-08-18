import './SideBar.scss'
import { type ReactElement } from "react";
import githubLogo from "./../assets/github.png"
import linkedInLogo from "./../assets/linkedin-icon-black.png"
import photo from "./../assets/zdjecieCV.png"
import PersonIcon from '../assets/person.svg?react'
import DocIcon from '../assets/doc.svg?react'
import ProjectsIcon from '../assets/projects.svg?react'
import ContactIcon from '../assets/contact.svg?react'
import EmailIcon from '../assets/mail-icon.svg?react'
import { useActiveSection } from '../hooks/useActiveSection';

type ActiveSection = 'about' | 'resume' | 'projects' | 'contact'

const sections: ActiveSection[] = ['resume', 'projects', 'about', 'contact']

const Sidebar = () => {
  const active: ActiveSection = useActiveSection(sections)

  const getIcon = (section: ActiveSection): ReactElement => {
    switch (section) {
      case 'about':
        return <PersonIcon aria-hidden="true" />
      case 'resume':
        return <DocIcon aria-hidden="true" />
      case 'projects':
        return <ProjectsIcon aria-hidden="true" />
      case 'contact':
        return <ContactIcon aria-hidden="true" />
      default:
        return <div className="imgPlaceholder" />
    }
  }

  return (
    <aside className='sidebar'>
      <div>
        <div className="personalDetails">
          <img src={photo} alt="Katarzyna Sikora-Dywelska" />
          <div>
            <p>Katarzyna Sikora-Dywelska</p>
            <p className="meta">Frontend Developer</p>
          </div>
        </div>
        <nav>
          {sections.map(section => (
            <a href={`#${section}`} key={section} className={`${section === active ? 'active' : ''}`} aria-label={section}><div className='pill' aria-hidden="true" />{getIcon(section)}<span>{section}</span></a>
          ))}
        </nav>
      </div>
      <footer className='sidebarFooter'>
        <div className='quickContact'>
          <a href="mailto:sikora.katarzyna.waw@gmail.com" aria-label="Email address"><EmailIcon aria-hidden="true" /><span>sikora.katarzyna.waw@gmail.com</span></a>
        </div>
        <div className='socialLinks'>
          <a href="https://github.com/Kasia-Sikora" aria-label="GitHub"><img src={githubLogo} alt="" /><span>Github</span></a>
          <a href='https://www.linkedin.com/in/katarzyna-sikora/' aria-label="LinkedIn"><img src={linkedInLogo} alt="" /><span>LinkedIn</span></a>
        </div>
        <button type="button" className="primaryButton">Download CV (PDF)</button>
      </footer>
    </aside>
  )
}

export default Sidebar