import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Calendar, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Employee Management System',
      description: 'Full-stack enterprise application for efficient employee data management. Built with Spring Boot backend and React frontend, featuring comprehensive CRUD operations, advanced filtering, and real-time analytics dashboard.',
      year: '2024',
      category: 'Full Stack Web App',
      icon: '👥',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'REST API'],
      features: [
        'Complete CRUD operations',
        'Advanced filtering & search',
        'Real-time analytics dashboard',
        'Responsive design',
        'RESTful API architecture'
      ],
      github: 'https://github.com/Muthupandi33/Employee_Management',
      demo: '#',
      highlights: '🔥 Production-ready enterprise solution',
    },
    {
      title: 'KOVAIS Booking App',
      description: 'Real-time mobile booking application with modular navigation system. Supports hotel, spa, gym, and barbershop service bookings with seamless user experience and cross-platform compatibility.',
      year: '2025',
      category: 'Mobile App',
      icon: '🏨',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'JavaScript', 'API Integration', 'Android Studio'],
      features: [
        'Multi-service booking system',
        'Real-time availability',
        'Intuitive user interface',
        'Cross-platform compatibility',
        'Seamless navigation'
      ],
      github: 'https://github.com/thiran360ai/kovaisUserRN',
      demo: '#',
      highlights: '🚀 Live production app',
    },
    {
      title: 'Hotels Management App',
      description: 'React Native application with comprehensive navigation structure for hotel management. Features include login system, dashboard, profit analytics, and various hotel management views with intuitive stack navigation.',
      year: '2025',
      category: 'Mobile App',
      icon: '🏪',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Stack Navigation', 'Dashboard', 'Analytics'],
      features: [
        'Complete hotel management',
        'Profit analytics dashboard',
        'Stack navigation system',
        'User authentication',
        'Revenue tracking'
      ],
      github: 'https://github.com/Muthupandi33/Hotels',
      demo: '#',
      highlights: '📊 Advanced analytics features',
    },
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        index === 0 ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Image/Visual Section */}
      <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-8xl filter drop-shadow-lg"
          >
            {project.icon}
          </motion.div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
            {project.category}
          </span>
        </div>
        
        {/* Year Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Calendar size={14} />
            {project.year}
          </span>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 opacity-20">
          {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
            <motion.div
              key={tech}
              className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                top: `${20 + techIndex * 25}%`,
                right: `${10 + techIndex * 15}%`,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + techIndex,
                repeat: Infinity,
                delay: techIndex * 0.5,
              }}
            >
              {tech.charAt(0)}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="text-2xl">{project.highlights.split(' ')[0]}</div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">✨ Key Features:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.features.map((feature: string, featureIndex: number) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                {feature}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">🛠️ Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Highlight */}
        <div className="mb-6 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
          <p className="text-sm font-medium text-gray-700">{project.highlights}</p>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            <Github size={18} />
            View Code
          </motion.a>
          
          {project.demo !== '#' && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Some cool stuff I've built recently - from enterprise solutions to mobile apps 🚀
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Want to see more? 👀
          </h3>
          <p className="text-gray-600 mb-8">
            Check out my GitHub for more projects and contributions!
          </p>
          <motion.a
            href="https://github.com/Muthupandi33"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            <Github size={24} />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;