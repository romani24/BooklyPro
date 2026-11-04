import { Check } from 'lucide-react'
import { professionals } from '../../booking/model/data'

type TeamSectionProps = {
  selectedProfessional: string
  onSelect: (professional: string) => void
}

export function TeamSection({ selectedProfessional, onSelect }: TeamSectionProps) {
  return (
    <section className="section team-section" id="team">
      <div className="team-copy">
        <span className="section-kicker">The team</span>
        <h2>Skilled hands.<br />Attentive ears.</h2>
        <p>Every cut starts with a conversation. Choose the professional who fits your style and we will take care of the rest.</p>
        <div className="mini-quote">“Our work is done when you recognise yourself in the mirror.”</div>
      </div>
      <div className="team-list">
        {professionals.map((person) => (
          <button className={selectedProfessional === person.name ? 'team-card selected' : 'team-card'} key={person.name} onClick={() => onSelect(person.name)}>
            <img src={person.image} alt={person.name} />
            <span><strong>{person.name}</strong><small>{person.role}</small></span>
            <span className="select-circle"><Check size={15} /></span>
          </button>
        ))}
      </div>
    </section>
  )
}
