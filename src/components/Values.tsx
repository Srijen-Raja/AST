import { useEffect, useState } from "react";
import "./Values.css";

const Values = () => {
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

    const element = document.getElementById("values");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const values = [
    {
      id: 1,
      icon: "🔍",
      title: "Transparency",
      description:
        "Open communication and honest reporting about security posture",
    },
    {
      id: 2,
      icon: "⚡",
      title: "Innovation",
      description:
        "Continuous research and development of next-generation solutions",
    },
    {
      id: 3,
      icon: "🤝",
      title: "Collaboration",
      description:
        "Working together with clients and partners for better security",
    },
    {
      id: 4,
      icon: "🛡️",
      title: "Integrity",
      description: "Maintaining highest ethical standards in all operations",
    },
    {
      id: 5,
      icon: "🌱",
      title: "Growth",
      description: "Continuous learning and improvement of our capabilities",
    },
  ];

  return (
    <section
      id="values"
      className={`section values ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Core Values</h2>

        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
