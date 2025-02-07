import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import { Button } from 'antd';
/* import { HeartTwoTone } from '@ant-design/icons'; */
import styles from './Navbar.module.scss'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className={styles.headerMainContainer}>
            <nav className={styles.header}>
                <div className={styles.logoContainer}>
                    <h3 className={styles.logoText}>Rick & Morty</h3>
                </div>

                <div className={styles.menuContainer}>
                <Hamburger 
                toggled={isOpen}
                toggle={setOpen}
                />
                </div>
                {isOpen && <div
                 className={styles.menuOpen}
                >
                    <div
                    className={styles.menuMainContainer}
                    >
                    <div className={styles.menuContent}>
                        <a href="/favourite">Favourite</a>
                        {/* <HeartTwoTone twoToneColor="#eb2f96" /> */}
                        <a href="/characters">Characters</a>

                        <div >
                            <Button 
                            className={styles.menuBtn}
                            type="primary" 
                            href="http://localhost:3000/">
                            Log Out
                            </Button>
                        </div>
                    </div>

                    
                    </div>
                </div>}
            </nav>
        </header>
    )
};

export default Navbar;