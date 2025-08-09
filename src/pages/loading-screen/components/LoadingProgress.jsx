import React from 'react';
import { motion } from 'framer-motion';

const LoadingProgress = ({ progress, status }) => {
  return (
    <div className="relative z-10 mt-12">
      {/* Progress Bar Container */}
      <div className="relative w-80 h-2 bg-slate-800/50 rounded-full overflow-hidden border border-cyan-400/20">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        
        {/* Progress Bar */}
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 shadow-glow-cyber-cyan"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        
        {/* Energy beam effect */}
        <motion.div
          className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white/50 to-transparent"
          animate={{
            opacity: progress > 0 ? [0, 1, 0] : 0,
            x: progress > 0 ? [-20, 0, 20] : 0
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      {/* Progress Percentage */}
      <div className="flex items-center justify-between mt-4">
        <motion.div
          className="font-mono text-2xl font-bold text-cyan-400 tracking-wider"
          animate={{ 
            textShadow: [
              "0 0 10px rgba(0, 245, 255, 0.5)",
              "0 0 20px rgba(0, 245, 255, 0.8)",
              "0 0 10px rgba(0, 245, 255, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {Math.round(progress)}%
        </motion.div>
        
        {/* Status Text */}
        <motion.div
          className="font-tech text-sm text-cyan-300/80 uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {status}
        </motion.div>
      </div>
      {/* System Status Indicators */}
      <div className="flex justify-center gap-4 mt-8">
        {['CORE', 'UI', 'DATA', 'NET']?.map((system, index) => (
          <motion.div
            key={system}
            className="flex items-center gap-2 text-xs font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: progress > (index * 25) ? 1 : 0.3 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              className={`w-2 h-2 rounded-full ${
                progress > (index * 25) 
                  ? 'bg-green-400 shadow-glow-sm' 
                  : 'bg-slate-600'
              }`}
              animate={progress > (index * 25) ? {
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className={`${
              progress > (index * 25) 
                ? 'text-green-400' :'text-slate-500'
            }`}>
              {system}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoadingProgress;