import React from 'react';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.scss"

function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState();
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() =>{
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(user === "bogdana" && pwd === "test"){
        setSuccess(true);
        setUser('');
        setPwd('');
        navigate('/characters');
    } else {
        setSuccess(false);
        setErrMsg("Username or pasword incorrect.")
    };
    }

    return (
        <>
            {/* {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="http://localhost:3000/">Go to Home</a>
                    </p>
                </section>
            ) : ( */}
                <section className={`${styles.mainSection} ${styles.background}`}>
                    <div className={styles.inputBg}>
                    <div>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className={styles.headingText}>Rick & Morty</h1>
                    <h2 className={styles.signInText}>Sign in</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label htmlFor="username">Username:</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            className={styles.input2}
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className={styles.btn}>Sign In</button>
                    </form>
                    </div>
                    </div>
                </section>
           {/*  )} */}
        </>
    )
}

export default Login;