import React from 'react';
import Image from 'next/image';
import styles from '../styles/about.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Testimonials from '../components/Testimonials/Testimonials';
import ShopAnalytics from '../components/ShopAnalytics/ShopAnalytics';
import Tailors from '../components/Tailors/Tailors';
import AboutBanner from '../components/AboutBanner/AboutBanner'
import AboutDetailImg from '../assets/image-28.jpg'
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { BsFillPlayFill } from 'react-icons/bs'
export default function about() {
    return (
        <div>
            <Header />
            <AboutBanner pageTitle={'About'}/>
            {/* about us */}
            <div className={styles.aboutDetailsContainer}>
                <div className={styles.aboutLeftSection}>
                    <Fade top>
                        <p className={styles.aboutHeading}>
                            ABOUT US
                        </p>
                    </Fade>
                    <Fade top>
                        <p className={styles.aboutTitle}>
                            We Only Stitch on Your
                            Demands
                        </p>
                    </Fade>
                    <Fade top>
                        <p className={styles.aboutDescription}>
                            Customized, high-quality tailoring
                            that brings your fashion vision to life.
                            Impeccable craftsmanship, personalized
                            service, and garments tailored to your
                            preferences and measurements.
                        </p>
                    </Fade>
                    <Fade top>
                        <p className={styles.aboutCall}>Call Anytime</p>
                    </Fade>
                    <Fade top>
                        <p className={styles.aboutNumber}>+92 3078602370</p>
                    </Fade>
                </div>
                <Flip top>
                    <div className={styles.aboutRightSection}>
                        <div className={styles.aboutCustomLine} >

                        </div>
                        <Image className={styles.aboutDetailImg} src={AboutDetailImg} alt='AboutDetailImg'></Image>

                    </div>
                </Flip>
            </div>

            <Testimonials />
            <ShopAnalytics />

            {/* ABOUT VIDEO */}
            <div className={styles.aboutVideoContainer}>

                <div className={styles.aboutVideoIconContainer}>
                    <BsFillPlayFill color='white' size={45} />

                </div>
                <p className={styles.aboutVideoText}>
                    You Can Depend on Our
                    Tailors to Get a Quality Dresses
                </p>
            </div>
            <Tailors />
            
            <div className={styles.aboutFooter}> <Footer/></div>

        </div>
    )
}
