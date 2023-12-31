import React from 'react'
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import styles from '../../styles/AboutBanner.module.scss'
import Link from 'next/link';
export default function AboutBanner({ pageTitle }) {
  return (
    <div>
      <div className={styles.aboutMainImage}>
        <Fade top><h3><Link  className={styles.heading} href="/"> Home </Link>/ {pageTitle}</h3></Fade>
        <Fade top>
          <h1 className={styles.aboutMainText}>{pageTitle}</h1>
        </Fade>
      </div>
    </div>
  )
}
