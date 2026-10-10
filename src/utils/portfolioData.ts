// Dynamic Portfolio Data & Auto-incrementing Experience Utilities

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'work' | 'personal';
  type: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
  metrics?: string;
  github?: string;
  demo?: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  startDate: string; // e.g., '2024-03-01'
  endDate: string | null; // null means 'Present'
  durationLabel?: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period: string;
  skills: string[];
  description: string;
}

/**
 * Calculates dynamically elapsed years & months between two dates or from a start date to today.
 */
export const calculateExperience = (startDateStr: string, endDateStr: string | null = null) => {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    // get days in previous month
    const prevMonthLastDay = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    days += prevMonthLastDay;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = years * 12 + months;
  const decimalYears = (totalMonths / 12).toFixed(1);

  const formattedYearsMonths = `${years} Year${years !== 1 ? 's' : ''}, ${months} Month${months !== 1 ? 's' : ''}`;
  const formattedExact = `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}, and ${days} day${days !== 1 ? 's' : ''}`;
  const formattedShort = `${years}.${months}+ Years`;
  const formattedCompact = `${years}y ${months}m`;

  return {
    years,
    months,
    days,
    totalMonths,
    decimalYears,
    formattedYearsMonths,
    formattedExact,
    formattedShort,
    formattedCompact,
    formattedDetailed: `${years} yr${years !== 1 ? 's' : ''} ${months} mo${months !== 1 ? 's' : ''}`,
  };
};

/**
 * Career & Datamoo AI start date: March 4, 2024
 */
export const CAREER_START_DATE = '2024-03-04';
export const DATAMOO_START_DATE = '2024-03-04';

// Dynamic Experience stats
export const getDynamicExperienceStats = () => {
  const exp = calculateExperience(CAREER_START_DATE);

  return {
    years: exp.years,
    months: exp.months,
    days: exp.days,
    totalExperienceYears: exp.formattedYearsMonths,
    formattedYearsMonths: exp.formattedYearsMonths,
    formattedExact: exp.formattedExact,
    formattedShort: exp.formattedShort,
    formattedCompact: exp.formattedCompact,
    totalExperienceText: `${exp.formattedYearsMonths} Experience`,
    detailedCareerExp: exp.formattedExact,
    datamooDuration: `Mar 2024 – Present (${exp.formattedExact})`,
    datamooDetailed: exp.formattedExact,
  };
};

