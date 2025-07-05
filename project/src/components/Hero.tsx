import React from 'react';
import { Download, Mail, Linkedin, Github, BarChart3, Database, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-50 animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-purple-200 rounded-full opacity-50 animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-indigo-300 rounded-full opacity-40 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300">
              SR
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
              <BarChart3 className="text-white" size={24} />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="block">Hi, I'm</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Said Rasool
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
              <Database className="text-blue-600" size={20} />
              <span className="text-gray-700 font-medium">Data Analyst</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
              <TrendingUp className="text-green-600" size={20} />
              <span className="text-gray-700 font-medium">Business Intelligence</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
            Transforming complex data into actionable insights that drive strategic business decisions
          </p>

          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about uncovering patterns in data and creating compelling visualizations that tell stories, 
            with expertise in Python, SQL, Power BI, and statistical analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/said-rasool-513607177"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-blue-600 hover:text-blue-700 transform hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/rasoolsaid1985"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-gray-900 transform hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:saidrasool402@gmail.com"
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-gray-900 transform hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;