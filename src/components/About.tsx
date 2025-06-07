import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const strengths = [
    'Problem Solving 🧩',
    'Adaptability 🔄',
    'Attention to Detail 🔍',
    'Time Management ⏰',
    'Futuristic Mind 🚀',
  ];

  const education = [
    {
      degree: 'M.Sc. Physics',
      institution: 'Government Arts College, Udumalpet',
      period: '2020-2022',
      cgpa: '7.7/10',
    },
    {
      degree: 'B.Sc. Physics',
      institution: 'Arulmigu Palaniandavar College',
      period: '2017-2020',
      cgpa: '6.6/10',
    },
  ];

  const languages = [
    { name: 'English', level: 'Fluent', flag: '🇺🇸' },
    { name: 'Tamil', level: 'Native', flag: '🇮🇳' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turning ideas into digital reality with passion and precision 💜
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Hey! I'm Muthupandi, a passionate developer from India 🇮🇳
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a Full Stack Java Developer with a strong foundation in modern web and mobile technologies. 
                With experience in building scalable applications using{' '}
                <span className="text-purple-600 font-semibold">Java Spring Boot</span> and{' '}
                <span className="text-pink-600 font-semibold">React Native</span>, 
                I bring both technical expertise and creative problem-solving to every project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently rocking it as a React Native Developer Intern at{' '}
                <span className="text-blue-600 font-semibold">Thiran360AI</span>, 
                where I'm crafting next-level mobile experiences! 🎯
              </p>
            </div>

            {/* Strengths */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="text-red-500" size={24} />
                Core Strengths
              </h4>
              <div className="flex flex-wrap gap-3">
                {strengths.map((strength, index) => (
                  <motion.span
                    key={strength}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300"
                  >
                    {strength}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Globe className="text-blue-500" size={24} />
                Languages
              </h4>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-between bg-gray-50 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-semibold text-gray-800">{lang.name}</span>
                    </div>
                    <span className="text-purple-600 font-medium">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <GraduationCap className="text-green-500" size={24} />
                Education Background
              </h4>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-gray-800 text-lg">{edu.degree}</h5>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-600">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500"
            >
              <h5 className="font-bold text-gray-800 text-lg mb-2 flex items-center gap-2">
                <Award className="text-yellow-500" size={20} />
                Professional Training
              </h5>
              <p className="text-gray-700 font-medium mb-1">Java Developer Training</p>
              <p className="text-gray-600 mb-2">QSpiders • 2023</p>
              <p className="text-gray-700 text-sm">
                Completed comprehensive Java development training covering Core Java, Spring Framework, 
                Hibernate, and database management 🎓
              </p>
            </motion.div>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center"
            >
              <h5 className="font-bold text-gray-800 text-lg mb-4">Quick Facts 📊</h5>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-orange-600">Remote Ready</div>
                  <div className="text-sm text-gray-600">Global Collaboration</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">Fast Delivery</div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;