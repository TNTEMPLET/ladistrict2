import React from 'react';
import Minors9 from './Minor 9-11 Rosters.png'
import styles from './RosterTemplate.module.css'

const Minor9 = () => {
  return (<>
  <div className={styles.rosterContainer}>
    <img className={styles.roster} src={Minors9} alt="" />
  </div>
    
  </>)
}

export default Minor9