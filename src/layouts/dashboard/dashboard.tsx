import React from 'react'
import styles from './dashboard.module.css'
import Sidebar from '../../components/sidebar/sidebar'
import StatsBar from '../../components/statsBar/statsBar'

const Dashboard:React.FC = () => {
  return (
    <section className={styles.dashboard}>
        <Sidebar />
        <StatsBar />
    </section>
  )
}

export default Dashboard