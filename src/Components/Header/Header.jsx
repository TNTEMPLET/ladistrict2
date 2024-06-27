import React from 'react'
import styles from './Header.module.css';
import lalllogo from './lall_logo.png'

const Header = () => {
  return (<>
    <div className={styles.container}>
        <img src={lalllogo} alt="" className="logo" />
        <h1>2024 District-2 Tournament</h1>
    </div>
  </>
  )
}

export default Header