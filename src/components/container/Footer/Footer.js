import React from "react";
import "./Footer.scss";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className="Footer">
            <div className="copyright">
                <p>
                    Copyright&copy;2023 All rights reserved | Made by
                    <span> Jatin Kushwah</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
