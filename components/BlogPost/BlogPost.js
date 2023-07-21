import React from 'react'
import styles from '../../styles/BlogPost.module.scss'
import Image from 'next/image'
export default function BlogPost({ blogPageTitle, blogPageDescription,blogPageDescription2, blogPageImg, showBtn }) {
    return (
        <div>
            <div className={styles.blogPostMainContainer}>
                <Image className={styles.blogPostImg} src={blogPageImg} alt='blogImg1'></Image>
                <h1 className={styles.blogPostTitle}>{blogPageTitle}</h1>
                <p className={styles.blogPostDescription}> {blogPageDescription}</p>
                <p className={styles.blogPostDescription}> {blogPageDescription2}</p>
                {showBtn &&
                    <div className={styles.blogPostReadMoreBtnContainer}><p className={styles.blogPostReadMoreBtn}>Read More</p></div>
                }
            </div>
        </div>
    )
}
