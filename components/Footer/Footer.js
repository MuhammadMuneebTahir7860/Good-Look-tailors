import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Footer.module.scss';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, } from 'react-icons/fa';
import stich27 from "../../assets/news-4.jpg";
import stich28 from "../../assets/news-5.jpg";
export default function Footer() {
  return (
    <div>
{/* Footer */}

<div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <p style={{ fontSize: "22px" }}>About Us</p>
          <p style={{ fontSize: "28px" }}>"Experience the art of precise
            tailoring and personalized style at our tailor shop."
          </p>
          <p style={{ fontSize: "24px" }}>+92 3078602370</p>
          <FaFacebook className={styles.footerIcons} size={25} />
          <FaInstagram className={styles.footerIcons} size={25} />
          < FaPinterest className={styles.footerIcons} size={25} />
          < FaTwitter className={styles.footerIcons} size={25} />
        </div>
        <div className={styles.footerSection}>
          <p style={{ fontSize: "22px" }}>Usefull Link</p>
          <div className={styles.footerLinks}><p className={styles.footerLink}>About Us</p><p className={styles.footerLink} >Our FAQ</p></div>
          <div className={styles.footerLinks}><p className={styles.footerLink}>Our Gallery</p><p className={styles.footerLink}>Our Services</p></div>
          <div className={styles.footerLinks}><p className={styles.footerLink}>Testimonials</p><p className={styles.footerLink}>Custom Work</p></div>
          <div className={styles.footerLinks}><p className={styles.footerLink}>Outerwear</p><p className={styles.footerLink}>Suits & Shirts</p></div>
          <div className={styles.footerLinks}><p className={styles.footerLink}>Wedding Dresses</p><p className={styles.footerLink}>Contact</p></div>
        </div>
        <div className={styles.footerSection}>
          <p className={styles.recentFooterPost} style={{ fontSize: "22px" }}>Recent Posts</p>

          <div className={styles.footerRecentPost}>
            <Image className={styles.footerImg} style={{ width: "100%", objectFit: 'contain' }} src={stich27} alt='stich27'></Image>
            <p style={{ fontSize: "16px" }}>Export of artistic leather .</p>
          </div>
          <div className={styles.footerRecentPost}>
            <Image className={styles.footerImg} style={{ width: "100%", objectFit: 'contain' }} src={stich28} alt='stich28'></Image>
            <p style={{ fontSize: "16px" }}>Tips to cut & stitching suit</p>

          </div>
        </div>

      </div>
      <div className={styles.customLine}></div>
      <div className={styles.shopDetaiContainer}>
        <div className={styles.detailContainer1}>
          <p>Visit our shop</p>
          <h3>88 broklyn street, New York</h3>
        </div>
        <div className={styles.detailContainer2}>
          <p>Send us email</p>
          <h3>info@goodlook.com</h3>
        </div>
        <div className={styles.detailContainer3}>
          <p>Working Hours</p>
          <h3>Mon to Sat: 9:00 am to 5:00 pm</h3>
        </div>
      </div>
      {/* Copyright */}
      <div className={styles.copyWrite}>
        <p>© Copyright 2023 by GoodLook.com</p>
      </div>
    </div>
  )
}
