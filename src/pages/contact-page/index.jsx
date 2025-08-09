import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Contact - Saakshi V. Jatti | Creative Coder';
    
    // Add scroll reveal animation
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

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements?.forEach(el => observer?.observe(el));

    return () => {
      scrollElements?.forEach(el => observer?.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Techy Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          {/* Animated particles */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            />
          ))}
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>
      </div>
      <Header />
      <main className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="scroll-reveal">
            <Breadcrumb />
          </div>

          {/* Hero Section */}
          <div className="scroll-reveal mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Let's Build Something
                <span className="block text-transparent bg-gradient-to-r from-accent to-accent/70 bg-clip-text">
                  Awesome Together
                </span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Curious, creative, and still exploring — I’m a student who loves turning ideas into working projects and exploring the latest technologies. 
                Whether it’s code, design, or data, I’m all about learning by doing.
                <br />
                <br />
                Have feedback, collaboration ideas, or just want to connect? I’d love to hear from you!
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 scroll-reveal">
              <ContactForm />
            </div>

            {/* Contact Info - Takes 1 column on large screens */}
            <div className="space-y-8 scroll-reveal">
              <ContactInfo />
            </div>
          </div>

        </div>
      </main>
      {/* Footer */}
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

export default ContactPage;