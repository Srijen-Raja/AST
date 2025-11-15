import { useEffect, useState } from "react";
import "./Team.css";
import { coFounders, teamMembers } from "../data/teamData";

const Team = () => {
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

    const element = document.getElementById("team");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="team" className={`section team ${isVisible ? "visible" : ""}`}>
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>

        <div className="team-section">
          <h3 className="subsection-title">Founders</h3>
          <div className="founders-grid">
            {coFounders.map((founder) => (
              <div key={founder.id} className="founder-card">
                <div className="avatar" style={{ background: founder.color }}>
                  <span>{founder.initials}</span>
                </div>
                <h4>{founder.name}</h4>
                <p className="role">{founder.role}</p>
                <p className="specialization">{founder.specialization}</p>
                <p className="experience">{founder.experience}</p>
                <p className="bio">{founder.bio}</p>
                <blockquote className="quote">"{founder.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3 className="subsection-title">Team Members</h3>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="avatar" style={{ background: member.color }}>
                  <span>{member.initials}</span>
                </div>
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
                <p className="specialization">{member.specialization}</p>
                <p className="experience">{member.experience}</p>
                <blockquote className="quote">"{member.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
