
import React from 'react';
import { BookOpen, Briefcase, Code } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Mohan Babu University",
      period: "2022–2026",
      grade: "CGPA: 9.5"
    },
    {
      degree: "Higher Secondary",
      institution: "Sri Sathya Sai Higher Secondary School",
      period: "2020–2022",
      grade: "94.8%"
    }
  ];

  const experience = [
    {
      title: "Java Developer Intern",
      company: "Pinnacle Labs",
      period: "May–July 2024",
      description: "Developed backend solutions and gained hands-on experience with enterprise Java applications."
    },
    {
      title: "Data Science Intern",
      company: "Bharat Intern",
      period: "April–June 2024",
      description: "Worked on data analysis projects and machine learning implementations."
    }
  ];

  const skills = [
    "Java", "Python", "HTML", "CSS", "JavaScript", "Machine Learning", 
    "Backend Development", "Database Design", "API Development"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate backend developer with expertise in competitive coding and a love for creating efficient, scalable solutions. Currently pursuing my B.Tech with a stellar academic record and gaining real-world experience through internships.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-[#F054A5] pl-6">
                  <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-[#7b88fa] font-medium">{edu.institution}</p>
                  <p className="text-gray-600">{edu.period}</p>
                  <p className="text-[#F054A5] font-semibold">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FABF37] to-[#f3ff48] rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-[#FABF37] pl-6">
                  <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                  <p className="text-[#7b88fa] font-medium">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.period}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#7b88fa] to-[#f3ff48] rounded-lg flex items-center justify-center mr-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-[#F054A5]/10 to-[#7b88fa]/10 text-[#F054A5] rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
