import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Users, Code, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'React Native Developer Intern',
      company: 'Thiran360AI',
      period: 'April 2025 - Present',
      location: 'Remote',
      type: 'Internship',
      status: 'current',
      icon: Code,
      description: 'Currently developing mobile applications using React Native, focusing on cross-platform solutions and API integrations. Working on real-world projects including booking systems and hotel management applications.',
      highlights: [
        'Building production-ready mobile apps',
        'Cross-platform development expertise',
        'API integration and optimization',
        'Agile development practices',
      ],
      technologies: ['React Native', 'JavaScript', 'API Integration', 'Mobile Development'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Executive Tutor / Online Tutor',
      company: 'Focus Edumatics Pvt Ltd',
      period: 'Feb 2022 - July 2024',
      location: 'Remote',
      type: 'Full-time',
      status: 'completed',
      icon: Users,
      description: 'Provided online tutoring services and educational support to students. Developed strong communication skills and ability to explain complex concepts in simple terms, which greatly benefits my current development work.',
      highlights: [
        'Enhanced communication skills',
        'Problem-solving abilities',
        'Teaching complex concepts',
        'Online education expertise',
      ],
      technologies: ['Communication', 'Problem Solving', 'Teaching', 'Online Education'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Java Developer Training',
      company: 'QSpiders',
      period: '2023',
      location: 'Training Institute',
      type: 'Training',
      status: 'completed',
      icon: GraduationCap,
      description: 'Completed comprehensive Java development training covering Core Java, Spring Framework, Hibernate, and database management. This intensive training provided the foundation for my current full-stack development skills.',
      highlights: [
        'Core Java mastery',
        'Spring Framework expertise',
        'Database management skills',
        'Full-stack foundation',
      ],
      technologies: ['Core Java', 'Spring Framework', 'Hibernate', 'MySQL'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.3, duration: 0.8 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200 hidden lg:block"></div>
      
      {/* Timeline dot */}
      <div className={`absolute left-6 top-6 w-6 h-6 rounded-full border-4 border-white shadow-lg hidden lg:block ${
        experience.status === 'current' 
          ? 'bg-gradient-to-r from-green-400 to-green-600 animate-pulse' 
          : 'bg-gradient-to-r ' + experience.color
      }`}></div>

      <div className={`lg:ml-20 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 ${
        experience.status === 'current' 
          ? 'border-green-500' 
          : 'border-purple-500'
      }`}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className={`w-16 h-16 bg-gradient-to-r ${experience.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
              <experience.icon size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {experience.title}
              </h3>
              <p className="text-lg font-semibold text-purple-600">
                {experience.company}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} />
              <span className="font-medium">{experience.period}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span>{experience.location}</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              experience.status === 'current' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {experience.type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Briefcase size={18} />
            Key Achievements:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {experience.highlights.map((highlight: string, highlightIndex: number) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3 + highlightIndex * 0.1 }}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                <span>{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Technologies & Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string, techIndex: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.3 + techIndex * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${experience.color} text-white px-3 py-1 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Current badge */}
        {experience.status === 'current' && (
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
          >
            🔥 Current
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From physics student to full-stack developer - here's my professional evolution 🚀
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '3+', label: 'Years in Tech', icon: '📅' },
            { number: '5+', label: 'Projects Completed', icon: '💼' },
            { number: '100%', label: 'Passion Level', icon: '❤️' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.4 + index * 0.2 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready for the Next Challenge! 💪</h3>
          <p className="text-lg mb-6 opacity-90">
            Looking for opportunities to create amazing digital experiences and work with innovative teams.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            Let's Connect! 🤝
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;