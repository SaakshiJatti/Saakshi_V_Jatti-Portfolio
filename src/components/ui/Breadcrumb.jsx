import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();
  
  const pathMap = {
    '/home-landing-page': 'Home',
    '/portfolio-gallery': 'Portfolio',
    '/project-detail-view': 'Project Details',
    '/about-page': 'About',
    '/contact-page': 'Contact'
  };

  const generateBreadcrumbs = () => {
    if (customItems) {
      return customItems;
    }

    const pathSegments = location.pathname?.split('/')?.filter(Boolean);
    const breadcrumbs = [{ label: 'Home', path: '/home-landing-page' }];

    if (pathSegments?.length > 0) {
      const currentPath = `/${pathSegments?.[0]}`;
      if (currentPath !== '/home-landing-page' && pathMap?.[currentPath]) {
        breadcrumbs?.push({
          label: pathMap?.[currentPath],
          path: currentPath
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs?.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm font-caption mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs?.map((crumb, index) => (
          <li key={crumb?.path} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={14} 
                className="text-text-secondary mx-2" 
              />
            )}
            {index === breadcrumbs?.length - 1 ? (
              <span className="text-foreground font-medium">
                {crumb?.label}
              </span>
            ) : (
              <Link
                to={crumb?.path}
                className="text-text-secondary hover:text-accent transition-colors duration-200 magnetic-hover"
              >
                {crumb?.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;