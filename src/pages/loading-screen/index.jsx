import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CircuitBackground from './components/CircuitBackground';
import ParticleCanvas from './components/ParticleField';
import HolographicLogo from './components/HolographicLogo';
import LoadingProgress from './components/LoadingProgress';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING');
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const statusMessages = [
    { progress: 0, status: 'INITIALIZING' },
    { progress: 15, status: 'LOADING CORE SYSTEMS' },
    { progress: 35, status: 'ESTABLISHING CONNECTIONS' },
    { progress: 55, status: 'LOADING USER INTERFACE' },
    { progress: 75, status: 'SYNCING DATA' },
    { progress: 90, status: 'FINALIZING' },
    { progress: 100, status: 'WELCOME TO THE MATRIX' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 3 + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            navigate('/home-landing-page');
          }, 2000);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    const currentStatus = statusMessages?.slice()?.reverse()?.find(item => progress >= item?.progress);
    
    if (currentStatus) {
      setStatus(currentStatus?.status);
    }
  }, [progress]);

  const glitchVariants = {
    hidden: { opacity: 0, x: -50, skewX: -5 },
    visible: { 
      opacity: 1, 
      x: 0, 
      skewX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    glitch: {
      x: [0, -5, 5, -2, 0],
      skewX: [0, -2, 2, 0, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-background overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.1,
          filter: "blur(10px)"
        }}
        transition={{ duration: 0.8 }}
      >
        {/* Circuit Background */}
        <CircuitBackground />
        
        {/* Particle Field */}
        <ParticleCanvas />
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
          {/* Header */}
          <motion.div
            variants={glitchVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-cyber font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mb-4"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              SAAKSHI V. JATTI
            </motion.h1>
            <motion.p 
              className="text-lg font-tech text-cyan-300/80 uppercase tracking-[0.3em]"
              variants={glitchVariants}
              animate={Math.random() > 0.95 ? "glitch" : "visible"}
            >
              CYBERNETIC PORTFOLIO
            </motion.p>
          </motion.div>

          {/* Holographic Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              delay: 0.5 
            }}
            className="mb-8"
          >
            <HolographicLogo />
          </motion.div>

          {/* Loading Progress */}
          <LoadingProgress progress={progress} status={status} />

          {/* Terminal-style Welcome Message */}
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <motion.p 
                className="font-mono text-green-400 text-lg mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                &gt; ACCESS_GRANTED
              </motion.p>
              <p className="font-tech text-cyan-300/60 text-sm uppercase tracking-wider">
                Entering the Digital Realm...
              </p>
            </motion.div>
          )}

          {/* Floating Data Streams */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)]?.map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
                initial={{ 
                  x: `${20 + i * 10}%`,
                  y: '-20%',
                  opacity: 0 
                }}
                animate={{ 
                  y: '120%',
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>

        {/* Ambient Audio Trigger */}
        <div className="hidden">
          {/* Space for future audio implementation */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;