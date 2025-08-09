import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsVisualization = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Design Tools",
      icon: "Palette",
      skills: [
        { name: "Figma", level: 95, color: "from-accent to-accent/70" },
        { name: "Blender", level: 20, color: "from-purple-500 to-purple-400" },
        { name: "Sketchbook", level: 82, color: "from-orange-500 to-orange-400" },
        { name: "Canva", level: 90, color: "from-blue-500 to-blue-400" }
      ]
    },
    {
      title: "Development",
      icon: "Code2",
      skills: [
        { name: "HTML/CSS", level: 92, color: "from-green-500 to-green-400" },
        { name: "JavaScript", level: 35, color: "from-yellow-500 to-yellow-400" },
        { name: "React", level: 40, color: "from-cyan-500 to-cyan-400" },
        { name: "Unity", level: 70, color: "from-red-500 to-red-400" }
      ]
    },
    {
      title: "Game Design",
      icon: "Gamepad2",
      skills: [
        { name: "UI/UX for Games", level: 45, color: "from-pink-500 to-pink-400" },
        { name: "Prototyping", level: 30, color: "from-indigo-500 to-indigo-400" },
        { name: "User Research", level: 60, color: "from-teal-500 to-teal-400" },
        { name: "Wireframing", level: 25, color: "from-emerald-500 to-emerald-400" }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "Lightbulb" },
    { name: "Team Collaboration", icon: "Users" },
    { name: "Creative Thinking", icon: "Sparkles" },
    { name: "User Empathy", icon: "Heart" },
    { name: "Attention to Detail", icon: "Eye" },
    { name: "Communication", icon: "MessageCircle" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Target" size={16} className="mr-2" />
            Skills & Expertise
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Technical Proficiency
          </h2>
          
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and design capabilities, 
            constantly evolving with industry trends and emerging technologies.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories?.map((category, categoryIndex) => (
            <div
              key={category?.title}
              className="glass rounded-2xl p-6 scroll-reveal"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mr-4">
                  <Icon name={category?.icon} size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {category?.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category?.skills?.map((skill, skillIndex) => (
                  <div key={skill?.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill?.name}
                      </span>
                      <span className="text-xs text-text-secondary font-data">
                        {skill?.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill?.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill?.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="scroll-reveal">
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
            Core Competencies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills?.map((skill, index) => (
              <div
                key={skill?.name}
                className="group glass rounded-xl p-4 text-center magnetic-hover micro-feedback"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 transition-colors duration-200">
                  <Icon name={skill?.icon} size={20} className="text-accent" />
                </div>
                
                <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                  {skill?.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 scroll-reveal">
          {[
            { number: "5+", label: "Tools & Technologies Used", icon: "Zap" },
            { number: "3+", label: "Projects Completed", icon: "CheckCircle" },
            { number: "2+", label: "UI/UX Prototypes Designed", icon: "PaintBucket" },
            { number: "2", label: "Multi-AI Integrated Solutions Developed", icon: "Bot" }
          ]?.map((stat, index) => (
            <div
              key={stat?.label}
              className="text-center glass rounded-xl p-6 magnetic-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={20} className="text-accent" />
              </div>
              
              <div className="text-2xl font-heading font-bold text-foreground mb-1">
                {stat?.number}
              </div>
              
              <div className="text-sm text-text-secondary font-body">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;