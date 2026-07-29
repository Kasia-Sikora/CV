import { type SubmitEvent } from 'react'
import './Contact.scss'

const Contact = () => {

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault()
  }

  return (
    <section className="contact" id="contact">
      <p className="eyebrowLabel">CONTACT</p>
      <h2>Let's talk.</h2>

      <p>Based near Warsaw, Poland — open to remote and on-site roles.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input id="fullname" name="fullname" type="text" autoComplete="name" required />
        
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required />
        
        <button type="submit" className="primaryButton">Send message</button>
      </form>
    </section>
  )
}

export default Contact