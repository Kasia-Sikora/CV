import { useInView } from "../hooks/useActiveSection"

const About = () => {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section id="about" className='about sectionVerticalRhythm' ref={ref} >
      <div className={inView ? 'inView' : ''}>
        <p className="eyebrowLabel">About</p>
        <h2>About Me</h2>
        <p>I'm a Frontend Developer who enjoys building accessible, carefully-crafted web interfaces with React and TypeScript. I came to development from a completely different field — and it's been the best decision I've made.</p>

        <h2 className="storyTitle">My story</h2>
        <p>My work used to revolve around animals — seven years at a zoological wholesaler, where I worked my way up and cared for everything from reptiles to aquarium fish. Once I'd grown as far as I could there, I retrained as a developer at Codecool, and found the same thing I'd loved before: solving real problems and building something out of nothing.</p>
      </div>
    </section>
  )
}

export default About