import Head from 'next/head'
import Image from 'next/image'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Testimonials from '../Testimonials/Testimonials'
import ShopAnalytics from '../ShopAnalytics/ShopAnalytics'
import Tailors from '../Tailors/Tailors'
import Services from '../Services/Services'
import Contact from '../../components/Contact/Contact'
import styles from '../../styles/Home-page.module.scss'
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { TbPhoneCalling } from 'react-icons/tb'
import stich1 from "../../assets/image-2-1.jpg";
import stich2 from "../../assets/image-1-1.jpg";
import stich9 from "../../assets/image-8.jpg";
import stich10 from "../../assets../../assets/sewing-machine.png";
import stich11 from "../../assets/tailor.png";
import stich12 from "../../assets/measuring.png";
import stich13 from "../../assets/thread.png";
import stich17 from "../../assets/image-9.jpg";
import stich18 from "../../assets/image-25.jpg";
import stich19 from "../../assets/image-10.jpg";
import stich20 from "../../assets/image-26.jpg";
import stich24 from "../../assets/news-1-292x229.jpg";
import stich25 from "../../assets/news-2-292x229.jpg";
import stich26 from "../../assets/news-3-292x229.jpg";
import Link from 'next/link';


export default function Home({ tailors, portfolio }) {

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

      <Header />
      {/* slider */}
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          <div className={styles.backgroundImgContainer1}>
            <Fade top>
              <p className={styles.intro}>Welcome to Good Look Tailors</p>
            </Fade>
            <Fade top>
              <h1 className={styles.text}>Our Personal Quality Tailors</h1>
            </Fade>
            <Fade bottom>
              <Link className={styles.heading} href="/ourServices">
                <div className={styles.discoverMore}><span>DISCOVER MORE</span></div>
              </Link>
            </Fade>
          </div>

          <div className={styles.backgroundImgContainer2}>
            <Fade top>
              <p className={styles.intro2}>Welcome to Good Look Tailors</p>
            </Fade>
            <Fade top>
              <h1 className={styles.text2}>Create your own personal style</h1>
            </Fade>
            <Fade bottom>
              <Link className={styles.heading} href="/ourServices">
                <div className={styles.discoverMore2}><span>DISCOVER MORE</span></div>
              </Link>
            </Fade>
          </div>

        </Slider>
      </div>


      {/* Checkout services */}
      <div className={styles.checkOutServicesContainer}>
        <div className={styles.picturesRow}>

          <div style={{ display: 'flex', width: '100%' }}>
            <Flip top>
              <div className={styles.checkOutPicture1}><Image style={{ width: '100%', objectFit: 'contain' }} src={stich1} alt='stich1'></Image></div>
            </Flip>
            <Flip bottom>
              <div className={styles.checkOutPicture2}><Image style={{ width: '100%', objectFit: 'contain' }} src={stich2} alt='stich2'></Image></div>
            </Flip>
          </div>
        </div>
        <div className={styles.checkOutText}>
          <Fade top>
            <p className={styles.checkOutMainHeading}>CHECKOUT OUR SERVICES</p>
          </Fade>
          <Fade top>
            <h1 className={styles.checkOutHeading}>Introducing the Quality Tailors in Town</h1>
          </Fade>
          <Fade top>
            <p className={styles.checkOutDescription}>We take pride in providing high-quality tailoring
              services to enhance your personal style. As you reach
              the checkout counter,
              we want to ensure a seamless and satisfying experience
              for you

            </p>
          </Fade>
          <Fade top>
            <ul className={styles.checkOutDescriptionPoints}>
              <li>Provides  tailoring services</li>
              <li> Offers alterations and repairs</li>
              <li>Suit Tailoring</li>
              <li>Measuring and Fitting Services:</li>
            </ul>
          </Fade>

        </div>
      </div>

      <Services />
      <ShopAnalytics />

      {/* wedding or casual suit dresses  */}

      <div className={styles.wedCasualSuitContainer}>
        <div className={styles.wedCasualSuitImgContainer}>
          <Flip top>
            <Image className={styles.wedCasualImg} style={{ width: "100%", }} src={stich9} alt='stich9'></Image>
          </Flip>
        </div>
        <div className={styles.wedCasualSuitTextContainer}>
          <Fade top>
            <p className={styles.wedCasualSuitChkOut}>CHECKOUT OUR SERVICES</p>
          </Fade>
          <Fade top>
            <h1 className={styles.chkOutHeading}>Wedding or Causual
              Suits Services?
            </h1>
          </Fade>
          <Fade top>
            <p className={styles.wedCasualSuitChkOutDescription}> "Impeccable tailoring for your special day
              - wedding suits with meticulous attention to detail.
              Stylish and comfortable custom stitching for all occasions."
            </p>
          </Fade>
          <Fade bottom>
            <Link className={styles.heading} href="/ourServices">
              <div className={styles.wedCasualDiscoverMore}>
                <span>DISCOVER MORE</span>
              </div>
            </Link>
          </Fade>

        </div>

      </div>

      {/* categories */}
      <div className={styles.categoryContainer}>
        <div className={styles.categoryBox1}>
          <Fade top>
            <Image className={styles.firstCategoryImg} style={{ width: "100%", objectFit: 'contain' }} src={stich10} alt='stich10'></Image>
          </Fade>
          <Fade top>
            <h2 className={styles.qualityFabricHeading}>Quality Fabric</h2>
          </Fade>
          <Fade top>
            <p className={styles.qualityFabricDescription}>With a focus on quality, our stitch tailor shop sources
              premium fabrics,
              meticulously chosen for their superior craftsmanship.</p>
          </Fade>
        </div>
        <div className={styles.categoryBox2}>
          <Fade top>
            <Image className={styles.secondCategoryImg} style={{ width: "100%", objectFit: 'contain' }} src={stich11} alt='stich11'></Image>
          </Fade>
          <Fade top>
            <h2 className={styles.finestWorkHeading}>Finest Work</h2>
          </Fade>
          <Fade top>
            <p className={styles.finestWorkDescription}>In our stitch tailor shop, we use only the very best fabrics,
              chosen for their outstanding quality and beautiful
              appearance.</p>
          </Fade>
        </div>
        <div className={styles.categoryBox3}>
          <Fade top>
            <Image className={styles.thirdCategoryImg} style={{ width: "100%", objectFit: 'contain' }} src={stich12} alt='stich12'></Image>
          </Fade>
          <Fade top>
            <h2 className={styles.uniqueDesignHeading}>Unique Design</h2>
          </Fade>
          <Fade top>
            <p className={styles.uniqueDesignDescription}>With a passion for innovation, our stitch tailor shop
              offers a diverse range of bespoke designs that push
              the boundaries of traditional.</p>
          </Fade>
        </div>
        <div className={styles.categoryBox4}>
          <Fade top>
            <Image className={styles.fourthCategoryImg} style={{ width: "100%", objectFit: 'contain' }} src={stich13} alt='stich13'></Image>
          </Fade>
          <Fade top>
            <h2 className={styles.timelyDelieverHeading}>Timely Deliever</h2>
          </Fade>
          <Fade top>
            <p className={styles.timelyDescription}>With a commitment to punctuality, our stitch tailor
              shop ensures prompt delivery of your custom-made
              garments.</p>
          </Fade>
        </div>
      </div>
      <div id='testimonialsSection'>
        <Testimonials />
      </div>
      {/* Gallery */}
      <div className={styles.galleryImageContainer}>

        {
          portfolio?.length > 0 ? <>

            {
              portfolio?.map((item) => {
                return (
                  <>
                    < >

                      <img className={styles.galleryImage} src={item} alt='stich17' />
                    </>
                  </>
                )
              })
            }
          </>
            :
            null
        }

      </div>


      {/* <div className={styles.galleryImageContainer}>
        <Image className={styles.galleryImage} style={{ width: "100%" }} src={stich19} alt='stich19'></Image>
        <Image className={styles.galleryImage} style={{ width: "100%" }} src={stich20} alt='stich20'></Image>
      </div> */}

      <Tailors data={tailors} />

      <Contact />
      {/* latest Blogs */}

      <div className={styles.latestBlogsContainer}>

        <div className={styles.latestBlogsHeading}>
          <Fade top>
            <p >
              LATEST BLOG POSTS
            </p>
          </Fade>
        </div>
        <div className={styles.latestBlogsTitle}>
          <Fade top>
            <p >
              Latest News &
              Articles from the
              Blog Posts
            </p>
          </Fade>
        </div>
        <div className={styles.latestBlogsCardContainer}>
          <Fade top>
            <div className={styles.latestBlogsCard}>
              <Image className={styles.blogImage} style={{ width: "100%", objectFit: 'contain' }} src={stich24} alt='stich24'></Image>
              <div>
                <h2 className={styles.latestBlogsCardTitle}>
                  How to take care of Wedding Dresses
                </h2>
                <p className={styles.latestBlogsCardDescription}>
                  Its help you to ensure
                  it remains in pristine condition for years
                  to come, we provide expert guidance on how
                  to care for your precious wedding gown.
                </p>
                <Link className={styles.heading} href="/blogDetailPage">
                  <p className={styles.latestBlogsCardReadMoreBtn}>
                    Read More
                  </p>
                </Link>
              </div>


            </div>
          </Fade>
          <Fade top>
            <div className={styles.latestBlogsCard}>
              <Image className={styles.blogImage} style={{ width: "100%", objectFit: 'contain' }} src={stich25} alt='stich25'></Image>
              <div>
                <h2 className={styles.latestBlogsCardTitle}>
                  How to take care of Leather Jacket
                </h2>
                <p className={styles.latestBlogsCardDescription}>
                  To ensure your leather jacket remains in
                  pristine condition for years to come, we
                  offer valuable tips on how to properly
                  care for this exquisite garment.
                </p>
                <Link className={styles.heading} href="/blogDetailPage">
                  <p className={styles.latestBlogsCardReadMoreBtn}>
                    Read More
                  </p>
                </Link>
              </div>


            </div>
          </Fade>

          <Fade top>
            <div className={styles.latestBlogsCard}>
              <Image className={styles.blogImage} style={{ width: "100%", objectFit: 'contain' }} src={stich26} alt='stich26'></Image>
              <div>
                <h2 className={styles.latestBlogsCardTitle}>
                  Safe Driving is Only Achieved by Time Spent
                </h2>
                <p className={styles.latestBlogsCardDescription}>
                  With a passion for impeccable craftsmanship
                  and attention to detail, we specialize in
                  creating garments that fit you like a second
                  skin.
                </p>
                <Link className={styles.heading} href="/blogDetailPage">
                  <p className={styles.latestBlogsCardReadMoreBtn}>
                    Read More
                  </p>
                </Link>
              </div>


            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </div >
  )
}