import { contact } from '../../components/portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
      <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      <br></br>
      <a href={`tel:${contact.Number}`}>
      <span  className='btn btn--outline'>
          Call {contact.Number}
        </span>
      </a>
     
    </section>
  )
}

export default Contact