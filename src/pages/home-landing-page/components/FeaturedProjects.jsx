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
      image: "https://private-user-images.githubusercontent.com/156218247/467428476-18250720-a9fa-430e-9c37-50a787c96d43.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NDQwNjgsIm5iZiI6MTc1NDc0Mzc2OCwicGF0aCI6Ii8xNTYyMTgyNDcvNDY3NDI4NDc2LTE4MjUwNzIwLWE5ZmEtNDMwZS05YzM3LTUwYTc4N2M5NmQ0My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxMjQ5MjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZjgzYmJhNmM4NjAwN2M2ZGNjZDBhZjVlMGM2MzEzNWM0NDYzNTRiZjQ2MWU3MDY0YTNlZGRkZTQ5ODE1NmIxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.H5AxDXQabt6tzPN4__36Ps3cLGxTHvhNoZ7lOMep9dY",
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
      image: "https://private-user-images.githubusercontent.com/156218247/467433440-03d3f4a8-e7bd-4866-aecf-3be634b8e8cc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NDQyNzcsIm5iZiI6MTc1NDc0Mzk3NywicGF0aCI6Ii8xNTYyMTgyNDcvNDY3NDMzNDQwLTAzZDNmNGE4LWU3YmQtNDg2Ni1hZWNmLTNiZTYzNGI4ZThjYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxMjUyNTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MzAyNTQzNDhhYzE3ZDMwYmZiMjZmMmUzMmRiZTAxNDlhZjU3ZGI3ODYxZjA4ZDk3M2FmODU2OTg5NzVmNzIxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.uU9WgRspwyq1fr9ZzGfyWnVAdpZf7DakdfWFHXixfl4",
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
      image: "https://private-user-images.githubusercontent.com/156218247/467456235-ee649925-05ea-47ff-ad29-6167b8841b82.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NDI4MTUsIm5iZiI6MTc1NDc0MjUxNSwicGF0aCI6Ii8xNTYyMTgyNDcvNDY3NDU2MjM1LWVlNjQ5OTI1LTA1ZWEtNDdmZi1hZDI5LTYxNjdiODg0MWI4Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxMjI4MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZDY5NGJkODk1MDhlYjA4ZTc5ZmIxNmZlZjI0MDYxMWFiYmZhNGQ5ZmFmMzVkZGFlMjEyN2NjZTFkYTZhOWIwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7vnhyStOoqt6nEY67_G5GdIarm4dQYczce1gy5hfY5g",
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
      image: "https://private-user-images.githubusercontent.com/156218247/467479268-e511be37-1108-465f-b469-0ab94a5e7a4e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NDM5MDYsIm5iZiI6MTc1NDc0MzYwNiwicGF0aCI6Ii8xNTYyMTgyNDcvNDY3NDc5MjY4LWU1MTFiZTM3LTExMDgtNDY1Zi1iNDY5LTBhYjk0YTVlN2E0ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxMjQ2NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MjljOTYzNjFiY2M2NGU4ZjRmYjViM2I2N2RiOGYzMmI5NGVkYmUyYjZmNmQwMTI1YWEwMGE3YTA5N2U1YjA1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4V9hn7_O03hxYdvZDPLq-joHIJtGpmW5cc_WMLSUvRY",
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