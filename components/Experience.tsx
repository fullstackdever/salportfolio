"use client";

import { useState } from 'react';

interface Job {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const jobs: Job[] = [
    {
      company: 'Intellias',
      title: 'Senior Software Engineer',
      duration: '2021.08 - 2025.10',
      responsibilities: [
        "Built a microservice structure of an online medical advisor app with Python, C#, ASP.Net, Ruby on Rails, JavaScript, Node.js using AWS like ECS, EKS.",
        "Developed an e-learning platform using Angular, Nest.js, incorporating real-time features such as messaging, video/audio calls, notifications using Twilio APIs, RabbitMQ, and LiveKit, and integrated payment gateways",
        "Created analysis and report dashboards to track engagement metrics with Prometheus, Elasticsearch, and InfluxDB.",
        "Optimized server-client communication by leveraging WebSocket protocol buffers, resulting in a 25% reduction in payload size and faster data serialization",
        "Used Python’s SQLAlchemy ORM to manage database interactions, ensuring data integrity and simplifying complex database operations.",
        "Employed Python libraries like Pandas, NumPy, and Matplotlib to manipulate, analyze, and visualize large datasets, providing actionable insights for business decisions.",
        "Crafted and deployed a highly optimized REST API, improving API efficiency by 30% based on analysis of the project.",
        "Worked on Agile methodology using Slack for collaboration, Azure DevOps for project management, version control, automated testing and Azure Pipelines for building CI/CD pipelines."
      ],
    },
    {
      company: 'Twilio',
      title: 'Full Stack Software Engineer',
      duration: '2019.09 - 2021.02',
      responsibilities: [
        "Built a showcase portal for Twilio's annual conference, using Next.js, Python, Flask, Django, C# and GraphQL, used by 250+ partners and thousands of users globally.",
        "Established Twilio’s Survey and Feedback system with real-time feedback collection and analysis and defined backend APIs with Python, Flask making it easy for developers to integrate.",
        "Implemented a suite of new API features for Twilio Verify using JavaScript and Python, C# enabling real-time verification for over 100,000 daily user transactions.",
        "Integrated third-party API's such as Stripe, Google Maps and Twilio into existing applications.",
        "Contribute features to JavaScript and Python based microservices, including real-time signal refreshing and serving.",
        "Implemented security features using JWT and OAuth2, ensuring robust authentication and authorization mechanisms.",
        "Reduced backend response times by 30% and improved system scalability by implementing Redis caching strategies, database indexing and query optimization.",
        "Implemented user-facing financial dashboard portals and verification processes using React.js, D3.js, C#, Blazor and Chart.js."
      ],
    },
    {
      company: 'AgileEngine',
      title: 'Software Developer',
      duration: '2017.05 - 2019.07',
      responsibilities: [
        'Developed several projects including social community platform and sports betting app using React, Angular, Next.js, C#, Ruby on Rails, Node.js and other technologies.',
        'Implemented route-based micro-frontend on project management app with React, Angular, with features like task management, team collaboration, reporting dashboards and calendar, reducing dependencies and enabling autonomous teamwork',
        'Worked with data science teams to preprocess and structure data using Pandas and NumPy, enabling faster model training and testing within production environments.',
        "Successfully integrated third-party applications and tools, such as Twilio, SendGrid, email marketing services, analytics, inventory management, and shipping solutions to enhance the platform's functionality.",
        'Ensured proper authorization and access control by implementing OAuth2 and JWT based authentication.',
        'Executed server-side rendering (SSR) features by NextJS to enhance SEO and improve overall web visibility'
      ],
    },
  ];

  const tabHeight = 42;

  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4" data-testid="heading-experience">
          <span className="text-primary font-mono text-2xl">02.</span>
          <span className="text-foreground">Work Experience</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 sm:gap-12">
          {/* Left Column: Company Navigation Tabs */}
          <div className="relative min-w-[200px]" role="tablist">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-border hidden sm:block" />
            
            <div className="flex flex-row sm:flex-col gap-0 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
              {jobs.map((job, index) => (
                <button
                  key={job.company}
                  role="tab"
                  aria-selected={activeTab === index}
                  className={`relative text-left font-mono text-sm whitespace-nowrap px-5 py-3 transition-all duration-200 ${
                    activeTab === index
                      ? 'text-primary bg-accent/30'
                      : 'text-muted-foreground hover:bg-accent/20 hover:text-primary'
                  }`}
                  onClick={() => setActiveTab(index)}
                  data-testid={`button-company-${index}`}
                >
                  {job.company}
                </button>
              ))}
            </div>
            
            <div 
              className="absolute left-0 top-0 w-24 h-0.5 sm:w-0.5 sm:h-[42px] bg-primary transition-all duration-300 ease-out hidden sm:block"
              style={{
                transform: `translateY(${activeTab * tabHeight}px)`,
              }}
            />
          </div>

          {/* Right Column: Job Details */}
          <div className="min-h-[300px]">
            <div key={activeTab} className="animate-in fade-in duration-300" data-testid={`job-content-${activeTab}`}>
              <h3 className="text-xl font-semibold text-foreground mb-1" data-testid="text-job-title">
                {jobs[activeTab].title}{' '}
                <span className="text-primary"> {jobs[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mb-6" data-testid="text-job-duration">
                {jobs[activeTab].duration}
              </p>
              <ul className="space-y-4">
                {jobs[activeTab].responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-3" data-testid={`responsibility-${idx}`}>
                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
