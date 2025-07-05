import React from 'react';
import { ExternalLink, Github, BarChart3, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Uber Data Analysis Project',
      description: 'Comprehensive analysis of Uber vehicle data with over 1M+ records, identifying revenue trends and operational insights. Used advanced data processing techniques to clean, join, and summarize large datasets for actionable business intelligence.',
      image: 'https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'Python', 'SQL'],
      results: [
        'Analyzed 1M+ Uber vehicle type records',
        'Identified revenue trends (3.98–4.01 range)',
        'Processed 1.7M data points with 20% efficiency improvement',
        'Delivered actionable insights for operational decisions'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/rasoolsaid1985/powerbi',
      icon: <BarChart3 className="text-blue-600" size={24} />,
      category: 'Business Intelligence'
    },
    {
      title: 'HR Analytics Dashboard',
      description: 'Dynamic HR dashboard providing comprehensive workforce analytics including gender distribution, education levels, departmental insights, and location-based analysis. Features advanced drill-down capabilities and interactive filtering for deep HR insights.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Tableau', 'Python', 'SQL'],
      results: [
        'Created dynamic HR dashboard with workforce visualization',
        'Enhanced visuals with Python preprocessing',
        'Implemented drill-down and filtering features',
        'Transformed raw data into decision-ready visuals'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/rasoolsaid1985/Tableau',
      icon: <Database className="text-green-600" size={24} />,
      category: 'Data Visualization'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world data analysis projects demonstrating technical expertise and measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4 p-3 bg-white rounded-lg shadow-md">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <div className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start text-sm text-green-600">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    View on GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center">
          <a
            href="https://github.com/rasoolsaid1985"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;