import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";

const Home = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <motion.div
                    className="col-md-6"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h2 className="mb-3">
                        I'm <span className="text-primary fs-1 fw-bolder">Thilip</span>
                    </motion.h2>

                    <motion.h4
                        className="text-muted mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Front-end Developer
                    </motion.h4>

                    <motion.p
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Crafting powerful digital experiences, I merge clean code with creative vision. 
                        From dynamic web apps to seamless user flows, I turn ideas into impactful solutions. 
                        Passionate about innovation, driven by detail — I build the future, one line at a time.
                    </motion.p>

                    <motion.div
                        className="d-flex align-items-center gap-4 flex-wrap mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {[
                            {
                                href: "https://mail.google.com/mail/?view=cm&fs=1&to=thilipdeveloper@gmail.com",
                                icon: "fas fa-envelope",
                                color: "text-dark",
                                label: "Email",
                            },
                            {
                                href: "https://wa.me/9025599092",
                                icon: "fab fa-whatsapp",
                                color: "text-success",
                                label: "WhatsApp",
                            },
                            {
                                href: "https://www.linkedin.com/in/thilipg2909",
                                icon: "fab fa-linkedin",
                                color: "text-primary",
                                label: "LinkedIn",
                            },
                            {
                                href: "https://github.com/Thilip-G",
                                icon: "fab fa-github",
                                color: "text-dark",
                                label: "Github",
                            }
                        ].map(({ href, icon, color, label }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                className={`text-decoration-none ${color}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <i className={`${icon} fa-lg`}></i>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.a
                        href="/Thilip-CV.pdf"
                        download="Thilip-CV.pdf"
                        className="btn btn-primary mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        Download CV
                    </motion.a>
                </motion.div>

                <motion.div
                    className="col-md-6 text-center mb-4 mb-md-0"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.img
                        src="/Portfolio-Profile.png"
                        alt="Thilip Profile"
                        className="img-fluid rounded shadow profile-img"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
