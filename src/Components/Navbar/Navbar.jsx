import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
        <div className={styles.navMenu}>
            <Link to='/' className={styles.link}>Home</Link>
            <Link to='/bracket' className={styles.link}>Brackets</Link>
            <Link to='/parking' className={styles.link}>Parking</Link>
        </div>
    );
  
}

export default Navbar
