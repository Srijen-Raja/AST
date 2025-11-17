import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Atharv SecureTech</h4>
              <p>
                Advanced cybersecurity solutions for a secure digital future.
              </p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">IoT Security</a>
                </li>
                <li>
                  <a href="#services">Cloud Infrastructure</a>
                </li>
                <li>
                  <a href="#services">Threat Detection</a>
                </li>
                <li>
                  <a href="#services">Security Audits</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>Phone: +91-9550212579</p>
              <p>Email: atharvsecuretech@gmail.com</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Atharv SecureTech. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
