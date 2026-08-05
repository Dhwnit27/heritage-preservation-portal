import { useState } from "react";
import { FaUser, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./ContactPage.css";

function ContactPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

 function handleSubmit(e) {

    e.preventDefault();

    setSubmitted(true);

    setName("");

    setEmail("");

    setMessage("");


  }

  return (
    <>
      <Navbar />

      <main className="contact-page">

        <section className="contact-hero">

          <h1>📞 Contact Us</h1>

          <p>
            Have a question, suggestion, or feedback?
            I'd love to hear from you.
          </p>

        </section>

        <section className="contact-container">

          <div className="contact-info">

            <h2>👋 Let's Connect</h2>

            <p>
              Feel free to reach out with your thoughts,
              suggestions, or questions about the
              Heritage Preservation Portal.
            </p>

            <div className="info-item">
              <FaUser className="social-icon" />
              <span>
                Dhwnit Solanki</span>
            </div>

            <div className="info-item">
              <FaEnvelope className="social-icon" />
              <a href="mailto:Solankidhwnit1@gmail.com">
                Solankidhwnit1@gmail.com
              </a>
            </div>

            <div className="info-item">
              <FaLinkedin className="social-icon linkedin-icon" />
              <a
                href="https://www.linkedin.com/in/dhwnit-solanki-a94a463aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dhwnit
              </a>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">
              Send Message
            </button>

            {submitted && (

    <p className="success-message">

        ✅ Thank you! Your message has been received.

    </p>

)}

          </form>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default ContactPage;