import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCaseStudy } from '../data/caseStudies';
import { useEffect } from 'react';
import './CaseStudy.css';

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = getCaseStudy(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="casestudy__notfound">
        <h2>Case study not found</h2>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    );
  }

  return (
    <article className="casestudy">
      {/* Hero */}
      <section
        className="casestudy__hero"
        style={{ background: study.heroGradient }}
      >
        <div className="casestudy__hero-overlay" />
        <div className="container casestudy__hero-content">
          <motion.button
            className="casestudy__back"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="casestudy__hero-label">{study.company} • {study.role}</span>
            <h1 className="casestudy__hero-title">{study.title}</h1>
            <p className="casestudy__hero-subtitle">{study.subtitle}</p>
          </motion.div>

          <motion.div
            className="casestudy__hero-techs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {study.techStack.map((tech) => (
              <span key={tech} className="casestudy__tech-badge">{tech}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="casestudy__metrics">
        <div className="container">
          <div className="casestudy__metrics-grid">
            {study.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="casestudy__metric glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="casestudy__metric-value" style={{ color: study.accentColor }}>
                  {m.value}
                </span>
                <span className="casestudy__metric-label">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="casestudy__section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Overview</span>
            <h2 className="section-title">The Project</h2>
            <p className="casestudy__text">{study.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="casestudy__section casestudy__section--alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">The Challenge</span>
            <h2 className="section-title">Problem Statement</h2>
            <p className="casestudy__text">{study.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="casestudy__section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Solutions</span>
            <h2 className="section-title">How I Solved It</h2>
          </motion.div>

          <div className="casestudy__solutions-grid">
            {study.solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                className="casestudy__solution glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="casestudy__solution-number" style={{ color: study.accentColor }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="casestudy__solution-title">{sol.title}</h3>
                <p className="casestudy__solution-desc">{sol.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="casestudy__section casestudy__section--alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Impact</span>
            <h2 className="section-title">The Results</h2>
            <p className="casestudy__text">{study.impact}</p>
          </motion.div>
        </div>
      </section>

      {/* External Link */}
      <section className="casestudy__section casestudy__cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={study.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Full Case Study on Proximity
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </a>
            <div style={{ marginTop: '16px' }}>
              <Link to="/" className="btn btn-outline">
                ← Back to Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
