import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Calendar, MessageCircle, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: 'Email',
      value: 'saidrasool402@gmail.com',
      link: 'mailto:saidrasool402@gmail.com',
      description: 'Best way to reach me'
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: 'Phone',
      value: '+92 342 1976221',
      link: 'tel:+923421976221',
      description: 'Available for calls and WhatsApp'
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: 'Location',
      value: 'Islamabad, Pakistan',
      link: '#',
      description: 'Open to remote opportunities'
    },
    {
      icon: <Globe className="text-orange-600" size={24} />,
      title: 'Portfolio',
      value: 'tinyurl.com/saidrasool-portfolio',
      link: 'https://tinyurl.com/saidrasool-portfolio',
      description: 'View my complete portfolio'
    }
  ];

  const projectTypes = [
    'Data Analysis & Visualization',
    'Business Intelligence Dashboard',
    'Predictive Modeling',
    'Database Design & ETL',
    'Machine Learning Implementation',
    'Statistical Analysis',
    'Consulting & Strategy',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your project and explore how we can achieve your goals together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 group transform hover:-translate-y-1"
                  >
                    <div className="mr-4 mt-1">{info.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                        {info.title}
                      </p>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">
                        {info.value}
                      </p>
                      <p className="text-xs text-gray-500">
                        {info.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/said-rasool-513607177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/rasoolsaid1985"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="mailto:saidrasool402@gmail.com"
                    className="p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center">
                  <MessageCircle className="text-green-600 mr-2" size={20} />
                  <span className="text-green-800 font-medium">Quick Response Guarantee</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  I typically respond within 24 hours or less!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, data challenges, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="mr-2" size={20} />
                  Send Project Inquiry
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted about your project inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Turn Your Data Into Insights?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you need help with data analysis, building dashboards, or implementing machine learning solutions, 
              I'm here to help you make data-driven decisions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:saidrasool402@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                <Mail className="mr-2" size={18} />
                Email Me Directly
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;