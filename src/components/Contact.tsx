import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:neomvubu1@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your message is ready to send!",
    });
  };

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:neomvubu1@gmail.com",
      icon: Mail,
      label: "neomvubu1@gmail.com",
    },
    {
      name: "GitHub",
      href: "https://github.com/NeoOnyedire",
      icon: Github,
      label: "NeoOnyedire",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/neo-onyedire",
      icon: Linkedin,
      label: "Neo Onyedire",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Get in Touch
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">
                Let's <span className="text-gradient">Connect</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm actively seeking placement opportunities where I can apply my skills 
              in software development and data engineering. Feel free to reach out!
            </p>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>South Africa</span>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{link.name}</p>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-display text-2xl font-semibold mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-glow"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
