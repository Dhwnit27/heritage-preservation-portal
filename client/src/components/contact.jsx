import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>

      <p>
        Have questions or suggestions? We'd love to hear from you.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;