import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AboutPreview = () => {
  const achievements = [
    {
      icon: "Award",
      title: "Published Research Paper",
      description: "Co-authored and published a paper on Gamified Learning for Programming as part of an academic project.",
      year: "2025"
    },
    {
      icon: "ChartLine",
      title: "Skill Development Sprint",
      description: "Actively building skills in Python, React, and core web development tools.",
      year: "2024"
    },
    {
      icon: "Gamepad2",
      title: "Prototype Development",
      description: "Created an initial game prototype to test core mechanics and user interactions.",
      year: "2025"
    }
  ];

  const interests = [
    { name: "Game Design", icon: "Gamepad2" },
    { name: "UI Animation", icon: "Zap" },
    { name: "User Research", icon: "Search" },
    { name: "Prototyping", icon: "Layers" },
    { name: "Creative Coding", icon: "Code" },
    { name: "Digital Art", icon: "Palette" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="scroll-reveal">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              <Icon name="User" size={16} className="mr-2" />
              About Me
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Bridging Design &{' '}
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-text-secondary font-body leading-relaxed">
              <p>
                I’m a student, passionate about combining technical skills with creative thinking. 
                From gamified learning projects to interactive web applications, 
                I focus on building solutions that are both functional and engaging. 
                My work blends coding expertise in Java, Python, and React with a strong 
                understanding of UI/UX principles.
              </p>
              
              <p>
                I believe great digital experiences come from understanding users first. 
                Whether designing an app interface or crafting interactive elements for a game, 
                my goal is to solve real problems while creating intuitive and delightful interactions.
              </p>
            </div>
            
            {/* Interests */}
            <div className="mt-8">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Current Interests
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {interests?.map((interest) => (
                  <div
                    key={interest?.name}
                    className="flex items-center space-x-2 px-3 py-2 bg-muted/50 rounded-lg text-sm text-text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-200 magnetic-hover"
                  >
                    <Icon name={interest?.icon} size={16} />
                    <span className="font-medium">{interest?.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/about-page">
                <Button 
                  variant="default" 
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="magnetic-hover micro-feedback w-full sm:w-auto"
                >
                  Learn More About Me
                </Button>
              </Link>
              
              <a 
                href="/Saakshi_V_Jatti_RESUME_.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  iconName="Eye"
                  iconPosition="left"
                  className="magnetic-hover micro-feedback w-full sm:w-auto"
                >
                  View Resume
                </Button>
              </a>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="scroll-reveal">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
                Recent Achievements
              </h3>
              
              {achievements?.map((achievement, index) => (
                <div
                  key={achievement?.title}
                  className="glass rounded-xl p-6 magnetic-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={achievement?.icon} size={20} className="text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-heading font-semibold text-foreground">
                          {achievement?.title}
                        </h4>
                        <span className="text-sm text-accent font-data">
                          {achievement?.year}
                        </span>
                      </div>
                      
                      <p className="text-text-secondary font-body">
                        {achievement?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Quote */}
              <div className="glass rounded-xl p-6 border-l-4 border-accent">
                <blockquote className="text-lg font-body italic text-foreground mb-4">
                  "Great design is not just what it looks like and feels like. 
                  Great design is how it works."
                </blockquote>
                <cite className="text-sm text-text-secondary font-medium">
                  — Steve Jobs
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;