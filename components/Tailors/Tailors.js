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
export default function Tailors({ data }) {
  return (
    <div>{/* our Tailors */}

      <div className={styles.ourTailorMainContainer}>
        <Fade top>
          <div className={styles.ourTailorHeading}><p>OUR TAILORS</p></div>
        </Fade>
        <Fade top>
          <div className={styles.ourTailorMeetTailor}><h1>Meet the Tailors</h1></div>
        </Fade>

        <div className={styles.ourTailorImgSection} >
          {
            data?.length > 0 ? <>
              {
                data?.map((item) => {
                  return (
                    <>
                      <div className={styles.ourTailorImgContainer}  >
                        <Bounce cascade>
                          <img className={styles.ourTailorImage} style={{ width: "100%", objectFit: 'contain' }} src={item?.img} alt='stich21' />
                        </Bounce>
                        <Fade top>
                          <h2 style={{ marginTop: "0px", }}>{item?.name}</h2>
                        </Fade>
                        <Fade top>
                          <p>{item?.workTitle}</p>
                        </Fade>
                        <FaFacebook className={styles.ourTailorSocialIcons} color='#454456' size={25} />
                        <FaInstagram className={styles.ourTailorSocialIcons} color='#454456' size={25} />
                        < FaPinterest className={styles.ourTailorSocialIcons} color='#454456' size={25} />
                        < FaTwitter className={styles.ourTailorSocialIcons} color='#454456' size={25} />
                      </div>
                    </>
                  )
                })
              }

            </>
              : null
          }


        </div>
      </div>
    </div>
  )
}
