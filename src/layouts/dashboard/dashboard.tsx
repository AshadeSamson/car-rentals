import React from 'react';
import styles from './dashboard.module.css';
import Sidebar from '../../components/sidebar/sidebar';
import MainBoard from '../../components/mainBoard/mainBoard';

const Dashboard: React.FC = () => {



  return (
    <section className={styles.dashboard}>
      <Sidebar />
      <MainBoard />
    </section>
  );
};

export default Dashboard;
