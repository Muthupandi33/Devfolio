import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Muthupandi.dev
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Full Stack Developer passionate about creating amazing digital experiences. 
              Let's build something incredible together! 🚀
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between w-full gap-4"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <span>&copy; 2025 Muthupandi M. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="text-red-500 fill-current" size={16} />
              </motion.div>
              <span>and lots of ☕</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </motion.button>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-sm text-gray-500"
          >
            <p>Thanks for visiting! Have a great day! 🌟</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;