import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    "React", "TypeScript", "Node.js", "Python", "Java",
    "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL",
    "GraphQL", "REST APIs", "Microservices", "CI/CD", "Git",
    "Flask", "Express.js", "Next.js", "HTML5", "CSS3","Tailwind CSS",
    "Azure", "GCP", "Linux",  "NLP", "LLMs", "Agile Methodologies","Artificial Intelligence",
    "Data Structures", "Algorithms","PHP","Codeigniter","MySQL","Redis",
  ];

  const softSkills = [
    "Team Leadership", "Project Management", "Problem Solving",
    "Communication", "Agile/Scrum", "Code Review",
    "Mentoring", "Strategic Planning"
  ];

  return (
    <section id="skills" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Technical Skills */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-base px-6 py-2 bg-card hover:bg-accent/20 border border-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-base px-6 py-2 border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
