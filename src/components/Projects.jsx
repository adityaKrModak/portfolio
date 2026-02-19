import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAllCaseStudies } from '../data/caseStudies';
import './Projects.css';

export default function Projects() {
  const projects = getAllCaseStudies();

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">
            Projects that <span className="gradient-text">moved the needle</span>
          </h2>
          <p className="section-subtitle">
            Deep dives into the systems I've built — from performance-critical mobile apps
            to national-scale backend architectures.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={`/case-study/${project.slug}`} className="projects__card glass-card">
                <div
                  className="projects__card-banner"
                  style={{ background: project.heroGradient }}
                >
                  <span className="projects__card-logo">{project.title}</span>
                </div>
                <div className="projects__card-body">
                  <span className="projects__card-role">{project.role}</span>
                  <h3 className="projects__card-title">{project.subtitle}</h3>
                  <p className="projects__card-desc">{project.overview}</p>

                  <div className="projects__card-metrics">
                    {project.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className="projects__metric">
                        <span className="projects__metric-value">{m.value}</span>
                        <span className="projects__metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="projects__card-techs">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="projects__card-cta">
                    View Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
