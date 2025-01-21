
export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Connect with me on social media or send me a message.
      </p>
      <div className="contact-icons">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon twitter"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          className="form-input"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="form-input"
        />
        <textarea
          placeholder="Your Message"
          className="form-textarea"
        ></textarea>
        <button type="submit" className="form-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

