import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Function to scroll to top
    const scrollToTop = () => {
      // Method 1: Direct scrollTo (most reliable on mobile)
      window.scrollTo(0, 0);
      
      // Method 2: Scroll document elements (important for mobile)
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
        document.documentElement.scrollLeft = 0;
      }
      
      // Method 3: Scroll body element (fallback for older browsers)
      if (document.body) {
        document.body.scrollTop = 0;
        document.body.scrollLeft = 0;
      }
      
      // Method 4: Use scrollTo with auto behavior (modern browsers)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    };

    // Use multiple requestAnimationFrame calls for mobile compatibility
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
        
        // Double-check after a tiny delay for mobile
        setTimeout(() => {
          scrollToTop();
        }, 10);
      });
    });
  }, [pathname]);

  return null;
}

