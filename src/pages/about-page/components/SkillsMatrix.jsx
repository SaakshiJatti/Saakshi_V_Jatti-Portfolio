import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: 'Code',
      color: 'cyan',
      skills: [
        { name: 'Java', level: 75, icon: 'Coffee' },
        { name: 'Python', level: 60, icon: 'FileCode' },
        { name: 'JavaScript(DOM)', level: 35, icon: 'FileCode' },
        { name: 'HTML/CSS', level: 80, icon: 'Code' },
        { name: 'SQL', level: 40, icon: 'Database' },
        { name: 'C', level: 40, icon: 'FileCode' },
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: 'Wrench',
      color: 'green',
      skills: [
        { name: 'VS Code', level: 85, icon: 'Code2' },
        { name: 'Terminal/CLI', level: 45, icon: 'Terminal' },
        { name: 'Figma', level: 65, icon: 'Figma' },
        { name: 'Canva', level: 60, icon: 'Image' },
        { name: 'Wireframing', level: 50, icon: 'Cable' },
        { name: 'UI/UX Design Principles', level: 50, icon: 'Wand' },
      ]
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: 'Globe',
      color: 'purple',
      skills: [
        { name: 'React', level: 60, icon: 'Component' },
        { name: 'Bootstrap', level: 55, icon: 'Server' },
        { name: 'Tailwind CSS', level: 50, icon: 'Zap' },
        { name: 'MongoDB', level: 35, icon: 'Database' },
        { name: 'Git/GitHub', level: 70, icon: 'GitBranch' }
      ]
    },
    {
      id: 'learning',
      title: 'Currently Learning',
      icon: 'BookOpen',
      color: 'orange',
      skills: [
        { name: 'Data Structures & Algorithms', level: 50, icon: 'TreePine' },
        { name: 'Data Science & Business Analysis', level: 15, icon: 'ChartLine' },
        { name: 'AI Concepts', level: 30, icon: 'Brain' },
        { name: 'Web Technologies', level: 35, icon: 'Shield' },
        { name: 'Game Development', level: 10, icon: 'Gamepad2' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      skillCategories?.forEach(category => {
        category?.skills?.forEach(skill => {
          animated[skill.name] = skill?.level;
        });
      });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getColorClass = (color) => {
    switch (color) {
      case 'cyan': return 'text-cyan-400';
      case 'purple': return 'text-purple-400';
      case 'green': return 'text-green-400';
      case 'orange': return 'text-orange-400';
      default: return 'text-text-secondary';
    }
  };

  const getBgColorClass = (color) => {
    switch (color) {
      case 'cyan': return 'bg-cyan-400';
      case 'purple': return 'bg-purple-400';
      case 'green': return 'bg-green-400';
      case 'orange': return 'bg-orange-400';
      default: return 'bg-text-secondary';
    }
  };

  const getSkillLevelText = (level) => {
    if (level >= 70) return 'Comfortable';
    if (level >= 50) return 'Learning';
    if (level >= 30) return 'Exploring';
    return 'Just Started';
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-heading font-bold text-foreground flex items-center gap-3">
        <Icon name="Cpu" size={28} className="text-cyan-400" />
        Skills & Learning Progress
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories?.map((category) => (
          <div key={category?.id} className="glass-cyber p-6 rounded-xl border-l-4 border-cyan-400/30">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg ${getBgColorClass(category?.color)}/10 flex items-center justify-center border border-${category?.color}-400/30`}>
                <Icon name={category?.icon} size={20} className={getColorClass(category?.color)} />
              </div>
              <h3 className="text-xl font-body font-semibold text-foreground">
                {category?.title}
              </h3>
            </div>

            <div className="space-y-4">
              {category?.skills?.map((skill) => (
                <div key={skill?.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name={skill?.icon} size={16} className="text-text-secondary" />
                      <span className="font-body text-foreground">{skill?.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-caption text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full border border-cyan-400/30">
                        {getSkillLevelText(animatedSkills?.[skill?.name] || 0)}
                      </span>
                      <span className="text-sm font-data text-text-secondary">
                        {animatedSkills?.[skill?.name] || 0}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden border border-cyan-400/20">
                    <div
                      className={`h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-1000 ease-out rounded-full cyber-glow-skill`}
                      style={{
                        width: `${animatedSkills?.[skill?.name] || 0}%`,
                        transitionDelay: '0.2s'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Learning Status */}
      <div className="glass-cyber p-6 rounded-xl text-center border border-cyan-400/30">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Icon name="Zap" size={24} className="text-purple-400" />
          <h3 className="text-xl font-body font-semibold text-foreground">
            Always Learning Mode: <span className="text-cyan-400">ACTIVE</span>
          </h3>
        </div>
        <p className="text-text-secondary font-body">
          These percentages reflect my current comfort level, not mastery. I'm constantly pushing these numbers higher 
          through practice, projects, and pure curiosity. The journey is just beginning!
        </p>
      </div>
    </div>
  );
};

export default SkillsMatrix;