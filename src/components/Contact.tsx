
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred email service
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saikavya12@gmail.com",
      href: "mailto:saikavya12@gmail.com",
      color: "from-[#F054A5] to-[#DE639A]"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9640621071",
      href: "tel:+919640621071",
      color: "from-[#7b88fa] to-[#16001E]"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Sai Kavya M",
      href: "https://www.linkedin.com/in/sai-kavya-m-6a76252a7/",
      color: "from-[#FABF37] to-[#f3ff48]"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@saikavya",
      href: "https://github.com/saikavya",
      color: "from-[#F7717D] to-[#7F2982]"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{contact.label}</p>
                    <p className="text-gray-600 group-hover:text-[#F054A5] transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto text-gray-400 group-hover:text-[#F054A5] group-hover:translate-x-1 transition-all duration-300" size={20} />
                </a>
              ))}
            </div>

            {/* Quick Message */}
            <div className="mt-12 p-6 bg-gradient-to-r from-[#F054A5]/10 to-[#7b88fa]/10 rounded-2xl">
              <h4 className="font-bold text-gray-800 mb-2">Quick Response</h4>
              <p className="text-gray-600">
                I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F054A5] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F054A5] focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F054A5] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F054A5] to-[#7b88fa] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2024 M. Sai Kavya. Built with passion using React & TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
