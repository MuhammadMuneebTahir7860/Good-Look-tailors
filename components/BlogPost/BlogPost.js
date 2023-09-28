import React from 'react'
import styles from '../../styles/BlogPost.module.scss'
import Image from 'next/image'
import Link from 'next/link';
export default function BlogPost({ item, showBtn }) {
    return (
        <div>
            <div className={styles.blogPostMainContainer}>
                <img className={styles.blogPostImg} src={item?.img} alt='blogImg1' />
                <h1 className={styles.blogPostTitle}>{item?.title}</h1>
                <p className={styles.blogPostDescription}> {item?.description}</p>
                {/* <p className={styles.blogPostDescription}> {blogPageDescription2}</p> */}
                {showBtn &&
                    <Link className={styles.heading} href={`/blog/${item?._id}`}>  <div className={styles.blogPostReadMoreBtnContainer}><p className={styles.blogPostReadMoreBtn}>Read More</p></div></Link>
                }
            </div>
        </div>
    )
}
