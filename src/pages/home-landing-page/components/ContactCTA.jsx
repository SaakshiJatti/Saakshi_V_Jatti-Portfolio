import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: "Mail",
      label: "Email",
      value: "saakshivjatti@gmail.com",
      href: "mailto:saakshivjatti@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+91 8904835701",
      href: "tel:+918904835701",
      description: "Available Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: "MapPin",
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "https://maps.app.goo.gl/bJPh28LvYAz4p2zf6",
      description: "Open to remote opportunities"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/in/SaakshiVJatti", color: "hover:text-blue-400" },
    { name: "GitHub", icon: "Github", url: "https://github.com/saakshijatti", color: "hover:text-gray-400" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Let's Connect
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Connect within{' '}
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Me?
            </span>
          </h2>
          
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto leading-relaxed mb-8">
            I'm always excited to discuss new opportunities, braind storm on interesting projects, 
            or simply chat about design and technology. Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-page">
              <Button 
                variant="default" 
                size="lg"
                iconName="Send"
                iconPosition="right"
                className="magnetic-hover micro-feedback w-full sm:w-auto"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods?.map((method, index) => (
            <a
              key={method?.label}
              href={method?.href}
              className="group glass rounded-xl p-6 text-center magnetic-hover micro-feedback scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-200">
                <Icon name={method?.icon} size={24} className="text-accent" />
              </div>
              
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                {method?.label}
              </h3>
              
              <p className="text-accent font-medium mb-2">
                {method?.value}
              </p>
              
              <p className="text-sm text-text-secondary font-body">
                {method?.description}
              </p>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center scroll-reveal">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
            Follow My Journey
          </h3>
          
          <div className="flex items-center justify-center gap-4">
            {socialLinks?.map((social) => (
              <a
                key={social?.name}
                href={social?.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-muted hover:bg-accent/20 rounded-xl flex items-center justify-center text-text-secondary ${social?.color} transition-all duration-200 magnetic-hover micro-feedback`}
                aria-label={`Follow on ${social?.name}`}
              >
                <Icon name={social?.icon} size={20} />
              </a>
            ))}
          </div>
          
          <p className="text-sm text-text-secondary font-body mt-4">
            Stay updated with my latest projects and design insights
          </p>
        </div>

        {/* Availability Status */}
        <div className="mt-12 text-center scroll-reveal">
          <div className="inline-flex items-center px-6 py-3 glass rounded-full">
            <div className="w-3 h-3 bg-success rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">
              Currently available for work.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;