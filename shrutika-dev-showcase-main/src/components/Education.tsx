import { Card } from "@/components/ui/card";
import { GraduationCap, Sparkles } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (BE), Computer Science",
      institution: "Savitribai Phule Pune University",
      year: "Aug 2020 - May 2024",
      grade: "CGPA: 9.75",
      notes: [
        "Honors in Data Structure & Visualisation",
        "Honors in Statistics & Machine Learning",
      ],
      skills: [
        "C",
        "C++",
        "Core Java",
        "Python",
        "React.js",
        "React Native",
        "Node.js",
        "Express.js",
        "TypeScript",
        "Redux",
        "HTML",
        "CSS",
        "MongoDB",
        "Postman",
        "AWS",
        "Linux",
        "Machine Learning",
        "Deep Learning",
        "Systems Design",
        "OOP",
        "Git",
      ],
    },
    {
      degree: "12th Grade - Science",
      institution: "NMV High School",
      year: "Jun 2018 - Jul 2020",
      grade: "",
      notes: [],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center bg-background py-10"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 animate-fade-in-up">
          Education
        </h2>

        {/* 3-column layout with centered content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Empty left column for spacing */}
          <div></div>

          {/* Center: Main education content - WIDER */}
          <div className="max-w-6xl mx-auto space-y-8 w-full"> {/* Changed to max-w-6xl and added w-full */}
            <Card className="gradient-card p-8 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {education[0].degree}
                  </h3>
                  <p className="text-accent">{education[0].institution}</p>
                  <p className="text-sm text-muted-foreground">
                    {education[0].year}
                  </p>
                  <p className="text-muted-foreground mt-2 font-medium">
                    {education[0].grade}
                  </p>

                  {/* Notes / honors */}
                  <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-1">
                    {education[0].notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="gradient-card p-6 border-border/50 hover:border-accent/50 transition-all duration-300 flex flex-col items-stretch justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Activities & Skills
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Honors & activities from university along with a condensed
                skills list useful for recruiters and visitors.
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {education[0].skills.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="gradient-card p-6 border-border/50 hover:border-accent/50 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {education[1].degree}
                  </h3>
                  <p className="text-accent">{education[1].institution}</p>
                  <p className="text-sm text-muted-foreground">
                    {education[1].year}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Empty right column for spacing */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Education;