import React from 'react';

const WorkExperience = ({ currentLang }) => {
  const content = {
    zh: {
      title: "工作經歷",
      date: "2025.6 - 至今",
      position: "生成式AI工程師實習生",
      company: "思邁智能股份有限公司",
      description: `- 負責開發 RAG 以及 AI Agent 平台應用，及其他延伸功能開發<br>
                  - 為系統加上 Dataset 題庫管理及測試功能<br>
                  - 為系統加上預設 image generation 功能<br>
                  - 解決其他 bug 以及系統優化<br>`
    },
    en: {
      title: "Work Experience",
      date: "2025.6 - Present",
      position: "Generative AI Engineer Intern",
      company: "MaiAgent Co., Ltd.",
      description: `- Responsible for developing RAG and AI Agent platform applications, and other extended function development<br>
                  - Add Dataset management and test function to the system<br>
                  - Add default image generation function to the system<br>
                  - Solve other bugs and optimize the system.`
    }
  };

  return (
    <div className="card">
      <h2>
        <div className="section-icon">💼</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <div className="timeline-item">
        <div className="timeline-date">{content[currentLang].date}</div>
        <div className="timeline-title">{content[currentLang].position}</div>
        <div className="timeline-company">{content[currentLang].company}</div>
        <div 
          className="timeline-description"
          dangerouslySetInnerHTML={{ __html: content[currentLang].description }}
        />
      </div>
    </div>
  );
};

export default WorkExperience; 