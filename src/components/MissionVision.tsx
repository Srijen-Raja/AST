import { useEffect, useState } from "react";
import "./MissionVision.css";

const MissionVision = () => {
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

    const element = document.getElementById("mission");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="mission"
      className={`section mission-vision ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Mission & Vision</h2>

        <div className="mv-grid">
          <div className="mv-card mission">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To empower organizations with advanced cybersecurity solutions
              that protect their digital assets, ensure business continuity, and
              enable secure innovation in an interconnected world.
            </p>
            <ul className="mv-list">
              <li>Deliver cutting-edge security solutions</li>
              <li>Conduct groundbreaking security research</li>
              <li>Build trusted partnerships</li>
              <li>Stay ahead of emerging threats</li>
            </ul>
          </div>

          <div className="mv-card vision">
            <div className="mv-icon">🚀</div>
            <h3>Our Vision</h3>
            <p>
              To become the most trusted and innovative cybersecurity partner,
              shaping a secure digital future where organizations can thrive
              without fear of cyber threats.
            </p>
            <ul className="mv-list">
              <li>Lead industry innovation</li>
              <li>Set new security standards</li>
              <li>Create a cyber-secure world</li>
              <li>Empower teams globally</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
