import React from 'react'
import styles from '@/styles/safeDrive.module.scss'
import AboutBanner from '@/components/AboutBanner/AboutBanner'
import Header from '@/components/Header/Header'
import BlogPost from '@/components/BlogPost/BlogPost'
import RecentPost from '@/components/RecentPost/RecentPost'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, } from 'react-icons/fa';
import "animate.css/animate.min.css";
import Footer from '@/components/Footer/Footer'
import BlokPageImg4 from '@/assets/news-4.jpg'
export default function safeDrive() {
  return (
    <div>
         <Header />
            <div className={styles.bannerSize}>
                <AboutBanner pageTitle={"Safe Drive is Achieved"} />
            </div>
            <div className={styles.blogDetailPageMainContainer}>
                <div className={styles.blogDetailPageLeftSection}>
                    <BlogPost blogPageTitle={"Safe Drive is Only Achieved by Time Spent"}
                        blogPageDescription={"In a tailor stitch shop, achieving quality results is a process that requires time and attention to detail. Safe drive is only achieved by time spent. Similarly, in tailoring, a meticulous approach is necessary to create finely crafted garments. Tailors invest ample time in measuring, cutting, and stitching to ensure precision and accuracy. Each step is carried out with care, from taking precise measurements to carefully aligning patterns and selecting the appropriate stitching techniques. This dedication to quality and the time spent on each garment guarantees that customers receive a tailored piece that fits perfectly and reflects the skill and expertise of the tailor."}
                        blogPageDescription2={"At the tailor stitch shop, the importance of time spent in achieving exceptional results cannot be overstated. Every garment undergoes a thorough process to ensure the best fit and craftsmanship. Tailors meticulously measure and evaluate the client's body proportions, taking into account individual nuances. They spend time carefully cutting the fabric, paying attention to pattern alignment and fabric integrity. The stitching process is equally meticulous, with precise stitching techniques employed to reinforce seams and create flawless finishes. By dedicating adequate time to each garment, the tailor stitch shop ensures that customers receive a high-quality, tailored piece that not only fits well but also stands as a testament to the attention to detail and craftsmanship of the tailor."}
                        blogPageImg={BlokPageImg4}
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
