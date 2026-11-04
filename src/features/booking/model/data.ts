export type Service = {
  name: string
  detail: string
  duration: string
  price: string
}

export type Professional = {
  name: string
  role: string
  image: string
}

export const services: Service[] = [
  { name: 'Signature Cut', detail: 'Consultation, cut and finish', duration: '45 min', price: '€22' },
  { name: 'Beard Ritual', detail: 'Hot towel and precision finish', duration: '35 min', price: '€18' },
  { name: 'Cut + Beard', detail: 'The complete grooming session', duration: '70 min', price: '€36' },
]

export const professionals: Professional[] = [
  { name: 'Miguel Santos', role: 'Senior barber', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&q=85' },
  { name: 'Inês Costa', role: 'Styling specialist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=85' },
]

export const dates = ['Today, Nov 4', 'Tomorrow, Nov 5', 'Friday, Nov 6']
export const times = ['09:30', '11:00', '14:30', '16:00', '18:30']
