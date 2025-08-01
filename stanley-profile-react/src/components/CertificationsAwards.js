import React from 'react';

const CertificationsAwards = ({ currentLang }) => {
  const content = {
    zh: {
      title: "證照與獲獎",
      awsCert: "AWS Solutions Architect",
      awsDesc: "取得AWS解決方案架構師認證，具備雲端服務設計與部署能力。",
      hackathonFirst: "黑客松競賽第一名",
      hackathonOrg: "台灣科技創新大賽",
      hackathonDesc: "團隊開發的智慧家居控制系統獲得評審一致好評，展現了出色的技術實力與創新思維。"
    },
    en: {
      title: "Certifications & Awards",
      awsCert: "AWS Solutions Architect",
      awsDesc: "Obtained AWS Solutions Architect certification, demonstrating cloud service design and deployment capabilities.",
      hackathonFirst: "1st Place in Hackathon",
      hackathonOrg: "Taiwan Tech Innovation Competition",
      hackathonDesc: "The smart home control system developed by the team received unanimous praise from judges, demonstrating excellent technical skills and innovative thinking."
    }
  };

  return (
    <div className="card">
      <h2>
        <div className="section-icon">📜</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <div className="timeline-item">
        <div className="timeline-date">2023</div>
        <div className="timeline-title">{content[currentLang].awsCert}</div>
        <div className="timeline-company">Amazon Web Services</div>
        <div className="timeline-description">{content[currentLang].awsDesc}</div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2021</div>
        <div className="timeline-title">{content[currentLang].hackathonFirst}</div>
        <div className="timeline-company">{content[currentLang].hackathonOrg}</div>
        <div className="timeline-description">{content[currentLang].hackathonDesc}</div>
      </div>
    </div>
  );
};

export default CertificationsAwards; 