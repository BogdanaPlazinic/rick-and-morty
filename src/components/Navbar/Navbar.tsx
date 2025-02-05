import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import { Button } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <header>
            <nav>
                <Hamburger 
                toggled={isOpen}
                toggle={setOpen}
                />
                {isOpen && <div
                style={{
                    background: "#FFFF88",
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                }}
                >
                    <div 
                    style={{
                        position: "relative",
                    }}
                    >
                    <div>
                        <a href="/favourite">Favourite</a>
                        <HeartTwoTone twoToneColor="#eb2f96" />
                    </div>

                    <div>
                        <Button type="primary" href="http://localhost:3000/">Log Out</Button>
                    </div>
                    </div>
                </div>}
            </nav>
        </header>
    )
};

export default Navbar;