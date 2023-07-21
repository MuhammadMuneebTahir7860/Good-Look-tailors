import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Tailor.module.scss'
import stich21 from "../../assets/image-11.jpg";
import stich22 from "../../assets/image-12.jpg";
import stich23 from "../../assets/image-13.jpg";
import "animate.css/animate.min.css";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
export default function Tailors() {
  return (
    <div>{/* our Tailors */}

    <div className={styles.ourTailorMainContainer}>
      <Fade top>
        <div className={styles.ourTailorHeading}><p>OUR TAILORS</p></div>
      </Fade>
      <Fade top>
        <div className={styles.ourTailorMeetTailor}><h1>Meet the Tailors</h1></div>
      </Fade>
      <div className={styles.ourTailorImgSection}>
        <div className={styles.ourTailorImgContainer} >
          <Bounce cascade>
            <Image className={styles.ourTailorImage} style={{ width: "100%", objectFit: 'contain' }} src={stich21} alt='stich21'></Image>
          </Bounce>
          <Fade top>
            <h2 style={{ marginTop: "0px", }}>Robert Smith</h2>
          </Fade>
          <Fade top>
            <p>Tailor</p>
          </Fade>
          <FaFacebook className={styles.ourTailorSocialIcons} color='#454456' size={25} />
          <FaInstagram className={styles.ourTailorSocialIcons} color='#454456' size={25} />
          < FaPinterest className={styles.ourTailorSocialIcons} color='#454456' size={25} />
          < FaTwitter className={styles.ourTailorSocialIcons} color='#454456' size={25} />
        </div>
        <div className={styles.ourTailorImgContainer} >
          <Bounce cascade>
            <Image className={styles.ourTailorImage} style={{ width: "100%", objectFit: 'contain' }} src={stich22} alt='stich22'></Image>
          </Bounce>
          <Fade top>
            <h2 style={{ marginTop: "0px", }}>Kevin Martin</h2>
          </Fade>
          <Fade top>
            <p>Tailor</p>
          </Fade>
          <FaFacebook className={styles.ourTailorSocialIcons} color='#454456' size={25} />
          <FaInstagram className={styles.ourTailorSocialIcons} color='#454456' size={25} />
          < FaPinterest className={styles.ourTailorSocialIcons} color='#454456' size={25} />
          < FaTwitter className={styles.ourTailorSocialIcons} color='#454456' size={25} />
        </div >
        <div className={styles.ourTailorImgContainer} >
          <Bounce cascade>
            <Image className={styles.ourTailorImage} style={{ width: "100%", objectFit: 'contain' }} src={stich23} alt='stich23'></Image>
          </Bounce>
          <Fade top>
            <h2 style={{ marginTop: "0px", }}>Mike Hardson</h2>
          </Fade>
          <Fade top>
            <p>Tailor</p>
          </Fade>
          <FaFacebook className={styles.ourTailorSocialIcons} color='#454456' size={25} />
          <FaInstagram className={styles.ourTailorSocialIcons} color='#454456' size={25} />
          < FaPinterest className={styles.ourTailorSocialIcons} color='#454456' size={25} />
          < FaTwitter className={styles.ourTailorSocialIcons} color='#454456' size={25} />
        </div>
      </div>
    </div>
    </div>
  )
}
