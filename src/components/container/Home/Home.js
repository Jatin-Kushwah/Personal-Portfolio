import React from "react";
import "./Home.scss";
import profile from "../../../assets/profile.jpg";
import Fade from "react-reveal/Fade";

function Home() {
    return (
        <div className="container" id="home">
            <Fade top distance="10%" duration={1500}>
                <div className="profile">
                    <img src={profile} alt="profile" />
                </div>
                <div className="profile-text">
                    <h3 className="name">
                        Hello, I'm <span>Jatin Kushwah</span>
                    </h3>
                    <span className="job">Full Stack Developer</span>
                    <span className="text">
                        Driven
                        <br />
                        To Build Creative <br />
                        Web Apps
                    </span>
                    <a href="#contact">connect with me</a>
                    <div className="web">Web Developer</div>
                    <div className="ui">UI/UX Designer</div>
                    <div className="backend-dev">Backend Developer</div>
                </div>
            </Fade>
        </div>
    );
}

export default Home;
