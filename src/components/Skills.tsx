import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Database, Wrench, Star } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', level: 90, icon: '☕' },
        { name: 'JavaScript', level: 80, icon: '🟨' },
        { name: 'SQL', level: 85, icon: '🗃️' },
      ],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'React JS', level: 85, icon: '⚛️' },
        { name: 'React Native', level: 80, icon: '📱' },
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: Wrench,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Spring Boot', level: 88, icon: '🍃' },
        { name: 'Hibernate JPA', level: 82, icon: '🔗' },
        { name: 'Git & Postman', level: 90, icon: '🛠️' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MySQL', level: 85, icon: '🐬' },
        { name: 'Oracle', level: 75, icon: '🔴' },
        { name: 'JDBC', level: 80, icon: '🔌' },
      ],
    },
  ];

  const specializations = [
    'RESTful APIs 🔌',
    'Microservices 🏗️',
    'Database Design 🗄️',
    'Mobile Development 📱',
    'Cross-Platform Apps 🌐',
    'Full Stack Development 💻',
    'Performance Optimization ⚡',
    'Clean Code 🧹',
  ];

  const SkillBar = ({ skill, delay }: { skill: any; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold text-gray-800">{skill.name}</span>
        </div>
        <span className="text-purple-600 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute right-0 top-0 w-2 h-full bg-white/30 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Technical <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies I love working with and tools that make the magic happen ✨
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={categoryIndex * 0.2 + skillIndex * 0.1} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center gap-3">
            <Star className="text-yellow-500" size={32} />
            Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {spec}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">My Tech Universe 🌌</h3>
          <div className="relative max-w-4xl mx-auto h-64">
            {/* Orbital animation for tech icons */}
            {['☕', '⚛️', '🍃', '📱', '🗃️', '🛠️', '🌐', '🎨'].map((icon, index) => (
              <motion.div
                key={icon}
                className="absolute w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((index * Math.PI * 2) / 8) * 120,
                  y: Math.sin((index * Math.PI * 2) / 8) * 120,
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  x: {
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {icon}
              </motion.div>
            ))}
            
            {/* Center element */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
              👨‍💻
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;