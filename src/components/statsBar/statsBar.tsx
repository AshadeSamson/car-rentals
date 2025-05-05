import React from 'react'
import styles from './statsBar.module.css'
import StatCard from '../cards/statCard/statCard'
import HireCancelCard from '../cards/hireCard/hireCard'


const StatsBar:React.FC = () => {
  return (
    <section className={styles.statsBar}>
      <div className={styles.statsDate}>
        <h3>Todays Statistics</h3>
        <p>Tue, 14 Nov, 2022, 11.30 AM</p>
      </div>
      <StatCard
        title="Income"
        amount="$9460.00"
        percentage={1.5}
        isIncrease={false}
        comparedValue="$9940"
        lastWeekLabel="Last week Income"
        lastWeekAmount="$25658.00"
      />
      <StatCard
        title="Expenses"
        amount="$5660.00"
        percentage={2.5}
        isIncrease={true}
        comparedValue="$5240"
        lastWeekLabel="Last week expenses"
        lastWeekAmount="$22658.00"
      />
      <HireCancelCard />
    </section>
  )
}

export default StatsBar