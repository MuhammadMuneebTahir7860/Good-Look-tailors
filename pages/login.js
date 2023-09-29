import React, { useState } from 'react';
import styles from '@/styles/login.module.scss'
import Link from 'next/link';
import { doLogin } from '@/Redux/slices/AuthSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
export default function login() {
    const dispatch = useDispatch()
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        // e.preventDefault();
        const data = {
            email,
            password: password,
        };
        dispatch(doLogin({ data, setLoading, router }));
        router.push("/")
        setEmail('');
        setPassword('');
    };



    return (
        <div className={styles.signUpContainer}>
            <div className={styles.container}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>


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

                    <button type="submit" >
                        <Link href="/">
                        Login
                        </Link>
                        </button>
                    <p>If you don't have account

                        <Link className={styles.heading} href="/signUp">Sign Up</Link>

                    </p>

                </form>
            </div>
        </div>
    )
}
