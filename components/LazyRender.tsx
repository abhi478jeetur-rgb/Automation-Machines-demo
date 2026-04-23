'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function LazyRender({ 
  children, 
  minHeight = '100vh' 
}: { 
  children: React.ReactNode; 
  minHeight?: string; 
}) {
  const [isRendered, setIsRendered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRendered(true);
          observer.disconnect();
        }
      },
      // Load content when it's 400px away from the viewport to avoid flickering
      { rootMargin: '400px' } 
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isRendered ? 'auto' : minHeight }} className="w-full">
      {isRendered ? children : null}
    </div>
  );
}
