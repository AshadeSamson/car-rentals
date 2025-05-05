import React from 'react'
import styles from './summaryBar.module.css'
import CarAvailabilityCard from '../cards/carAvailability/carAvailability'
import CarStatusCard from '../cards/carStatus/carStatus'
import ChartCard from '../cards/chartCard/chartCard'
import TopBar from '../cards/topBar/topBar'

const SummaryBar:React.FC = () => {

  return (
    <section className={styles.summaryBar}>
      <TopBar />
      <CarAvailabilityCard />
      {/* <CarStatusCard /> */}
      {/* <ChartCard /> */}
    </section>
  )
}

export default SummaryBar