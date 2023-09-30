import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/ourServices.module.scss";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import stich3 from "../assets/image-3.jpg";
import stich4 from "../assets/image-4.jpg";
import stich5 from "../assets/image-5.jpg";
import stich6 from "../assets/image-9.jpg";
import stich9 from "../assets/image-24.jpg";
import "animate.css/animate.min.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import axios from "axios";
import { endPoint } from "@/Redux/EndPoint";
export default function ourServices() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${endPoint}/api/getAllServicePost`)
      .then((response) => {
        console.log(response.data);
        setSchedules(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Header />
      <AboutBanner pageTitle={"Our Services"} />
      <div className={styles.servicesMainContainer}>
        <div className={styles.servicesCardContainer}>
          {schedules &&
            schedules?.map((item) => {
              return (
                <div className={styles.servicesCard}>
                  <div className={styles.cardImg}>
                    <img
                      style={{
                        width: "180px",
                        height: "180px",
                        clipPath: "circle()",
                      }}
                      src={item.img}
                      alt="stich3"
                    />
                  </div>
                  <div
                    className={styles.cardDetail}
                    style={{ color: "#454456" }}
                  >
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
        {/* our benefits */}
        <div>
          <div className={styles.ourBenefitContainer}>
            <div className={styles.ourBenefitTextContainer}>
              <Fade top>
                <p className={styles.ourBenefitChkOut}>OUR BENEFITS</p>
              </Fade>
              <Fade top>
                <h1 className={styles.chkOutHeading}>
                  Why You Should Choose us?
                </h1>
              </Fade>
              <Fade top>
                <p className={styles.ourBenefitChkOutDescription}>
                  {" "}
                  "Impeccable tailoring for your special day - wedding suits
                  with meticulous attention to detail. Stylish and comfortable
                  custom stitching for all occasions."
                </p>
              </Fade>
              <Fade top>
                <p className={styles.ourBenefitChkOutList}>
                  Urgent wedding dresses solutions.
                </p>
              </Fade>
              <Fade top>
                <p className={styles.ourBenefitChkOutList}>
                  Top quality services with reasonable price
                </p>
              </Fade>
              <Fade top>
                <p className={styles.ourBenefitChkOutList}>
                  {" "}
                  Reliable & experienced tailors
                </p>
              </Fade>
            </div>
            <div className={styles.ourBenefitImgContainer}>
              <Flip top>
                <Image
                  className={styles.ourBenefitImg}
                  style={{ width: "100%" }}
                  src={stich9}
                  alt="stich9"
                ></Image>
              </Flip>
            </div>
          </div>
        </div>

        {/* category boxes */}
        <div className={styles.cartegoryContainer}>
          <div className={styles.categoryImg}>
            <Fade top>
              <p className={styles.categoryText}>True Quality</p>
            </Fade>
          </div>
          <div className={styles.categoryImg1}>
            <Fade top>
              <p className={styles.categoryText}>Handcrafted Suits</p>
            </Fade>
          </div>
          <div className={styles.categoryImg2}>
            <Fade top>
              <p className={styles.categoryText}>Kevin in Media</p>
            </Fade>
          </div>
        </div>
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
