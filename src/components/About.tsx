import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "1.4+ Years Experience",
      description: "Frontend development with modern technologies"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solver",
      description: "Skilled in analyzing and implementing change requests"
    },
    {
      icon: <Users size={24} />,
      title: "Team Player",
      description: "Collaborative approach to cross-functional projects"
    },
    {
      icon: <Target size={24} />,
      title: "Quality Focus",
      description: "Attention to detail in impact assessment and delivery"
    }
  ];

  const stats = [
    { number: "6+", label: "Projects Completed" },
    { number: "1.4+", label: "Years Experience" },
    { number: "8+", label: "Technologies" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate Frontend Developer with a strong foundation in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Building <span className="text-blue-600">Beautiful</span> and{' '}
              <span className="text-purple-600">Functional</span> Web Applications
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a BE graduate with over 1.4 years of experience in Front-End Development, 
                currently working at Datamoo.AI since March 2024. My expertise spans across 
                React.js, React Native, Flutter, Django, and FastAPI.
              </p>
              
              <p>
                I'm proficient in analyzing and implementing Change Requests (enhancements 
                and defect fixes) with careful attention to impact assessment. As a 
                collaborative team player, I have a strong willingness to quickly grasp 
                end-to-end project development and contribute effectively to any team.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="text-lg font-semibold">Web Developer at Datamoo.AI</h4>
                  <p className="text-blue-600 font-medium">June 2024 - Present</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Promoted to Web Developer. Leading front-end development, analyzing and implementing Change Requests, and collaborating with cross-functional teams for project delivery.
                  </p>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                <div className="flex-1 text-left pl-8">
                  <h4 className="text-lg font-semibold">Intern at Datamoo.AI</h4>
                  <p className="text-blue-600 font-medium">Mar 2024 - May 2024</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Joined as a Web Development Intern, contributing to front-end development using React, Next.js, Django, and Flutter. Learned project workflows and assisted in backend integrations with FastAPI and PostgreSQL.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="text-lg font-semibold">Web Development Certification</h4>
                  <p className="text-blue-600 font-medium">Dec 2023 - Feb 2024</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Completed certifications in HTML/CSS, JavaScript, and React.js from Ravvysoft Technologies, covering modern web development technologies and best practices.
                  </p>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                <div className="flex-1 text-left pl-8">
                  <h4 className="text-lg font-semibold">BE Graduate</h4>
                  <p className="text-blue-600 font-medium">Sep 2020 - May 2024</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Completed Bachelor of Engineering in Computer Science, gaining foundational and advanced knowledge in programming, algorithms, databases, and software engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;