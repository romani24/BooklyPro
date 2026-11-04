import { useState } from 'react'
import { ArrowRight, CalendarDays, Check, Clock3, Menu, Scissors, Sparkles, Star, X } from 'lucide-react'
import './App.css'

const services = [
  { name: 'Signature Cut', detail: 'Consultation, cut and finish', duration: '45 min', price: '€22' },
  { name: 'Beard Ritual', detail: 'Hot towel and precision finish', duration: '35 min', price: '€18' },
  { name: 'Cut + Beard', detail: 'The complete grooming session', duration: '70 min', price: '€36' },
]

const professionals = [
  { name: 'Miguel Santos', role: 'Senior barber', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&q=85' },
  { name: 'Inês Costa', role: 'Styling specialist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=85' },
]

const dates = ['Today, Nov 4', 'Tomorrow, Nov 5', 'Friday, Nov 6']
const times = ['09:30', '11:00', '14:30', '16:00', '18:30']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [service, setService] = useState(services[0].name)
  const [professional, setProfessional] = useState(professionals[0].name)
  const [date, setDate] = useState(dates[1])
  const [time, setTime] = useState(times[2])
  const [confirmed, setConfirmed] = useState(false)

  const selectedService = services.find((item) => item.name === service) ?? services[0]
  const scrollToBooking = () => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="site-shell">
      <div className="demo-bar">Interactive demo · BooklyPro</div>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Atelier 22 home">
          <span className="brand-mark"><Scissors size={19} /></span>
          <span>ATELIER <b>22</b></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#team" onClick={() => setMenuOpen(false)}>Team</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <button className="nav-cta" onClick={scrollToBooking}>Book now <ArrowRight size={16} /></button>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15} /> Contemporary barbershop · Lisbon</span>
            <h1>Your style.<br /><em>No waiting.</em></h1>
            <p>Book your moment in under a minute. Experienced hands, unhurried care and a result that feels like you.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={scrollToBooking}>Choose a time <ArrowRight size={18} /></button>
              <div className="rating"><span><Star size={16} fill="currentColor" /> 4.9</span><small>from 240+ reviews</small></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Appointment preview">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="appointment-card">
              <div className="appointment-top">
                <div><small>Next availability</small><strong>Tomorrow, 2:30 PM</strong></div>
                <span><CalendarDays size={20} /></span>
              </div>
              <div className="appointment-person">
                <img src={professionals[0].image} alt="Miguel Santos" />
                <div><strong>Miguel Santos</strong><small>Signature Cut · 45 min</small></div>
                <span className="status-dot" />
              </div>
              <div className="appointment-slots"><span>14:30</span><span>16:00</span><span>18:30</span></div>
              <button onClick={scrollToBooking}>Book this time</button>
            </div>
            <div className="floating-note"><Check size={16} /><span>Instant confirmation<br /><small>No phone calls needed</small></span></div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Highlights">
          <div><strong>6 years</strong><span>of experience</span></div>
          <div><strong>2,400+</strong><span>happy clients</span></div>
          <div><strong>100%</strong><span>online booking</span></div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div><span className="section-kicker">Services</span><h2>Choose your ritual.</h2></div>
            <p>No hidden prices. Every service starts with a short consultation so we can shape the right result together.</p>
          </div>
          <div className="service-grid">
            {services.map((item, index) => (
              <button className={service === item.name ? 'service-card selected' : 'service-card'} key={item.name} onClick={() => { setService(item.name); scrollToBooking() }}>
                <span className="service-number">0{index + 1}</span>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
                <div><span><Clock3 size={15} /> {item.duration}</span><strong>{item.price}</strong></div>
              </button>
            ))}
          </div>
        </section>

        <section className="section team-section" id="team">
          <div className="team-copy">
            <span className="section-kicker">The team</span>
            <h2>Skilled hands.<br />Attentive ears.</h2>
            <p>Every cut starts with a conversation. Choose the professional who fits your style and we will take care of the rest.</p>
            <div className="mini-quote">“Our work is done when you recognise yourself in the mirror.”</div>
          </div>
          <div className="team-list">
            {professionals.map((person) => (
              <button className={professional === person.name ? 'team-card selected' : 'team-card'} key={person.name} onClick={() => setProfessional(person.name)}>
                <img src={person.image} alt={person.name} />
                <span><strong>{person.name}</strong><small>{person.role}</small></span>
                <span className="select-circle"><Check size={15} /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="booking-section" id="booking">
          <div className="booking-intro">
            <span className="section-kicker">Book now</span>
            <h2>Your next great cut starts here.</h2>
            <p>Choose the details below. This interactive demo does not create a real appointment.</p>
          </div>
          <div className="booking-panel">
            {confirmed ? (
              <div className="confirmation">
                <span className="confirmation-icon"><Check size={30} /></span>
                <span className="section-kicker">Request received</span>
                <h3>You are almost set. {professional.split(' ')[0]} will take care of you.</h3>
                <p>{service} · {date} at {time}</p>
                <button className="secondary-button" onClick={() => setConfirmed(false)}>Edit booking</button>
              </div>
            ) : (
              <>
                <label>Service
                  <select value={service} onChange={(event) => setService(event.target.value)}>
                    {services.map((item) => <option key={item.name}>{item.name}</option>)}
                  </select>
                </label>
                <label>Professional
                  <select value={professional} onChange={(event) => setProfessional(event.target.value)}>
                    {professionals.map((person) => <option key={person.name}>{person.name}</option>)}
                  </select>
                </label>
                <fieldset><legend>Date</legend><div className="choice-row">{dates.map((item) => <button className={date === item ? 'active' : ''} key={item} onClick={() => setDate(item)}>{item}</button>)}</div></fieldset>
                <fieldset><legend>Time</legend><div className="choice-row times">{times.map((item) => <button className={time === item ? 'active' : ''} key={item} onClick={() => setTime(item)}>{item}</button>)}</div></fieldset>
                <div className="booking-summary"><span>{selectedService.duration}</span><strong>{selectedService.price}</strong></div>
                <button className="confirm-button" onClick={() => setConfirmed(true)}>Confirm request <ArrowRight size={18} /></button>
              </>
            )}
          </div>
        </section>
      </main>

      <footer id="experience">
        <a className="brand" href="#top"><span className="brand-mark"><Scissors size={19} /></span><span>ATELIER <b>22</b></span></a>
        <p>Rua da Escola Politécnica, Lisbon · Tue–Sat, 9 AM–7 PM</p>
        <span>© 2026 · BooklyPro frontend demo</span>
      </footer>
    </div>
  )
}

export default App
