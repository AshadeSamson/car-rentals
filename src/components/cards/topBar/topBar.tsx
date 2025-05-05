import React from 'react';
import styles from './topBar.module.css';
import { IconContext } from 'react-icons';
import { FaBell } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const HeaderTools: React.FC = () => {
  return (
    <div className={styles.toolsWrapper}>
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
