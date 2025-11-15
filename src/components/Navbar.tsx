import { useState, useEffect } from "react";
import "./Navbar.css";

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Atharv SecureTech</span>
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <button className="nav-link" onClick={() => scrollToSection("home")}>
            Home
          </button>
          <button className="nav-link" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button className="nav-link" onClick={() => scrollToSection("team")}>
            Team
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
