import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      company: "Datamoo.AI",
      position: "Web Development Intern",
      duration: "Mar 2024 - May 2024",
      location: "Chennai, India",
      description: "Joined as a Web Development Intern, contributing to front-end development using React JS/TS, Next JS/TS, Django, and Flutter. Assisted in backend integrations through FastAPI and PostgreSQL, and learned project workflows and best practices.",
      achievements: [
        "Assisted in front-end development using React JS/TS, Next JS/TS, Django, and Flutter with backend integrations through FastAPI and PostgreSQL",
        "Learned and adapted to project workflows, code reviews, and agile methodologies",
        "Supported senior developers in implementing features and fixing bugs"
      ],
      technologies: ["React.js", "TypeScript", "Next.js", "Django", "FastAPI", "PostgreSQL", "Flutter"]
    },
    {
      company: "Datamoo.AI",
      position: "Web Developer",
      duration: "Jun 2024 - Present",
      location: "Chennai, India",
      description: "Promoted to Web Developer. Responsible for leading front-end development, analyzing and implementing Change Requests, and collaborating with cross-functional teams for project delivery.",
      achievements: [
        "Led front-end development using React JS/TS, Next JS/TS, Django, and Flutter with backend integrations through FastAPI and PostgreSQL",
        "Actively involved in analyzing and implementing Change Requests (both enhancement and defect-related), ensuring smooth project evolution",
        "Collaborated closely with cross-functional teams and quickly adapted to end-to-end project workflows, demonstrating strong learning curve and cooperative spirit"
      ],
      technologies: ["React.js", "TypeScript", "Next.js", "Django", "FastAPI", "PostgreSQL", "Flutter"]
    }
  ];

  const education = [
    {
      institution: "Bachelor of Engineering in Computer Science",
      degree: "BE Computer Science",
      duration: "Sep 2020 - May 2024",
      location: "India",
      description: "Gained foundational and advanced knowledge in programming, data structures, algorithms, databases, and computer networks.",
      achievements: [
        "Gained foundational and advanced knowledge in programming, data structures, algorithms, databases, and computer networks",
        "Exposure to software engineering principles, system design, and emerging technologies like AI and cloud computing"
      ]
    },
    {
      institution: "St.Joseph Matric. Hr. Sec. School",
      degree: "XII - Biology",
      duration: "Jun 2018 - Apr 2020",
      location: "India",
      description: "Studied core subjects including Mathematics, Physics, and Biology.",
      achievements: [
        "Studied core subjects including Mathematics, Physics, and Biology",
        "Built a strong foundation in logical reasoning, problem-solving, and basic programming concepts"
      ]
    }
  ];

  const certifications = [
    {
      name: "Web Development Certification",
      issuer: "Ravvysoft Technologies",
      duration: "Dec 2023 - Feb 2024",
      skills: ["HTML/CSS", "JavaScript", "React JS"],
      description: "Comprehensive certification covering modern web development technologies and best practices."
    }
  ];

  const tabs = [
    { id: 'experience', label: 'Experience', count: experiences.length },
    { id: 'education', label: 'Education', count: education.length },
    { id: 'certifications', label: 'Certifications', count: certifications.length }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My professional journey and educational background
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-blue-600 shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">{exp.position}</h3>
                      <h4 className="text-xl font-semibold mb-2">{exp.company}</h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2">▸</span>
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-600 mb-2">{edu.degree}</h3>
                      <h4 className="text-xl font-semibold mb-2">{edu.institution}</h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{edu.description}</p>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Key Learnings:</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-600 mr-2">▸</span>
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-green-600 mb-2">{cert.name}</h3>
                      <h4 className="text-xl font-semibold mb-2">{cert.issuer}</h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{cert.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{cert.description}</p>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Skills Covered:</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;