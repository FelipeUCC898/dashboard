'use client';

import { ReactNode, useEffect, useState } from 'react';

export function AnimatedBar({ children, index }: { children: ReactNode; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 50);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'bottom',
        transition: `all 0.5s ease-out ${index * 0.05}s`,
      }}
    >
      {children}
    </div>
  );
}
