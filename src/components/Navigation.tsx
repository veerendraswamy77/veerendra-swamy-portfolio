import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'S_Veerendra_Swamy_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-card border-b border-card-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Gradient */}
          <div className="font-heading font-bold text-xl bg-gradient-primary bg-clip-text text-transparent hover:glow-primary transition-all duration-300">
            S Veerendra Swamy
          </div>

          {/* Desktop Navigation with Glassmorphism */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-foreground hover:text-secondary transition-all duration-300 font-medium rounded-xl hover:bg-glass hover-glow group"
              >
                {item.label}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-secondary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Actions with Futuristic Styling */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className="hidden sm:flex glass border-2 border-secondary/30 text-secondary hover:border-secondary hover:glow-secondary hover:-translate-y-0.5 transition-all duration-300 font-semibold rounded-xl"
            >
              <Download size={16} />
              Resume
            </Button>
            <DarkModeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden glass-card hover:glow-accent transition-all duration-300 rounded-xl w-10 h-10 p-0"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Enhanced Glassmorphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card border-t border-card-border animate-fade-in">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-secondary hover:bg-glass transition-all duration-300 font-medium py-3 px-4 rounded-xl hover-glow"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={downloadResume}
                className="w-full glass border-2 border-secondary/30 text-secondary hover:border-secondary hover:glow-secondary transition-all duration-300 font-semibold mt-4 rounded-xl"
              >
                <Download size={16} />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}