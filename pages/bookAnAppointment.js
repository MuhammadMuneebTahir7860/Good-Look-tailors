import React, { useState } from 'react';
import styles from '@/styles/bookAnAppointment.module.scss'
import Header from '@/components/Header/Header'
import AboutBanner from '@/components/AboutBanner/AboutBanner'
import Footer from '@/components/Footer/Footer';
export default function bookAnAppointment() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your desired action with the submitted data (e.g., send it to a server, display a success message, etc.)
        console.log('Submitted data:', { name, email, date, time, service });
        // Reset the form inputs
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setService('');
    };
    return (
        <div>
            <Header />
            <AboutBanner pageTitle={"Book An Appointment"} />

            <div className={styles.bookAnAppointmentContainer}>
                <div className={styles.container}>
                    <h2>Book an Appointment</h2>
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            style={{ height: "40px" }}
                            type="text"
                            id="fullName"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            style={{ height: "40px" }}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="date">
                            Date:
                        </label>
                        <input
                            style={{ height: "40px" }}
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />

                        <label htmlFor="time">
                            Time:
                        </label>
                        <input
                            style={{ height: "40px" }}
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required

                        />

                        <label htmlFor="serice">
                            Service:
                        </label >
                        <select
                            style={{ height: "40px" }}
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            
                        >
                            <option value="">Select a service</option>
                            <option value="Alterations">Alterations</option>
                            <option value="Custom Tailoring">Custom Tailoring</option>
                            <option value="Dress Fitting">Dress Fitting</option>
                        </select>

                        <button type="submit">Book Now</button>

                    </form>
                </div>

            </div>

            <Footer />
        </div>
    )
}






