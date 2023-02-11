import React, { useState } from "react";
import "./Skills.scss";
import { icons } from "../../../Data";
import { motion } from "framer-motion";

function Skills() {
    const [active, setActive] = useState(1);
    return (
        <div className="container" id="skills">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="title"
            >
                <span>My Expertise?</span>
                <h1>Skills </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="option"
            >
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
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="skills"
            >
                {active === 1 &&
                    icons.map((icon, index) => {
                        return (
                            <div key={index} className="icons">
                                {icon}
                            </div>
                        );
                    })}
            </motion.div>
            <div className="experiencs"></div>
        </div>
    );
}

export default Skills;
