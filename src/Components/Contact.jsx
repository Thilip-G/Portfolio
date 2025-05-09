import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Email sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.error("Email send error:", error.text);
        alert("Failed to send email. Please try again.");
      }
    );
};


  return (
    <motion.div
      className="container py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-center mb-4 text-primary"
        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me!
      </motion.h1>

      <form ref={form} onSubmit={sendEmail}>
        <motion.div className="row justify-content-center">
          <motion.div className="col-lg-5 col-md-6 mb-4">
            <div className="input-group flex-nowrap">
              <span className="input-group-text">
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="user_name"
                required
              />
            </div>
          </motion.div>

          <motion.div className="col-lg-5 col-md-6 mb-4">
            <div className="input-group flex-nowrap">
              <span className="input-group-text">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="row justify-content-center">
          <motion.div className="col-lg-5 col-md-6 mb-4">
            <div className="input-group flex-nowrap">
              <span className="input-group-text">
                <i className="fa-solid fa-phone"></i>
              </span>
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile Number"
                name="user_phone"
              />
            </div>
          </motion.div>

          <motion.div className="col-lg-5 col-md-6 mb-4">
            <div className="input-group flex-nowrap">
              <span className="input-group-text">
                <i className="fa-solid fa-bullseye"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="row justify-content-center">
          <motion.div className="col-lg-10 col-md-6 mb-4">
            <textarea
              className="form-control"
              placeholder="Message"
              name="message"
              rows={5}
              required
            />
          </motion.div>
        </motion.div>

        <motion.div className="row justify-content-center">
          <motion.div className="col-md-4">
            <button
              type="submit"
              className="btn btn-primary shadow rounded-pill w-100"
            >
              Send Message
            </button>
          </motion.div>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default Contact;
