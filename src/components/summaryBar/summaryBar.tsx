import React from 'react'
import CarAvailabilityCard from '../cards/carAvailability/carAvailability'
import CarStats from '../cards/carStatusCard'

const SummaryBar:React.FC = () => {
  return (
    <section>
      <div></div>
      <CarAvailabilityCard />
      <CarStats />
    </section>
  )
}

export default SummaryBar