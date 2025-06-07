import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  mousePosition: { x: number; y: number };
}

const Cursor: React.FC<CursorProps> = ({ mousePosition }) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, input, textarea, [role="button"], .cursor-pointer');
      setIsHovering(isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-purple-500 rounded-full mix-blend-difference pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-pink-500 rounded-full mix-blend-difference pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />
    </>
  );
};

export default Cursor;