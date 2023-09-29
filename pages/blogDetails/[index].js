import AboutBanner from "@/components/AboutBanner/AboutBanner";
import Header from "@/components/Header/Header";
import React,{useState,useEffect} from "react";
import styles from "../../styles/blogDetailPage.module.scss";
import BlokPageImg1 from "../../assets/news-4.jpg";
import BlogPost from "@/components/BlogPost/BlogPost";
import RecentPost from "@/components/RecentPost/RecentPost";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import "animate.css/animate.min.css";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import { getBlogById } from "@/Redux/slices/BlogSlice";
export default function blogDetailPage() {
  const { query } = useRouter();
  const id = query.index;
  const blog = useSelector((store) => store.blog.blog);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getBlogById({ setLoading, id }));
    }
  }, [id]);
  return (
    <div>
      <Header />
      <div className={styles.bannerSize}>
        <AboutBanner pageTitle={"Export of leather"} />
      </div>
      <div className={styles.blogDetailPageMainContainer}>
        <div className={styles.blogDetailPageLeftSection}>
          <BlogPost
            item={blog}
            showBtn={false}
          />
          <hr />
          <div className={styles.socialIconsContainer}>
            <FaFacebook
              className={styles.socialIcons}
              color="#454456"
              size={45}
            />
            <FaInstagram
              className={styles.socialIcons}
              color="#454456"
              size={45}
            />
            <FaPinterest
              className={styles.socialIcons}
              color="#454456"
              size={45}
            />
            <FaTwitter
              className={styles.socialIcons}
              color="#454456"
              size={45}
            />
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
  );
}
