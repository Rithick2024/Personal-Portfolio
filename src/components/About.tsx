import React from 'react';
import { Code2, Server, Database, Layers, CheckCircle2, Award, Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { getDynamicExperienceStats, PROJECTS_DATA, getUniqueTechnologiesCount } from '../utils/portfolioData';

const About: React.FC = () => {
  const expStats = getDynamicExperienceStats();

  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Engineering",
      description: "React.js, Next.js, and TypeScript with clean component architecture, responsive layouts, and reactive state management.",
      color: "from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 border-blue-500/20"
    },
    {
      icon: <Server size={24} />,
      title: "Backend & REST APIs",
      description: "FastAPI and Django microservices, high-performance REST integrations, JWT authentication, and role-based security.",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
    },
    {
      icon: <Database size={24} />,
      title: "Database Architecture",
      description: "PostgreSQL schema design, indexing, relational modeling, complex querying, and MongoDB document storage.",
      color: "from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border-purple-500/20"
    },
    {
      icon: <Layers size={24} />,
      title: "Delivery & Impact",
      description: "Change-request analysis, defect resolution, performance tuning, and cross-functional team delivery.",
      color: "from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border-amber-500/20"
    }
  ];

  const stats = [
    { number: expStats.formattedCompact, label: "Work Experience", sublabel: expStats.formattedYearsMonths },
    { number: `${PROJECTS_DATA.length}+`, label: "Projects Completed", sublabel: "Production & Personal" },
    { number: getUniqueTechnologiesCount(), label: "Technologies Mastered", sublabel: "Modern Full-Stack" },
    { number: "7.91", label: "Engineering CGPA", sublabel: "B.E. Computer Science" }
  ];

  const milestones = [
    {
      title: "Full Stack Developer",
      organization: "Datamoo AI",
      period: "Mar 2024 – Present",
      durationTag: expStats.formattedExact,
      location: "Chennai, India · Full-Time",
      icon: <Briefcase size={16} className="text-white" />,
      iconBg: "bg-blue-600",
      description: "Developing production-grade full stack web applications using React.js (TypeScript) on the frontend and FastAPI with PostgreSQL on the backend. Integrating REST APIs, building role-based admin and user portals, and delivering change requests with end-to-end impact assessment.",
      tags: ['React.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Django', 'REST APIs', 'Tailwind CSS']
    },
    {
      title: "Web Development Certification",
      organization: "Ravvysoft Technologies",
      period: "Dec 2023 – Feb 2024",
      durationTag: "Certified",
      location: "Professional Training",
      icon: <Award size={16} className="text-white" />,
      iconBg: "bg-emerald-600",
      description: "Completed intensive technical certification program in HTML5/CSS3, modern JavaScript (ES6+), React.js component lifecycle, responsive web styling, and frontend architectures.",
      tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'DOM Manipulation']
    },
    {
      title: "B.E. Computer Science and Engineering",
      organization: "Bachelor of Engineering",
      period: "2020 – 2024",
      durationTag: "CGPA: 7.91 / 10",
      location: "Chennai, India",
      icon: <GraduationCap size={16} className="text-white" />,
      iconBg: "bg-purple-600",
      description: "Graduated with 7.91 CGPA, gaining deep theoretical and practical knowledge in Software Engineering, Data Structures & Algorithms, Database Management Systems, and Web Application Architecture.",
      tags: ['Algorithms', 'DBMS', 'Software Engineering', 'Full Stack Development']
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50/60 dark:bg-gray-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Transforming Ideas into <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Production Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            A dedicated Full Stack Developer specialized in building scalable, role-based dashboards and database-driven web applications.
          </p>
        </div>

        {/* Top Grid: Bio + Highlights */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Bio text & Quick Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-7 shadow-lg border border-gray-100 dark:border-gray-700/60 backdrop-blur-sm space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Full Stack Developer with <span className="text-blue-600 dark:text-blue-400">{expStats.formattedYearsMonths}</span> of High-Impact Experience
              </h3>
              
              <div className="space-y-3.5 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I build production-grade web applications utilizing <strong className="text-gray-900 dark:text-white">React, TypeScript, Next.js, FastAPI, and PostgreSQL</strong>. Currently working at <strong className="text-blue-600 dark:text-blue-400">Datamoo AI</strong> since March 2024, I focus on engineering end-to-end full-stack architectures that power client portals, administrative dashboards, and enterprise tools.
                </p>
                <p>
                  My core strengths lie in designing intuitive role-based admin and user portals, crafting resilient RESTful APIs, and implementing database-backed features. I have a proven track record of handling change requests—both feature enhancements and defect fixes—with thorough impact assessment.
                </p>
                <p>
                  As an enthusiastic pair-programmer and collaborative engineer, I work smoothly with cross-functional teams to deliver scalable, maintainable, and high-performance software.
                </p>
              </div>

              {/* Core Strengths Bullet List */}
              <div className="pt-2 grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                  <span>Role-Based Portals & Auth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                  <span>FastAPI & PostgreSQL Backend</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                  <span>React & TypeScript Frontend</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                  <span>Agile & Change Request Delivery</span>
                </div>
              </div>
            </div>

            {/* Dynamic Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/80 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700/60 text-center hover:-translate-y-1 transition-transform"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {item.number}
                  </div>
                  <div className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-1">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">
                    {item.sublabel}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Pillars & Highlights Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Professional Journey & Milestones (Rock-Solid Alignment) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Professional Journey & Milestones
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Chronological track of engineering roles, certifications, and academic qualifications
            </p>
          </div>

          {/* Modern Single-Spine Vertical Timeline with Perfect Node Centering */}
          <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-[11px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-purple-600">
            {milestones.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Node Dot (Perfect Center Alignment on Spine) */}
                <div className={`absolute -left-[30px] sm:-left-[38px] top-4 w-7 h-7 rounded-full ${item.iconBg} border-4 border-white dark:border-gray-900 shadow-md flex items-center justify-center z-10 transition-transform group-hover:scale-110`}>
                  {item.icon}
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-5 sm:p-7 shadow-md border border-gray-100 dark:border-gray-700/70 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 pb-3 border-b border-gray-100 dark:border-gray-700/60">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {item.title} <span className="text-blue-600 dark:text-blue-400 font-semibold">@ {item.organization}</span>
                      </h4>
                      {item.location && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1">
                          <MapPin size={13} className="text-gray-400" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                        {item.period}
                      </span>
                      {item.durationTag && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                          {item.durationTag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-0.5 rounded-lg bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;