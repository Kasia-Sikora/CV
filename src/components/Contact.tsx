import { useState, type SubmitEvent } from 'react'
import './Contact.scss'
import { useInView } from '../hooks/useActiveSection'

const FORM_URL = import.meta.env.VITE_FORM_URL

type FormError = {
  field?: string | null;
  message: string
}

const Contact = () => {
  const [ref, inView] = useInView<HTMLElement>()
  const [error, setError] = useState<FormError | null>(null)
  const [sent, setSent] = useState<boolean>(false)

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setError(null)
    setSent(false)

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      const data = await res.json()

      if (res.ok) {
        form.reset()
        setSent(true)
      } else {
        // Formspree error shape: { error, errors: [{ code, field, message }] }
        const first = data.errors?.[0]
        setError(
          first
            ? { field: first.field, message: first.message }
            : { message: data.error ?? 'Something went wrong.' }
        )
      }
    } catch {
      setError({ message: 'Unknown error — please try again.' })
    }
  }

  return (
    <section className='contact' id="contact" ref={ref}>
      <div className={inView ? 'inView' : ''}>
        <p className="eyebrowLabel">CONTACT</p>
        <h2>Let's talk.</h2>

        <p>Based near Warsaw, Poland — open to remote and on-site roles.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            autoComplete="name"
            required
            onFocus={() => setError(null)}
            aria-invalid={error?.field === 'fullname' || undefined}
            aria-describedby={error?.field === 'fullname' ? 'fullname-error' : undefined}
          />
          {error?.field === 'fullname' && <p id="fullname-error" className="formError field" role="alert">{error.message}</p>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onFocus={() => setError(null)}
            aria-invalid={error?.field === 'email' || undefined}
            aria-describedby={error?.field === 'email' ? 'email-error' : undefined}
          />
          {error?.field === 'email' && <p id="email-error" className="formError field" role="alert">{error.message}</p>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            onFocus={() => setError(null)}
            aria-invalid={error?.field === 'message' || undefined}
            aria-describedby={error?.field === 'message' ? 'message-error' : undefined}
          />
          {error?.field === 'message' && <p id="message-error" className="formError field" role="alert">{error.message}</p>}

          {(error && !error.field) && <p className="formError" role="alert">{error.message}</p>}
          {sent && <output className="formSuccess">Thanks — your message was sent.</output>}

          <button type="submit" className="primaryButton">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
