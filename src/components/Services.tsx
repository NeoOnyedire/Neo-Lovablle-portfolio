import { Database, Code2, BarChart3, Workflow } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Systems Integration",
      description: "Connecting disparate systems and creating seamless data flows between applications, APIs, and databases.",
      highlight: true,
    },
    {
      icon: Code2,
      title: "Software Development",
      description: "Developing clean, maintainable applications using Python and Java, with a focus on backend systems and APIs.",
      highlight: false,
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing and managing databases, writing efficient SQL queries, and ensuring data integrity across systems.",
      highlight: false,
    },
    {
      icon: BarChart3,
      title: "API Development",
      description: "Building and integrating RESTful APIs to enable communication between different software systems and platforms.",
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Services & Expertise
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            What I Can <span className="text-gradient">Contribute</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            As a placement candidate, I bring fresh perspectives and a passion for 
            learning. Here's how I can add value to your team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card ${service.highlight ? 'border-primary bg-gradient-card' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.highlight ? 'bg-gradient-primary' : 'bg-primary/10'}`}>
                <service.icon className={`h-6 w-6 ${service.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              {service.highlight && (
                <span className="inline-block mt-4 text-xs font-medium text-primary uppercase tracking-wider">
                  Primary Focus
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
