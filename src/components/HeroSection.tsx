import { Button } from "@/components/ui/button";
import { Download, MessageCircle, ChevronDown } from "lucide-react";
const profilePhoto = "/lovable-uploads/0fba2849-d615-4ece-ae99-c7e5d73f97c1.png";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'S_Veerendra_Swamy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Enhanced Background with Better Contrast */}
      <div className="absolute inset-0 bg-gradient-glow animate-gradient-shift opacity-70"></div>
      <div className="absolute inset-0 bg-background/10 backdrop-blur-sm"></div>
      
      {/* Floating Particles with Enhanced Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-secondary/60 rounded-full animate-float glow-secondary"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent/70 rounded-full animate-float glow-accent" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-7 h-7 bg-aqua/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-primary-glow/80 rounded-full animate-float glow-primary" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Content with Enhanced Visibility */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Profile Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-30 animate-pulse-glow"></div>
              
              {/* Main Image Container */}
              <div className="relative glass-card w-44 h-44 p-3 hover-lift hover-glow shadow-glow">
                <div className="w-full h-full rounded-2xl overflow-hidden ring-2 ring-primary-glow/50">
                  <img 
                    src={profilePhoto} 
                    alt="S Veerendra Swamy - AI/ML Engineer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500 filter brightness-105 contrast-105"
                  />
                </div>
                {/* Subtle Inner Glow */}
                <div className="absolute inset-3 rounded-2xl bg-gradient-secondary/10 pointer-events-none"></div>
              </div>
              
              {/* Additional Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-bounce glow-accent" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-float glow-secondary" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>

          {/* Enhanced Name with Better Contrast */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up text-foreground drop-shadow-lg">
            <span className="relative">
              S Veerendra Swamy
              <div className="absolute inset-0 bg-gradient-primary bg-clip-text text-transparent opacity-80 animate-pulse-glow"></div>
            </span>
          </h1>

          {/* Enhanced Tagline with Better Visibility */}
          <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold mb-4">
              <span className="bg-gradient-secondary bg-clip-text text-transparent drop-shadow-sm">
                Aspiring AI & ML Engineer
              </span>
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium drop-shadow-md">
              Software Developer & Product Designer
            </p>
          </div>

          {/* Enhanced Description with Better Readability */}
          <div className="glass-card p-6 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              Transforming ideas into innovative solutions through clean design, efficient code, and cutting-edge AI/ML technologies.
            </p>
          </div>

          {/* Futuristic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              onClick={downloadResume}
              className="glass-card bg-gradient-secondary hover:glow-secondary hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-4 text-lg rounded-2xl"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="glass border-2 border-accent/30 text-foreground hover:border-accent hover:glow-accent hover:-translate-y-1 transition-all duration-300 font-semibold px-8 py-4 text-lg rounded-2xl"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Let's Connect
            </Button>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="glass-card p-4 rounded-full text-muted-foreground hover:text-secondary hover:glow-secondary transition-all duration-300 hover-lift"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}