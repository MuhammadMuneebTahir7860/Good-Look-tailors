import React from 'react'
import Image from 'next/image'
import styles from '../../styles/ShopAnalytics.module.scss'
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import stich7 from "../../assets/img_62618.png";
import stich8 from "../../assets/3363830.png";
export default function ShopAnalytics() {
  return (
    <div>
        {/* stats of shop */}

      <div className={styles.shopStat}>
        <div className={styles.shopStatBox1}>
          <Bounce cascade>
            <Image className={styles.shopStatBoximage} style={{ width: '100%', objectFit: 'contain' }} src={stich7} alt='stich7'></Image>
          </Bounce>
          <Flip top>
            <p className={styles.shopStatBoxDescription2}>Suits Stich</p>
          </Flip>
        </div>
        <div className={styles.shopStatBox2}>
          <Flip top>
            <h1 className={styles.shopStatBoxDescription1}>8800</h1>
          </Flip>
          <Flip top>
            <p className={styles.shopStatBoxDescription2}>Dresses Stiched</p>
          </Flip>
        </div>
        <div className={styles.shopStatBox3}>
          <Bounce cascade>
            <Image className={styles.shopStatBoximage} style={{ width: '100%', objectFit: 'contain' }} src={stich8} alt='stich8'></Image>
          </Bounce>
          <Flip top>
            <p className={styles.shopStatBoxDescription2}>Body Measure</p>
          </Flip>
        </div>
        <div className={styles.shopStatBox4}>
          <Flip top>
            <h1 className={styles.shopStatBoxDescription1}> 7+</h1>

          </Flip>
          <Flip top>
            <p className={styles.shopStatBoxDescription2}>Expert Tailors </p>
          </Flip>
        </div>
      </div>
    </div>
  )
}
