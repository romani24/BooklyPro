import { Clock3 } from 'lucide-react'
import { services } from '../../booking/model/data'

type ServicesSectionProps = {
  selectedService: string
  onSelect: (service: string) => void
}

export function ServicesSection({ selectedService, onSelect }: ServicesSectionProps) {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <div><span className="section-kicker">Services</span><h2>Choose your ritual.</h2></div>
        <p>No hidden prices. Every service starts with a short consultation so we can shape the right result together.</p>
      </div>
      <div className="service-grid">
        {services.map((item, index) => (
          <button className={selectedService === item.name ? 'service-card selected' : 'service-card'} key={item.name} onClick={() => onSelect(item.name)}>
            <span className="service-number">0{index + 1}</span>
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <div><span><Clock3 size={15} /> {item.duration}</span><strong>{item.price}</strong></div>
          </button>
        ))}
      </div>
    </section>
  )
}
