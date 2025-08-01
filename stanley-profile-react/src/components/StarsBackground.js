import React, { useEffect, useRef } from 'react';

const StarsBackground = () => {
  const starsContainerRef = useRef(null);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;
    const numStars = 200; // 減少星星數量

    // 清除現有的星星
    starsContainer.innerHTML = '';

    // 創建星星
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 減少動畫時間
      star.style.width = (Math.random() * 2 + 2) + 'px'; // 隨機大小
      star.style.height = star.style.width;
      starsContainer.appendChild(star);
    }
  }, []);

  return <div id="stars-container" ref={starsContainerRef}></div>;
};

export default StarsBackground; 