// CarStatusCard.tsx
import React from 'react';
import { FaCheckCircle, FaClock, FaCarSide } from 'react-icons/fa';
import styles from './carStatus.module.css';

export type StatusType = 'Completed' | 'Pending' | 'In route';

interface CarStatusCardProps {
  index: number;
  carNumber: string;
  driverName: string;
  status: StatusType;
  earning: number;
}

const CarStatusCard: React.FC<CarStatusCardProps> = ({
  index,
  carNumber,
  driverName,
  status,
  earning,
}) => {
  const StatusIcon = () => {
    switch (status) {
      case 'Completed':
        return <FaCheckCircle className={`${styles.statusIcon} ${styles.completed}`} />;
      case 'Pending':
        return <FaClock className={`${styles.statusIcon} ${styles.pending}`} />;
      case 'In route':
        return <FaCarSide className={`${styles.statusIcon} ${styles.inRoute}`} />;
      default:
        return <FaCarSide className={`${styles.statusIcon} ${styles.inRoute}`} />;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.number}>#{index.toString().padStart(2, '0')}</span>
        <span className={styles.carNumber}>Car no. {carNumber}</span>
      </div>
      
      <h3 className={styles.driver}>{driverName}</h3>
      
      <div className={styles.statusContainer}>
        <StatusIcon />
        <span className={styles.statusText}>{status}</span>
        <span className={styles.earning}>$ {earning.toFixed(2)}</span>
      </div>
      
      <button className={styles.detailsButton}>
        Details
      </button>
    </div>
  );
};

export default CarStatusCard;