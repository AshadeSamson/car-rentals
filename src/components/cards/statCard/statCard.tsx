import React from 'react';
import styles from './statCard.module.css';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

interface StatCardProps {
  title: string;
  amount: string;
  percentage: number;
  isIncrease: boolean;
  comparedValue: string;
  lastWeekLabel: string;
  lastWeekAmount: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  amount,
  percentage,
  isIncrease,
  comparedValue,
  lastWeekLabel,
  lastWeekAmount,
}) => {

  return (
    <div className={styles.statCardBox}>
      <div className={styles.statCardRow1}>
        <h3>{title}</h3>
        <span>Today</span>
      </div>
      <div className={styles.statCardRow2}>
        <span className={styles.statCardRow2Amount}>{amount}</span>
        <div className={styles.statCardRow2Percent}>
          {isIncrease ? (
            <FaArrowUp className="text-green-500" />
          ) : (
            <FaArrowDown className="text-red-500" />
          )}
          <span className={isIncrease ? 'text-green-500' : 'text-red-500'}>
            {percentage}%
          </span>
        </div>
      </div>
      <p className={styles.statCardRow3}>Compared to {comparedValue} yesterday</p>
      <div className="flex justify-between items-center text-sm text-gray-700 font-medium">
        <span>{lastWeekLabel}</span>
        <span>{lastWeekAmount}</span>
      </div>
    </div>
  );
};

export default StatCard;
