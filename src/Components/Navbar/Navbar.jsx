import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
        <div className={styles.navMenu}>
            <Link to='/' className={styles.link}>Home</Link>
            <Link to='/bracket' className={styles.link}>Brackets</Link>
            <Link to='/parking' className={styles.link}>Parking</Link>
            <Link to='/rosters' className={styles.link}>Rosters</Link>
        </div>
    );
  
}

export default Navbar
