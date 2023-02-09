import React from "react";
import "./About.scss";
import { bioData } from "../../../Data";
import devImg from "../../../assets/dev.png";
import Fade from "react-reveal/Fade";
function About() {
    return (
        <div className="container" id="about">
            <Fade duration={1500}>
                <div className="title">
                    <span>Who I Am?</span>
                    <h1>About Me</h1>
                </div>
            </Fade>
            <div className="about-container">
                <Fade left duration={1500}>
                    <div className="left-about">
                        <img src={devImg} alt="devImg" />
                    </div>
                </Fade>
                <Fade right duration={1500}>
                    <div className="right-about">
                        <p>
                            Hi! Myself Jatin Kushwah, a computer science
                            graduate from Jiwaji University in Gwalior with a
                            passion for web development. Proficient in HTML,
                            CSS, JavaScript, React, Node.js, and other
                            technologies. Seeking to grow as a full-stack web
                            developer and make a positive impact in the
                            industry.
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
                        <a href="#" download="">
                            My Resume
                        </a>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default About;
