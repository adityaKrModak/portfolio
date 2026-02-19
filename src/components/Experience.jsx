import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    period: 'Mar 2022 — Present',
    title: 'Senior Software Engineer',
    company: 'Proximity Works',
    description:
      'Leading development on high-impact projects for Dream11, Habuild, and OpenBorder. Optimized UI performance achieving 600% improvements, built national-scale backend systems, and architected payment services.',
    highlights: [
      'Dream11 — 600% performance improvement in React Native app',
      'Habuild — Reduced 20M event processing from 45min to 5min',
      'OpenBorder — Built rate card engine processing millions of shipping rates',
      'Led teams, designed database schemas, integrated payment gateways',
    ],
    technologies: ['React Native', 'Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Kafka', 'AWS', 'Kubernetes'],
  },
  {
    period: 'Jun 2019 — Mar 2022',
    title: 'Program Analyst',
    company: 'Cognizant',
    description:
      'Designed and developed UI functionalities using React with Redux for a global insurance application serving 90M+ users across 60+ countries.',
    highlights: [
      'Built customer report generation features using React/Redux/Material UI',
      'Implemented features using Remix for 90M+ user base across 60+ countries',
      'Led accessibility (WCAG 2.1) compliance for team of 3',
      'Engaged directly with clients for requirement gathering and alignment',
    ],
    technologies: ['React', 'Redux', 'Material UI', 'Remix', 'WCAG 2.1'],
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">made impact</span>
          </h2>
        </motion.div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="experience__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="experience__dot" />
              <div className="experience__card glass-card">
                <span className="experience__period">{exp.period}</span>
                <h3 className="experience__title">{exp.title}</h3>
                <span className="experience__company">{exp.company}</span>
                <p className="experience__desc">{exp.description}</p>
                <ul className="experience__highlights">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="experience__techs">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
