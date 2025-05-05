import React from "react";
import styles from "./carStatus.module.css";
import { IconContext } from "react-icons";
import { FaSlidersH } from "react-icons/fa";

const carStatusData = [
  {
    id: "01",
    carNo: "6465",
    driver: "Alex Noman",
    status: "Completed",
    earning: "$35.44",
    avatar: "https://i.pravatar.cc/40?img=1",
    color: "green",
  },
  {
    id: "02",
    carNo: "5665",
    driver: "Razib Rahman",
    status: "Pending",
    earning: "$0.00",
    avatar: "https://i.pravatar.cc/40?img=2",
    color: "blue",
  },
  {
    id: "03",
    carNo: "1755",
    driver: "Luke Norton",
    status: "In route",
    earning: "$23.50",
    avatar: "https://i.pravatar.cc/40?img=3",
    color: "red",
  },
];

const CarStatusCard:React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-700 font-semibold">Live Car Status</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm hover:text-black">
          <IconContext.Provider value={{ className: "text-lg" }}>
            <FaSlidersH />
          </IconContext.Provider>
          <p className="ml-2">Filter</p>
        </div>
      </div>

      <table className={styles.carStatsTable}>
            <thead>
              <tr>
                <th>No</th>
                <th>Car no.</th>
                <th>Driver</th>
                <th>Status</th>
                <th>Earning</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carStatusData.map((car) => (
                <tr key={car.id}>
                  <td>
                  <div className={styles.carId}>{car.id}
                  </div>
                  </td>
                  <td>
                  <div className={styles.carNo}>{car.carNo}
                  </div>
                  </td>
                  <td>
                  <div className={`flex items-center gap-2 ${styles.carDriver}`}>
                    <img
                      src={car.avatar}
                      alt={car.driver}
                      className="w-7 h-7 rounded-full"
                    />{car.driver}
                  </div>
                  </td>
                  <td>
                  <div className={`${styles.carStatus} ${styles[car.color]}`}>{car.status}
                  </div>
                  </td>
                  
                  <td>
                  <div className={styles.carEarning}>{car.earning}
                  </div>
                  </td>
                  <td>
                  <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white text-md px-4 py-1 rounded">
                      Details
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
      </table>
    </div>
  );
}



export default CarStatusCard;