import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import FilterChips from './components/FilterChips';
import SearchBar from './components/SearchBar';
import ProjectGrid from './components/ProjectGrid';
import LoadMoreButton from './components/LoadMoreButton';
import StatsOverview from './components/StatsOverview';
import Icon from '../../components/AppIcon';

const PortfolioGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(9);

  // portfolio data
  const portfolioProjects = [
    {
      id: 1,
      title: "Rimberion",
      description: "A simple front-end application for ordering items from a warehouse.",
      category: "Warehouse Ordering System",
      image: "https://private-user-images.githubusercontent.com/156218247/467428476-18250720-a9fa-430e-9c37-50a787c96d43.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NDQwNjgsIm5iZiI6MTc1NDc0Mzc2OCwicGF0aCI6Ii8xNTYyMTgyNDcvNDY3NDI4NDc2LTE4MjUwNzIwLWE5ZmEtNDMwZS05YzM3LTUwYTc4N2M5NmQ0My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxMjQ5MjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZjgzYmJhNmM4NjAwN2M2ZGNjZDBhZjVlMGM2MzEzNWM0NDYzNTRiZjQ2MWU3MDY0YTNlZGRkZTQ5ODE1NmIxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.H5AxDXQabt6tzPN4__36Ps3cLGxTHvhNoZ7lOMep9dY",
      technologies: [
        { name: "HTML", icon: "Code" },
        { name: "CSS", icon: "FileCode2" },
      ],
      year: "2023",
      duration: "1 month",
      href: "https://rimberion.vercel.app/",
      githubLink: "https://github.com/SaakshiJatti/warehouse-ordering-system"
    },
    {
      id: 2,
      title: "Shoefy",
      description: "A front-end e-commerce template designed to practice JavaScript DOM manipulation, event handling, and CSS layout skills. All features are built purely with client-side code.",
      category: "E-Commerce Website",
      image: "https://private-user-images.githubusercontent.com/156218247/467433440-03d3f4a8-e7bd-4866-aecf-3be634b8e8cc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NDQyNzcsIm5iZiI6MTc1NDc0Mzk3NywicGF0aCI6Ii8xNTYyMTgyNDcvNDY3NDMzNDQwLTAzZDNmNGE4LWU3YmQtNDg2Ni1hZWNmLTNiZTYzNGI4ZThjYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxMjUyNTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MzAyNTQzNDhhYzE3ZDMwYmZiMjZmMmUzMmRiZTAxNDlhZjU3ZGI3ODYxZjA4ZDk3M2FmODU2OTg5NzVmNzIxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.uU9WgRspwyq1fr9ZzGfyWnVAdpZf7DakdfWFHXixfl4",
      technologies: [
        { name: "HTML", icon: "Code" },
        { name: "CSS", icon: "FileCode2" },
        { name: "JavaScript", icon: "Braces" }
      ],
      year: "2024",
      duration: "2 months",
      href: "https://shoefy.vercel.app/",
      githubLink: "https://github.com/SaakshiJatti/e-commerce-website"
    },
    {
      id: 3,
      title: "Wish-O",
      description: "An interactive front-end prototype for a band's concert ticket booking page. Built with HTML and CSS, this project showcases a clean user interface and a mock booking flow, from selecting a concert date to confirming a ticket.",
      category: "Band Website Prototype",
      image: "https://private-user-images.githubusercontent.com/156218247/467456235-ee649925-05ea-47ff-ad29-6167b8841b82.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NDI4MTUsIm5iZiI6MTc1NDc0MjUxNSwicGF0aCI6Ii8xNTYyMTgyNDcvNDY3NDU2MjM1LWVlNjQ5OTI1LTA1ZWEtNDdmZi1hZDI5LTYxNjdiODg0MWI4Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxMjI4MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZDY5NGJkODk1MDhlYjA4ZTc5ZmIxNmZlZjI0MDYxMWFiYmZhNGQ5ZmFmMzVkZGFlMjEyN2NjZTFkYTZhOWIwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7vnhyStOoqt6nEY67_G5GdIarm4dQYczce1gy5hfY5g",
      technologies: [
        { name: "HTML", icon: "Code" },
        { name: "CSS", icon: "FileCode2" }
      ],
      year: "2024",
      duration: "1 week",
      href: "https://wish-o.vercel.app/",
      githubLink: "https://github.com/SaakshiJatti/band-website-prototype"
    },
    {
      id: 4,
      title: "Sign Language Interpreter",
      description: "A real-time sign language interpreter built with Computer Vision. This project uses OpenCV, MediaPipe, and ScikitLearn to recognize a small, predefined set of hand gestures and translate them into text. It serves as a foundational exploration into gesture recognition for assistive technology.",
      category: "Machine Learning",
      image: "https://private-user-images.githubusercontent.com/156218247/467479268-e511be37-1108-465f-b469-0ab94a5e7a4e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NDM5MDYsIm5iZiI6MTc1NDc0MzYwNiwicGF0aCI6Ii8xNTYyMTgyNDcvNDY3NDc5MjY4LWU1MTFiZTM3LTExMDgtNDY1Zi1iNDY5LTBhYjk0YTVlN2E0ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxMjQ2NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MjljOTYzNjFiY2M2NGU4ZjRmYjViM2I2N2RiOGYzMmI5NGVkYmUyYjZmNmQwMTI1YWEwMGE3YTA5N2U1YjA1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4V9hn7_O03hxYdvZDPLq-joHIJtGpmW5cc_WMLSUvRY",
      technologies: [
        { name: "Python", icon: "Worm" },
        { name: "OpenCV", icon: "FolderOpen" },
        { name: "MediaPipe", icon: "Shell" },
        { name: "ScikitLearn", icon: "BookOpenText" }
      ],
      year: "2024",
      duration: "3 months",
      href: "https://github.com/SaakshiJatti/sign-language-interpreter",
      githubLink: "https://github.com/SaakshiJatti/sign-language-interpreter"
    },
    {
      id: 5,
      title: "Loan Prediction Analysis - Classification",
      description: "A data science project focused on assessing loan eligibility to minimize risk for financial institutions. This repository contains the analysis and implementation of a classification model that automates the loan approval process by analyzing applicant details.",
      category: "Machine Learning",
      image: "https://private-user-images.githubusercontent.com/156218247/467487207-ff7f9d7a-1005-4bb4-b415-768b052a37f0.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NDQ5MTIsIm5iZiI6MTc1NDc0NDYxMiwicGF0aCI6Ii8xNTYyMTgyNDcvNDY3NDg3MjA3LWZmN2Y5ZDdhLTEwMDUtNGJiNC1iNDE1LTc2OGIwNTJhMzdmMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxMzAzMzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZDk5MTM3NGVjYmIyMDc1MTc3YTlkZGFjM2QxYjE1NjJkYjUxNTQzZjAyOWM0NjI3NDJjODFhMTljZDAxNTZkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.PlbAXtlTYjD7xRdq_B3r-2FVq_H8yeWPvmloyIfNK6Q",
      technologies: [
        { name: "Python", icon: "Worm" },
        { name: "Jupyter Notebook", icon: "Notebook" }
      ],
      year: "2025",
      duration: "1 months",
      href: "https://github.com/SaakshiJatti/loan-prediction-analysis---classification",
      githubLink: "https://github.com/SaakshiJatti/loan-prediction-analysis---classification"
    }
    // {
    //   id: 6,
    //   title: "Healthcare App Design",
    //   description: "Patient-centered healthcare mobile app design focusing on accessibility, ease of use, and medical data visualization.",
    //   category: "UI/UX Design",
    //   image: "https://images.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg?w=600&h=400&fit=crop",
    //   technologies: [
    //     { name: "Sketch", icon: "Pen" },
    //     { name: "Principle", icon: "Play" },
    //     { name: "React Native", icon: "Smartphone" },
    //     { name: "Firebase", icon: "Database" }
    //   ],
    //   year: "2024",
    //   duration: "5 months",
    // },
  ];

  // Filter options
  const filters = [
    { id: 'all', label: 'All Projects', count: portfolioProjects?.length },
    { id: 'ml', label: 'Machine Learning', count: portfolioProjects?.filter(p => p?.category === 'Machine Learning')?.length }
  ];

  // Stats data
  const stats = {
    totalProjects: portfolioProjects?.length,
    ml: portfolioProjects?.filter(p => p?.category === 'Machine Learning')?.length,
    clgSem: 7
  };

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = portfolioProjects;

    // Apply category filter
    if (activeFilter !== 'all') {
      switch (activeFilter) {
        case 'ml':
          filtered = filtered?.filter(p => p?.category === 'Game Development');
          break;
      }
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.category?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.technologies?.some(tech => 
          tech?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        )
      );
    }

    return filtered;
  }, [activeFilter, searchTerm]);

  // Get projects to display (for pagination)
  const projectsToShow = filteredProjects?.slice(0, displayedProjects);
  const hasMoreProjects = filteredProjects?.length > displayedProjects;

  // Load more projects
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayedProjects(prev => prev + 6);
      setLoading(false);
    }, 1000);
  };

  // Reset displayed projects when filter changes
  useEffect(() => {
    setDisplayedProjects(9);
  }, [activeFilter, searchTerm]);

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements?.forEach(el => observer?.observe(el));

    return () => observer?.disconnect();
  }, [projectsToShow]);

  return (
    <>
      <Helmet>
        <title>Portfolio Gallery</title>
        <meta name="description" content="Explore my complete portfolio of UI/UX design and game development projects. Discover innovative digital experiences and creative solutions." />
        <meta name="keywords" content="portfolio, UI/UX design, game development, web design, machine learning" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Techy Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-accent/10 rounded-full particle"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-accent/5 rounded-lg rotate-45 particle" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-accent/10 rounded-full particle" style={{animationDelay: '10s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-accent/5 rounded-lg particle" style={{animationDelay: '15s'}}></div>
        </div>

        <main className="relative z-10 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Page Header */}
            <div className="mb-12 scroll-reveal">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center">
                  <Icon name="Briefcase" size={24} color="var(--color-accent-foreground)" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
                    Portfolio Gallery
                  </h1>
                  <p className="text-lg font-body text-text-secondary mt-2">
                    Explore my journey through design and development
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="scroll-reveal">
              <StatsOverview stats={stats} />
            </div>

            {/* Search Bar */}
            <div className="scroll-reveal">
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Search projects by name, category, or technology..."
              />
            </div>

            {/* Filter Chips */}
            <div className="scroll-reveal">
              <FilterChips 
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>

            {/* Results Summary */}
            <div className="mb-6 scroll-reveal">
              <p className="text-sm font-caption text-text-secondary">
                Showing {projectsToShow?.length} of {filteredProjects?.length} projects
                {searchTerm && (
                  <span> for "{searchTerm}"</span>
                )}
              </p>
            </div>

            {/* Project Grid */}
            <ProjectGrid 
              projects={projectsToShow}
              loading={false}
            />

            {/* Load More Button */}
            {hasMoreProjects && (
              <div className="scroll-reveal">
                <LoadMoreButton 
                  onLoadMore={handleLoadMore}
                  loading={loading}
                  hasMore={hasMoreProjects}
                />
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default PortfolioGallery;