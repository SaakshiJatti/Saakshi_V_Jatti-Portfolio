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
      image: "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1579995468789-6a75183d76da?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1594124094198-312a19748a1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1551240903-154be3f2e18b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://plus.unsplash.com/premium_photo-1676983351979-ebf75cb0899a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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