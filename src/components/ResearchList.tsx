import { useState, useMemo } from 'react';
import { ARTICLES } from '../lib/articles';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { Container } from './layout/Container';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';

const ARTICLES_PER_PAGE = 3;

export default function ResearchList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ARTICLES.length / ARTICLES_PER_PAGE);

  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    return ARTICLES.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo('#research-grid', { offset: -120, duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 min-h-screen" style={{ backgroundColor: 'var(--ne-bg)' }}>
      <Container>
        <SectionTitle
          subtitle="Research Lab"
          title="Deep Dives into Neuromorphic Engineering"
        />

        <div id="research-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {currentArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
              >
                <Link to={`/research/${article.id}`} className="group block h-full">
                  <Card className="h-full flex flex-col group-hover:border-[var(--ne-border-accent)] transition-all overflow-hidden !p-0">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 backdrop-blur-md border border-[var(--ne-border)] text-[10px] font-mono uppercase tracking-widest rounded"
                          style={{ backgroundColor: 'var(--ne-glass)', color: 'var(--ne-accent)' }}
                        >
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 mb-4 text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {article.author}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--ne-accent)] transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-sm font-light mb-6 line-clamp-3" style={{ color: 'var(--ne-text-muted)' }}>
                        {article.subtitle}
                      </p>

                      <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--ne-border)' }}>
                        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>{article.date}</span>
                        <span className="flex items-center gap-2 text-xs font-mono group-hover:translate-x-1 transition-transform" style={{ color: 'var(--ne-accent)' }}>
                          Read Article <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 pt-8" style={{ borderTop: '1px solid var(--ne-border)' }}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className="w-10 h-10 rounded-lg font-mono text-xs transition-all focus-ring"
                    style={{
                      backgroundColor: currentPage === pageNum ? 'var(--ne-accent)' : 'rgba(var(--ne-accent-rgb), 0.05)',
                      color: currentPage === pageNum ? 'var(--ne-bg)' : 'var(--ne-text-muted)',
                      fontWeight: currentPage === pageNum ? 700 : 400,
                    }}
                  >
                    {pageNum.toString().padStart(2, '0')}
                  </button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="gap-2"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
