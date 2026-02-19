import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    icon: '◧',
    skills: ['React', 'React Native', 'Next.js', 'GraphQL', 'styled-components'],
  },
  {
    title: 'Backend',
    icon: '⬡',
    skills: ['Node.js', 'Express', 'NestJS'],
  },
  {
    title: 'Databases',
    icon: '◉',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    skills: ['AWS', 'Kubernetes', 'Docker', 'AWS Lambda'],
  },
  {
    title: 'Messaging & Infra',
    icon: '⇄',
    skills: ['RabbitMQ', 'Kafka', 'SQS'],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">
            Tools I <span className="gradient-text">work with</span>
          </h2>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skills__category glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="skills__category-header">
                <span className="skills__category-icon">{cat.icon}</span>
                <h3 className="skills__category-title">{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
