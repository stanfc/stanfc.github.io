import React from 'react';

const Experience = ({ currentLang }) => {
  const content = {
    zh: {
      title: "經驗",
      vfx: "視覺特效",
      vfxContent: `- 實作照片對齊與HDR演算法<br>
                  - 實作特徵匹配與圖像融合演算法<br>
                  - 使用Blender製作影片<br>`,

      machineLearning: "機器學習",
      mlContent: `- 實作多種機器學習演算法<br>
                  - 參與MLB賽果預測專案 (kaggle競賽)<br>`,
      gameProgramming: "遊戲程式設計",
      gpContent: `- 參與CAGED遊戲開發<br>
                  - 參與CAGED遊戲開發<br>`,
      specialTopicResearch: "專題研究",
      strContent: `- 使用Diffusion Model的深度估計來消除高斯潑濺模型中的噪聲<br>
                  - 使用機器學習分類YouTube評論的正負面情緒並轉化為詞雲<br>`,
      sideQuest: "支線任務",
      sqContent: `- 使用機器學習分類YouTube評論的正負面情緒並轉化為詞雲<br>`,
    },
    en: {
      title: "EXPERIENCE",
      vfx: "VFX",
      vfxContent: `- Implement photo alignment and HDR algorithm<br>
                  - Implement feature matching and blending algorithm<br>
                  - Use blender to make video<br>`,
      machineLearning: "Machine Learning",
      mlContent: `- Implement multiple machine learning algorithm<br>
                  - Attend in a MLB result forcasting project (kaggle competition)<br>`,
      gameProgramming: "Game Programming",
      gpContent: `- Attend in CAGED game development<br>
                  - Attend in CAGED game development<br>`,
      specialTopicResearch: "Special Topic Research",
      strContent: `- Using depth estimation from diffusion model to eliminate noises in gaussian splatting model<br>
                  - Use Machine learning to classify positive/negative YouTube comment and turn them into word clouds.<br>`,
      sideQuest: "Side Quest",
      sqContent: `- Use Machine learning to classify positive/negative YouTube comment and turn them into word clouds.<br>`,
    }
  };

  return (
    <div className="card">
      <h2>
        <div className="section-icon">🏆</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <div className="timeline-item">
        <div className="timeline-date">Date</div>
        <div className="timeline-title">{content[currentLang].vfx}</div>
        <div className="timeline-description">
          <div dangerouslySetInnerHTML={{ __html: content[currentLang].vfxContent }} />
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">Date</div>
        <div className="timeline-title">{content[currentLang].machineLearning}</div>
        <div className="timeline-description">
          <div dangerouslySetInnerHTML={{ __html: content[currentLang].mlContent }} />
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">Date</div>
        <div className="timeline-title">{content[currentLang].gameProgramming}</div>
        <div className="timeline-description">
          <div dangerouslySetInnerHTML={{ __html: content[currentLang].gpContent }} />
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">Date</div>
        <div className="timeline-title">{content[currentLang].specialTopicResearch}</div>
        <div className="timeline-description">
          <div dangerouslySetInnerHTML={{ __html: content[currentLang].strContent }} />
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">Date</div>
        <div className="timeline-title">{content[currentLang].sideQuest}</div>
        <div className="timeline-description">
          <div dangerouslySetInnerHTML={{ __html: content[currentLang].sqContent }} />
        </div>
      </div>
    </div>
  );
};

export default Experience; 