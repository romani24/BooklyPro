import { ArrowRight, Check } from 'lucide-react'
import type { BookingState } from '../hooks/useBooking'
import { dates, professionals, services, times } from '../model/data'

type BookingPanelProps = { booking: BookingState }

export function BookingPanel({ booking }: BookingPanelProps) {
  return (
    <section className="booking-section" id="booking">
      <div className="booking-intro">
        <span className="section-kicker">Book now</span>
        <h2>Your next great cut starts here.</h2>
        <p>Choose the details below. This interactive demo does not create a real appointment.</p>
      </div>
      <div className="booking-panel">
        {booking.confirmed ? (
          <div className="confirmation">
            <span className="confirmation-icon"><Check size={30} /></span>
            <span className="section-kicker">Request received</span>
            <h3>You are almost set. {booking.professional.split(' ')[0]} will take care of you.</h3>
            <p>{booking.service} · {booking.date} at {booking.time}</p>
            <button className="secondary-button" onClick={() => booking.setConfirmed(false)}>Edit booking</button>
          </div>
        ) : (
          <>
            <label>Service
              <select value={booking.service} onChange={(event) => booking.setService(event.target.value)}>
                {services.map((item) => <option key={item.name}>{item.name}</option>)}
              </select>
            </label>
            <label>Professional
              <select value={booking.professional} onChange={(event) => booking.setProfessional(event.target.value)}>
                {professionals.map((person) => <option key={person.name}>{person.name}</option>)}
              </select>
            </label>
            <fieldset><legend>Date</legend><div className="choice-row">{dates.map((item) => <button className={booking.date === item ? 'active' : ''} key={item} onClick={() => booking.setDate(item)}>{item}</button>)}</div></fieldset>
            <fieldset><legend>Time</legend><div className="choice-row times">{times.map((item) => <button className={booking.time === item ? 'active' : ''} key={item} onClick={() => booking.setTime(item)}>{item}</button>)}</div></fieldset>
            <div className="booking-summary"><span>{booking.selectedService.duration}</span><strong>{booking.selectedService.price}</strong></div>
            <button className="confirm-button" onClick={() => booking.setConfirmed(true)}>Confirm request <ArrowRight size={18} /></button>
          </>
        )}
      </div>
    </section>
  )
}
