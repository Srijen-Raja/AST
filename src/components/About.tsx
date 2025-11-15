import { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="about"
      className={`section about ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">About Atharv SecureTech</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Pioneering Cybersecurity Innovation</h3>
            <p>
              Atharv SecureTech is a research-driven organization specializing
              in cutting-edge cybersecurity solutions. With a team of industry
              experts and security researchers, we deliver comprehensive
              protection against evolving digital threats.
            </p>
            <p>
              Our approach combines advanced technology with deep security
              expertise to provide customized solutions for IoT devices, cloud
              infrastructure, and enterprise systems. We're committed to staying
              ahead of threats and empowering organizations with secure digital
              infrastructure.
            </p>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🔐</span>
                <h4>Advanced Security</h4>
                <p>State-of-the-art protection mechanisms</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🔬</span>
                <h4>Research-Driven</h4>
                <p>Continuous threat analysis and innovation</p>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <h4>High Performance</h4>
                <p>Minimal overhead with maximum security</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🌍</span>
                <h4>Global Standards</h4>
                <p>Compliance with international regulations</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-icon">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="50" cy="50" r="45" />
                  <path d="M50 20v60M20 50h60" />
                  <circle cx="50" cy="50" r="8" fill="currentColor" />
                </svg>
              </div>
              <p>Cybersecurity Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
