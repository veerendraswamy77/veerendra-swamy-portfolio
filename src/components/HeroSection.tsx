import { Button } from "@/components/ui/button";
import { Download, MessageCircle, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-gradient-shift bg-300%"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-glow animate-bounce-in">
                <img 
                  src={profilePhoto} 
                  alt="S Veerendra Swamy - AI/ML Engineer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse-glow"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up text-white">
            S Veerendra Swamy
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Aspiring AI & ML Engineer | Software Developer & Product Designer
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Transforming ideas into innovative solutions through clean design, efficient code, and cutting-edge AI/ML technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              onClick={downloadResume}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-white/70 hover:text-white transition-colors duration-300 animate-float"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}