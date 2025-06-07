import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center z-50"
    >
      <div className="text-center text-white">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-2xl">
            👨‍💻
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl font-bold"
          >
            Muthupandi.dev
          </motion.h1>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          <span className="text-lg">Loading awesome content</span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.2, duration: 1.3, ease: "easeInOut" }}
          className="mt-8 h-1 bg-white/30 rounded-full overflow-hidden mx-auto max-w-xs"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 1.2, duration: 1.3, ease: "easeInOut" }}
            className="h-full bg-white rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;