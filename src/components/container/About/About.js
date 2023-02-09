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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus architecto explicabo ex corrupti,
                            impedit excepturi at sunt quisquam similique fugiat
                            quidem mollitia quod illo exercitationem!
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
