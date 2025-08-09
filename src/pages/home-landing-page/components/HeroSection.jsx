import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const ctx = canvas?.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = canvas?.offsetWidth;
      canvas.height = canvas?.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas?.width * canvas?.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef?.current?.push({
          x: Math.random() * canvas?.width,
          y: Math.random() * canvas?.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const animate = () => {
      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
      
      // Draw particles
      particlesRef?.current?.forEach(particle => {
        particle.x += particle?.vx;
        particle.y += particle?.vy;

        // Wrap around edges
        if (particle?.x < 0) particle.x = canvas?.width;
        if (particle?.x > canvas?.width) particle.x = 0;
        if (particle?.y < 0) particle.y = canvas?.height;
        if (particle?.y > canvas?.height) particle.y = 0;

        // Draw particle
        ctx?.beginPath();
        ctx?.arc(particle?.x, particle?.y, particle?.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${particle?.opacity})`;
        ctx?.fill();
      });

      // Draw connections
      particlesRef?.current?.forEach((particle, i) => {
        particlesRef?.current?.slice(i + 1)?.forEach(otherParticle => {
          const dx = particle?.x - otherParticle?.x;
          const dy = particle?.y - otherParticle?.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx?.beginPath();
            ctx?.moveTo(particle?.x, particle?.y);
            ctx?.lineTo(otherParticle?.x, otherParticle?.y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx?.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef?.current) {
        cancelAnimationFrame(animationRef?.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 scroll-reveal">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Available for new opportunities
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  Saakshi V. Jatti
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-text-secondary font-body leading-relaxed">
                Creative Coder & UI/UX Designer transitioning to{' '}
                <span className="text-accent font-medium">Game Development</span>
              </p>
              
              <p className="text-lg text-text-secondary font-body max-w-2xl">
                Crafting intuitive digital experiences with a passion for interactive entertainment. 
                Combining design expertise with technical innovation to create engaging user interfaces.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/portfolio-gallery">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="magnetic-hover micro-feedback w-full sm:w-auto"
                >
                  View My Work
                </Button>
              </Link>
              
              <Link to="/contact-page">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Mail"
                  iconPosition="left"
                  className="magnetic-hover micro-feedback w-full sm:w-auto"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
              <span className="text-sm text-text-secondary font-caption">Follow me:</span>
              <div className="flex items-center gap-3">
                {[
                  { name: 'Github', icon: 'Github', url: 'https://github.com/saakshijatti' },
                  { name: 'Linkedin', icon: 'Linkedin', url: 'https://linkedin.com/in/SaakshiVJatti' }
                ]?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.url}
                    className="w-10 h-10 bg-muted hover:bg-accent/20 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent transition-all duration-200 magnetic-hover micro-feedback"
                    aria-label={`Follow on ${social?.name}`}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end scroll-reveal">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl blur-2xl transform scale-110"></div>
              
              {/* Image Container */}
              <div className="relative glass rounded-2xl p-8 magnetic-hover">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/Saakshi_img.png"
                    alt="Saakshi V. Jatti - Computer Science and Design Student"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-glow-sm">
                  <Icon name="Code2" size={16} color="var(--color-accent-foreground)" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-success rounded-lg flex items-center justify-center shadow-glow-sm">
                  <Icon name="Gamepad2" size={16} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-text-secondary">
            <span className="text-xs font-caption">Scroll to explore</span>
            <Icon name="ChevronDown" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;