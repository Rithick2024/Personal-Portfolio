import React, { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail, MapPin, Phone, ChevronDown, Sparkles, Clock, Copy, Check } from 'lucide-react';
import { getDynamicExperienceStats, PROJECTS_DATA, getUniqueTechnologiesCount } from '../utils/portfolioData';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [localTime, setLocalTime] = useState('');

  const expStats = getDynamicExperienceStats();

  const roles = [
    'Full Stack Developer (React | FastAPI | PostgreSQL)',
    'React.js & Next.js Specialist',
    'FastAPI & Python Backend Dev',
    'PostgreSQL Database Architect',
    'Modern UI/UX Engineer'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setTypewriterText(currentRole.substring(0, typewriterText.length + 1));
        }
      } else {
        if (typewriterText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        } else {
          setTypewriterText(currentRole.substring(0, typewriterText.length - 1));
        }
      }
    }, isDeleting ? 35 : 75);

    return () => clearTimeout(timeout);
  }, [typewriterText, currentIndex, isDeleting, roles]);

  // Live ticking Indian Standard Time (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToSection = (selector: string) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 shadow-sm">
                <Sparkles size={14} className="text-blue-500 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Auto-Updated Experience: {expStats.formattedYearsMonths}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open for Opportunities</span>
              </span>

              {localTime && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700">
                  <Clock size={12} className="text-blue-500" />
                  <span>{localTime} IST (Chennai)</span>
                </span>
              )}
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400">
                Hi, my name is
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Rithick R
                </span>
              </h1>
              
              {/* Typewriter text */}
              <div className="min-h-[3.5rem] flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  {typewriterText}
                  <span className="animate-pulse text-blue-600 font-bold ml-1">|</span>
                </span>
              </div>
            </div>

            {/* Bio Paragraph based on resume */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Full Stack Developer with <span className="font-semibold text-blue-600 dark:text-blue-400">{expStats.formattedYearsMonths}</span> of production experience building modern web applications using <span className="font-medium text-gray-900 dark:text-white">React, TypeScript, Next.js, FastAPI, and PostgreSQL</span>. Experienced in role-based dashboards, REST API integration, database-backed features, and delivering robust change requests within cross-functional teams.
            </p>

            {/* Contact quick links with 1-click copy */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700/60">
                <MapPin size={15} className="text-blue-600 dark:text-blue-400" />
                <span>Kattankulathur, Chennai</span>
              </div>

              <button
                onClick={() => copyToClipboard('+916382486876', 'phone')}
                className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700/60 transition-colors group cursor-pointer"
                title="Click to copy phone number"
              >
                <Phone size={15} className="text-blue-600 dark:text-blue-400" />
                <span>+91 63824 86876</span>
                {copiedField === 'phone' ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard('rithickraghu79@gmail.com', 'email')}
                className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700/60 transition-colors group cursor-pointer"
                title="Click to copy email address"
              >
                <Mail size={15} className="text-blue-600 dark:text-blue-400" />
                <span>rithickraghu79@gmail.com</span>
                {copiedField === 'email' ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a
                href={`${import.meta.env.BASE_URL}rithick-resume.pdf`}
                download="Rithick_R_Resume.pdf"
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('#projects')}
                className="px-7 py-3.5 border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-medium bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects ({PROJECTS_DATA.length})
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3.5 border border-transparent text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-xl font-medium transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links & Quick stats pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex gap-2">
                <a
                  href="https://github.com/Rithick2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rithick-raghupathi-b024bb308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:rithickraghu79@gmail.com"
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-200 hover:scale-110 shadow-sm"
                  aria-label="Direct Email"
                >
                  <Mail size={20} />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
                <div>
                  <span className="font-bold text-gray-900 dark:text-white">{PROJECTS_DATA.length}+</span> Projects Built
                </div>
                <div>•</div>
                <div>
                  <span className="font-bold text-gray-900 dark:text-white">{getUniqueTechnologiesCount()}</span> Tech Stack
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Avatar & Floating Interactive Tech Pills */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer decorative rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 dark:border-blue-400/10 animate-spin" style={{ animationDuration: '25s' }}></div>
              <div className="absolute inset-4 rounded-full border border-dashed border-purple-500/25 dark:border-purple-400/20 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>

              {/* Central Glowing Core */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-1.5 shadow-2xl shadow-blue-500/30">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 relative overflow-hidden group">
                  <img
                    src={`${import.meta.env.BASE_URL}Rithick-Image.png`}
                    alt="Rithick R"
                    className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-center">
                    <div className="font-bold text-sm text-white">Rithick R</div>
                    <div className="text-[11px] text-blue-300 font-medium">Full Stack Developer</div>
                    <div className="text-[10px] text-gray-300 mt-0.5">{expStats.formattedYearsMonths} experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Tech Pills */}
              {/* React */}
              <div className="absolute -top-2 left-6 sm:left-8 px-3 py-1.5 bg-white dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 dark:border-blue-900/40 flex items-center gap-2 animate-bounce text-xs font-semibold text-blue-600 dark:text-blue-400" style={{ animationDuration: '4s' }}>
                <span>⚛️</span> React.js
              </div>

              {/* FastAPI */}
              <div className="absolute top-1/4 -right-4 sm:-right-6 px-3 py-1.5 bg-white dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-emerald-100 dark:border-emerald-900/40 flex items-center gap-2 animate-bounce text-xs font-semibold text-emerald-600 dark:text-emerald-400" style={{ animationDuration: '4.5s', animationDelay: '1s' }}>
                <span>⚡</span> FastAPI
              </div>

              {/* PostgreSQL */}
              <div className="absolute -bottom-3 right-6 sm:right-8 px-3 py-1.5 bg-white dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-900/40 flex items-center gap-2 animate-bounce text-xs font-semibold text-indigo-600 dark:text-indigo-400" style={{ animationDuration: '3.8s', animationDelay: '2s' }}>
                <span>🐘</span> PostgreSQL
              </div>

              {/* Next.js & TS */}
              <div className="absolute bottom-1/4 -left-4 sm:-left-6 px-3 py-1.5 bg-white dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg border border-purple-100 dark:border-purple-900/40 flex items-center gap-2 animate-bounce text-xs font-semibold text-purple-600 dark:text-purple-400" style={{ animationDuration: '5s', animationDelay: '1.5s' }}>
                <span>🔷</span> TypeScript
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 text-center">
          <button
            onClick={() => scrollToSection('#about')}
            className="inline-flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
            aria-label="Scroll to About Section"
          >
            <span className="text-xs font-medium uppercase tracking-wider group-hover:translate-y-0.5 transition-transform">Explore More</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;