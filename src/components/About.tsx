import { Code2, Database, Server, Terminal } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", icon: Terminal },
    { name: "Java", icon: Code2 },
    { name: "SQL", icon: Database },
    { name: "Systems Integration", icon: Server },
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Stats & Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                About Me
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">
                Passionate about building<br />
                <span className="text-gradient">data-driven solutions</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              As a WeThinkCode_ student, I've developed a strong foundation in software 
              development with a particular passion for systems integration. I believe in 
              writing clean, maintainable code and creating solutions that make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-display font-bold text-gradient">2+</div>
                <p className="text-muted-foreground mt-2">Years of Coding</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-display font-bold text-gradient">10+</div>
                <p className="text-muted-foreground mt-2">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-badge"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <skill.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
              <h4 className="font-display font-semibold mb-3">Current Focus</h4>
              <p className="text-muted-foreground">
                Connecting disparate systems, developing backend integrations, and creating 
                seamless data flows between applications and databases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
