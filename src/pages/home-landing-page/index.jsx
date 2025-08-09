import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsVisualization from './components/SkillsVisualization';
import AboutPreview from './components/AboutPreview';
import ContactCTA from './components/ContactCTA';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useScrollRevealBatch } from '../../hooks/useScrollReveal';

const HomePage = () => {
  // Initialize smooth scrolling
  useSmoothScroll();

  // Initialize scroll reveal animations
  useScrollRevealBatch('.scroll-reveal');

  useEffect(() => {
    // Additional scroll reveal animation with stagger
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.style.animationDelay = `${index * 0.1}s`;
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements?.forEach((el) => observer?.observe(el));

    // Cleanup
    return () => {
      scrollElements?.forEach((el) => observer?.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background particle effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)]?.map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      <Header />
      <main className="relative z-10">
        <section className="scroll-reveal">
          <HeroSection />
        </section>
        
        <section className="scroll-reveal">
          <FeaturedProjects />
        </section>
        
        <section className="scroll-reveal">
          <SkillsVisualization />
        </section>
        
        <section className="scroll-reveal">
          <AboutPreview />
        </section>
        
        <section className="scroll-reveal">
          <ContactCTA />
        </section>
      </main>
      {/* Enhanced Footer */}
      <footer className="relative z-10 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-text-secondary text-sm">
              ©{new Date()?.getFullYear()} Saakshi V. Jatti. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;