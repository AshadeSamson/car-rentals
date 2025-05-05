import React from 'react';
import styles from './topBar.module.css';
import { IconContext } from 'react-icons';
import { FaBell } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { RiCloseLargeFill } from "react-icons/ri";
import { useSidebar } from '../../../context/mobileMenuContext';

const HeaderTools: React.FC = () => {

  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <div className={styles.toolsWrapper}>
      <div className={styles.hamburger} onClick={() => toggleSidebar()}>
        <IconContext.Provider value={{ size: '2rem' }}>
           { isSidebarOpen ? <RiCloseLargeFill className={styles.menuIcon} /> : <FiMenu className={styles.menuIcon} />  } 
        </IconContext.Provider>
      </div>
      <div className={styles.notification}>
        <IconContext.Provider value={{ size: '1.5rem' }}>
            <FaBell className={styles.bellIcon} />
        </IconContext.Provider>
        <span className={styles.badge}></span>
      </div>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search here" />
        <FiSearch className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default HeaderTools;
