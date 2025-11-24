import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        <h1 className="hero-title">
          Advanced <span className="gradient-text">Cybersecurity</span>{" "}
          Solutions
        </h1>
        <p className="hero-subtitle">
          Protecting your digital infrastructure with cutting-edge technology
          and research-driven security
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToContact}>
            Get Started
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
