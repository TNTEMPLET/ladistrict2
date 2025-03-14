import React from 'react';
import logo from './louisianalllogo.png';
import asclogo from './APCL.png'
import styles from './routes.module.css';


const Home = () => {
  return (<>
  <div className={styles.homeContainer}>
    <img src={logo} alt="" className='logo' />
    <div className={styles.textInfo}>
      <h1>LOUISIANA  STATE TOURNAMENT</h1>
      <h6>Junior and Senior League</h6>
      <h1>2024</h1>
      
      <div className={styles.hostInfo}>
        <h5>Hosted By: </h5>
        <img src={asclogo}/>
      </div>
    </div>
  </div>
  </>);
}

export default Home