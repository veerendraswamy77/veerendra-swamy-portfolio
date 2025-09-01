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
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow animate-gradient-shift"></div>
      
      {/* Floating Particles with Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-secondary/40 rounded-full animate-float glow-secondary"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-accent/50 rounded-full animate-float glow-accent" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-aqua/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-primary-glow/60 rounded-full animate-float glow-primary" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Glassmorphism */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="glass-card w-36 h-36 p-2 hover-lift hover-glow">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="S Veerendra Swamy - AI/ML Engineer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 animate-pulse-glow pointer-events-none"></div>
            </div>
          </div>

          {/* Name with Poppins Bold */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up text-foreground">
            S Veerendra Swamy
          </h1>

          {/* Tagline with Gradient Text */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-3xl lg:text-4xl font-heading font-medium bg-gradient-secondary bg-clip-text text-transparent">
              Aspiring AI & ML Engineer
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-2">
              Software Developer & Product Designer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Transforming ideas into innovative solutions through clean design, efficient code, and cutting-edge AI/ML technologies.
          </p>

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