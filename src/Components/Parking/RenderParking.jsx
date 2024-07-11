import React from 'react'
import styles from './RenderParking.module.css'
import dths from './dths2.png';
import sahs from './sahs2.png';
import rule1 from './IMG_6338.jpeg';
import rule2 from './IMG_6339.jpeg';

const RenderParking = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.parking}>
          <h3>Dutchtown High School</h3>
          <p>13165 LA Hwy 73</p>
          <p>Geismar, La 70734</p>
          <img src={dths} alt="" />
          <h3>St. Amant High School</h3>
          <p>12035 LA Hwy 431</p>
          <p>St. Amant, La 70774</p>
          <img src={sahs} alt="" />
        </div>
        <div className={styles.rules}>
          <ul>
            <h2>Tournament Parking Rules</h2>
            <li>Park in obvious concrete or shell parking lots.</li>
            <li>Be Courteous - DO NOT BLOCK OTHER VEHICLES</li>
            <li>Leave a driveway if one isn't marked out</li>
            <li>Park at your own risk.</li>
            <h3>YOUR VEHICLE WILL BE TOWED IF YOU VIOLATE PARKING RULES</h3><br /><br /><br />
            <h2>Admissions and Concessions</h2>
            <li>Admission: $10.00 (6 & Under Enter for Free)</li>
            <li>Payment Methods: Cash, Card (Concessions Only), or Venmo </li>
            <li>NO Ice Chests are allowed</li>
          </ul><br /><hr /><br />
          <img src={rule1} alt="" />
          <img src={rule2} alt="" />
        </div>
      </div>
  </>
  )
}

export default RenderParking