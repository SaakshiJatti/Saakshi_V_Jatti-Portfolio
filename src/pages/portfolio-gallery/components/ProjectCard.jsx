import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category) => {
    switch (category) {
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  return (
    <div 
      className="group relative glass rounded-xl overflow-hidden magnetic-hover transition-all duration-300 hover:shadow-elevation-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
            <a
              key={project?.id}
              href={project?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="default" 
                size="sm"
                iconName="ArrowRight"
                iconPosition="right"
                className="w-full micro-feedback"
              >
                View Project
              </Button>
            </a>
            <a
              key={project?.id}
              href={project?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="sm"
                iconName="Github"
                iconPosition="right"
                className="w-full micro-feedback"
              >
                View Repo
              </Button>
            </a>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-caption font-medium border ${getCategoryColor(project?.category)}`}>
            {project?.category}
          </span>
        </div>

      </div>
      {/* Project Info */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
            {project?.title}
          </h3>
          <p className="text-sm font-body text-text-secondary line-clamp-2">
            {project?.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <div key={index} className="flex items-center space-x-1">
              <Icon name={tech?.icon} size={14} className="text-text-secondary" />
              <span className="text-xs font-data text-text-secondary">
                {tech?.name}
              </span>
            </div>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="text-xs font-data text-text-secondary">
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>

        {/* Project Meta */}
        <div className="flex items-center justify-between text-xs font-caption text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{project?.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={12} />
            <span>{project?.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;