import React from 'react'
import styles from './RenderParking.module.css'

const RenderParking = () => {
  return (
    <>
      <div className="container">
        <div className={styles.parking}>
          <h3>Tee-Joe Gonzales Park</h3>
          <img src="./src/images/Tee-Joe.png" alt="" />
          <h3>J Leo Stevens Park</h3>
          <img src="./src/images/stevens.png" alt="" />
        </div>
        <div className={styles.rules}>
          <ul>
            <h2>Tournament Parking Rules</h2>
            <li>Park in obvious concrete or shell parking lots.</li>
            <li>Be Courteous - DO NOT BLOCK OTHER VEHICLES</li>
            <li>Leave a driveway if one isn't marked out</li>
            <li>Park at your own risk.</li>
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