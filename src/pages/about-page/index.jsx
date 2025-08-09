import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import PersonalNarrative from './components/PersonalNarrative';
import CareerTimeline from './components/CareerTimeline';
import SkillsMatrix from './components/SkillsMatrix';
import Achievements from './components/Achievements';
import ContactSection from './components/ContactSection';

const AboutPage = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements?.forEach((el) => observer?.observe(el));

    return () => {
      scrollElements?.forEach((el) => observer?.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <Breadcrumb />

        {/* Content Grid */}
        <div className="grid gap-16 lg:gap-24">
          {/* Personal Story Section */}
          <section className="scroll-reveal">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="lg:col-span-2">
                <PersonalNarrative />
              </div>
              <div className="lg:col-span-1">
                <CareerTimeline />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="scroll-reveal">
            <SkillsMatrix />
          </section>

          {/* Achievements Section */}
          <section className="scroll-reveal">
            <Achievements />
          </section>

          {/* Contact Section */}
          <section className="scroll-reveal">
            <ContactSection />
          </section>
        </div>
      </main>

      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/20 rounded-full particle"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/30 rounded-full particle"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accent/25 rounded-full particle"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-accent/15 rounded-full particle"></div>
      </div>
    </div>
  );
};

export default AboutPage;