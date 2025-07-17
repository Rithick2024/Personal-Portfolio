import React, { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Frontend Developer',
    'React.js Developer',
    'Full Stack Developer',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
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
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typewriterText, currentIndex, isDeleting, roles]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                Hello, I'm 👋
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Rithick R
                </span>
              </h1>
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <span className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  {typewriterText}
                  <span className="animate-pulse text-blue-600">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              BE graduate with over 1.4 years of experience in Front-End Development, 
              currently working at Datamoo.AI. Skilled in React.js, React Native, 
              Flutter, Django, and FastAPI with a passion for creating beautiful, 
              functional web applications.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>Kattankulathur, Chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <span>+91 63824 86876</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <span>rithickraghu79@gmail.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </button> */}
              <a
                href="/rithick-resume.pdf"
                download
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Rithick2024"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rithick-raghupathi-b024bb308"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rithickraghu79@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image/Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-8xl animate-pulse">
                👨‍💻
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <span className="text-xl font-bold text-blue-600">TS</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                <span className="text-lg">📱</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;