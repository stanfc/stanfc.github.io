import React from 'react';

const LanguageToggle = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="language-toggle">
      <button
        className={`lang-btn ${currentLang === 'zh' ? 'active' : ''}`}
        onClick={() => onLanguageChange('zh')}
      >
        <div className={`icon ${currentLang === 'zh' ? 'pin' : ''}`}></div>
        中文
      </button>
      <button
        className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => onLanguageChange('en')}
      >
        <div className={`icon ${currentLang === 'en' ? 'browser' : ''}`}></div>
        English
      </button>
    </div>
  );
};

export default LanguageToggle; 