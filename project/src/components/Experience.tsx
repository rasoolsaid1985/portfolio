import React from 'react';
import { Building, Calendar, MapPin, TrendingUp, Database, BarChart3 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Utility Stores Corporation',
      location: 'Islamabad, Pakistan',
      period: 'December 2024 - Present',
      description: [
        'Analyzed large-scale sales datasets, uncovering key buying trends that directly influenced corporate strategy.',
        'Identified procurement inefficiencies, driving a 15% optimization in supply chain processes using data-driven insights.',
        'Built dynamic Power BI dashboards to monitor over 100 store-level KPIs in real-time.',
        'Streamlined ETL workflows, reducing manual workload by 20% and improving data accuracy by 10%.',
      ],
      technologies: ['Python', 'PostgreSQL', 'Power BI'],
      achievements: ['15% Supply Chain Optimization', '20% Manual Workload Reduction', '10% Data Accuracy Improvement']
    },
    {
      title: 'Data Analyst',
      company: 'Aetrius (Safa Gold Mall Project)',
      location: 'Islamabad, Pakistan',
      period: 'February 2025 – May 2025',
      description: [
        'Conducted analysis of gym sales, member behavior, and retention metrics to support strategic planning.',
        'Designed targeted Power BI dashboards that informed promotional campaigns and client engagement efforts.', 
        'Collaborated with operations and marketing teams to implement data-backed service improvements.',
        'Cleaned and transformed raw data, ensuring reliability and consistency in monthly performance reports.' 
      ],
      technologies: ['Python', 'SQL', 'Power BI'],
      achievements: ['Strategic Planning Support', 'Promotional Campaign Optimization', 'Data Quality Improvement']
    },
    {
      title: 'Data Scientist',
      company: 'Ezitech',
      location: 'Rawalpindi, Pakistan',
      period: 'June 2024 - September 2024',
      description: [
        'Gained hands-on experience with ML pipelines, CNNs (ResNet, VGG, U-Net), and ETL workflows.',
        'Worked with complex datasets like Tiny ImageNet and brain tumor MRI scans, applying advanced image processing techniques.',
        'Built and tested deep learning models from scratch, gaining proficiency in TensorFlow and Keras.'
      ],
      technologies: ['Machine Learning', 'Deep Learning', 'CNNs', 'Regression', 'Tensorflow', 'Keras'],
      achievements: ['90% Image Recognition Accuracy', '92% Cotton Disease Detection', 'Brain Tumor Detection Model']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise through diverse roles in data analysis and business intelligence
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  {index === 0 && <TrendingUp size={10} className="text-white" />}
                  {index === 1 && <BarChart3 size={10} className="text-white" />}
                  {index === 2 && <Database size={10} className="text-white" />}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <Building size={18} className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 leading-relaxed flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

export default Experience;