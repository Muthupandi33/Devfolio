import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Muthupandi33', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muthupandi-m-5a7b472b5/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muthuphy33@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+918531976451', label: 'Phone' },
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Technologies' },
    { number: '5+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <span className="text-2xl">👋</span>
              <span className="text-gray-600 font-medium">Hey there! I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Muthupandi
              </span>
              <br />
              <span className="text-gray-800">M</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <div className="text-xl md:text-2xl text-purple-600 font-semibold mb-2">
                Full Stack Developer
              </div>
              <div className="text-lg text-gray-600">
                React Native Expert & Java Specialist
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed"
            >
              Passionate developer crafting 🔥 scalable web & mobile apps with{' '}
              <span className="text-purple-600 font-semibold">Java Spring Boot</span> and{' '}
              <span className="text-pink-600 font-semibold">React Native</span>. 
              Ready to turn your ideas into digital reality! 🚀
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Collaborate 🤝
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View My Work 💼
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-4 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:shadow-xl"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-gray-600"
            >
              <MapPin size={16} />
              <span>Dindigul, India 🇮🇳 • Available Worldwide 🌍</span>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl font-bold relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="text-center">
                    <div className="text-4xl mb-2">👨‍💻</div>
                    <div className="text-xl font-semibold">Full Stack</div>
                    <div className="text-lg">Developer</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl"
                >
                  ☕
                </motion.div>
                
                <motion.div
                  animate={{
                    rotate: -360,
                    x: [0, -15, 0],
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl"
                >
                  ⚛️
                </motion.div>
                
                <motion.div
                  animate={{
                    rotate: 180,
                    x: [0, 10, 0],
                    y: [0, -25, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 left-4 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl"
                >
                  🍃
                </motion.div>
                
                <motion.div
                  animate={{
                    rotate: -180,
                    x: [0, -12, 0],
                    y: [0, 18, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 right-4 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl"
                >
                  📱
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-300 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;