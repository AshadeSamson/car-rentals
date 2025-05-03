import React from 'react'
import styles from './mainBoard.module.css'
import StatsBar from '../statsBar/statsBar'
import SummaryBar from '../summaryBar/summaryBar'

const MainBoard:React.FC = () => {
  return (
    <section className={styles.main}>
        <StatsBar />
        <SummaryBar />  
    </section>
  )
}

export default MainBoard