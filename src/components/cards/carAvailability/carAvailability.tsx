import React from 'react';
import styles from './carAvailability.module.css'
import { IconContext } from "react-icons";
import { FaCar, FaCalendar, FaClock, FaAngleDown } from 'react-icons/fa';

const CarAvailabilityCard:React.FC = () => {


  return (
    <div className={styles.carAvailabilityCard}>
      <h3 className={styles.cacHeading}>Car Availability</h3>

      <div className="flex flex-wrap gap-4 items-center">
        {/* Car Number */}
        <div className="flex items-center justify-between border rounded-md px-4 py-2 text-gray-600 w-60">
          <div className="flex items-center">
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <FaCar className="mr-3" />
            </IconContext.Provider>
          <select className="bg-transparent w-full outline-none appearance-none">
            <option>Car number</option>
            <option>ABC-123</option>
            <option>XYZ-456</option>
          </select>
          </div>
          <IconContext.Provider value={{ style: { fontWeight: 'light', fontSize: '1.2rem' } }}>
              <FaAngleDown className="" />
          </IconContext.Provider>
        </div>


        <div className='flex items-center border rounded-md text-gray-600'>
          {/* Date */}
          <div className="flex items-center px-4 py-2 text-gray-600 w-50 border-r">
            <IconContext.Provider value={{ size: "1rem" }}>
              <FaCalendar className="mr-3" />
            </IconContext.Provider>
            <p>2022-11-20</p>
          </div>

          {/* Time */}
          <div className={`flex items-center px-4 py-2 text-gray-600 w-40 ${styles.time}`}>
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <FaClock className="mr-3" />
            </IconContext.Provider>
            <select className="bg-transparent w-full outline-none appearance-none">
              <option>10 AM</option>
              <option>11 AM</option>
              <option>12 PM</option>
            </select>
            <IconContext.Provider value={{ style: { fontWeight: 'light', fontSize: '1.2rem' } }}>
              <FaAngleDown className="" />
            </IconContext.Provider>
          </div>
        </div>

        {/* Check Button */}
        <button className={styles.checkButton}>
          Check
        </button>
      </div>
    </div>
  );
};

export default CarAvailabilityCard;