// Projects Data from Updated Resume
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ebony-edirect',
    title: 'Ebony E-Direct Dashboard',
    subtitle: 'Investment Management Platform',
    category: 'work',
    type: 'Full Stack Web Platform',
    duration: 'Production',
    description:
      'High-impact investment management platform with separate, secured Admin and Investor portals for portfolio management, performance tracking, dynamic analytics, and reporting.',
    highlights: [
      'Engineered separate Admin and Investor role-based portals with secure route guarding and session controls.',
      'Designed dynamic portfolio management modules with interactive charts for real-time performance tracking.',
      'Optimized client-side rendering for responsive handling of complex financial data sets and metric visualizations.',
      'Streamlined investor onboarding, asset allocation summaries, and downloadable reporting sheets.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST APIs'],
    featured: true,
    metrics: 'Multi-Portal System'
  },
  {
    id: 'greenmark-ecommerce',
    title: 'Greenmark E-Commerce',
    subtitle: 'Organic Product & Inventory Hub',
    category: 'work',
    type: 'Full Stack Web App',
    duration: 'Production',
    description:
      'Comprehensive admin and storefront panel for managing organic product listings, dynamic catalog updates, inventory controls, and order lifecycle management.',
    highlights: [
      'Developed full-stack features using React frontend and FastAPI backend connected to PostgreSQL.',
      'Implemented robust inventory tracking with automated stock alerts and real-time product updates.',
      'Designed responsive admin dashboard for multi-category catalog management, bulk actions, and order status workflows.',
      'Built fast, secure REST API endpoints for customer order querying and sales reports.'
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Python', 'Tailwind CSS'],
    featured: true,
    metrics: 'Live Inventory & Orders'
  },
  {
    id: 'project-pro',
    title: 'Project Pro',
    subtitle: 'Multi-Role Task & Workflow System',
    category: 'work',
    type: 'Full Stack Web App',
    duration: 'Production',
    description:
      'Collaborative task management and team progress tracking system supporting multiple organizational roles, sprint workflows, and milestone monitoring.',
    highlights: [
      'Engineered granular role-based access control (Admin, Manager, Contributor) for secured task distribution.',
      'Created interactive Kanban boards and sprint progress visualization dashboards.',
      'Integrated FastAPI backend services with PostgreSQL database for real-time task status transitions.',
      'Implemented team analytics and deadline notification pipelines for enhanced delivery efficiency.'
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'TypeScript', 'REST APIs'],
    featured: true,
    metrics: 'Role-based Task Engine'
  },
  {
    id: 'coskillz',
    title: 'CoSkillz',
    subtitle: 'Collaborative Learning & Research Platform',
    category: 'work',
    type: 'Full Stack Web App',
    duration: 'Production',
    description:
      'Collaborative learning and research platform supporting multiple user personas with customized knowledge tracks, research tools, and peer interaction.',
    highlights: [
      'Built reactive frontend using React (Vite) and TypeScript for lightning-fast state synchronization.',
      'Crafted multi-persona user journeys tailored for learners, mentors, and research leads.',
      'Integrated FastAPI microservices for dynamic resource indexing and real-time interaction modules.',
      'Implemented interactive module tests, learning path trackers, and resource sharing workspaces.'
    ],
    technologies: ['React (Vite)', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    featured: true,
    metrics: 'Multi-Persona Platform'
  },
  {
    id: 'lawbi',
    title: 'LawBI',
    subtitle: 'Law Firm Management Platform',
    category: 'work',
    type: 'Full Stack Web App',
    duration: 'Production',
    description:
      'Comprehensive law firm operational management platform for end-to-end case tracking, client records, document timelines, and legal workflows.',
    highlights: [
      'Developed modern Vite + React TypeScript user interfaces for case lifecycle and docket management.',
      'Built integrated client directory with contact histories, billing logs, and hearing schedule calendars.',
      'Implemented role-based permissions ensuring confidential case data isolation between staff tiers.',
      'Connected backend APIs for automated document generation and status audit trails.'
    ],
    technologies: ['React (Vite)', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    featured: false,
    metrics: 'Case & Client Management'
  },
  {
    id: 'faceviz',
    title: 'FaceViz',
    subtitle: 'Smart Attendance & Expense Tracking',
    category: 'work',
    type: 'Web Application',
    duration: 'Production',
    description:
      'Automated attendance management platform featuring expense auditing, facial verification tracking, and live monitoring dashboards.',
    highlights: [
      'Built dynamic attendance logging workflows with Django backend and relational database design.',
      'Designed expense claim submission, receipt verification, and manager approval pipelines.',
      'Implemented live tracking dashboards with automated monthly attendance and reimbursement reports.',
      'Structured modular Django apps with scalable models and clean template/API interfaces.'
    ],
    technologies: ['Django', 'Python', 'SQLite / PostgreSQL', 'Bootstrap', 'REST API'],
    featured: false,
    metrics: 'Live Attendance & Expense'
  },
  {
    id: 'notes-app',
    title: 'Notes App (Personal)',
    subtitle: 'Next.js & FastAPI Cloud Workspace',
    category: 'personal',
    type: 'Full Stack Cloud App',
    duration: 'Personal Project',
    description:
      'Feature-packed note-taking and knowledge organization application with JWT authentication, markdown editor, instant search, and categorized collections.',
    highlights: [
      'Constructed modern frontend with Next.js and React featuring server-side rendering and responsive design.',
      'Implemented secure JWT user authentication and authorization with FastAPI backend.',
      'Designed flexible schema in MongoDB for dynamic rich-text note blocks, tags, and category hierarchies.',
      'Added instant client-side full-text search, dark/light themes, and export utilities.'
    ],
    technologies: ['Next.js', 'React', 'FastAPI', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    metrics: 'Auth & CRUD Cloud Suite',
    github: 'https://github.com/Rithick2024'
  }
];

// Work Experience
export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    company: 'Datamoo AI',
    position: 'Full Stack Developer',
    startDate: '2024-03-01',
    endDate: null, // Present
    location: 'Chennai, India',
    description:
      'Leading full stack web development across multiple client products, architecting responsive frontend interfaces and high-performance backend REST APIs.',
    achievements: [
      'Develop full stack web applications using React.js (TypeScript) on the frontend and FastAPI with PostgreSQL on the backend.',
      'Integrate REST APIs and build role-based admin and user portals across multiple client products.',
      'Analyse and deliver change requests, covering both feature enhancements and defect fixes with comprehensive impact analysis.',
      'Collaborate with cross-functional teams across the complete project lifecycle from requirement gathering to production rollout.',
      'Optimize database queries and schema relations in PostgreSQL for smooth operational performance.'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'FastAPI',
      'PostgreSQL',
      'Django',
      'REST APIs',
      'Tailwind CSS'
    ]
  }
];

// Education
export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Bachelor of Engineering',
    period: '2020 – 2024',
    score: '7.91 / 10',
    scoreLabel: 'CGPA',
    location: 'Chennai, India',
    description:
      'Rigorous engineering curriculum focused on software architecture, algorithms, data structures, database systems, and modern web application development.',
    highlights: [
      'Achieved a CGPA of 7.91/10 with strong coursework in Data Structures, Database Management, and Web Technologies.',
      'Built multiple full-stack academic and capstone web applications.',
      'Active participant in coding challenges and tech seminars.'
    ]
  },
  {
    degree: 'Class XII (Higher Secondary)',
    institution: 'Higher Secondary Education',
    period: '2018 – 2020',
    score: '64.83%',
    scoreLabel: 'Percentage',
    location: 'Tamil Nadu, India',
    description:
      'Completed Higher Secondary education with core focus on Mathematics, Physics, and analytical problem-solving.',
    highlights: [
      'Developed strong foundation in mathematical reasoning and logical analysis.'
    ]
  },
  {
    degree: 'Class X (Secondary School)',
    institution: 'Secondary School Education',
    period: '2016 – 2018',
    score: '92%',
    scoreLabel: 'Percentage',
    location: 'Tamil Nadu, India',
    description:
      'Completed secondary schooling with distinction and exemplary academic performance.',
    highlights: [
      'Secured 92% overall grade demonstrating consistent academic diligence and foundational excellence.'
    ]
  }
];

// Certifications
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Web Development Certification',
    issuer: 'Ravvysoft Technologies',
    period: 'Dec 2023 – Feb 2024',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Responsive UI'],
    description:
      'Intensive hands-on certification program mastering modern web application development, DOM manipulation, asynchronous JavaScript, and React component lifecycle architecture.'
  }
];

// Technical Skills Categories
export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    color: 'blue',
    skills: [
      { name: 'React.js', level: 95, tag: 'Core' },
      { name: 'TypeScript', level: 90, tag: 'Core' },
      { name: 'Next.js', level: 88, tag: 'Framework' },
      { name: 'JavaScript (ES6+)', level: 92, tag: 'Language' },
      { name: 'HTML5 & CSS3', level: 96, tag: 'Markup' },
      { name: 'Tailwind CSS', level: 92, tag: 'Styling' },
      { name: 'Bootstrap', level: 85, tag: 'Styling' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    color: 'green',
    skills: [
      { name: 'FastAPI', level: 90, tag: 'Core Backend' },
      { name: 'Django', level: 85, tag: 'Framework' },
      { name: 'Python', level: 88, tag: 'Language' },
      { name: 'REST API Design', level: 92, tag: 'Architecture' },
      { name: 'Role-based Auth & JWT', level: 88, tag: 'Security' }
    ]
  },
  {
    id: 'database',
    title: 'Database & Storage',
    color: 'purple',
    skills: [
      { name: 'PostgreSQL', level: 88, tag: 'Primary RDBMS' },
      { name: 'MongoDB', level: 80, tag: 'NoSQL' },
      { name: 'Database Modeling', level: 85, tag: 'Design' },
      { name: 'Query Optimization', level: 82, tag: 'Performance' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Development Ecosystem',
    color: 'orange',
    skills: [
      { name: 'Git & GitHub', level: 90, tag: 'VCS' },
      { name: 'Postman', level: 92, tag: 'API Testing' },
      { name: 'VS Code & Copilot', level: 95, tag: 'IDE' },
      { name: 'Antigravity & Cursor', level: 92, tag: 'AI Dev' },
      { name: 'Vite & Webpack', level: 86, tag: 'Bundlers' }
    ]
  }
];

/**
 * Helper to get unique technologies count dynamically
 */
export const getUniqueTechnologiesCount = () => {
  const techSet = new Set<string>();
  PROJECTS_DATA.forEach((p) => p.technologies.forEach((t) => techSet.add(t.trim())));
  SKILL_CATEGORIES.forEach((c) => c.skills.forEach((s) => techSet.add(s.name.trim())));
  return `${techSet.size}+`;
};
