import { motion } from 'framer-motion';
import './About.css';

const highlights = [
  {
    icon: '⚡',
    title: 'Performance Obsessed',
    description: 'Achieved 600% performance improvements at Dream11, optimizing for millions of users on low-end devices.',
  },
  {
    icon: '🏗️',
    title: 'System Architecture',
    description: 'Built high-throughput event systems processing 20M+ events, payment services, and rate card engines from scratch.',
  },
  {
    icon: '🌍',
    title: 'Global Scale',
    description: 'Delivered solutions for 200M+ user platforms, multi-currency logistics systems, and nationally-scaled wellness platforms.',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div className="about__header" {...fadeInUp}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            I build systems that{' '}
            <span className="gradient-text">perform at scale</span>
          </h2>
          <p className="section-subtitle">
            Senior Software Engineer with 7+ years of experience crafting high-performance
            applications, scalable backend systems, and exceptional user experiences.
            Currently helping startups and enterprises ship better products at Proximity Works.
          </p>
        </motion.div>

        <div className="about__highlights">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="about__card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <span className="about__card-icon">{item.icon}</span>
              <h3 className="about__card-title">{item.title}</h3>
              <p className="about__card-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
