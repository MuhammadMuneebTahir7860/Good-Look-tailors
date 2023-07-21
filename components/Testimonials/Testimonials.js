import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Testimonials.module.scss'
import stich14 from "../../assets/image-3.png";
import stich15 from "../../assets/image-4.png";
import stich16 from "../../assets/image-5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    
      };
  return (
    <div>
        {/* Testimonials */}
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsTextContainer}><h1>What They're Saying</h1></div>
        <div className={styles.testimonialsSliderContainer}>
          <Slider style={{ width: '70%' }}  {...settings}>
            <div>
              <div>
                <Image className={styles.testimonialsImg} style={{ width: "100%", objectFit: 'contain' }} src={stich14} alt='stich14'></Image>
              </div>
              <div className={styles.testimonialsFeedBack}>
                <h2> What impressed me the most was the level of craftsmanship and attention to
                  detail in their work. The alterations on my dress were
                  flawless, and it fit me like a glove. </h2>
                <p className={styles.testimonialsFeedBackUser}>Christine Eve</p>
              </div>
            </div>
            <div>
              <div>
                <Image className={styles.testimonialsImg} style={{ width: "100%", objectFit: 'contain' }} src={stich15} alt='stich15'></Image>
              </div>
              <div className={styles.testimonialsFeedBack}>
                <h2>Additionally, the turnaround time was quick and efficient. I needed my dress for a special event,
                  and they delivered it well before the deadline. </h2>
                <p className={styles.testimonialsFeedBackUser}>Rose Evie</p>
              </div>
            </div>
            <div>
              <div>
                <Image className={styles.testimonialsImg} style={{ width: "100%", objectFit: 'contain' }} src={stich16} alt='stich16'></Image>
              </div>
              <div className={styles.testimonialsFeedBack}>
                <h2>I also found their pricing to be fair and reasonable, considering the high-quality work they provided.
                  Stitch & Style truly offers excellent value for money.
                </h2>
                <p className={styles.testimonialsFeedBackUser}>Christine Taylor</p>
              </div>
            </div>

          </Slider>

        </div>
      </div>
    </div>
  )
}
