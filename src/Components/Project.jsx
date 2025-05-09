import React from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../App.css";

const Project = () => {
  const projects = [
    { src: "calci-project.png", link: "https://ts-mini-calci.netlify.app" },
    { src: "game-project.png", link: "https://gamesrps.netlify.app" },
    { src: "todo-project.png", link: "https://listtodo-web.netlify.app" },
    { src: "Student-DM-project.png", link: "https://studentdetailsmanagament.netlify.app"}
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        type: "spring",
      },
    }),
  };

  return (
    <div className="container my-2">
      <motion.h1
        className="text-center fw-bolder my-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        My Projects
      </motion.h1>

      <div className="row g-4">
        {projects.map((project, index) => (
          <motion.div
            className="col-md-3 "
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <motion.div
              className="card project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200  }}
            >
              <div className="card-img-container">
                <img
                  src={project.src}
                  alt={`Project ${index + 1}`}
                  className="card-img" loading="lazy"
                />
                <a
                  href={project.link}
                  className="overlay-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
