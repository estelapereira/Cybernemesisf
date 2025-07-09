import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-cyan-bright to-green-aqua text-blue-dark-nearly-black p-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-bright/25 transition-all duration-200 transform hover:scale-110 animate-float"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;