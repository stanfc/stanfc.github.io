import React from 'react';

const TechnicalSkills = ({ currentLang }) => {
  const content = {
    zh: {
      title: "技能專長"
    },
    en: {
      title: "Technical Skills"
    }
  };

  const skills = [
    'C/C++', 'Python', 'Java', 'C#', 'HTML', 'JavaScript', 'JSX', 'SQL', 'Git',
    'Node.js', 'React.js', 'Django', 'Unity', 'Blender', 'Spin', 'Z3', 'Docker',
    'ML', 'Gen AI', 'Computer vision', 'Rendering', 'VFX', 'Database',
    'Backend development', 'Frontend development', 'Game programming'
  ];

  return (
    <div className="card">
      <h2>
        <div className="section-icon">🛠️</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills; 