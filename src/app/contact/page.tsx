import "../../style/contact.css"

export default function Contact(){
    return (
        <div className="contact-box">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          <div className="contact-links">
            <a
              href="https://github.com/SibtainAli92"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
            >
              <img
                src="https://img.shields.io/badge/GitHub-Profile-red?style=for-the-badge&logo=github"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sibtain-ali-data-pro-4404ba2b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-Profile-red?style=for-the-badge&logo=linkedin"
                alt="LinkedIn"
              />
            </a>
            <a
              href="mailto:sibtainali.data.pro@gmail.com"
              className="link-item"
            >
              <img
                src="https://img.shields.io/badge/Gmail-Contact%20Me-green?style=for-the-badge&logo=gmail"
                alt="Gmail"
              />
            </a>
          </div>
        </div>
      </div>
    )
}