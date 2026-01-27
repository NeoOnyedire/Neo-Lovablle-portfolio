import { ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Software Developer & Systems Integration
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Neo<br />
                Onyedire<span className="text-primary">.</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I'm a student at WeThinkCode_ with a strong focus on software development 
              and data engineering. I work primarily with Python and Java and have hands-on 
              experience using SQL for data-driven applications.
            </p>

            <p className="text-muted-foreground">
              Currently seeking a placement opportunity to apply my skills and contribute 
              to real-world projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium transition-all duration-300 hover:bg-secondary hover:scale-105"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Neo Onyedire"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 badge-floating animation-delay-100">
                Developer
              </div>
              <div className="absolute bottom-8 -left-8 badge-floating animation-delay-300" style={{ animationDelay: '1s' }}>
                Systems Integration
              </div>
              <div className="absolute top-1/2 -right-12 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium animate-float" style={{ animationDelay: '0.5s' }}>
                WeThinkCode_
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll for more</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
