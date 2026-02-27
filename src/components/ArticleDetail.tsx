import { useParams, Link, useNavigate } from 'react-router-dom';
import { ARTICLES } from '../lib/articles';
import { Container } from './layout/Container';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { useEffect } from 'react';

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = ARTICLES.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--ne-bg)', color: 'var(--ne-text)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Button onClick={() => navigate('/research')}>Back to Research</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--ne-bg)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/research" className="inline-flex items-center gap-2 hover:text-[var(--ne-accent)] transition-colors font-mono text-xs uppercase tracking-widest mb-12"
            style={{ color: 'var(--ne-text-muted)' }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Research
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="px-3 py-1 border text-[10px] font-mono uppercase tracking-widest rounded-lg mb-6 inline-block"
                style={{
                  backgroundColor: 'rgba(var(--ne-accent-rgb), 0.1)',
                  borderColor: 'rgba(var(--ne-accent-rgb), 0.3)',
                  color: 'var(--ne-accent)',
                }}
              >
                {article.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-8 py-8 mb-12" style={{ borderTop: '1px solid var(--ne-border)', borderBottom: '1px solid var(--ne-border)' }}>
                {[
                  { icon: User, label: 'Author', value: article.author },
                  { icon: Calendar, label: 'Published', value: article.date },
                  { icon: Clock, label: 'Read Time', value: article.readTime },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--ne-border)]"
                      style={{ backgroundColor: 'rgba(var(--ne-accent-rgb), 0.05)' }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: 'var(--ne-text-muted)' }} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--ne-text-dim)' }}>{item.label}</span>
                      <span className="text-sm">{item.value}</span>
                    </div>
                  </div>
                ))}

                <div className="ml-auto">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-3 h-3" /> Share
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-16 rounded-xl overflow-hidden lab-panel p-1">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="markdown-body prose max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            <div className="mt-24 pt-12" style={{ borderTop: '1px solid var(--ne-border)' }}>
              <h3 className="font-mono text-sm uppercase tracking-widest mb-8" style={{ color: 'var(--ne-text-dim)' }}>Continue Reading</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {ARTICLES.filter(a => a.id !== article.id).slice(0, 2).map(a => (
                  <Link key={a.id} to={`/research/${a.id}`} className="group block">
                    <div className="p-6 rounded-xl border border-[var(--ne-border)] group-hover:border-[var(--ne-border-accent)] transition-all"
                      style={{ backgroundColor: 'var(--ne-surface)' }}
                    >
                      <span className="text-[10px] font-mono uppercase tracking-widest mb-2 block" style={{ color: 'var(--ne-accent)' }}>{a.category}</span>
                      <h4 className="text-lg font-semibold group-hover:text-[var(--ne-accent)] transition-colors line-clamp-1">{a.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
