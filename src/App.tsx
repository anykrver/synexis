/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import Hero from './components/sections/Hero';
import Technology from './components/sections/Technology';
import ArchitectureOverview from './components/sections/ArchitectureOverview';
import Performance from './components/sections/Performance';
import DevicePhysics from './components/sections/DevicePhysics';
import EdgeAI from './components/sections/EdgeAI';
import Applications from './components/sections/Applications';
import Roadmap from './components/sections/Roadmap';
import Research from './components/sections/Research';
import CTA from './components/sections/CTA';
import ResearchList from './components/ResearchList';
import ArticleDetail from './components/ArticleDetail';
import AboutPage from './components/AboutPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Technology />
      <ArchitectureOverview />
      <Performance />
      <DevicePhysics />
      <EdgeAI />
      <Applications />
      <Roadmap />
      <Research />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen" style={{
          backgroundColor: 'var(--ne-bg)',
          color: 'var(--ne-text)',
          transition: 'background-color 0.4s, color 0.4s',
        }}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/research" element={<ResearchList />} />
              <Route path="/research/:id" element={<ArticleDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}
