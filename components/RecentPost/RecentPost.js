import React from 'react'
import Image from 'next/image';
import styles from '../../styles/RecentPost.module.scss'
import stich27 from "../../assets/news-4.jpg";
import stich28 from "../../assets/news-5.jpg";

export default function RecentPost() {
    return (
        <div>
            <div className={styles.blogPageRecentPost}>
                <p className={styles.recentFooterPost} style={{ fontSize: "22px" }}>Recent Posts</p>

                <div className={styles.footerRecentPost}>
                    <Image className={styles.footerImg} style={{ width: "100%", objectFit: 'contain' }} src={stich27} alt='stich27'></Image>
                    <p style={{ fontSize: "16px" }}>Export of artistic leather ...</p>
                </div>
                <div className={styles.footerRecentPost}>
                    <Image className={styles.footerImg} style={{ width: "100%", objectFit: 'contain' }} src={stich28} alt='stich28'></Image>
                    <p style={{ fontSize: "16px" }}>Tips to cut & stitching suit .</p>

                </div>
                <div className={styles.footerRecentPost}>
                    <Image className={styles.footerImg} style={{ width: "100%", objectFit: 'contain' }} src={stich27} alt='stich27'></Image>
                    <p style={{ fontSize: "16px" }}>Trending designs for tailors .</p>
                </div>
                <div className={styles.footerRecentPost}>
                    <Image className={styles.footerImg} style={{ width: "100%", objectFit: 'contain' }} src={stich28} alt='stich28'></Image>
                    <p style={{ fontSize: "16px" }}>Safe Drive is Only Achieved </p>

                </div>
            </div>
        </div>
    )
}
