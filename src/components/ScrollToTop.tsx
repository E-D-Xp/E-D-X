import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
        document.documentElement.scrollLeft = 0;
      }
      
      if (document.body) {
        document.body.scrollTop = 0;
        document.body.scrollLeft = 0;
      }
      
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
        
        setTimeout(() => {
          scrollToTop();
        }, 10);
      });
    });
  }, [pathname]);

  return null;
}

