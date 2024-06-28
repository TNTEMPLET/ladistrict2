import React from 'react'
import styles from './RenderParking.module.css'
import teejoe from './Tee-Joe.png';
import stevens from './stevens.png'

const RenderParking = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.parking}>
          <div></div>
          <h3>Tee-Joe Gonzales Park</h3>
          <p>524 West Orice Roth Rd.</p>
          <p>Gonzales, La 70737</p>
          <img src={teejoe} alt="" />
          <h3>J Leo Stevens Park</h3>
          <p>43230 Cannon Road</p>
          <p>Gonzales, La 70737</p>
          <img src={stevens} alt="" />
        </div>
        <div className={styles.rules}>
          <ul>
            <h2>Tournament Parking Rules</h2>
            <li>Park in obvious concrete or shell parking lots.</li>
            <li>Be Courteous - DO NOT BLOCK OTHER VEHICLES</li>
            <li>Leave a driveway if one isn't marked out</li>
            <li>Park at your own risk.</li>
            <li>Yellow highlighted areas are parking zones.</li>
            <li>DO NOT PARK ON SIDE OF ROADS</li>
            <li>RED HIGHLIGHTED AREA ARE NO PARKING ZONES</li><br />
            <h3>YOUR VEHICLE WILL BE TOWED IF YOU VIOLATE PARKING RULES</h3>
          </ul>
        </div>
      </div>
  </>
  )
}

export default RenderParking