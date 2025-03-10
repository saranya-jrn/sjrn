import React from "react";
import "./Skillsets.css";

const Skillsets = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "TypeScript"],
    },
    {
      category: "UI Frameworks",
      skills: ["Tailwind CSS", "Bootstrap", "Material UI"],
    },
    {
      category: "DevOps & Tools",
      skills: ["GIT", "Jenkins", "JIRA", "Splunk"],
    },
  ];

  return (
    <div className="skills-container">
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="skill-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, skillIndex) => (
              <div className="skill-card" key={skillIndex}>
                <div className="skill-name">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skillsets;
