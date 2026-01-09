"use client";

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/fullstackdever',
      testId: 'link-contact-github'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/salficchi352',
      testId: 'link-contact-linkedin'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:salvatorework15@gmail.com',
      testId: 'link-contact-email'
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-24 xl:px-32">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-base mb-4" data-testid="text-contact-number">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="heading-contact">Get In Touch</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              {...(social.url.startsWith('mailto:') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="p-3 rounded-md text-muted-foreground hover:text-primary hover-elevate active-elevate-2 transition-all hover:-translate-y-1"
              data-testid={social.testId}
              aria-label={social.name}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
