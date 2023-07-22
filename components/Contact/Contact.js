import React from 'react'
import styles from '../../styles/Contact.module.scss'
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import { TbPhoneCalling } from 'react-icons/tb'
import Link from 'next/link';
export default function Contact() {
  return (
    <div>
        
      {/* Contact us  */}

      <div className={styles.contactUsContainer}>
        <div className={styles.contactUsLeftSection}>
          <Fade top>
            <div className={styles.contactUsIcon}>
              < TbPhoneCalling back size={45} />
            </div>
          </Fade>
          <div className={styles.needTailorContainer}>
            <Fade top>
              <p className={styles.needTailorHeading}>Need Tailors? Call us</p>
            </Fade>
            <Fade top>
              <p className={styles.contactUsNumber}>+92 3078602370</p>
            </Fade>
          </div>
        </div>
        <div className={styles.contactUsRightSection}>
          <div className={styles.contactUsDescription}>
            <Fade top>
              At Good Look, we're committed to ensuring all
              of our customers have a great experience
            </Fade>
          </div>
          <Link className={styles.heading} href="/contactPage">
          <div className={styles.contactUsDiscoverMore}>
            <Fade bottom>
              <span>DISCOVER MORE</span>
            </Fade>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
