import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Rimberion",
      category: "Warehouse Ordering System",
      description: "A simple front-end application for ordering items from a warehouse.",
      image: "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Website", "WMS", "HTML", "CSS"],
      status: "Completed",
      year: "2023",
      href: "https://rimberion.vercel.app/"
    },
    {
      id: 2,
      title: "Shoefy",
      category: "E-Commerce Website",
      description: "A front-end e-commerce template designed to practice JavaScript DOM manipulation, event handling, and CSS layout skills. All features are built purely with client-side code.",
      image: "https://images.unsplash.com/photo-1579995468789-6a75183d76da?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Website", "E-commerce", "UI"],
      status: "Completed",
      year: "2024",
      href: "https://shoefy.vercel.app/"
    },
    {
      id: 3,
      title: "Wish-O",
      category: "Band Website Prototype",
      description: "An interactive front-end prototype for a band's concert ticket booking page. Built with HTML and CSS, this project showcases a clean user interface and a mock booking flow, from selecting a concert date to confirming a ticket.",
      image: "https://images.unsplash.com/photo-1594124094198-312a19748a1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["UI", "Prototype", "UX", "Front-end" ],
      status: "Prototype",
      year: "2024",
      href: "https://wish-o.vercel.app/"
    },
    {
      id: 4,
      title: "Sign Language Interpreter",
      category: "Machine Learning",
      description: "A real-time sign language interpreter built with Computer Vision. This project uses OpenCV, MediaPipe, and ScikitLearn to recognize a small, predefined set of hand gestures and translate them into text. It serves as a foundational exploration into gesture recognition for assistive technology.",
      image: "https://images.unsplash.com/photo-1551240903-154be3f2e18b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Python", "Prototype", "OpenCV", "MediaPipe", "ScikitLearn"],
      status: "Prototype",
      year: "2024",
      href: "https://github.com/SaakshiJatti/sign-language-interpreter"

    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-success bg-success/10 border-success/20';
      case 'In Progress':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'Prototype':
        return 'text-accent bg-accent/10 border-accent/20';
      default:
        return 'text-text-secondary bg-muted border-border';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Briefcase" size={16} className="mr-2" />
            Featured Work
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Selected Projects
          </h2>
          
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning UI/UX design and projects. 
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects?.map((project, index) => (
            <div
              key={project?.id}
              className="group glass rounded-2xl overflow-hidden magnetic-hover scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <a
                      key={project?.id}
                      href={project?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="default" 
                        size="sm"
                        iconName="ArrowUpRight"
                        iconPosition="right"
                        className="w-full micro-feedback"
                      >
                        View Project
                      </Button>
                    </a>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
                    {project?.status}
                  </span>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-accent font-medium">{project?.category}</span>
                  <span className="text-sm text-text-secondary font-data">{project?.year}</span>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                  {project?.title}
                </h3>
                
                <p className="text-text-secondary font-body mb-4 leading-relaxed">
                  {project?.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-text-secondary text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center scroll-reveal">
          <Link to="/portfolio-gallery">
            <Button 
              variant="outline" 
              size="lg"
              iconName="Grid3X3"
              iconPosition="left"
              className="magnetic-hover micro-feedback"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;