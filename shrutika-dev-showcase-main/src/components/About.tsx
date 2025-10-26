import { Code2, Smartphone, Server, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { value: "99.9%", label: "Platform Uptime" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "1.5+", label: "Years of Experience" },
  ];

  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Designing and building scalable web apps with React, Node.js, Flask and modern architectures.",
    },
    {
      icon: Smartphone,
      title: "Mobile Experiences",
      description:
        "Cross-platform mobile solutions and responsive UI that deliver polished user experiences.",
    },
    {
      icon: Server,
      title: "Cloud & DevOps",
      description:
        "Production-ready cloud deployments (Azure, AWS, GCP), CI/CD automation, and infra optimization.",
    },
    {
      icon: Cpu,
      title: "AI / LLM Integration",
      description:
        "Integrating LLMs, NLP pipelines and multi-agent AI systems to automate workflows and extract insight.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Services */}
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About me
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m Shrutika Ekbote — a Senior Software Engineer focused on building
              AI-powered, cloud-native applications and developer tooling. I design
              and ship production systems combining LLMs, NLP pipelines, and modern
              cloud infrastructure to deliver reliable, scalable products that
              improve operational efficiency.
            </p>

            <div className="space-y-6 " >
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="flex gap-4 items-start group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6 animate-slide-in-right mx-6">
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="gradient-card p-8 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-accent text-5xl font-bold">+</span>
                    <div>
                      <h3 className="text-4xl font-bold text-accent mb-1">
                        {stat.value}
                      </h3>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
