import { useState } from 'react';
import { Sun, Moon, Menu, X, Github } from 'lucide-react';
import Logo from '@/src/components/ui/Logo';
import { NAV_LINKS } from '@/src/lib/constants';
import { Button } from '@/src/components/ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/src/lib/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { theme, toggleTheme } = useTheme();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (isHome && href.startsWith('#')) {
      e.preventDefault();
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(href, {
          offset: -80,
          duration: 1.2,
          easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[var(--ne-border)] px-6 py-3 flex items-center justify-between backdrop-blur-xl"
      style={{ backgroundColor: 'var(--ne-glass)' }}
    >
      <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
        <Logo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        <span className="font-display font-bold text-lg tracking-wide text-[var(--ne-text-headline)]">
          NeuraEdge
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={isHome ? link.href : `/${link.href}`}
            onClick={(e) => handleScroll(e, link.href)}
            className="px-4 py-2 text-sm text-[var(--ne-text-muted)] hover:text-[var(--ne-text-headline)] transition-colors rounded-lg hover:bg-[var(--ne-surface-hover)] focus-ring"
          >
            {link.label}
          </a>
        ))}
        <Link
          to="/research"
          className={`px-4 py-2 text-sm rounded-lg transition-colors hover:bg-[var(--ne-surface-hover)] focus-ring ${location.pathname.startsWith('/research')
            ? 'text-[var(--ne-accent)]'
            : 'text-[var(--ne-text-muted)] hover:text-[var(--ne-text-headline)]'
            }`}
        >
          Research
        </Link>
        <Link
          to="/about"
          className={`px-4 py-2 text-sm rounded-lg transition-colors hover:bg-[var(--ne-surface-hover)] focus-ring ${location.pathname === '/about'
            ? 'text-[var(--ne-accent)]'
            : 'text-[var(--ne-text-muted)] hover:text-[var(--ne-text-headline)]'
            }`}
        >
          About
        </Link>

        <div className="w-[1px] h-6 bg-[var(--ne-border)] mx-2" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-[var(--ne-text-muted)] hover:text-[var(--ne-text-headline)] hover:bg-[var(--ne-surface-hover)] transition-all focus-ring"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === 'dark' ? (
              <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Sun className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Moon className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <a
          href="https://github.com/anykrver/reram-simulation"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-[var(--ne-text-muted)] hover:text-[var(--ne-text-headline)] hover:bg-[var(--ne-surface-hover)] transition-all focus-ring"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>

      {/* Mobile: theme toggle + menu */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-[var(--ne-text-muted)] hover:text-[var(--ne-text-headline)] transition-all focus-ring"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full border-b border-[var(--ne-border)] overflow-hidden md:hidden"
            style={{ backgroundColor: 'var(--ne-bg)' }}
          >
            <div className="flex flex-col p-6 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="px-4 py-3 text-sm text-[var(--ne-text-muted)] hover:text-[var(--ne-text-headline)] hover:bg-[var(--ne-surface-hover)] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/research"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm rounded-lg transition-colors hover:bg-[var(--ne-surface-hover)] ${location.pathname.startsWith('/research') ? 'text-[var(--ne-accent)]' : 'text-[var(--ne-text-muted)]'
                  }`}
              >
                Research
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm rounded-lg transition-colors hover:bg-[var(--ne-surface-hover)] ${location.pathname === '/about' ? 'text-[var(--ne-accent)]' : 'text-[var(--ne-text-muted)]'
                  }`}
              >
                About
              </Link>
              <a
                href="https://github.com/anykrver/reram-simulation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm text-[var(--ne-text-muted)] hover:text-[var(--ne-text-headline)] hover:bg-[var(--ne-surface-hover)] rounded-lg transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
