
import React from 'react';
import { Code, Edit, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Specializing in robust, scalable backend solutions using Java and Python. From API development to database optimization and cloud deployment.",
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Cloud Deployment & DevOps",
        "System Architecture Design",
        "Performance Optimization"
      ],
      gradient: "from-[#F054A5] to-[#7b88fa]"
    },
    {
      icon: Edit,
      title: "Content Writing",
      description: "Creating engaging technical content that bridges the gap between complex concepts and clear communication. Perfect for technical documentation and blogs.",
      features: [
        "Technical Article Writing",
        "API Documentation",
        "Blog Posts & Tutorials",
        "Code Documentation",
        "Technical Copywriting"
      ],
      gradient: "from-[#FABF37] to-[#f3ff48]"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] bg-clip-text text-transparent">
            Services Offered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining technical expertise with creative problem-solving to deliver exceptional results for your projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#F054A5] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <button className="flex items-center gap-2 text-[#F054A5] hover:text-[#7b88fa] transition-colors duration-300 font-semibold group">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#F054A5]/10 to-[#7b88fa]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to start your project?</h3>
            <p className="text-gray-600 mb-6">Let's discuss how I can help bring your ideas to life with clean, efficient code and compelling content.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
