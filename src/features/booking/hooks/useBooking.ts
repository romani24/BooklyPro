import { useState } from 'react'
import { dates, professionals, services, times } from '../model/data'

export function useBooking() {
  const [service, setService] = useState(services[0].name)
  const [professional, setProfessional] = useState(professionals[0].name)
  const [date, setDate] = useState(dates[1])
  const [time, setTime] = useState(times[2])
  const [confirmed, setConfirmed] = useState(false)

  return {
    service,
    professional,
    date,
    time,
    confirmed,
    selectedService: services.find((item) => item.name === service) ?? services[0],
    setService,
    setProfessional,
    setDate,
    setTime,
    setConfirmed,
  }
}

export type BookingState = ReturnType<typeof useBooking>
