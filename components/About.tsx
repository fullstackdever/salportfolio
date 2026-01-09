import profileImage from '../attached_assets/generated_images/myphoto.jpeg';

export default function About() {
  const skills = [
    'React',
    'Angular',
    'Next.js',
    'Python',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Django',
    'Flask',
    'FastAPI',
    'Ruby',
    'Ruby on Rails',
    'C#',
    '.Net',
    'ASP.Net',
    'Blazor',
    '.Net Core',
    'Express.js',
    'Nest.js',
    'Vue.js',
    'Nuxt.js',
    'GraphQL',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'BootStrap',
    'Azure',
    'Firebase',
    'AWS',
    'GCP',
    'Docker',
    'Kubernetes',
    'Terraform'
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4" data-testid="heading-about">
          <span className="text-primary font-mono text-2xl">01.</span>
          <span className="text-foreground">About Me</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start">
          <div className="space-y-4 text-muted-foreground" data-testid="text-about-content">
            <p>
              Experienced full stack engineer with strong proficiency in Python, Ruby on Rails, React, Next.js, Node.js, Azure and AWS. 
            </p>
            <p>
              Skilled in building scalable web applications, designing clean APIs, and developing intuitive frontend interfaces. Adept at solving complex technical problems, optimizing, performance, and delivering high-quality code across both client and server environments.
            </p>
            <p>
              Here are my speciallities:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2" data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  <span className="text-primary">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-md overflow-hidden">
              <img 
                src={profileImage.src} 
                alt="Profile" 
                className="w-full aspect-square object-cover rounded-md transition-all duration-300 grayscale group-hover:grayscale-0"
                data-testid="img-profile"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 rounded-md" />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-md translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
