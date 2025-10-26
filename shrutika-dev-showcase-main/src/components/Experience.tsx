import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Right & Left Brain Technologies",
      period: "08/2025 - Present",
      description: "A technology company focusing on AI and cloud-native solutions. Led architecture, development, and deployment of scalable AI-powered and cloud-native systems using Python, Flask, Node.js, React.js, and PostgreSQL.",
      achievements: [
        "<1s API latency and 99.9% platform uptime achieved through performance tuning and resilient design",
        "Delivered 40% faster performance via targeted optimization and CI/CD automation across Azure, AWS, and GCP",
        "Constructed Agentic AI and Generative AI solutions (LLMs, NLP, multi-agent orchestration) — Kanalytics (AI Media Intelligence) achieved 15× efficiency and 50% cost reduction",
        "Built Complifyre (Compliance Automation) improving audit accuracy by 35% and reducing manual work by 70%",
        "Designed and delivered end-to-end intelligent platforms (LMS + Exit Shop, Multi-Agent AI System with GPT-4o & Streamlit) with secure RBAC, Redis caching, and semantic search (Typesense / Atlas) to improve scalability and engagement"
      ],
    },
    {
      title: "Software Engineer",
      company: "Right & Left Brain Technologies",
      period: "07/2024 - 08/2025",
      description: "Focused on developing and maintaining scalable backend systems and cloud infrastructure for AI-enabled applications. Worked on REST APIs, data integration, and performance optimization.",
      achievements: [
        "Developed and maintained scalable backend services using Python, Node.js, MySQL, and PostgreSQL",
        "Deployed and managed cloud infra on Azure, AWS, and GCP; implemented CI/CD pipelines and secure DB environments for high availability",
        "Integrated LLMs and AI-driven features to automate workflows and enhance product intelligence",
        "Collaborated with cross-functional teams to design secure, production-ready systems and improve operational reliability"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 animate-fade-in-up">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title}
              className="gradient-card p-8 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="h-6 w-6 text-accent" />
                      {exp.title}
                    </h3>
                    <p className="text-xl text-accent mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-4">
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-accent mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
