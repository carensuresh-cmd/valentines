
import React from 'react';

const ElegantBackground: React.FC = () => {
  const emojis = ['🎀', '🥂', '🍰', '💌', '💄', '👠', '☕', '🥐', '🧸', '🌸', '✨', '☁️'];
  
  const elements = Array.from({ length: 15 }).map((_, i) => ({
    text: emojis[i % emojis.length],
    size: 16 + Math.random() * 20,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 5 + Math.random() * 7,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      {elements.map((el, idx) => (
        <div
          key={idx}
          className="absolute transition-all duration-1000 ease-in-out select-none"
          style={{
            top: el.top,
            left: el.left,
            fontSize: `${el.size}px`,
            animation: `elegant-float ${el.duration}s infinite ease-in-out`,
            animationDelay: `${el.delay}s`,
          }}
        >
          {el.text}
        </div>
      ))}
      <style>{`
        @keyframes elegant-float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-30px) rotate(10deg); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default ElegantBackground;
