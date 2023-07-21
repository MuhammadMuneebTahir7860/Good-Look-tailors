import React from 'react'
import styles from '@/styles/trendingForTailors.module.scss'
import AboutBanner from '@/components/AboutBanner/AboutBanner'
import Header from '@/components/Header/Header'
import BlogPost from '@/components/BlogPost/BlogPost'
import RecentPost from '@/components/RecentPost/RecentPost'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, } from 'react-icons/fa';
import "animate.css/animate.min.css";
import Footer from '@/components/Footer/Footer'
import BlokPageImg3 from '../assets/news-7.jpg'
export default function trendingForTailor() {
    return (
        <div>
            <Header />
            <div className={styles.bannerSize}>
                <AboutBanner pageTitle={"Trending for tailors"} />
            </div>
            <div className={styles.blogDetailPageMainContainer}>
                <div className={styles.blogDetailPageLeftSection}>
                    <BlogPost blogPageTitle={"Trending accessories for tailors"}
                        blogPageDescription={"In a tailor stitch shop, staying updated on trending accessories is crucial. Lapel pins have become a popular choice, adding personality and elegance to suit jackets. They allow clients to showcase their individual style effortlessly. Pocket squares are timeless accessories that instantly elevate the look of a suit. With a variety of colors, patterns, and fabrics available, they provide options to suit different preferences and add a sophisticated touch. Tie bars and clips offer a practical and stylish addition, keeping ties in place while adding a polished finish."}
                        blogPageDescription2={"Cufflinks and collar stays are essential accessories for formal occasions, providing a refined and distinguished look. Incorporating these trending accessories into their offerings enhances the overall tailoring experience, allowing clients to express their personal style and elevate their outfit seamlessly. By staying informed about these popular accessories, tailor stitch shops can provide their clients with a comprehensive selection that adds that extra touch of style and sophistication to their tailored garments."}
                        blogPageImg={BlokPageImg3}
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
                <Footer />
            </div>
        </div>
    )
}
