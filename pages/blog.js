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
import { useEffect } from 'react'
import { getAllBlogs } from '@/Redux/slices/BlogSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function blog() {
    const allBlogs = useSelector((store) => store.blog.allBlogs);
    console.log(allBlogs, 'allBlogs');
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllBlogs(setLoading));
    }, []);

    return (
        <div>
            <Header />
            <AboutBanner pageTitle={"Blog"} />
            <div className={styles.blogPageMainContainer} style={{ paddingTop: '100px' }}>
                <div className={styles.blogPageLeftSection} >
                    {
                        allBlogs?.length > 0 ? <>
                            {
                                allBlogs?.map((item) => {
                                    return (
                                        <>
                                            <BlogPost item={item}
                                                showBtn={true} />
                                        </>
                                    )
                                })
                            }
                        </>
                            : null
                    }


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
