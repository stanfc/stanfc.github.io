import React from 'react';

const Header = ({ currentLang }) => {
  const content = {
    zh: {
      title: "後端工程師",
      location: "臺北市，臺灣"
    },
    en: {
      title: "Backend Engineer", 
      location: "Taipei, Taiwan"
    }
  };

  return (
    <header className="header">
      <img 
        src="/profile_image.jpg" 
        alt="Profile" 
        className="profile-img"
        loading="eager"
        decoding="async"
      />
      <h1 className="name">陳璿修</h1>
      <p className="title">{content[currentLang].title}</p>
      <div className="contact-info">
        <div className="contact-item">
          <span>📧</span>
          <span>bestshaw5@gmail.com</span>
        </div>
        <div className="contact-item">
          <span>📱</span>
          <span>+886 910-353-302</span>
        </div>
        <div className="contact-item">
          <span>📍</span>
          <span>{content[currentLang].location}</span>
        </div>
        <div className="contact-item">
          <span>🔗</span>
          <span>github.com/stanfc</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 