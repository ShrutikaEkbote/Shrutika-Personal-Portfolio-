import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ekboteshrutika2002@gmail.com",
      href: "mailto:ekboteshrutika2002@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/shrutikaekbote/",
      href: "https://www.linkedin.com/in/shrutikaekbote/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/ShrutikaEkbote",
      href: "https://github.com/ShrutikaEkbote"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9359041776",
      href: "tel:+919359041776"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
          Get In Touch
        </h2>

        {/* Centered layout */}
        <div className="flex justify-center">
          <div className="max-w-2xl w-full space-y-8 animate-fade-in-up">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's work together
              </h3>
              <p className="text-muted-foreground text-lg">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.label}
                  className="gradient-card p-4 border-border/50 hover:border-accent/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <info.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground group-hover:text-accent transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;