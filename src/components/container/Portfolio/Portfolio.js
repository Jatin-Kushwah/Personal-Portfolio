import React from "react";
import "./Portfolio.scss";
import { FiGithub } from "react-icons/fi";
import { IoArrowRedoSharp } from "react-icons/io5";
import { workData } from "../../../Data";
import Fade from "react-reveal/Fade";

function Portfolio() {
    return (
        <div className="container" id="portfolio">
            <Fade top distance="20%" duration={1500}>
                <div className="title">
                    <span>My Work</span>
                    <h1>Projects </h1>
                </div>
            </Fade>
            <Fade left distance="20%" duration={1500}>
                <div className="work-data">
                    {workData.map((work) => {
                        return (
                            <div className="project" key={work.id}>
                                <div className="image">
                                    <img src={work.img} alt="workImg" />
                                    <div className="hover-layer">
                                        <a href="#">
                                            <FiGithub />
                                        </a>

                                        <a href="#">
                                            <IoArrowRedoSharp />
                                        </a>
                                    </div>
                                </div>
                                <div className="desc">{work.desc}</div>
                            </div>
                        );
                    })}
                </div>
            </Fade>
            <Fade duration={1500}>
                <div className="collab">
                    <div className="collab-left">
                        <h3>
                            let's create some amazing <br />
                            <span> projects together</span>
                        </h3>
                    </div>
                    <div className="collab-right">
                        <a href="#contact">Contact Me</a>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Portfolio;
