import React from 'react'
import styles from '@/styles/tipsToCut.module.scss'
import AboutBanner from '@/components/AboutBanner/AboutBanner'
import Header from '@/components/Header/Header'
import BlogPost from '@/components/BlogPost/BlogPost'
import RecentPost from '@/components/RecentPost/RecentPost'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, } from 'react-icons/fa';
import "animate.css/animate.min.css";
import Footer from '@/components/Footer/Footer'
import BlokPageImg2 from '../assets/news-5.jpg'
export default function tipsToCut() {
  return (
    <div>
         <Header />
            <div className={styles.bannerSize}>
                <AboutBanner pageTitle={"Tips to cut & stitching"} />
            </div>
            <div className={styles.blogDetailPageMainContainer}>
                <div className={styles.blogDetailPageLeftSection}>
                    <BlogPost blogPageTitle={"Tips to cut & stitching suit jacket"}
                        blogPageDescription={" At our tailor stitch shop, we specialize in expert suit jacket alterations for a perfect fit. Our process begins with precise measurements of the client's shoulders, chest, waist, and arm length. When cutting the fabric, we ensure accurate and symmetrical panels, paying attention to grain and pattern alignment. We employ both hand stitching and machine stitching techniques, reinforcing seams and using appropriate stitches for different parts. Attention to detail is paramount as we attach buttons, create buttonholes, and secure pockets with precision, ensuring a seamless integration with the jackets design."} 
                        blogPageDescription2={" With our expertise, we transform standard suit jackets into tailored masterpieces. Our meticulous craftsmanship guarantees a flawless fit and elegant appearance."}
                        blogPageImg={BlokPageImg2}
                        showBtn={false}
                    />
                    <hr />
                    <div className={styles.socialIconsContainer}><FaFacebook className={styles.socialIcons} color='#454456' size={45} />
                        <FaInstagram className={styles.socialIcons} color='#454456' size={45} />
                        < FaPinterest className={styles.socialIcons} color='#454456' size={45} />
                        < FaTwitter className={styles.socialIcons} color='#454456' size={45} />
                    </div>
                     </div>
                <div className={styles.blogDetailPageRighttSection}>
                    <RecentPost />
                </div>
                
            </div>
            <div className={styles.footer}>
            <Footer/>
            </div>
    </div>
  )
}
