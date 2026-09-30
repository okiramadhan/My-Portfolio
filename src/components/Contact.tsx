import { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiInstagram } from 'react-icons/fi';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    // Reset form and show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: PERSONAL_INFO.location,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slideInUp">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-cyan-400 mb-2 block">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out! I'm always open to discussing new opportunities and projects.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                className="animate-slideInUp p-7 bg-white dark:bg-slate-800/90 rounded-2xl border border-gray-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 text-center backdrop-blur-sm group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3.5 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                  {method.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 break-all">{method.value}</p>
              </a>
            );
          })}
        </div>

        {/* Contact Form and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="animate-slideInUp">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="animate-slideInUp flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Follow me on social media or reach out via email. Let's connect and create something amazing together!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={SOCIAL_LINKS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href={SOCIAL_LINKS[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiInstagram size={24} />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-6 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiMail size={24} />
                <span>Email</span>
              </a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
