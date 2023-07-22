import React from 'react'
import styles from '../../styles/Header.module.scss';
import logo from '../../assets/revyfy-logo-pink.png';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import Link from 'next/link';
export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className={styles.fixedHeaderContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.logo} >
                    <Image className={styles.logo} src={logo} alt="logo" />
                </div>

                <div onClick={toggleDrawer} className={styles.barIconContainer}>
                    <FaBars size={25} />
                </div>

            </div>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='drawer'
            >
                <div className={styles.drawerContainer}>
                    <MdClose onClick={toggleDrawer} size={30} className={styles.closeIcon} />
                    <div className={styles.divider} />
                    <Link  className={styles.heading} href="/"><p className={styles.drawerNavLink}>Home</p></Link>
                    <div className={styles.divider} />
                    <Link className={styles.heading} href="/about"> <p className={styles.drawerNavLink}>About </p></Link>
                    <div className={styles.divider} />
                    <Link className={styles.heading} href="/ourServices"> <p className={styles.drawerNavLink}>Services </p></Link>
                    <div className={styles.divider} />
                    <Link className={styles.heading} href="/blog"> <p className={styles.drawerNavLink}>Blog </p></Link>

                    <div className={styles.divider} />
                    <Link className={styles.heading} href="/bookAnAppointment"><p className={styles.drawerNavLink}> Book An Apoinment</p></Link>
                    <div className={styles.divider} />
                    <Link className={styles.heading} href="/myMeasurement"><p className={styles.drawerNavLink}>My Measurement</p></Link>
                    <div className={styles.divider} />
                    <Link className={styles.heading} href="/login"><p className={styles.drawerNavLink}>Login / Sign Up</p></Link>
                    <div className={styles.divider} />
                    <Link className={styles.heading} href="/joinUs"><p className={styles.drawerNavLink}>Join Us </p> </Link>
                    <div className={styles.divider} />
                    <FaFacebook color='white' className={styles.drawerSocialIcon} size={25} />
                    <FaInstagram color='white' className={styles.drawerSocialIcon} size={25} />
                    <div className={styles.divider} />
                    <a href='tel:03078602370' className={styles.number}><BsFillTelephoneFill className={styles.phoneIcon} color='white' />  03078602370</a>
                </div>
            </Drawer>
        </div>
    )
}


