import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Federal Urdu University of Arts, Science & Technology',
      location: 'Islamabad, Pakistan',
      period: '2017 - 2021',
      description: 'Comprehensive computer science education covering programming fundamentals, data structures, algorithms, database systems, and software engineering principles. Developed strong analytical and problem-solving skills essential for data analysis and software development.',
      icon: <GraduationCap className="text-blue-600" size={24} />,
      honors: ['Computer Science Graduate', 'Strong Academic Foundation']
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Power BI',
      issuer: 'Punjab Skills Development Institute',
      date: '2025',
      icon: <Award className="text-yellow-600" size={20} />,
      skills: ['Power BI', 'DAX', 'Interactive Dashboards', 'Power BI Service'],
      description: 'Built interactive dashboards, performed DAX-based calculations, and published reports to Power BI Service.'
    },
    {
      name: 'Python for Data Science',
      issuer: 'IBM Cognitive Class',
      date: '2025',
      icon: <Award className="text-blue-600" size={20} />,
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      description: 'Covered Python essentials for data analysis using Pandas, NumPy, and Matplotlib.'
    },
    {
      name: 'Data Analysis with Python',
      issuer: 'IBM Cognitive Class',
      date: '2025',
      icon: <Award className="text-green-600" size={20} />,
      skills: ['Python', 'SciPy', 'Seaborn', 'Scikit-learn', 'Regression Analysis'],
      description: 'Explored regression, correlation, and exploratory data analysis on real datasets using SciPy, Seaborn, and Scikit-learn.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation and professional development in data science and analytics
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center justify-center">
            <GraduationCap className="text-blue-600 mr-3" size={32} />
            Academic Background
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="mr-6 mb-4 md:mb-0">{edu.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 font-semibold text-lg mb-2">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="md:text-right md:ml-4">
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <div className="text-gray-600 text-sm">
                          Graduated: 2021
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.honors.map((honor, honorIndex) => (
                        <span
                          key={honorIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {honor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center justify-center">
            <Award className="text-green-600 mr-3" size={32} />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-3 mt-1">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      Issued: {cert.date}
                    </p>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;