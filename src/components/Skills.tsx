import React, { useState } from 'react';
import { Code2, Server, Database, Wrench, Search, Sparkles, Zap, ShieldCheck, RefreshCw, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../utils/portfolioData';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 size={20} />;
      case 'backend':
        return <Server size={20} />;
      case 'database':
        return <Database size={20} />;
      case 'tools':
        return <Wrench size={20} />;
      default:
        return <Cpu size={20} />;
    }
  };

  const getBarColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-600 to-cyan-500';
      case 'green':
        return 'from-emerald-600 to-teal-500';
      case 'purple':
        return 'from-purple-600 to-indigo-500';
      case 'orange':
        return 'from-amber-500 to-orange-600';
      default:
        return 'from-blue-600 to-indigo-600';
    }
  };

  // Filter categories and skills based on category filter and search query
  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }

    const filteredSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0 && searchQuery.trim() !== '') {
      return null;
    }

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean);

  const keyStrengths = [
    {
      icon: <Zap size={22} className="text-amber-500" />,
      title: 'Full Stack Integration',
      description: 'Seamlessly bridging React/Next.js frontend applications with FastAPI/Django backends and PostgreSQL databases.'
    },
    {
      icon: <ShieldCheck size={22} className="text-emerald-500" />,
      title: 'Role-Based Dashboards',
      description: 'Expertise in architecting secure multi-tier user and admin portals with route guarding and state control.'
    },
    {
      icon: <RefreshCw size={22} className="text-blue-500" />,
      title: 'Change Request Mastery',
      description: 'Rapid analysis and delivery of complex feature enhancements and bug fixes with comprehensive impact testing.'
    },
    {
      icon: <Sparkles size={22} className="text-purple-500" />,
      title: 'Modern AI-Assisted Dev',
      description: 'Proficient in modern AI tooling (Copilot, Antigravity, Cursor) for elevated development velocity and code quality.'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50/60 dark:bg-gray-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            <span>TECH STACK & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Technologies, frameworks, and engineering tools I leverage to build robust production applications.
          </p>
        </div>

        {/* Interactive Filter Bar + Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700/60 shadow-sm w-full sm:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. FastAPI)..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white shadow-sm"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat: any, idx: number) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 sm:p-7 shadow-lg border border-gray-100 dark:border-gray-700/70 hover:shadow-xl transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700/60">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cat.skills.length} core competencies
                    </p>
                  </div>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-4">
                  {cat.skills.map((skill: any, sIdx: number) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">
                            {skill.tag}
                          </span>
                        </div>
                        <span className="font-bold text-gray-600 dark:text-gray-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-gray-100 dark:bg-gray-700/60 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${getBarColor(cat.color)} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No skills found matching "{searchQuery}".
              </p>
            </div>
          )}
        </div>

        {/* Key Strengths Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Engineering Highlights & Principles
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyStrengths.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700/60 hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-700/60 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;