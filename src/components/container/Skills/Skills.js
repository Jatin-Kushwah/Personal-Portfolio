import React, { useState } from "react";
import "./Skills.scss";
import { icons } from "../../../Data";
import Fade from "react-reveal/Fade";

function Skills() {
    const [active, setActive] = useState(1);
    return (
        <Fade top cascade distance="25%" duration={1500}>
            <div className="container" id="skills">
                <div className="title">
                    <span>My Expertise?</span>
                    <h1>Skills </h1>
                </div>
                <div className="option">
                    <button
                        onClick={() => setActive(1)}
                        className={active === 1 ? "active" : ""}
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => setActive(2)}
                        className={active === 2 ? "active" : ""}
                    >
                        Experience
                    </button>
                </div>
                <div className="skills">
                    {active === 1 &&
                        icons.map((icon, index) => {
                            return (
                                <div key={index} className="icons">
                                    {icon}
                                </div>
                            );
                        })}
                </div>
                <div className="experiencs"></div>
            </div>
        </Fade>
    );
}

export default Skills;
