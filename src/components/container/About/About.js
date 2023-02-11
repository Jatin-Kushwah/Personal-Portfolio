import React from "react";
import "./About.scss";
import { bioData } from "../../../Data";
import devImg from "../../../assets/dev.png";
import { motion } from "framer-motion";
import resume from "../../../assets/jatin-resume.pdf";
function About() {
    return (
        <div className="container" id="about">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="title"
            >
                <span>Who I Am?</span>
                <h1>About Me</h1>
            </motion.div>

            <div className="about-container">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="left-about"
                >
                    <img src={devImg} alt="devImg" />
                </motion.div>

                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="right-about"
                >
                    <p>
                        Hi! Myself Jatin Kushwah, a computer science graduate
                        from Jiwaji University in Gwalior with a passion for web
                        development. Proficient in HTML, CSS, JavaScript, React,
                        Node.js, and other technologies. Seeking to grow as a
                        full-stack web developer and make a positive impact in
                        the industry.
                    </p>

                    {bioData.map((bio) => (
                        <div className="bio" key={bio.id}>
                            <span className="bio-icon-key">
                                {bio.icon}
                                {bio.key}
                            </span>
                            <span className="bio-value">{bio.value}</span>
                        </div>
                    ))}
                    <a href={resume} download="jatin-resume.pdf">
                        My Resume
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
