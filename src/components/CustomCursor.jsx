import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const smoothMove = () => {
      setSmoothPosition(prev => {
        const deltaX = (cursorPosition.x - prev.x) * 0.1;
        const deltaY = (cursorPosition.y - prev.y) * 0.1;

        return {
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        };
      });
    };

    const interval = setInterval(smoothMove, 16);

    return () => clearInterval(interval);
  }, [cursorPosition]);

  return (
    <div
      className={`fixed w-2 h-2 bg-orange-100 rounded-full pointer-events-none  -translate-x-1/2 -translate-y-1/2 `}
      style={{
        left: `${smoothPosition.x}px`,
        top: `${smoothPosition.y}px`,
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
