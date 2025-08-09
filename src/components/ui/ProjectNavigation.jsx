import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const ProjectNavigation = ({ 
  currentProject = null, 
  previousProject = null, 
  nextProject = null,
  backToGalleryPath = '/portfolio-gallery'
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-border">
      {/* Back to Gallery */}
      <Link to={backToGalleryPath}>
        <Button 
          variant="outline" 
          iconName="ArrowLeft" 
          iconPosition="left"
          className="magnetic-hover"
        >
          Back to Portfolio
        </Button>
      </Link>
      {/* Project Navigation */}
      <div className="flex items-center gap-2">
        {/* Previous Project */}
        {previousProject ? (
          <Link to={`/project-detail-view?id=${previousProject?.id}`}>
            <Button 
              variant="ghost" 
              size="icon"
              className="magnetic-hover micro-feedback"
              aria-label={`Previous project: ${previousProject?.title}`}
            >
              <Icon name="ChevronLeft" size={18} />
            </Button>
          </Link>
        ) : (
          <Button 
            variant="ghost" 
            size="icon"
            disabled
            aria-label="No previous project"
          >
            <Icon name="ChevronLeft" size={18} />
          </Button>
        )}

        {/* Project Counter */}
        {currentProject && (
          <div className="px-3 py-1 bg-muted rounded-lg">
            <span className="text-xs font-data text-text-secondary">
              Project {currentProject?.index} of {currentProject?.total}
            </span>
          </div>
        )}

        {/* Next Project */}
        {nextProject ? (
          <Link to={`/project-detail-view?id=${nextProject?.id}`}>
            <Button 
              variant="ghost" 
              size="icon"
              className="magnetic-hover micro-feedback"
              aria-label={`Next project: ${nextProject?.title}`}
            >
              <Icon name="ChevronRight" size={18} />
            </Button>
          </Link>
        ) : (
          <Button 
            variant="ghost" 
            size="icon"
            disabled
            aria-label="No next project"
          >
            <Icon name="ChevronRight" size={18} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectNavigation;