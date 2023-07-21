import React from 'react'
import Header from '@/components/Header/Header'
import styles from '../styles/blog.module.scss'
import AboutBanner from '@/components/AboutBanner/AboutBanner'
import BlogPost from '@/components/BlogPost/BlogPost'
import BlokPageImg1 from '../assets/news-4.jpg'
import BlokPageImg2 from '../assets/news-5.jpg'
import BlokPageImg3 from '../assets/news-7.jpg'
import Footer from '@/components/Footer/Footer'
import RecentPost from '@/components/RecentPost/RecentPost'
export default function blog() {
    return (
        <div>
            <Header />
            <AboutBanner pageTitle={"Blog"} />
            <div className={styles.blogPageMainContainer} style={{ paddingTop: '100px' }}>
                <div className={styles.blogPageLeftSection} >
                    <BlogPost blogPageTitle={"Export of artistic leather goods"}
                        blogPageDescription={"Good Look Tailors, a tailor stitch shop that specializes in creating exquisite leather goods. From custom-made jackets  and fine leather footwear, our artistic creations showcase impeccable craftsmanship and attention to detail. In this blog post, we will delve into our journey Explore how our  approach to stitching, customization options, and commitment to exceptional customer service make Good Look Tailors a trusted name in the market[...]"}
                        blogPageImg={BlokPageImg1}
                        showBtn={true} />
                    <BlogPost
                        blogPageTitle={"Tips to cut & stitching suit jacket"}
                        blogPageDescription={"Unlock the secrets of cutting and stitching a flawless suit jacket with expert tips from Good Look Tailors. Discover the art of precise measurements, fabric selection, and skilled stitching techniques. Perfect the collar and lapel construction, make necessary adjustments, and achieve a professional finish. Join us on a journey of tailored excellence as we guide you through the process of creating a sophisticated suit jacket[...]"}
                        blogPageImg={BlokPageImg2}
                        showBtn={true} />
                    
                    <BlogPost
                        blogPageTitle={"Trending accessories for tailors"}
                        blogPageDescription={" Discover statement belts, pocket squares, lapel pins, tie bars, cufflinks, suspenders, coordinating tie and pocket square sets, and sleek dress watches. At Good Look Tailors, we embrace these stylish additions to complement our meticulously tailored ensembles, ensuring our clients look and feel their best. Join us as we explore the trending accessories that will elevate your tailoring game to new heights."}
                        blogPageImg={BlokPageImg3}
                        showBtn={true} />
                    
                    <BlogPost
                        blogPageTitle={"Safe Drive is Only Achieved by Time Spent"}
                        blogPageDescription={"At Good Look Tailors, we firmly believe that safe driving is only achieved through the time spent behind the wheel, allowing drivers to develop crucial skills and instincts that contribute to a secure journey. Join us as we explore the importance of building driving skills and the invaluable role experience plays in ensuring road safety. At Good Look Tailors, we advocate for continuous learning and improvement as we recognize that every moment [...]"}
                        blogPageImg={BlokPageImg1}
                        showBtn={true} />
                </div>
                <div className={styles.blogPageRighttSection}>
                    <RecentPost />
                </div>
            </div>
            <div style={{ paddingTop: '100px' }}>
                <Footer />
            </div>
        </div>
    )
}
