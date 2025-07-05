import React from 'react';
import { Code, Database, BarChart, Brain, TrendingUp, PieChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85, color: 'bg-blue-500' },
        { name: 'SQL', level: 80, color: 'bg-green-500' },
      ]
    },
    {
      icon: <Database className="text-green-600" size={32} />,
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 85, color: 'bg-orange-500' },
        { name: 'PostgreSQL', level: 80, color: 'bg-blue-500' },
      ]
    },
    {
      icon: <BarChart className="text-purple-600" size={32} />,
      title: 'Visualization Tools',
      skills: [
        { name: 'Power BI', level: 95, color: 'bg-yellow-500' },
        { name: 'Tableau', level: 90, color: 'bg-orange-500' },
      ]
    },
    {
      icon: <Brain className="text-orange-600" size={32} />,
      title: 'Machine Learning',
      skills: [
        { name: 'Pandas', level: 85, color: 'bg-blue-500' },
        { name: 'NumPy', level: 80, color: 'bg-red-500' },
      ]
    }
  ];

  const additionalSkills = [
    'Statistical Analysis', 'Data Wrangling', 'Data Preprocessing', 'ETL Processes',
    'Predictive Modeling', 'Excel', 'Jupyter Notebooks', 'Git', 'Machine Learning Algorithms'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for modern data analysis and business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-lg font-semibold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Additional Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 rounded-full border border-blue-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 cursor-default transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;