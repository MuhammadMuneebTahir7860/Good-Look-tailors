import React, { useState } from 'react';
import styles from '@/styles/joinUs.module.scss'
export default function joinUs() {
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Perform sign-up logic here (e.g., API call to register user)

        // Reset form fields
        setFullName('');
        setEmail('');
        setNumber('');
    };
  return (
    
    <div  className={styles.signUpContainer}>
            <div className={styles.container}>
                <h2>Join Us</h2>
                <form onSubmit={handleSignUp}>
                    
                <label htmlFor="fullName">Full Name:</label>
                    <input
                        style={{ height: "40px" }}
                        type="text"
                        id="fullName"
                        placeholder="Enter your name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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

                    <label htmlFor="number"> Mobile Number:</label>
                    <input
                        style={{ height: "40px" }}
                        type="number"
                        id="number"
                        placeholder="Enter your number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />

                    <button type="submit">join</button>
                    
                </form>
            </div>

            </div> 
  )
}
