import { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
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

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: "🔐",
      title: "IoT Security",
      description:
        "Advanced protection for Internet of Things devices and networks",
    },
    {
      id: 2,
      icon: "☁️",
      title: "Cloud Infrastructure",
      description:
        "Secure cloud solutions with encryption and threat detection",
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Threat Detection",
      description: "Real-time monitoring and detection of cyber threats",
    },
    {
      id: 4,
      icon: "🔍",
      title: "Security Audits",
      description: "Comprehensive vulnerability assessments and audits",
    },
    {
      id: 5,
      icon: "🚀",
      title: "System Integration",
      description:
        "Seamless integration of security solutions with existing systems",
    },
    {
      id: 6,
      icon: "📋",
      title: "IPR Management",
      description: "Intellectual property protection and management services",
    },
  ];

  return (
    <section
      id="services"
      className={`section services ${isVisible ? "visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
