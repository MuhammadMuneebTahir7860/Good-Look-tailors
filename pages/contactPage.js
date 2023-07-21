import React, { useState } from 'react';
import styles from '@/styles/contactPage.module.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import AboutBanner from '@/components/AboutBanner/AboutBanner'
export default function contactPage() {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your desired action with the submitted data (e.g., send it to a server, display a success message, etc.)
        console.log('Submitted data:', { name, lastname, email });
        // Reset the form inputs
        setName('');
        setLastName('');
        setEmail('');
        setMessage('')
    };

    return (
        <div>
            <Header />
            <AboutBanner pageTitle={"Contact Us"} />
            <div className={styles.contactPageContainer}>
                <div className={styles.container}>
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            First Name:
                        </label>
                        <input
                        style={{ height: "40px" }}
                        type="text"
                            placeholder="Enter your first name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                        style={{ height: "40px" }}
                        type="text"
                            placeholder="Enter your last name"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                        style={{ height: "40px" }}
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="subject">
                            Subject:
                        </label>
                        <input
                        style={{ height: "40px" }}
                            type="text"
                            placeholder="Enter your email"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        <label htmlFor="message">
                            Message:
                        </label>
                        <textarea
                        style={{ height: "100px" }}
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
