import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/home-landing-page', icon: 'Home' },
    { label: 'Portfolio', path: '/portfolio-gallery', icon: 'Briefcase' },
    { label: 'About', path: '/about-page', icon: 'User' },
    { label: 'Contact', path: '/contact-page', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-elevation-2' : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/home-landing-page" 
              className="flex items-center space-x-3 magnetic-hover group"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={18} color="var(--color-accent-foreground)" />
                </div>
                <div className="absolute inset-0 bg-accent/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-heading font-bold text-foreground">
                  My Portfolio
                </h1>
                <p className="text-xs font-caption text-text-secondary -mt-1">
                  Designer. Developer. Problem Solver.
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`relative px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200 magnetic-hover micro-feedback ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10 shadow-glow-sm'
                      : 'text-text-secondary hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.label}</span>
                  </span>
                  {isActivePath(item?.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden micro-feedback"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={20} 
                className="transition-transform duration-200"
              />
            </Button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          ></div>
          <div className="absolute top-16 left-0 right-0 glass border-t border-border">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-body font-medium transition-all duration-200 micro-feedback ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10 shadow-glow-sm'
                      : 'text-text-secondary hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                  {isActivePath(item?.path) && (
                    <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;