import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (<>
    <div className={styles.container}>
        <img src="./src/Components/Header/lall_logo.png" alt="" className="logo" />
        <h1>2024 District-2 Tournament</h1>
    </div>
  </>
  )
}

export default Header