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
      {/* Full-width Gradient Background with Animations */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-glow animate-gradient-shift opacity-40"></div>
      
      {/* Floating Particles - Enhanced and More Elegant */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-secondary/60 rounded-full animate-float glow-secondary"></div>
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-accent/70 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] left-[25%] w-4 h-4 bg-aqua/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[30%] w-2.5 h-2.5 bg-primary-glow/80 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[40%] left-[80%] w-3 h-3 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[80%] left-[60%] w-2 h-2 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Main Content - Centered and Clean */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Floating Profile Picture */}
          <div className="mb-16 flex justify-center animate-fade-in-up">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-6 rounded-full bg-gradient-secondary/30 blur-2xl animate-pulse-glow"></div>
              
              {/* Profile image with floating animation */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-secondary/50 shadow-glow animate-float glow-secondary">
                <img 
                  src={profilePhoto} 
                  alt="S Veerendra Swamy - AI/ML Engineer"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-3 -right-3 w-4 h-4 bg-accent rounded-full animate-bounce glow-accent" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-aqua rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>

          {/* Name - Large, Bold, Clean with Gradient Glow */}
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-2xl glow-primary">
              S Veerendra Swamy
            </span>
          </h1>

          {/* Tagline - Clean and Elegant */}
          <div className="mb-8 animate-fade-in-up space-y-2" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold text-secondary glow-secondary">
              Aspiring AI & ML Engineer
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl text-foreground/80 font-medium">
              Software Developer & Product Designer
            </p>
          </div>

          {/* Subtext - Clean Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-16 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Transforming ideas into innovative solutions through clean design, efficient code, and cutting-edge AI/ML technologies.
          </p>

          {/* Clean Futuristic Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              onClick={downloadResume}
              className="bg-gradient-secondary hover:bg-gradient-primary text-white font-semibold px-10 py-6 text-xl rounded-2xl shadow-glow hover:shadow-glow-secondary hover:-translate-y-2 transition-all duration-500 glow-secondary"
            >
              <Download className="mr-4 h-6 w-6" />
              Download Resume
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-accent/50 text-foreground hover:border-accent hover:bg-accent/10 font-semibold px-10 py-6 text-xl rounded-2xl hover:-translate-y-2 transition-all duration-500 hover:glow-accent"
            >
              <MessageCircle className="mr-4 h-6 w-6" />
              Let's Connect
            </Button>
          </div>

          {/* Elegant Scroll Indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="animate-bounce">
              <button
                onClick={scrollToAbout}
                className="p-4 rounded-full text-foreground/60 hover:text-secondary transition-all duration-300 hover:-translate-y-1 hover:glow-secondary"
                aria-label="Scroll to about section"
              >
                <ChevronDown size={32} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}