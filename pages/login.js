import React, { useState } from 'react';
import styles from '@/styles/login.module.scss'
import Link from 'next/link';
export default function login() {


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Perform sign-up logic here (e.g., API call to register user)

        // Reset form fields

        setEmail('');
        setPassword('');
    };
    return (
        <div className={styles.signUpContainer}>
            <div className={styles.container}>
                <h2>Login</h2>
                <form onSubmit={handleSignUp}>


                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                    <p>If you don't have account
                        
                           <Link className={styles.heading} href="/signUp">Sign Up</Link>
                        
                    </p>

                </form>
            </div>
        </div>
    )
}
