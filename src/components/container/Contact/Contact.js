import React, { useRef } from "react";
import { contacts, gitHub, insta, linkedin, twitter } from "../../../Data";
import "./Contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_6q7c5at",
                "portfolio-template-email",
                form.current,
                "PXdLbnud7WNM3PiXl"
            )
            .then(
                (result) => {
                    toast.success(
                        `Thanks for contacting ${form.current.elements.user_name.value}!`
                    );
                    form.current.reset();
                },
                (error) => {
                    toast.error("Failed to send email!");
                }
            );
    };

    return (
        <div className="container" id="contact">
            <Toaster />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="title"
            >
                <span>reach me easily</span>
                <h1>Contact Me </h1>
            </motion.div>

            <div className="contact-form">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="left-container"
                >
                    <h3>Say Hi Toady!</h3>
                    <p>
                        I am currently seeking new job opportunities and would
                        love to hear from recruiters about potential positions.
                        If you're interested in learning more about my skills
                        and experience, please feel free to reach out by
                        contacting me here or you can find me on LinkedIn.
                    </p>
                    {contacts.map((contact) => {
                        return (
                            <div className="contact-left" key={contact.id}>
                                <div className="icon">{contact.icon}</div>
                                <p>{contact.text}</p>
                            </div>
                        );
                    })}
                    <div className="social-links">
                        <div>
                            <a
                                target="_blank"
                                href={gitHub}
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                href={linkedin}
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                href={insta}
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                href={twitter}
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="right-container"
                >
                    <h3>Connect With Me</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="user_name"
                            />
                        </div>
                        <div className="row">
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="user_email"
                            />
                        </div>
                        <div className="row">
                            <textarea
                                placeholder="message"
                                name="message"
                            ></textarea>
                        </div>
                        <div className="btn" onClick={sendEmail}>
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
