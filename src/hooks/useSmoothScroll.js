import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    let lenis;

    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis'))?.default;
        
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        // Animation loop
        function raf(time) {
          lenis?.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Handle resize
        const handleResize = () => {
          lenis?.resize();
        };

        window?.addEventListener('resize', handleResize);
        
        return () => {
          window?.removeEventListener('resize', handleResize);
        };
      } catch (error) {
        console.warn('Lenis smooth scroll initialization failed:', error);
      }
    };

    initLenis();

    return () => {
      lenis?.destroy();
    };
  }, []);
};

export default useSmoothScroll;
