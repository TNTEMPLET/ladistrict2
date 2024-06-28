import React from 'react';
import logo from './louisianalllogo.png';
import styles from './routes.module.css';

const Home = () => {
  return (<>
  <div className={styles.homeContainer}>
    <img src={logo} alt="" className='logo' />
    <div className={styles.textInfo}>
      <h1>DISTRICT 2 TOURNAMENT</h1>
      <h1>2024</h1>
    </div>
  </div>

  </>);
}

export default Home