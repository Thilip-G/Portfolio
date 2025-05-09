import React from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Navbar = () => {
    return (
        <motion.nav
        className="navbar navbar-expand-lg navbar-gradient shadow-sm"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container-fluid">
                <motion.div
                    className="navbar-brand fw-bolder fs-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <NavLink to="/" className="text-decoration-none text-white">
                        Thilip G
                    </NavLink>
                </motion.div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                >
                    <span className="text-white fas fa-bars"></span>
                </button>

                <motion.div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="navbar-nav ms-auto">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/project", label: "Project" },
                            { to: "/contact", label: "Contact" },
                        ].map((link, index) => (
                            <motion.div
                                key={link.to}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <NavLink
                                    className="nav-link"
                                    to={link.to}
                                    style={{ transition: "color 0.2s ease-in-out" }}
                                >
                                    {link.label}
                                </NavLink>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
