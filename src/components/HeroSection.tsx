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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-pink-600/20"></div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-blue-400/60 rounded-full animate-float"></div>
        <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-pink-400/70 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] left-[20%] w-3 h-3 bg-cyan-400/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[25%] w-2 h-2 bg-violet-400/60 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[40%] right-[10%] w-2.5 h-2.5 bg-blue-300/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Clean Profile Picture */}
          <div className="mb-12 flex justify-center animate-fade-in-up">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-lg animate-pulse"></div>
              
              {/* Image */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-blue-400/50 shadow-2xl animate-float">
                <img 
                  src={profilePhoto} 
                  alt="S Veerendra Swamy - AI/ML Engineer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Clean Name - No Boxes */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up text-white leading-tight" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              S Veerendra Swamy
            </span>
          </h1>

          {/* Clean Tagline */}
          <div className="mb-8 animate-fade-in-up space-y-3" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-300">
              Aspiring AI & ML Engineer
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
              Software Developer & Product Designer
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Transforming ideas into innovative solutions through clean design, efficient code, and cutting-edge AI/ML technologies.
          </p>

          {/* Modern Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="mr-3 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-blue-400/50 text-blue-300 hover:border-blue-400 hover:bg-blue-400/10 font-semibold px-8 py-4 text-lg rounded-xl hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Let's Connect
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="animate-bounce">
              <button
                onClick={scrollToAbout}
                className="p-3 rounded-full text-gray-400 hover:text-blue-400 transition-all duration-300"
                aria-label="Scroll to about section"
              >
                <ChevronDown size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}