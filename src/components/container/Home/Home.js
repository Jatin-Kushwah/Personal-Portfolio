import React from "react";
import "./Home.scss";
import profile from "../../../assets/profile.jpg";
import { motion } from "framer-motion";

function Home() {
    return (
        <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1.5,
                delay: 0.5,
            }}
            className="container"
            id="home"
        >
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
        </motion.div>
    );
}

export default Home;
