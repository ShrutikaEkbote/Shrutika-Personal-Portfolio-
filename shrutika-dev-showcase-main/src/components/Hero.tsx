import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {

  const linkedInUrl = "https://www.linkedin.com/in/shrutikaekbote/";
  const githubUrl = "https://github.com/ShrutikaEkbote";
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-accent/30 rotate-45" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-accent/20 rotate-12" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-accent text-xl font-medium">Hello.</h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                I'm Shrutika
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground">
                Senior Software Developer
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* LinkedIn button - opens in new tab */}
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary-foreground shadow-glow group"
                >
                  Visit my LinkedIn
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>


              {/* GitHub button - opens in new tab */}
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary-foreground shadow-glow group"
                >
                  Visit my GitHub
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>


              {/* Resume download - uses /resume.pdf in public folder OR import */}
              <a href="/ShrutikaEkboteResume.pdf" download className="inline-block">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-accent/50 text-accent hover:bg-accent/10"
                >
                  <Download className="mr-2 h-5 w-5" />
                  My resume
                </Button>
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border/50">
              {['React', 'Node.js', 'Java', 'Python', 'AWS', 'MongoDB'].map((tech) => (
                <span key={tech} className="text-muted-foreground hover:text-accent transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" />
              
               {/* Image container */}
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-accent/30 shadow-card">
               

                {/* Option B - public folder (recommended): put image at public/images/profile.jpg */}
                <img src="/My_Image.png" alt="Shrutika" className="w-full h-full object-cover" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/50 rounded-lg rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-accent/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
