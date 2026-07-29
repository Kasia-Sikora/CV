import './Resume.scss'
import { useState } from "react";
import Skills from "./ResumeContent/Skills"
import WorkExp from "./ResumeContent/WorkExp"
import Testimonials from "./ResumeContent/Testimonials";
import { useInView } from '../hooks/useActiveSection';

type TabName = 'workExperience' | 'skills' | 'testimonials';

type Tabs = {
  id: TabName,
  label: string
}
const tabNameArr: Tabs[] = [{ id: 'workExperience', label: 'Work Experience' }, { id: 'skills', label: 'Skills' }, { id: 'testimonials', label: "Testimonials" }]

const Resume = () => {
  const [activeTab, setActiveTab] = useState<TabName>('workExperience')
  const [ref, inView] = useInView<HTMLElement>()

  const getComponent = (id: TabName) => {
    switch (id) {
      case "workExperience":
        return <WorkExp />
      case "skills":
        return <Skills />
      case "testimonials":
        return <Testimonials />
      default:
        return <Skills />
    }
  }

  return (
    <section className={`resume sectionVerticalRhythm ${inView ? 'inView' : ''}`} id="resume" ref={ref}>
      <p className="eyebrowLabel">Resume</p>
      <h2>Skills & experience</h2>
      <div className="tab">
        {tabNameArr.map(({ id, label }) => <button key={id} className={`tablinks ${activeTab === id ? 'active' : ''}`} onClick={() => setActiveTab(id)}>{label}</button>)}
      </div>
      {tabNameArr.map(({ id }) => (
        <div key={id} id={id} className={`tabcontent ${activeTab === id ? '' : 'hidden'}`}>
          {getComponent(id)}
        </div>
      ))}
    </section>
  )
}

export default Resume