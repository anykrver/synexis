import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links for consistent easing
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        lenis.scrollTo(anchor.hash, {
          offset: -80, // Offset for fixed navbar
          duration: 1.2,
          easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Add lenis class to html for CSS integration
    document.documentElement.classList.add('lenis');
    document.documentElement.classList.add('lenis-smooth');

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.classList.remove('lenis');
      document.documentElement.classList.remove('lenis-smooth');
    };
  }, []);

  return <>{children}</>;
}
