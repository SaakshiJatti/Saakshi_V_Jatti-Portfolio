import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalNarrative = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-heading font-bold text-foreground flex items-center gap-3">
          <Icon name="Terminal" size={28} className="text-cyan-400" />
          My Journey
        </h2>
        
        <div className="space-y-6 text-text-secondary font-body leading-relaxed">
          <p className="text-lg">
            Hi, I’m Saakshi — a final-year Computer Science and Design student 
            with a solid foundation in web development and a growing interest 
            in game development, data science, business analysis, and AI.
          </p>
          
          <p>
            My journey started with C and Java, where I first discovered 
            the thrill of building something from scratch. Since then, 
            I’ve developed several frontend projects using HTML, CSS, JavaScript, 
            and React — always focusing on clean design, functionality, and collaboration.
          </p>
          
          <p>
            As I explored deeper, I found myself drawn to the logic behind gameplay, 
            the patterns hidden in data, and the potential of emerging tech to 
            shape smarter, more human-centered solutions.
          </p>

          <p>
            With a creative mindset and an ever-growing curiosity, 
            I’m excited to step into opportunities where I can not just build things — 
            but build things that mean something, spark ideas, and maybe even surprise a 
            few people along the way.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-heading font-bold text-foreground flex items-center gap-3">
          <Icon name="Brain" size={24} className="text-purple-400" />
          Learning Philosophy
        </h3>
        
        <div className="grid gap-4">
          <div className="glass-cyber p-6 rounded-xl magnetic-hover border-l-4 border-cyan-400/50">
            <h4 className="text-lg font-body font-semibold text-foreground mb-2 flex items-center gap-2">
              <Icon name="Zap" size={16} className="text-cyan-400" />
              Learn by Building
            </h4>
            <p className="text-text-secondary">
              I believe the best way to learn is by getting your hands dirty. 
              Every project — whether successful or not — teaches me something new. 
              It's through building, experimenting, and sometimes breaking things 
              that I discover how concepts really work.


            </p>
          </div>
          
          <div className="glass-cyber p-6 rounded-xl magnetic-hover border-l-4 border-purple-400/50">
            <h4 className="text-lg font-body font-semibold text-foreground mb-2 flex items-center gap-2">
              <Icon name="Users" size={16} className="text-purple-400" />
              Community Driven
            </h4>
            <p className="text-text-secondary">
              I enjoy being part of collaborative efforts where 
              ideas are shared thoughtfully and creativity is nurtured. 
              Whether it's contributing to club projects, working behind the 
              scenes on designs, or supporting team goals, I value meaningful 
              connections and the impact of quiet, consistent contribution.
            </p>
          </div>
          
          <div className="glass-cyber p-6 rounded-xl magnetic-hover border-l-4 border-cyan-400/50">
            <h4 className="text-lg font-body font-semibold text-foreground mb-2 flex items-center gap-2">
              <Icon name="Target" size={16} className="text-cyan-400" />
              Future Focused
            </h4>
            <p className="text-text-secondary">
              I’m actively building a strong foundation while exploring where tech can take me. 
              With growing curiosity in areas like data science, AI, and game development, 
              I stay open to emerging technologies and evolving roles — ready to adapt, 
              learn, and contribute wherever innovation leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNarrative;