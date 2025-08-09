import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-16">
      {/* Cyberpunk Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Neon Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-400/50 via-transparent to-cyan-400/50"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-purple-400/50 via-transparent to-purple-400/50"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-cyan-400/50 via-transparent to-purple-400/50"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-purple-400/50 via-transparent to-cyan-400/50"></div>
        </div>
        
        {/* Floating Cyberpunk Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/30 rounded-full animate-pulse shadow-glow-cyber-cyan"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-lg rotate-45 particle border border-purple-400/40"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-cyan-400/40 rotate-12 particle shadow-glow-cyber-cyan"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full particle"></div>
        
        {/* Digital Rain Effect Elements */}
        <div className="absolute top-10 left-1/2 w-2 h-20 bg-gradient-to-b from-cyan-400/40 to-transparent animate-bounce"></div>
        <div className="absolute top-32 right-1/4 w-1 h-16 bg-gradient-to-b from-purple-400/40 to-transparent animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="relative mb-8 inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-glow-cyber-cyan">
            <Image
              src="/Saakshi_img.png"
              alt="Saakshi V. Jatti - Computer Science and Design Student"
              className="w-full h-full object-cover" />

          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-glow-cyber-multi">
            <Icon name="Code2" size={20} color="var(--color-background)" />
          </div>
          
          {/* Cyberpunk Status Ring */}
          <div className="absolute -inset-2 rounded-full border-2 border-dashed border-cyan-400/30 animate-spin-slow mt-[00px]"></div>
        </div>

        {/* Hero Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Saakshi V. Jatti
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-body font-medium">
            Computer Science and Design Student → Future Developer
          </p>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body leading-relaxed">
            Passionate about creative coding and eager to learn. Currently exploring web development, game development, AI,
             and UI/UX while building my projects and discovering my path in tech.
          </p>
        </div>

        {/* Quick Stats - Student Version */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center glass-cyber p-4 rounded-lg">
            <div className="text-2xl font-heading font-bold text-cyan-400">4th</div>
            <div className="text-sm text-text-secondary font-caption">Year Student</div>
          </div>
          <div className="text-center glass-cyber p-4 rounded-lg">
            <div className="text-2xl font-heading font-bold text-purple-400">3+</div>
            <div className="text-sm text-text-secondary font-caption">Personal Projects</div>
          </div>
          <div className="text-center glass-cyber p-4 rounded-lg">
            <div className="text-3xl font-heading font-bold text-cyan-400">∞</div>
            <div className="text-sm text-text-secondary font-caption">Curiosity Level</div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;