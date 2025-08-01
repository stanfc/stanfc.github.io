import React, { useState, useEffect } from 'react';
import './styles/index.css';
import LanguageToggle from './components/LanguageToggle';
import StarsBackground from './components/StarsBackground';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import CertificationsAwards from './components/CertificationsAwards';

function App() {
  const [currentLang, setCurrentLang] = useState('zh');

  useEffect(() => {
    // 從 localStorage 獲取語言設定，預設為中文
    const savedLang = localStorage.getItem('lang') || 'zh';
    setCurrentLang(savedLang);
    
    // 更新頁面標題
    document.title = currentLang === 'zh' ? '陳璿修 - 個人履歷' : 'Stanley Chen - Resume';
  }, [currentLang]);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('lang', lang);
    document.title = lang === 'zh' ? '陳璿修 - 個人履歷' : 'Stanley Chen - Resume';
  };

  return (
    <div className="App">
      <StarsBackground />
      <LanguageToggle 
        currentLang={currentLang} 
        onLanguageChange={handleLanguageChange} 
      />
      
      <div className="container">
        <Header currentLang={currentLang} />
        
        <div className="main-content">
          <AboutMe currentLang={currentLang} />
          <Education currentLang={currentLang} />
          <WorkExperience currentLang={currentLang} />
          <TechnicalSkills currentLang={currentLang} />
          <Experience currentLang={currentLang} />
          <CertificationsAwards currentLang={currentLang} />
        </div>
      </div>
    </div>
  );
}

export default App;
