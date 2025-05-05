import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const HireCancelCard: React.FC = () => {
  const data = {
    labels: ['Total Hired', 'Total Canceled', 'Total Pending'],
    datasets: [
      {
        data: [54, 20, 26],
        backgroundColor: ['blue', 'limegreen', 'red'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 w-full max-w-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-600 font-semibold">Hire vs Cancel</h3>
        <span className="bg-gray-100 text-sm text-gray-600 px-3 py-1 rounded-md">Today</span>
      </div>

      <div className="flex justify-center mb-4">
        <div className="w-36 h-36">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-blue-600" />
            <span>Total Hired</span>
          </div>
          <span className="text-green-600 flex items-center space-x-1">
            <span>54%</span>
            <FaArrowUp size={12} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span>Total Canceled</span>
          </div>
          <span className="text-green-600 flex items-center space-x-1">
            <span>20%</span>
            <FaArrowUp size={12} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span>Total Pending</span>
          </div>
          <span className="text-red-600 flex items-center space-x-1">
            <span>26%</span>
            <FaArrowDown size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HireCancelCard;
