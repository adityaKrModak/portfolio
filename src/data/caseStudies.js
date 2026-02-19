export const caseStudies = {
  dream11: {
    slug: 'dream11',
    title: 'Dream11',
    subtitle: 'Helping Dream11 achieve 600% performance improvement',
    role: 'Senior Software Engineer',
    company: 'Proximity Works',
    duration: 'March 2022 - Present',
    caseStudyUrl: 'https://www.proximity.tech/work/dream11',
    heroGradient: 'linear-gradient(135deg, #e8363680, #ff6b3580)',
    accentColor: '#e83636',
    techStack: ['React Native', 'GraphQL', 'styled-components', 'Lottie'],
    overview:
      'Optimized UI performance for Dream11, India\'s biggest fantasy sports platform with 200M+ users. Focused on rendering performance, authentication flows, and interactive user experiences.',
    challenge:
      'Dream11 needed performance improvements for their mobile app\'s critical user-facing features. The Contest Winners Tab with 1000+ items was experiencing severe rendering lag, especially on low-end devices. Authentication flows needed to be seamless across multiple languages for a diverse global user base.',
    solutions: [
      {
        title: 'Optimized Contest Winners Rendering',
        description:
          'Deployed an optimized nested FlatList architecture that ensures seamless vertical scrolling even with large datasets of 1000+ items. Reduced rendering time from 439ms to just 65ms.',
      },
      {
        title: 'User Authentication Overhaul',
        description:
          'Spearheaded comprehensive authentication processes including registration, login, invite, and OTP verification flows with auto-filling and validation mechanisms.',
      },
      {
        title: 'Advanced Lottie Animations',
        description:
          'Created interactive Lottie animations with custom swipe control, allowing users to control animation progress through gestures — pausing at specific frames and resuming seamlessly.',
      },
      {
        title: 'Multi-Language Support',
        description:
          'Integrated multi-language support throughout authentication processes, ensuring accessibility for a diverse global user base.',
      },
    ],
    metrics: [
      { value: '600%', label: 'Performance Improvement' },
      { value: '170%', label: 'Load Time Improvement' },
      { value: '65ms', label: 'Render Time (from 439ms)' },
      { value: '2GB', label: 'Optimized for Low-End Devices' },
    ],
    impact:
      'The application now remains highly responsive under heavy user load and performs smoothly even on low-end devices with 2GB of RAM. Filter render timings decreased from 300ms to 176ms.',
  },
  habuild: {
    slug: 'habuild',
    title: 'Habuild',
    subtitle: 'Engineering a wellness platform at national scale',
    role: 'Senior Software Engineer',
    company: 'Proximity Works',
    duration: 'March 2022 - Present',
    caseStudyUrl: 'https://www.proximity.tech/work/habuild',
    heroGradient: 'linear-gradient(135deg, #6c5ce780, #a855f780)',
    accentColor: '#6c5ce7',
    techStack: [
      'Node.js',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'Kafka',
      'Kubernetes',
      'AWS',
      'Docker',
    ],
    overview:
      'Habuild is India\'s largest digital yoga community with millions of daily participants. Built and optimized the backend infrastructure to handle massive scale — processing 20M+ events and delivering 1.5 crore messages reliably.',
    challenge:
      'Habuild operated at a scale rarely seen in consumer wellness. They needed a technology partner to re-architect systems for reliability, speed, and scale. The event scheduling system was taking 45 minutes to process 20M events, and the messaging pipeline needed to handle 1.5 crore messages within tight time windows.',
    solutions: [
      {
        title: 'High-Volume Event Scheduling',
        description:
          'Designed and implemented an event scheduling system combining Redis for efficient scheduling with RabbitMQ for message brokering. Achieved 8-10× improvement — reducing processing time for 20M events from 45 minutes to just 5 minutes.',
      },
      {
        title: 'Payment Service Architecture',
        description:
          'Led a team to design and build a full payment service from scratch. Designed the database schema, integrated Razorpay and HDFC payment gateways, and built a paid member subscription system.',
      },
      {
        title: 'Dynamic Filtering Engine',
        description:
          'Architected a configuration-driven filtering system for messaging services that replaces rigid, hardcoded logic. JSON-configured criteria mapped to dedicated validation functions.',
      },
      {
        title: 'Load Testing Infrastructure',
        description:
          'Orchestrated distributed load testing with AWS EKS & k6-operator. Deployed custom Docker images with Prometheus and Grafana for real-time monitoring.',
      },
    ],
    metrics: [
      { value: '20M+', label: 'Events Processed' },
      { value: '5 min', label: 'Processing Time (from 45 min)' },
      { value: '1.5Cr', label: 'Messages Delivered' },
      { value: '10×', label: 'Scheduling Improvement' },
    ],
    impact:
      'Habuild today operates as a national infrastructure for wellness, delivering 1.5 crore messages in under 50 minutes reliably. The platform scales seamlessly to support millions of daily yoga participants.',
  },
  openborder: {
    slug: 'openborder',
    title: 'OpenBorder',
    subtitle: 'Helping OpenBorder scale international marketplaces',
    role: 'Senior Software Engineer',
    company: 'Proximity Works',
    duration: 'March 2022 - Present',
    caseStudyUrl: 'https://www.proximity.studio/work/openborder',
    heroGradient: 'linear-gradient(135deg, #0984e380, #00cec980)',
    accentColor: '#0984e3',
    techStack: ['NestJS', 'PostgreSQL', 'SQL Window Functions'],
    overview:
      'OpenBorder is a cross-border logistics provider that enables entrepreneurs and top brands to grow globally. Built a comprehensive rate card generator and shipping management system processing millions of shipping rates.',
    challenge:
      'OpenBorder\'s sales team needed an efficient way to generate and manage competitive shipping rates across multiple carriers, services, origins, and destinations. The existing process was time-consuming, error-prone, and had limited scalability with poor versioning.',
    solutions: [
      {
        title: 'Advanced Rate Card Generator',
        description:
          'Developed a system capable of processing millions of shipping rates across various parameters. Implemented high-performance SQL queries using window functions for optimal rate retrieval in milliseconds.',
      },
      {
        title: 'Multi-Dimensional Fee Management',
        description:
          'Created a flexible fee structure accommodating shipping fees, platform fees, payment processing fees, fulfillment fees, and custom charges with dynamic surcharge capabilities.',
      },
      {
        title: 'Global Currency Support',
        description:
          'Integrated multi-currency functionality with real-time currency conversion for accurate global pricing across international shipping operations.',
      },
      {
        title: 'Merchant-Centric Design',
        description:
          'Developed multi-merchant support with customizable rate cards, fee structures, and versioning for easy updates and historical tracking.',
      },
    ],
    metrics: [
      { value: 'M+', label: 'Shipping Rates Processed' },
      { value: 'ms', label: 'Query Response Time' },
      { value: 'Multi', label: 'Currency Support' },
      { value: '∞', label: 'Merchant Scalability' },
    ],
    impact:
      'OpenBorder now enables real-time rate comparisons and selections across multiple carriers and services. The platform supports multiple merchants with customizable rate cards and automated fee management.',
  },
};

export const getCaseStudy = (slug) => caseStudies[slug] || null;
export const getAllCaseStudies = () => Object.values(caseStudies);
