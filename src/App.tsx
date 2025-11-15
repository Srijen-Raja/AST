import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import MissionVision from "./components/MissionVision";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Services />
      <Team />
      <MissionVision />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
