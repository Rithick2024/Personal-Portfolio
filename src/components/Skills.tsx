import React from 'react';
import { Code, Palette, Database, Smartphone, Globe, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      color: "blue",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 }
      ]
    },
    {
      icon: <Palette size={24} />,
      title: "Styling & Design",
      color: "purple",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Principles", level: 80 }
      ]
    },
    {
      icon: <Database size={24} />,
      title: "Backend & Database",
      color: "green",
      skills: [
        { name: "Django", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      color: "orange",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "Mobile UI/UX", level: 80 }
      ]
    },
    {
      icon: <Terminal size={24} />,
      title: "Tools & Workflow",
      color: "gray",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "npm/yarn", level: 85 },
        { name: "Agile/Scrum", level: 80 }
      ]
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      color: "indigo",
      skills: [
        { name: "Webpack", level: 70 },
        { name: "Vite", level: 80 },
        { name: "Progressive Web Apps", level: 75 },
        { name: "Web Performance", level: 80 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
      gray: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-600',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getProgressColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      green: 'bg-green-600',
      orange: 'bg-orange-600',
      gray: 'bg-gray-600',
      indigo: 'bg-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getColorClasses(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(category.color)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Key Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-semibold mb-2">Fast Learner</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Quick to adapt to new technologies and frameworks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-semibold mb-2">Problem Solver</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Analytical approach to debugging and optimization</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-semibold mb-2">Team Player</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Excellent collaboration and communication skills</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="font-semibold mb-2">Responsive Design</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Creating seamless experiences across all devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;