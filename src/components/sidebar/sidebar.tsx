import React, { useState } from 'react'
import styles from './sidebar.module.css'
import { IconContext } from "react-icons";
import { FaBorderAll, FaCarAlt, FaBell, FaRegSun } from 'react-icons/fa';
import { FaCreditCard, FaRegFileLines } from 'react-icons/fa6';
import { RiExchangeCnyFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import Button from '../buttons/button';
import Logo from '../../assets/Logo.png';

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const handleSetActive = (label: string) => {
    setActiveLink(label);
  };

  const NavLink = ({
    icon,
    label,
  }: {
    icon: React.ReactNode;
    label: string;
  }) => (
    <a
      href="#"
      className={`${styles.navLink} ${activeLink === label ? styles.active : ""}`}
      onClick={() => handleSetActive(label)}
    >
      <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
        {icon}
      </IconContext.Provider>
      <h3>{label}</h3>
    </a>
  );

  return (
    <section className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={Logo} alt="Company Logo" />
      </div>
      <nav>
        <NavLink icon={<FaBorderAll />} label="Dashboard" />
        <NavLink icon={<FaCarAlt />} label="Drivers" />
        <NavLink icon={<TbBrandBooking />} label="Bookings" />
        <NavLink icon={<FaBell />} label="Notifications" />
        <NavLink icon={<FaRegSun />} label="Settings" />

        <hr className={styles.divider} />
        <h2>Report</h2>
        <NavLink icon={<FaCreditCard />} label="Payment Details" />
        <NavLink icon={<RiExchangeCnyFill />} label="Transactions" />
        <NavLink icon={<FaRegFileLines />} label="Car Report" />
      </nav>
      <div className={styles.logout}>
        <Button />
      </div>
    </section>
  );
};

export default Sidebar;
