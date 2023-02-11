import React from "react";
import "./Portfolio.scss";
import { FiGithub } from "react-icons/fi";
import { IoArrowRedoSharp } from "react-icons/io5";
import { workData } from "../../../Data";
import { motion } from "framer-motion";

function Portfolio() {
    return (
        <div className="container" id="portfolio">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="title"
            >
                <span>My Work</span>
                <h1>Projects </h1>
            </motion.div>

            <div className="work-data">
                {workData.map((work) => {
                    return (
                        <div className="project" key={work.id}>
                            <motion.div
                                initial={{ x: 0, opacity: 0 }}
                                whileInView={{ x: [-250, 0], opacity: 1 }}
                                transition={{ duration: 1 }}
                                exit={{ opacity: 0, y: -50 }}
                                className="image"
                            >
                                <img src={work.img} alt="workImg" />
                                <div className="hover-layer">
                                    <a
                                        target="_blank"
                                        href={work.gitLink}
                                        rel="noopener noreferrer"
                                    >
                                        <FiGithub />
                                    </a>

                                    <a
                                        target="_blank"
                                        href={work.deployLink}
                                        rel="noopener noreferrer"
                                    >
                                        <IoArrowRedoSharp />
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.1, delay: 0.3 }}
                                className="desc"
                            >
                                {work.desc}
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="collab"
            >
                <div className="collab-left">
                    <h3>
                        let's create some amazing <br />
                        <span> projects together</span>
                    </h3>
                </div>
                <div className="collab-right">
                    <a href="#contact">Contact Me</a>
                </div>
            </motion.div>
        </div>
    );
}

export default Portfolio;
