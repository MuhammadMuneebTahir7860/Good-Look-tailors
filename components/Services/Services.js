import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Services.module.scss'
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import stich3 from "../../assets/image-3.jpg";
import stich4 from "../../assets/image-4.jpg";
import stich5 from "../../assets/image-5.jpg";
import stich6 from "../../assets/image-9.png";
import useWindowDimensions from '@/customHook/UseWindowDimensions';
export default function Services() {
    const windowDimensions = useWindowDimensions();
    var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: windowDimensions.width > 1000 ? 3 : 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div>
        {/* services we offer */}

      <div className={styles.servicesWeOffer}>
        <Fade top>
          <div className={styles.servicesWeOfferCheckOut}>CHECKOUT OUR SERVICES</div>
        </Fade>
        <Fade top>
          <div className={styles.servicesWeOfferServicesThatOffer}>Services We Offer</div>
        </Fade>
        <div className={styles.servicesWeOfferSlider}>
          <Slider {...settings2}>
            <div >
              <div className={styles.sliderImgContainer}>
                <div className={styles.sliderImgMainContainer}>

                  <div className={styles.sliderImg1}>
                    <Image style={{ width: '100%', objectFit: 'contain', clipPath: "circle()" }} src={stich3} alt='stich3'></Image>
                  </div>

                  <div style={{ color: '#454456' }}>
                    <h1>Suit & Shirt</h1>
                    <p>Experience impeccable style with our tailored suits.
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div>
              <div className={styles.sliderImgContainer}>
                <div className={styles.sliderImgMainContainer}>

                  <div className={styles.sliderImg1}>
                    <Image style={{ width: '100%', objectFit: 'contain', clipPath: "circle()" }} src={stich4} alt='stich3'></Image>
                  </div>
                  <div style={{ color: '#454456' }}>
                    <h1>Wedding Dresses</h1>
                    <p>Celebrate love in style with our handcrafted
                      wedding dresses,
                      .</p>
                  </div>

                </div>
              </div>
            </div>
            <div>
              <div className={styles.sliderImgContainer}>
                <div className={styles.sliderImgMainContainer}>

                  <div className={styles.sliderImg1}>
                    <Image style={{ width: '100%', objectFit: 'contain', clipPath: "circle()" }} src={stich5} alt='stich3'></Image>
                  </div>
                  <div style={{ color: '#454456' }}>
                    <h1>Stylish Clothing</h1>
                    <p>Our
                      skilled tailors transform fabric into stunning
                      garments.</p>
                  </div>

                </div>
              </div>
            </div>
            <div>
              <div className={styles.sliderImgContainer}>
                <div className={styles.sliderImgMainContainer}>

                  <div className={styles.sliderImg1}>
                    <Image style={{ width: '100%', objectFit: 'contain', clipPath: "circle()" }} src={stich6} alt='stich3'></Image>
                  </div>
                  <div style={{ color: '#454456' }}>
                    <h1>Custom Work</h1>
                    <p> Your unique vision becomes a reality
                      through expert tailoring..</p>
                  </div>

                </div>
              </div>
            </div>


          </Slider>

        </div>
      </div>
    </div>
  )
}
