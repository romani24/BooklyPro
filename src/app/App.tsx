import { ArrowRight, CalendarDays, Check, Sparkles, Star } from 'lucide-react'
import { BookingPanel } from '../features/booking/components/BookingPanel'
import { useBooking } from '../features/booking/hooks/useBooking'
import { professionals } from '../features/booking/model/data'
import { ServicesSection } from '../features/services/components/ServicesSection'
import { TeamSection } from '../features/team/components/TeamSection'
import { SiteFooter } from '../shared/components/SiteFooter'
import { SiteHeader } from '../shared/components/SiteHeader'
import './styles.css'

const scrollToBooking = () => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })

export default function App() {
  const booking = useBooking()
  const chooseService = (service: string) => { booking.setService(service); scrollToBooking() }

  return (
    <div className="site-shell">
      <div className="demo-bar">Interactive demo · BooklyPro</div>
      <SiteHeader onBook={scrollToBooking} />
      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15} /> Contemporary barbershop · Lisbon</span>
            <h1>Your style.<br /><em>No waiting.</em></h1>
            <p>Book your moment in under a minute. Experienced hands, unhurried care and a result that feels like you.</p>
            <div className="hero-actions"><button className="primary-button" onClick={scrollToBooking}>Choose a time <ArrowRight size={18} /></button><div className="rating"><span><Star size={16} fill="currentColor" /> 4.9</span><small>from 240+ reviews</small></div></div>
          </div>
          <div className="hero-visual" aria-label="Appointment preview">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="appointment-card"><div className="appointment-top"><div><small>Next availability</small><strong>Tomorrow, 2:30 PM</strong></div><span><CalendarDays size={20} /></span></div><div className="appointment-person"><img src={professionals[0].image} alt="Miguel Santos" /><div><strong>Miguel Santos</strong><small>Signature Cut · 45 min</small></div><span className="status-dot" /></div><div className="appointment-slots"><span>14:30</span><span>16:00</span><span>18:30</span></div><button onClick={scrollToBooking}>Book this time</button></div>
            <div className="floating-note"><Check size={16} /><span>Instant confirmation<br /><small>No phone calls needed</small></span></div>
          </div>
        </section>
        <section className="trust-strip" aria-label="Highlights"><div><strong>6 years</strong><span>of experience</span></div><div><strong>2,400+</strong><span>happy clients</span></div><div><strong>100%</strong><span>online booking</span></div></section>
        <ServicesSection selectedService={booking.service} onSelect={chooseService} />
        <TeamSection selectedProfessional={booking.professional} onSelect={booking.setProfessional} />
        <BookingPanel booking={booking} />
      </main>
      <SiteFooter />
    </div>
  )
}
