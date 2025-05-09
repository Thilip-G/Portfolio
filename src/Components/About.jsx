import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";

const About = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
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

                <motion.div
                    className="col-md-6"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h2 className="mb-3">
                        About <span className="text-primary">Me</span>
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
                       As a passionate Computer Science engineer and creative front-end developer, I bring ideas to life through clean, responsive, and user-centric web interfaces. I specialize in HTML, CSS, JavaScript, React.js, and Bootstrap, with hands-on experience in version control using Git and GitHub. With a strong foundation in both design and functionality, I craft digital experiences that are both visually appealing and technically robust. Always curious and constantly evolving, I stay ahead of trends to deliver future-ready solutions. Let’s connect and build something impactful together!
                    </motion.p>

                </motion.div>
            </div>
        </div>
    );
};

export default About;
