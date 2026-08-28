import { useInView } from "../hooks/useActiveSection"

const About = () => {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section id="about" className='about sectionVerticalRhythm' ref={ref} >
      <div className={inView ? 'inView' : ''}>
        <p className="eyebrowLabel">About</p>
        <h2>About Me</h2>
        <p>I'm a Frontend Developer looking for a product that matters — <strong>HealthTech, EdTech, civic tech, animal welfare.</strong> If it makes someone's life tangibly better, I want to help build it.</p>

        <p>I have <strong>4 years of commercial React and TypeScript</strong> experience. At The Stepstone Group I built candidate-facing features with a NestJS BFF. At PKO Bank Polski I worked on an internal design system. On my own time, I built an offline-first shopping list app with IndexedDB sync, drag-and-drop, and 250+ tests.</p>

        <p>Before tech, I spent seven years at a zoological wholesaler, working my way up to <strong>domain specialist.</strong> I retrained as a developer and found the same thing I'd loved: going deep into a subject and building something real from scratch.</p>

      </div>
    </section>
  )
}

export default About