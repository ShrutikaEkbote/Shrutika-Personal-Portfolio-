import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {currentYear} Shrutika Ekbote. All rights reserved.
          </p>
          
          <p className="text-muted-foreground flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-accent fill-accent" /> and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
