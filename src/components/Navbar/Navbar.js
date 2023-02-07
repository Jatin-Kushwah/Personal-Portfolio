import React, { useEffect } from "react";
import "./Navbar.scss";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    return (
        <div className={scroll ? "Navbar scroll-active" : "Navbar"}>
            <div className="nav-container">
                <div className="logo">JK</div>
                <div
                    className={`hamburger ${active ? "active" : ""}`}
                    onClick={handleClick}
                >
                    <div className="bar"></div>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className="social-links">
                    <div>
                        <FaGithub />
                    </div>
                    <div>
                        <FaLinkedin />
                    </div>
                    <div>
                        <FaInstagram />
                    </div>
                    <div>
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div
                className={`mob-nav ${active ? "active" : ""}`}
                onClick={() => setActive(false)}
            >
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
