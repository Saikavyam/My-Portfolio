
import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Netflix Recommendation Engine",
      description: "Developed a sophisticated recommendation system using Python and machine learning algorithms to suggest personalized content to users.",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      category: "Machine Learning",
      color: "from-[#F054A5] to-[#DE639A]"
    },
    {
      title: "Community Carpooling System",
      description: "Designed and built a platform that connects community members for efficient carpooling, reducing carbon footprint and transportation costs.",
      technologies: ["Java", "Backend Development", "Database Design"],
      category: "Full Stack",
      color: "from-[#7b88fa] to-[#16001E]"
    },
    {
      title: "To-Do List App",
      description: "Created an intuitive task management application with features for organizing, prioritizing, and tracking daily tasks efficiently.",
      technologies: ["Java", "UI/UX Design", "Local Storage"],
      category: "Application",
      color: "from-[#FABF37] to-[#f3ff48]"
    },
    {
      title: "Interactive Quiz App",
      description: "Developed an engaging quiz application with dynamic questions, real-time scoring, and user-friendly interface for educational purposes.",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "Web Application",
      color: "from-[#F7717D] to-[#7F2982]"
    },
    {
      title: "Java Project Collection",
      description: "A comprehensive collection of Java programs demonstrating object-oriented programming concepts, design patterns, and best practices.",
      technologies: ["Java", "OOP", "Design Patterns"],
      category: "Educational",
      color: "from-[#F054A5] to-[#7b88fa]"
    },
    {
      title: "SaiK Data Analysis",
      description: "Data science project showcasing advanced analytics and visualization techniques using Jupyter Notebook for meaningful insights.",
      technologies: ["Jupyter Notebook", "Python", "Data Visualization"],
      category: "Data Science",
      color: "from-[#7b88fa] to-[#FABF37]"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest work showcasing expertise in backend development, machine learning, and full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                {/* Category Badge */}
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#F054A5] to-[#7b88fa] rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#F054A5] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#F054A5]/10 hover:text-[#F054A5] transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-[#F054A5] hover:text-[#7b88fa] transition-colors duration-300 font-medium">
                    <Github size={18} />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#F054A5] transition-colors duration-300 font-medium">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
