import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F054A5]/10 via-[#FABF37]/5 to-[#7b88fa]/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F054A5]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7b88fa]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FABF37]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#F054A5] to-[#7b88fa] p-1">
            <img 
              src="/uploads/ea14d1c7-26cf-4a17-a2d4-d7ab63025684.png"
              alt="M. Sai Kavya"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F054A5] via-[#FABF37] to-[#7b88fa] bg-clip-text text-transparent animate-fade-in">
          Hi, I'm M. Sai Kavya
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 font-light animate-fade-in delay-300">
          A backend developer who turns coffee into clean, efficient code ☕→💻
        </p>
        
        <p className="text-lg sm:text-xl text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in delay-500">
          Passionate about competitive coding, backend development, and creating solutions that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore My Work
          </button>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-[#F054A5] text-[#F054A5] rounded-full font-semibold text-lg hover:bg-[#F054A5] hover:text-white transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#F054A5]" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
