import React from 'react'
import { IconContext } from "react-icons";
import { FiLogOut } from 'react-icons/fi';
import styles from './button.module.css'

interface ButtonProps {
  className?: string;
}

const Button:React.FC<ButtonProps> = ({className}) => {
  return (
    <button
    className={`${styles.button} ${className}`}
    >
    <IconContext.Provider value={{ color: "white", size: "1.3rem" }}>
        <FiLogOut />
    </IconContext.Provider>
    <span className={styles.text}>Logout</span>
  </button>
  )
}

export default Button