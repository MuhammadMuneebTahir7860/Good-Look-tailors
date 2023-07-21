import React, { useState } from 'react';
import styles from '@/styles/signUp.module.scss'
export default function signUp() {

    
        const [fullName, setFullName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleSignUp = (e) => {
            e.preventDefault();
            // Perform sign-up logic here (e.g., API call to register user)

            // Reset form fields
            setFullName('');
            setEmail('');
            setPassword('');
        };
        return (
           <div  className={styles.signUpContainer}>
            <div className={styles.container}>
                <h2>Sign Up</h2>
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

                    <label htmlFor="password">Password:</label>
                    <input
                        style={{ height: "40px" }}
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Sign Up</button>
                    <p>If you have already account <a className={styles.linkDecoration} href='#'>Login</a> </p>
                </form>
            </div>
            </div> 
        )
    }










