import { ArrowUpRight, Linkedin, Github, FolderOpen } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            My Projects & Work
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic and practice projects showcase my journey in software development 
            and data engineering. View my complete portfolio on LinkedIn and GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/neo-onyedire"
            target="_blank"
            rel="noopener noreferrer"
            className="group service-card flex flex-col items-center text-center p-8"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              LinkedIn Profile
            </h3>
            <p className="text-muted-foreground mb-6">
              View my professional profile, academic projects, and connect with me.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium">
              View Profile
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/NeoOnyedire"
            target="_blank"
            rel="noopener noreferrer"
            className="group service-card flex flex-col items-center text-center p-8"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Github className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              GitHub Repository
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore my code repositories, contributions, and open-source projects.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium">
              View Code
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* Featured Project Placeholder */}
        <div className="mt-16 p-8 rounded-2xl border border-border bg-card text-center">
          <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-display text-xl font-semibold mb-2">
            More Projects Coming Soon
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm continuously working on new projects. Check back soon or connect with me 
            to learn about my latest work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
