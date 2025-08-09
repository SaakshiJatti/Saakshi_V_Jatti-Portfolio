import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    ...options
  };

  const { ref, inView } = useInView(defaultOptions);

  return { ref, inView };
};

export const useScrollRevealBatch = (selector = '.scroll-reveal') => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll(selector);
    scrollElements?.forEach((el) => observer?.observe(el));

    // Cleanup
    return () => {
      scrollElements?.forEach((el) => observer?.unobserve(el));
    };
  }, [selector]);
};

export default useScrollReveal;