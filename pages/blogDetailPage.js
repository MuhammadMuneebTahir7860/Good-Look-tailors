import AboutBanner from '@/components/AboutBanner/AboutBanner'
import Header from '@/components/Header/Header'
import React from 'react'
import styles from '../styles/blogDetailPage.module.scss'
import BlokPageImg1 from '../assets/news-4.jpg'
import BlogPost from '@/components/BlogPost/BlogPost'
import RecentPost from '@/components/RecentPost/RecentPost'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, } from 'react-icons/fa';
import "animate.css/animate.min.css";
import Footer from '@/components/Footer/Footer'
export default function blogDetailPage() {
    return (
        <div>
            <Header />
            <div className={styles.bannerSize}>
                <AboutBanner pageTitle={"Export of leather"} />
            </div>
            <div className={styles.blogDetailPageMainContainer}>
                <div className={styles.blogDetailPageLeftSection}>
                    <BlogPost blogPageTitle={"Export of artistic leather goods"}
                        blogPageDescription="At Good Look Tailors, our expertise lies in the art of stitching . 
                    Our team of skilled craftsmen possesses a deep understanding of the intricate techniques involved in working with leather. They blend traditional methods with modern innovations to bring our artistic leather goods to life. Every stitch and detail is executed with meticulous precision, ensuring the highest standards of quality. We carefully select premium-quality leather, undergo rigorous quality checks, and prioritize exceptional craftsmanship to deliver outstanding products.
                    
                    Recognizing the importance of individuality, we offer customization options for our artistic leather goods. From choosing the type of leather to selecting colors, finishes, and embellishments, we empower our customers to create personalized pieces that reflect their unique style and preferences."
                        blogPageDescription2={"At Good Look Tailors, exceptional customer service is at the heart of our operations. We understand the importance of clear communication and prompt responses, especially when dealing with customers from different cultures and countries. Our multilingual support ensures that customers feel valued throughout their purchasing journey. We also provide efficient after-sales service to address any concerns or queries that may arise, ensuring a positive and satisfying experience.In conclusion, Good Look Tailors has successfully expanded its reach to the international market by exporting our artistic leather goods. Our dedication to craftsmanship, attention to detail, customization options, and commitment to exceptional customer service have earned us a reputation as a trusted name in the global fashion industry. With each exported item, we aim to showcase the artistry and beauty of our leather creations, leaving a lasting impression on customers worldwide."}
                        blogPageImg={BlokPageImg1}
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
