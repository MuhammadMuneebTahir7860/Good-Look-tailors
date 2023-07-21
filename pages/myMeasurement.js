import React, { useState } from 'react';
import styles from '@/styles/myMeasurement.module.scss'
import Header from '@/components/Header/Header'
import AboutBanner from '@/components/AboutBanner/AboutBanner'
import Footer from '@/components/Footer/Footer';

export default function myMeasurement() {
    const [number, setNumber] = useState('');
    const handleSignUp = (e) => {
        e.preventDefault();
        setNumber('');
    };
    return (
        <div>
            <Header />
            <AboutBanner pageTitle={'My Measurement'} />
            <div className={styles.myMeasurementContainer}>
                <div className={styles.container}>
                    <h2>My Measurement</h2>
                    <form onSubmit={handleSignUp}>

                        <label htmlFor="number"> ID or Mobile Number :</label>
                        <input
                            style={{ height: "40px" }}
                            type="number"
                            id="number"
                            placeholder="Enter your id or number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />

                        <button type="submit">Check</button>

                    </form>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
