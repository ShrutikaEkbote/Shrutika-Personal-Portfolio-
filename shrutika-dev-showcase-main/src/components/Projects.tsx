import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Agentic AI System for Kanalytics",
      description:
        "Engineered and deployed a next-generation Agentic AI system using LLMs and autonomous agents for media monitoring — achieving 15× efficiency, 50%+ cost reduction, and 99.5% uptime.",
      tags: [
        "Python",
        "Flask",
        "LLMs",
        "NLP",
        "Azure",
        "AI Agents",
        "Microservices",
      ],
      image: "🧠",
      github: "",
      live: "",
    },
    {
      title: "Complifyre – Compliance Automation Platform",
      description:
        "Developed a full-stack AI-driven compliance automation system digitizing regulatory guidelines using NLP and OCR — improving audit accuracy by 35% and reducing manual work by 70%.",
      tags: [
        "Flask",
        "Python",
        "NLP",
        "RAG",
        "PostgreSQL",
        "Azure",
        "RBAC",
      ],
      image: "📜",
      github: "",
      live: "",
    },
    {
      title: "Multi-Agent AI System (OpenAI GPT-4o)",
      description:
        "Python-based multi-agent system built with Streamlit — performs summarization, research writing, and PHI sanitization using collaborative agents with validator feedback loops.",
      tags: [
        "Python",
        "OpenAI API",
        "Streamlit",
        "Loguru",
        "Pandas",
        "dotenv",
      ],
      image: "🤖",
      github: "https://github.com/ShrutikaEkbote/Multi-Agent-AI-System",
      live: "",
    },
    {
      title: "Transforrm8 – Online Learning & E-Commerce Platform",
      description:
        "Full-stack LMS + Exit Shop platform built using PHP (CodeIgniter), MySQL, and Razorpay. Integrated token-based rewards, live Zoom classes, and e-commerce checkout for 1,000+ users.",
      tags: [
        "PHP",
        "CodeIgniter",
        "MySQL",
        "Razorpay",
        "Zoom API",
        "JavaScript",
      ],
      image: "🎓",
      github: "",
      live: "https://transforrm8.com/",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive personal portfolio website built using HTML, CSS, and JavaScript to showcase professional work, services, and achievements with a clean and modern UI.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "💼",
      github:
        "https://github.com/ShrutikaEkbote/Personal-Portfolio",
      live: "",
    },
    {
      title: "Music Player App (Spotify Clone)",
      description:
        "Web application replicating Spotify’s core features — music catalog, playlists, and audio playback — built with HTML, CSS, and JavaScript for an immersive user experience.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "🎵",
      github: "https://github.com/ShrutikaEkbote/Spotify-Clone",
      live: "",
    },
    {
      title: "Shopping App (Myntra Clone)",
      description:
        "E-commerce web app replicating Myntra’s shopping interface with product listings, filters, and responsive layouts built using HTML and CSS.",
      tags: ["HTML", "CSS"],
      image: "🛍️",
      github: "https://github.com/ShrutikaEkbote/Myntra-Clone",
      live: "",
    },
    {
      title: "Social Media App (Facebook Clone)",
      description:
        "Responsive Facebook UI clone with theme toggle feature built using HTML, CSS, and JavaScript — replicating essential interface interactions.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "🌐",
      github: "https://github.com/ShrutikaEkbote/Facebook-Clone",
      live: "",
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 animate-fade-in-up">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="gradient-card p-8 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                {/* Project Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {project.image}
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-accent/50 text-accent hover:bg-accent/10"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-accent/50 text-accent hover:bg-accent/10"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
