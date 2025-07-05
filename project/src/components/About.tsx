import React from 'react';
import { BarChart3, Database, TrendingUp, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <BarChart3 className="text-blue-600" size={24} />,
      title: 'Data Visualization',
      description: 'Creating compelling visual stories from complex datasets using Tableau and Power BI'
    },
    {
      icon: <Database className="text-green-600" size={24} />,
      title: 'Database Management',
      description: 'Expertise in SQL, data wrangling, and ETL processes across multiple database systems'
    },
    {
      icon: <TrendingUp className="text-purple-600" size={24} />,
      title: 'Statistical Analysis',
      description: 'Advanced statistical modeling, predictive analytics, and machine learning implementations'
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      title: 'Business Intelligence',
      description: 'Translating data insights into actionable business strategies and KPI dashboards'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate data professional dedicated to transforming complex data into strategic insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Transforming Data into Strategic Insights
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              As a dedicated Data Analyst with over 5 years of experience, I specialize in extracting 
              meaningful insights from complex datasets to drive strategic business decisions. My expertise 
              spans across various industries, helping organizations leverage data for measurable growth 
              and operational efficiency.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              I'm proficient in multiple programming languages and analytical tools, including Python, 
              SQL, Power BI and Tableau. My approach combines technical expertise with business 
              acumen to deliver solutions that are both statistically sound and practically applicable 
              to real-world business challenges.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Throughout my career, I've successfully led data-driven initiatives that have resulted in 
              significant revenue increases, cost optimizations, and improved decision-making processes. 
              I'm passionate about continuous learning and staying current with the latest trends in 
              data science, machine learning, and business intelligence.
            </p>

           <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Python</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">SQL</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Tableau</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Power BI</span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 transform hover:-translate-y-1"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Mission</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            To bridge the gap between complex data and actionable business insights, empowering organizations 
            to make informed decisions that drive growth, efficiency, and innovation through the power of analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;