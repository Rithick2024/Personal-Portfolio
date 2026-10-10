import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Phone, Download, Sparkles } from 'lucide-react';
import { getDynamicExperienceStats } from '../utils/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const expStats = getDynamicExperienceStats();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: 'https://github.com/Rithick2024',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={18} />,
      href: 'https://www.linkedin.com/in/rithick-raghupathi-b024bb308',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={18} />,
      href: 'mailto:rithickraghu79@gmail.com',
      label: 'Email'
    }
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid md:grid-cols-12 gap-10">
          
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Rithick R
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold">
                Full Stack Developer
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Full Stack Developer specializing in React, Next.js, TypeScript, FastAPI, and PostgreSQL. Building scalable web architectures, role-based dashboards, and high-performance applications.
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-gray-700/60">
              <Sparkles size={13} className="text-blue-500" />
              <span>{expStats.formattedYearsMonths} dynamic experience · Open to collaborations</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all hover:scale-105"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact & Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:rithickraghu79@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={14} className="text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">rithickraghu79@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+916382486876"
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone size={14} className="text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>+91 63824 86876</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={`${import.meta.env.BASE_URL}rithick-resume.pdf`}
                  download="Rithick_R_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-gray-200 dark:border-gray-700 transition-colors"
                >
                  <Download size={13} />
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
            © {currentYear} Rithick R. Built with{' '}
            <Heart size={14} className="text-red-500 mx-1 animate-pulse" />{' '}
            using React, TypeScript & Tailwind CSS
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-md hover:scale-105"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;