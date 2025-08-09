import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSection = () => {
  const contactMethods = [
    {
      id: 'email',
      label: 'Email',
      value: 'saakshivjatti@gmail.com',
      href: 'mailto:saakshivjatti@gmail.com',
      icon: 'Mail',
      description: 'Best for internship opportunities and job interviews'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/saakshivjatti/',
      href: 'https://www.linkedin.com/in/saakshivjatti/',
      icon: 'Linkedin',
      description: 'Professional networking and career opportunities'
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/SaakshiJatti',
      href: 'https://github.com/SaakshiJatti',
      icon: 'Github',
      description: 'Check out my code, projects, and learning journey'
    },
    {
      id: 'resume',
      label: 'Resume',
      value: 'View Resume',
      href: '/Saakshi_V_Jatti_RESUME_.pdf',
      icon: 'FileUser',
      description: 'Want to know more? Check out my resume!'
    }
  ];

  const availability = {
    status: 'Open to Opportunities',
    message: 'Actively seeking internships, part-time roles, and collaborative projects',
    responseTime: 'Usually responds within 12 hours',
    timezone: 'IST (UTC+05:30)'
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-heading font-bold text-foreground flex items-center justify-center gap-3">
          <Icon name="Wifi" size={28} className="text-cyan-400" />
          Let's Connect
        </h2>
        <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
          I'm always excited to meet fellow developers, learn from experienced professionals, 
          and work on interesting projects. Let's build something awesome together!
        </p>
      </div>
      
      {/* Availability Status - Student Version */}
      <div className="glass-cyber p-6 rounded-xl text-center border border-cyan-400/30">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse cyber-glow"></div>
          <span className="text-lg font-body font-semibold text-green-400">
            {availability?.status}
          </span>
        </div>
        <p className="text-foreground font-body mb-2">{availability?.message}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary font-caption">
          <span className="flex items-center gap-1">
            <Icon name="Clock" size={14} />
            {availability?.responseTime}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Globe" size={14} />
            {availability?.timezone}
          </span>
        </div>
      </div>
      
      {/* Contact Methods */}
      <div className="grid gap-4 md:grid-cols-2">
        {contactMethods?.map((method) => (
          <a
            key={method?.id}
            href={method?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-cyber p-6 rounded-xl magnetic-hover micro-feedback group transition-all duration-200 hover:shadow-glow-cyber-cyan border-l-4 border-cyan-400/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-200 border border-cyan-400/30">
                <Icon name={method?.icon} size={20} className="text-cyan-400" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-body font-semibold text-foreground mb-1">
                  {method?.label}
                </h3>
                <p className="text-cyan-400 font-data text-sm mb-2 truncate">
                  {method?.value}
                </p>
                <p className="text-text-secondary font-caption text-sm">
                  {method?.description}
                </p>
              </div>
              
              <Icon 
                name="ExternalLink" 
                size={16} 
                className="text-text-secondary group-hover:text-cyan-400 transition-colors duration-200" 
              />
            </div>
          </a>
        ))}
      </div>
      
      {/* Call to Action - Student Version */}
      <div className="text-center space-y-6 pt-8 border-t border-cyan-400/30">
        <div className="space-y-3">
          <h3 className="text-2xl font-heading font-bold text-foreground">
            Ready to Learn & Connect?
          </h3>
          <p className="text-text-secondary font-body">
            Whether you have an internship opportunity 
            or just want to share knowledge, I'd love to connect!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact-page">
            <Button 
              variant="default" 
              iconName="Send" 
              iconPosition="right"
              className="magnetic-hover cyber-button"
            >
              Get In Touch
            </Button>
          </Link>
          
          <Link to="/portfolio-gallery">
            <Button 
              variant="outline" 
              iconName="Code" 
              iconPosition="left"
              className="magnetic-hover cyber-button-outline"
            >
              View My Projects
            </Button>
          </Link>
        </div>
        
        {/* Learning Status */}
        <div className="mt-8 glass-cyber p-4 rounded-xl border border-purple-400/30">
          <div className="flex items-center justify-center gap-2 text-purple-400">
            <Icon name="Brain" size={16} />
            <span className="text-sm font-caption">
              Status: Currently learning Cryptography and Animation Principles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;