import React from "react";
import { FaSlidersH, FaCheckCircle, FaClock, FaCarSide } from "react-icons/fa";
import styles from "./carStatus.module.css";

interface CarStatus {
  id: string;
  carNo: string;
  driver: string;
  status: "Completed" | "Pending" | "In route";
  earning: string;
  avatar: string;
}

const carStatusData: CarStatus[] = [
  {
    id: "01",
    carNo: "6465",
    driver: "Alex Noman",
    status: "Completed",
    earning: "$35.44",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "02",
    carNo: "5665",
    driver: "Razib Rahman",
    status: "Pending",
    earning: "$0.00",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "03",
    carNo: "1755",
    driver: "Luke Norton",
    status: "In route",
    earning: "$23.50",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

const StatusIcon: React.FC<{ status: CarStatus["status"] }> = ({ status }) => {
  switch (status) {
    case "Completed":
      return <FaCheckCircle className="text-green-500" />;
    case "Pending":
      return <FaClock className="text-yellow-500" />;
    case "In route":
      return <FaCheckCircle className="text-red-500" />;
    default:
      return <FaCarSide className="text-blue-500" />;
  }
};

const CarStatusTable: React.FC = () => {
  return (

    <div className={styles.wrapper}>
      <div className={styles.carStatusCard}>
        <div className={styles.header}>
          <h3 className={styles.title}>Live Car Status</h3>
          <button className={styles.filterButton}>
            <FaSlidersH className={styles.filterIcon} />
            <span>Filter</span>
          </button>
        </div>

        <div className={styles.scrollContainer}>
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
                  <td className={styles.carId}>{car.id}</td>
                  <td>
                    <span className={styles.carNo}>{car.carNo}</span>
                  </td>
                  <td>
                    <div className={styles.carDriver}>
                      <img
                        src={car.avatar}
                        alt={car.driver}
                        className={styles.avatar}
                      />
                      {car.driver}
                    </div>
                  </td>
                  <td>
                    <div className={styles.carStatus}>
                      <StatusIcon status={car.status} />
                      {car.status}
                    </div>
                  </td>
                  <td className={styles.carEarning}>{car.earning}</td>
                  <td>
                    <button className={styles.detailsButton}>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarStatusTable;