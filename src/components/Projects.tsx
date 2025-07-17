import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Code, Smartphone, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "InfoNet Comm - CRM & Customer Payment",
      category: "work",
      type: "Web + Mobile",
      duration: "Apr 2024 - Jul 2024",
      description: "A comprehensive CRM system with web portal for tower lead management and mobile app for customer payments. Built with React.js for web interface and Flutter for mobile application.",
      technologies: ["React.js", "Flutter", "FastAPI", "PostgreSQL"],
      features: [
        "Tower lead management system",
        "Customer payment processing",
        "Real-time data synchronization",
        "Mobile-first design for payments"
      ],
      icon: <Smartphone size={24} />
    },
    {
      id: 2,
      title: "Greenmark - E-Commerce Platform",
      category: "work",
      type: "Web Application",
      duration: "Aug 2024 - Nov 2024",
      description: "Admin panel for managing organic product listings and inventory. Features comprehensive product management, order tracking, and inventory control systems.",
      technologies: ["React.js", "FastAPI", "PostgreSQL", "Material-UI"],
      features: [
        "Product catalog management",
        "Inventory tracking system",
        "Order management dashboard",
        "Analytics and reporting"
      ],
      icon: <Globe size={24} />
    },
    {
      id: 3,
      title: "Project Pro - Project Management",
      category: "work",
      type: "Web Application",
      duration: "Dec 2024 - Feb 2025",
      description: "Task management system with multiple user roles and progress tracking. Includes project planning, team collaboration, and performance monitoring features.",
      technologies: ["React.js", "FastAPI", "PostgreSQL", "Chart.js"],
      features: [
        "Multi-role user management",
        "Task assignment and tracking",
        "Progress visualization",
        "Team collaboration tools"
      ],
      icon: <Code size={24} />
    },
    {
      id: 4,
      title: "FaceViz - Attendance Management",
      category: "work",
      type: "Web Application",
      duration: "Mar 2025 - May 2025",
      description: "Modern attendance management system with expense tracking and live tracking capabilities. Built with Django framework for robust backend functionality.",
      technologies: ["Django", "Python", "SQLite", "Bootstrap"],
      features: [
        "Facial recognition attendance",
        "Expense tracking module",
        "Live location tracking",
        "Comprehensive reporting"
      ],
      icon: <Globe size={24} />
    },
    {
      id: 5,
      title: "CoSkillz - Learning Platform",
      category: "work",
      type: "Web Application",
      duration: "Jun 2025 - Current",
      description: "Collaborative learning platform with multiple personas and research capabilities. Features interactive learning modules, peer collaboration, and research tools.",
      technologies: ["React.js", "TypeScript", "FastAPI", "PostgreSQL"],
      features: [
        "Multi-persona learning paths",
        "Collaborative research tools",
        "Interactive learning modules",
        "Progress tracking and analytics"
      ],
      icon: <Code size={24} />
    },
    {
      id: 6,
      title: "Notes Taking Web App",
      category: "personal",
      type: "Web Application",
      duration: "Jan 2024 - Mar 2024",
      description: "Modern note-taking application with user authentication and CRUD operations. Features rich text editing, categorization, and search functionality.",
      technologies: ["Next.js", "TypeScript", "React.js", "FastAPI", "MongoDB"],
      features: [
        "Rich text editor",
        "User authentication",
        "Note categorization",
        "Search and filter functionality"
      ],
      icon: <Code size={24} />,
      github: "https://github.com/Rithick2024",
      demo: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'work', label: 'Work Projects', count: projects.filter(p => p.category === 'work').length },
    { id: 'personal', label: 'Personal Projects', count: projects.filter(p => p.category === 'personal').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A showcase of my work and contributions to various projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {projects.filter(p => p.category === 'work').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Work Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {projects.filter(p => p.category === 'personal').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Personal Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies Used</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;