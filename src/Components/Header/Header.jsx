import React from 'react'
import styles from './Header.module.css';
import lalllogo from './lall_logo.png'

const Header = () => {
  return (<>
    <div className={styles.container}>
      <div className={styles.headerItems}>
        <img src={lalllogo} alt="" className={styles.logo} />
        <div className={styles.headerH1}>2025 District 2 Tournament</div>
       
      </div>
    </div>
  </>
  )
}

export default Header
