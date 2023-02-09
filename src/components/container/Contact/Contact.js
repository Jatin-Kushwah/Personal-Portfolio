import React from "react";
import { contacts } from "../../../Data";
import "./Contact.scss";
import Fade from "react-reveal/Fade";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div className="container" id="contact">
            <Fade top distance="10%" duration={1500}>
                <div className="title">
                    <span>reach me easily</span>
                    <h1>Contact Me </h1>
                </div>
            </Fade>
            <div className="contact-form">
                <Fade left duration={1500}>
                    <div className="left-container">
                        <h3>Say Hi Toady!</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quisquam voluptates pariatur earum explicabo
                            quis quae mollitia perspiciatis magnam omnis
                            voluptate.
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
                                <a href="#">
                                    <FaGithub />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right duration={1500}>
                    <div className="right-container">
                        <h3>Connect With Me</h3>
                        <div className="row">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last name" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Phone" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="row">
                            <textarea placeholder="message"></textarea>
                        </div>
                        <div className="btn">
                            <a href="#">Send</a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Contact;
