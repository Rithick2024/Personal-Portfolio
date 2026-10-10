import React, { useState } from 'react';
import { ExternalLink, Github, Search, Layers, Sparkles, X, CheckCircle2, Code2, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../utils/portfolioData';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'personal'>('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Extract all unique tech tags for filter chips
  const allTechTags = Array.from(
    new Set(PROJECTS_DATA.flatMap((p) => p.technologies))
  ).slice(0, 8); // Top tags

  // Filter projects
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesTech = !selectedTech || project.technologies.some((t) => t.toLowerCase() === selectedTech.toLowerCase());
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTech && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            <span>PORTFOLIO & APPLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Production web applications, role-based portals, and full-stack solutions built with modern web technologies.
          </p>
        </div>

        {/* Filter Toolbar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-gray-100 dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/60 shadow-sm">
            <button
              onClick={() => { setActiveFilter('all'); setSelectedTech(null); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all' && !selectedTech
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              All Projects ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => { setActiveFilter('work'); setSelectedTech(null); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'work' && !selectedTech
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Production Work ({PROJECTS_DATA.filter((p) => p.category === 'work').length})
            </button>
            <button
              onClick={() => { setActiveFilter('personal'); setSelectedTech(null); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'personal' && !selectedTech
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Personal ({PROJECTS_DATA.filter((p) => p.category === 'personal').length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, tech (e.g. FastAPI)..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>

        {/* Quick Tech Tag Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mr-1 flex items-center gap-1">
            <Code2 size={13} /> Filter by Tech:
          </span>
          {allTechTags.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                selectedTech === tech
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
          {selectedTech && (
            <button
              onClick={() => setSelectedTech(null)}
              className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-2"
            >
              Reset Tag
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-100 dark:border-gray-700/70 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Header Top Banner */}
                  <div className="p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 dark:from-gray-800 dark:to-gray-800/40 border-b border-gray-100 dark:border-gray-700/60">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                        {project.type}
                      </span>
                      {project.metrics && (
                        <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <Sparkles size={11} /> {project.metrics}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features Preview (first 2 highlights) */}
                    <div className="space-y-1.5">
                      {project.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((t, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 dark:border-gray-700/60 mt-4">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1.5 group/btn"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                No projects matched your filter criteria.
              </p>
              <button
                onClick={() => { setActiveFilter('all'); setSelectedTech(null); setSearchQuery(''); }}
                className="text-xs text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Summary Stats Strip */}
        <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700/60 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                {PROJECTS_DATA.length}
              </div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                Total Production & Projects
              </div>
            </div>

            <div>
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {PROJECTS_DATA.filter((p) => p.category === 'work').length}
              </div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                Client & Enterprise Portals
              </div>
            </div>

            <div>
              <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                {PROJECTS_DATA.filter((p) => p.category === 'personal').length}
              </div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                Personal Cloud Apps
              </div>
            </div>

            <div>
              <div className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
                100%
              </div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                Full-Stack Delivery Rate
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeInUp">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                    {activeModalProject.type}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {activeModalProject.duration}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                  {activeModalProject.subtitle}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Overview & Impact
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Key Technical Features & Architecture:
                </h4>
                <div className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Technologies Utilized:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 rounded-lg text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl text-xs font-bold transition-colors"
                >
                  Close
                </button>

                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
                  >
                    <Github size={15} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;