"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection?: string;
}

export default function Navigation({ activeSection = 'hero' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '01', name: 'About', href: '#about' },
    { id: '02', name: 'Experience', href: '#experience' },
    { id: '03', name: 'Work', href: '#work' },
    { id: '04', name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-colors"
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  <span className="text-primary font-mono">{item.id}. </span>
                  <span className="text-foreground">{item.name}</span>
                </button>
              ))}
              {/* <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/salvatore_ficchi.pdf';
                  link.download = 'salvatore_ficchi.pdf';
                  link.click();
                }}
                data-testid="button-resume"
              >
                Resume
              </Button> */}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-menu-toggle"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl hover-elevate active-elevate-2 rounded-md px-4 py-2"
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                <span className="text-primary font-mono">{item.id}. </span>
                <span className="text-foreground">{item.name}</span>
              </button>
            ))}
            {/* <Button 
              variant="outline"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'resume.pdf';
                link.click();
                setIsOpen(false);
              }}
              data-testid="button-mobile-resume"
            >
              Resume
            </Button> */}
          </div>
        </div>
      )}

      <div className="hidden lg:flex fixed left-12 bottom-0 flex-col items-center gap-6 z-10">
        <a href="https://github.com/fullstackdever" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all" data-testid="link-github">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/salficchi352" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all" data-testid="link-linkedin">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="mailto:ficchisalvatore30@gmail.com" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all" data-testid="link-email-side">
          <Mail className="h-5 w-5" />
        </a>
        <div className="w-px h-24 bg-muted-foreground/30" />
      </div>

      <div className="hidden lg:flex fixed right-12 bottom-0 flex-col items-center gap-6 z-10">
        <a href="mailto:ficchisalvatore30@gmail.com" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all [writing-mode:vertical-lr] text-sm tracking-wider font-mono" data-testid="link-email-text">
          ficchisalvatore30@gmail.com
        </a>
        <div className="w-px h-24 bg-muted-foreground/30" />
      </div>
    </>
  );
}
