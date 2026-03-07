import { useState } from "react";
import "./About.css";

const About = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } 
    else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: ""
      });

      setErrors({});
    }
  };

  return (

    <div className="container py-5 about-page">

      {/* Title */}
      <h2 className="about-title text-center mb-5">
        About Our Employee Directory
      </h2>


      {/* Who We Are */}

      <div className="row align-items-center mb-5">

        <div className="col-md-6">

          <h4 className="section-title">Who We Are</h4>

          <p>
            The Employee Directory System is a modern web application built
            using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
            It helps companies organize employee information efficiently.
          </p>

          <p>
            HR teams can easily manage employee details, perform quick
            searches, and maintain records in a centralized system.
          </p>

        </div>


        <div className="col-md-6">

          <div className="about-card">

            <h5>Why Use This System?</h5>

            <ul>
              <li>Easy employee management</li>
              <li>Fast employee search</li>
              <li>Secure backend system</li>
              <li>Modern responsive UI</li>
              <li>Improved HR workflow</li>
            </ul>

          </div>

        </div>

      </div>


      {/* Tech Stack */}

      <h4 className="section-title text-center mb-4">
        Technology Stack
      </h4>

      <div className="row text-center mb-5">

        <div className="col-md-3">
          <div className="tech-card">
            <h5>MongoDB</h5>
            <p>Database used to store employee data.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="tech-card">
            <h5>Express.js</h5>
            <p>Backend framework for REST APIs.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="tech-card">
            <h5>React.js</h5>
            <p>Frontend library for UI development.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="tech-card">
            <h5>Node.js</h5>
            <p>Server environment for backend logic.</p>
          </div>
        </div>

      </div>


      {/* Features */}

      <h4 className="section-title text-center mb-4">
        Key Features
      </h4>

      <div className="row mb-5">

        <div className="col-md-4">
          <div className="feature-card">
            <h5>Employee Management</h5>
            <p>Add, edit and remove employees easily.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature-card">
            <h5>Search System</h5>
            <p>Find employees instantly by name or department.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature-card">
            <h5>Responsive UI</h5>
            <p>Works perfectly on desktop, tablet and mobile.</p>
          </div>
        </div>

      </div>


      {/* CONTACT SECTION */}

      <h4 className="section-title text-center mb-4">
        Contact Us
      </h4>

      <div className="row">

        {/* Contact Info */}

        <div className="col-md-6">

          <div className="contact-info-card">

            <h5>Company Information</h5>

            <p>
              We help organizations manage employee records with modern
              web technologies.
            </p>

            <p><i className="bi bi-building"></i> Employee Directory Solutions</p>
            <p><i className="bi bi-envelope"></i> support@employeedirectory.com</p>
            <p><i className="bi bi-telephone"></i> +91 9876543210</p>
            <p><i className="bi bi-geo-alt"></i> Kerala, India</p>

          </div>

        </div>


        {/* Contact Form */}

        <div className="col-md-6">

          <div className="contact-form-card">

            <h5>Send Message</h5>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                className="form-control mb-2"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />

              {errors.name && <small className="text-danger">{errors.name}</small>}

              <input
                type="email"
                name="email"
                className="form-control mb-2"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />

              {errors.email && <small className="text-danger">{errors.email}</small>}

              <textarea
                name="message"
                className="form-control mb-2"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
              ></textarea>

              {errors.message && <small className="text-danger">{errors.message}</small>}

              <button className="btn btn-primary w-100 mt-3">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;