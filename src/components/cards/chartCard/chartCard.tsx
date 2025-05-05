import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './chartCard.module.css';
import type { ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
  Tooltip
);

const ChartCard:React.FC = () => {
  const data = {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Last 6 months',
        data: [150000, 250000, 200000, 230000, 260000, 290000],
        fill: true,
        backgroundColor: 'rgba(59,130,246,0.1)',
        borderColor: '#3B82F6',
        pointBackgroundColor: '#3B82F6',
        tension: 0.4,
      },
      {
        label: 'Same period last year',
        data: [100000, 180000, 170000, 190000, 200000, 210000],
        borderColor: '#9CA3AF',
        borderDash: [5, 5],
        pointBackgroundColor: '#9CA3AF',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options:ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 8,
          boxHeight: 6,
          usePointStyle: true,
          font: {
            size: 10,
          },
        },
      },
    },
    scales: {
        y: {
          min: 0,
          max: 300000,
          ticks: {
            stepSize: 100000,
            callback: (value: string | number) => {
              if (typeof value === 'number') {
                return value === 0 ? '$0.00k' : `$${value / 1000}k`;
              }
              return value;
            },
          },
          beginAtZero: true,
          grid: {
            color: '#F3F4F6',
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className='flex items-center'>
          <h3 className={styles.title}>Earning Summary</h3>
          <span className={styles.dateRange}>Mar 2022 - Oct 2022</span>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartCard;
