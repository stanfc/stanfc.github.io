import React from 'react';

const AboutMe = ({ currentLang }) => {
  const content = {
    zh: {
      title: "關於我",
      text: `我是陳璿修，來自國立臺灣大學資訊工程學系，我曾經修習過機器學習、視覺特效（VFX）及遊戲設計等課程，
            並熟悉使用 C/C++、Python、Git、Blender、Unity 等開發工具。此外，也曾自學前端與後端程式開發以及網頁爬蟲相關主題，並實作了一份相關專案。

            <br><br>我是一個學習能力快的人，我習慣透過網路資源持續學習新知，並實際應用在程式開發上。而在個性方面，我是個很隨和的人。
            也因為過去在系學會與學生社團的經驗，使我對有效溝通與人際互動有相當深刻的理解，在工作上會是我的一大優勢。`
    },
    en: {
      title: "About Me",
      text: `I'm from the Department of Computer Science and Information Engineering in NTU. 
            I've study course like machine learning, VFX, game programming etc. 
            And managed to utilize tools like c/c++, python, git, blender, Unity etc. 
            Further more, I learn some topic sort of frontend, backend programming and web scrapying. 
            <br><br>I will describe myself as a fast learner. I constantly learn new knowledge from internet resources and utilize them in real life programing. 
            When it comes to personality, I will describe myself as a easygoing person. 
            And I have a deep understanding of the keys to effective communication and interpersonal relationships due to the experiences in departmental association and student clubs.`
    }
  };

  return (
    <div className="card full-width">
      <h2>
        <div className="section-icon">👨‍💻</div>
        <span>{content[currentLang].title}</span>
      </h2>
      <p 
        className="about-text" 
        dangerouslySetInnerHTML={{ __html: content[currentLang].text }}
      />
    </div>
  );
};

export default AboutMe; 