import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { EXPERIENCES_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, getDynamicExperienceStats } from '../utils/portfolioData';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');
  const expStats = getDynamicExperienceStats();

  const tabs = [
    { id: 'experience', label: 'Work Experience', count: EXPERIENCES_DATA.length, icon: <Briefcase size={16} /> },
    { id: 'education', label: 'Education', count: EDUCATION_DATA.length, icon: <GraduationCap size={16} /> },
    { id: 'certifications', label: 'Certifications', count: CERTIFICATIONS_DATA.length, icon: <Award size={16} /> }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            <span>CAREER & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Detailed timeline of production engineering roles, academic achievements, and certifications.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800/80 p-1.5 rounded-2xl flex flex-wrap gap-1 border border-gray-200 dark:border-gray-700/60 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === tab.id
                    ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Work Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {EXPERIENCES_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700/70 hover:shadow-xl transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>

                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700/60">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                          <Building2 size={20} />
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                      </div>
                      <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end gap-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-semibold text-xs">
                        <Sparkles size={13} className="animate-spin" style={{ animationDuration: '6s' }} />
                        <span>Mar 2024 – Present ({expStats.datamooDetailed})</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <MapPin size={14} className="text-gray-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities & Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                      Key Responsibilities & Deliverables:
                    </h4>
                    <div className="space-y-2.5">
                      {exp.achievements.map((item, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                      Primary Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700/60 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-600/50"
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

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 sm:p-7 shadow-lg border border-gray-100 dark:border-gray-700/70 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {edu.institution}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-bold text-xs">
                        {edu.scoreLabel}: {edu.score}
                      </span>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar size={13} className="mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>

                  {edu.highlights.length > 0 && (
                    <div className="space-y-1.5 border-t border-gray-100 dark:border-gray-700/60 pt-3">
                      {edu.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className="text-purple-500 font-bold">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="space-y-6">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 sm:p-7 shadow-lg border border-gray-100 dark:border-gray-700/70 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {cert.name}
                      </h3>
                      <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {cert.issuer}
                      </div>
                    </div>

                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Calendar size={13} className="mr-1" />
                      <span>{cert.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      Skills & Topics Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 rounded-lg text-xs font-medium"
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