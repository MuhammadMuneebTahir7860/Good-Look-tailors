import React from 'react'
import styles from '../../styles/Header.module.scss';
import logo from '../../assets/revyfy-logo-pink.png';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

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
                    <p className={styles.drawerNavLink}>Home</p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>About </p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Services </p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Blog </p>

                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}> Book An Apoinment</p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>My Measurement</p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Login / Sign Up</p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Join Us </p>
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


