import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Email sent successfully!');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      console.error('Failed to send email.');
      // Optionally, show an error message to the user here
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    setIsSubmitting(false);
  }
};

  if (isSubmitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          className="magnetic-hover"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Let's Connect!
        </h2>
        <p className="text-text-secondary">
          Want to get in touch? Drop me a message and I'll get back to you within 24 hours.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData?.name}
          onChange={(e) => handleInputChange('name', e?.target?.value)}
          error={errors?.name}
          required
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="your.email@company.com"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Company/Organization"
          type="text"
          name="company"
          placeholder="Your company name (optional)"
          value={formData?.company}
          onChange={(e) => handleInputChange('company', e?.target?.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Your Message <span className="text-error">*</span>
        </label>
        <textarea
          placeholder="Type your message here..."
          name="message"
          value={formData?.message}
          onChange={(e) => handleInputChange('message', e?.target?.value)}
          rows={6}
          className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none ${
            errors?.message ? 'border-error' : 'border-border'
          }`}
        />
        {errors?.message && (
          <p className="mt-2 text-sm text-error flex items-center">
            <Icon name="AlertCircle" size={16} className="mr-1" />
            {errors?.message}
          </p>
        )}
      </div>
      <div className="pt-4">
        <Button
          type="submit"
          variant="default"
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          fullWidth
          className="magnetic-hover micro-feedback"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </div>
      <div className="text-center pt-4">
        <p className="text-xs text-text-secondary">
          By submitting this form, you agree to be contacted regarding your inquiry.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;