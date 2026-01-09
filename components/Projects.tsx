"use client";

import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cxITImage from '../attached_assets/generated_images/3cx.png';
import edroneImage from '../attached_assets/generated_images/edrone.png';
import uptimeMonitorImage from '../attached_assets/generated_images/pulsetic.png';
import testCaseImage from '../attached_assets/generated_images/testlodge.png';
import austinMolakImage from '../attached_assets/generated_images/parkplace.png';
import harnessAIImage from '../attached_assets/generated_images/harnessAI.png';
import selebilityImage from '../attached_assets/generated_images/Sellerbility.png';
import digitalPharmacy from '../attached_assets/generated_images/DigitalPharmacy.png';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
  featured?: boolean;
}

export default function Projects() {

  const projects: Project[] = [
    {
      title: 'AI Automation Service',
      description: 'AI SaaS platform for the Devops and Automation . Joined to dev team and played the AI, Python developer role with Python, Django, Pytorch and LLM',
      tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Pytorch', 'LLM', 'Git'],
      external: 'https://www.harness.io',
      image: harnessAIImage.src,
      featured: true,
    },
    {
      title: 'Marketing Platform',
      description: 'Website Marketing automation platform. Worked as Node.js, Next.js full stack developer with dev team',
      tech: ['Node.js', 'Next.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS', "Payment Gateway"],
      external: 'https://edrone.me',
      image: edroneImage.src,
      featured: true,
    },
    {
      title: 'Website monitoring Platform',
      description: 'Website uptime platform. Joined as backend developer to dev team and built APIs with node.js',
      tech: ['Node.js', 'MongoDB', 'Express.js', 'Backend development'],
      external: 'https://pulsetic.com',
      image: uptimeMonitorImage.src,
      featured: true,
    },
    {
      title: 'Online arbitrage and wholesale sourcing tool',
      description: 'Joined as full stack C#, .Net developer to dev team and built backend APIs and frontend with C# and React.js',
      tech: ['C#', '.Net', 'React.js', 'MySQL', 'Fullstack Development'],
      external: 'https://www.sellerbility.com',
      image: selebilityImage.src,
      featured: true,
    },
    {
      title: 'Real Estate Platform',
      description: 'A Real Estate platform in Austin, US. Built Real Esate frontend with Next.js, Tailwind CSS.',
      tech: ['Next.js', 'TypeScript', 'Tailwidnd CSS','SCSS'],
      external: 'https://www.austinhomolka.com',
      image: austinMolakImage.src,
      featured: true,
    },
    {
      title: 'Testcase management Platform',
      description: 'A Testcase management platform, Worked as backend developer with team and managed the database and implement the case management logic',
      tech: ['Ruby on Rails', 'PostgreSQL', 'Git'],
      image: testCaseImage.src,
      external: "https://www.testlodge.com",
      featured: true,
    },
    {
      title: 'Online Pharmacy Platform',
      description: 'A digital online pharmacy platform, Joined as C# backend developer and built backend APIs and managed database.',
      tech: ['C#', 'ASP.Net', 'RESTful API', 'Backend Development','Git'],
      image: digitalPharmacy.src,
      external: "https://digitalpharmacy.io/",
      featured: true,
    },
    {
      title: 'Voice call service SaaS',
      description: 'Business voice call service platform',
      tech: ['Node.js', 'Twilio', 'MySQL', 'Backend Development', 'RESTful API'],
      external: 'https://www.3cx.it',
      image: cxITImage.src,
      featured: true,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="work" className="py-20 lg:py-32 px-6 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4" data-testid="heading-projects">
          <span className="text-primary font-mono text-2xl">03.</span>
          <span className="text-foreground">My projects</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="flex flex-col hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-2 rounded-md overflow-hidden bg-card"
              data-testid={`featured-project-${index}`}
            >
              {/* Project Image Card */}
              <div className="relative group overflow-hidden aspect-[16/10]">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    data-testid={`img-project-${index}`}
                  />
                )}
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-all duration-300 mix-blend-multiply" />
              </div>

              {/* Project Description */}
              <div className="p-6 flex flex-col flex-1 space-y-3">
                <p className="text-primary font-mono text-sm" data-testid={`text-featured-${index}`}>Featured Project</p>
                <h3 className="text-xl font-bold text-foreground" data-testid={`text-project-title-${index}`}>{project.title}</h3>
                
                <p className="text-muted-foreground flex-1" data-testid={`text-project-desc-${index}`}>{project.description}</p>
                
                {/* Tech Stack */}
                <ul className="flex gap-3 flex-wrap font-mono text-sm text-muted-foreground">
                  {project.tech.map(tech => (
                    <li key={tech} data-testid={`tech-${tech.toLowerCase()}`}>{tech}</li>
                  ))}
                </ul>
                
                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-github-${index}`}>
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-external-${index}`}>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
