import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'saakshivjatti@gmail.com',
      href: 'mailto:saakshivjatti@gmail.com',
    },
    // {
    //   icon: 'Phone',
    //   label: 'Phone',
    //   value: '+1 (555) 123-4567',
    //   href: 'tel:+15551234567',
    //   description: 'Available Mon-Fri, 9AM-6PM IST'
    // },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      href: null,
      description: 'Open to remote collaboration'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://www.linkedin.com/in/saakshivjatti/',
      description: 'Professional network'
    },
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/SaakshiJatti',
      description: 'Code repositories'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="glass rounded-2xl p-8">
        <h3 className="text-xl font-heading font-bold text-foreground mb-6">
          Get In Touch
        </h3>
        <div className="space-y-6">
          {contactMethods?.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                <Icon name={method?.icon} size={20} color="var(--color-accent)" />
              </div>
              <div className="flex-1">
                <h4 className="font-body font-medium text-foreground mb-1">
                  {method?.label}
                </h4>
                {method?.href ? (
                  <a
                    href={method?.href}
                    className="text-accent hover:text-accent/80 transition-colors duration-200 magnetic-hover"
                  >
                    {method?.value}
                  </a>
                ) : (
                  <p className="text-foreground">{method?.value}</p>
                )}
                <p className="text-sm text-text-secondary mt-1">
                  {method?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Media */}
      <div className="glass rounded-2xl p-8">
        <h3 className="text-xl font-heading font-bold text-foreground mb-6">
          Connect With Me
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 magnetic-hover micro-feedback group"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                <Icon name={social?.icon} size={18} color="var(--color-accent)" />
              </div>
              <div className="flex-1">
                <h4 className="font-body font-medium text-foreground text-sm">
                  {social?.name}
                </h4>
              </div>
              <Icon name="ExternalLink" size={16} className="text-text-secondary group-hover:text-accent transition-colors duration-200" />
            </a>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="glass rounded-2xl p-8">
        <h3 className="text-xl font-heading font-bold text-foreground mb-6">
          Quick Actions
        </h3>
        <div className="space-y-3">
          < a
            href='/Saakshi_V_Jatti_RESUME_.pdf'
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              iconName="FileUser"
              iconPosition="left"
              fullWidth
              className="magnetic-hover justify-start"
            >
              View Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;