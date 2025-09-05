import { Button } from "@/components/ui/button";
import { Download, MessageCircle } from "lucide-react";
const profilePhoto = "/lovable-uploads/0fba2849-d615-4ece-ae99-c7e5d73f97c1.png";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-green-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/30"></div>

      <div className="container mx-auto px-6 lg:px-8 min-h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          
          {/* Left Content */}
          <div className="text-left order-2 lg:order-1 space-y-6">
            {/* Name with Gradient Animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              <span className="inline-block bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                Hi, I'm S Veerendra Swamy
              </span>
            </h1>
            
            {/* Main Title with Glow Effect */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl mb-4 font-semibold">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Aspiring AI & ML Engineer
                </span>
              </p>
            </div>
            
            {/* Subtitle */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg md:text-xl text-gray-300 mb-6 font-medium">
                Software Developer & Product Designer
              </p>
            </div>
            
            {/* Description */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Transforming ideas into innovative solutions through clean design, efficient code, and cutting-edge AI/ML technologies.
              </p>
            </div>
            
            {/* Animated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button
                size="lg"
                onClick={downloadResume}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Download className="mr-3 h-5 w-5 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="relative border-2 border-cyan-400/60 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <MessageCircle className="mr-3 h-5 w-5 relative z-10" />
                <span className="relative z-10">Let's Connect</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative animate-fade-in" style={{ animationDelay: '1s' }}>
              {/* Rotating Border */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-30 animate-spin blur-sm"></div>
              
              {/* Pulsing Glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-gradient-to-r ring-cyan-400/40 shadow-2xl shadow-blue-500/25 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/40 group">
                <img 
                  src={profilePhoto} 
                  alt="S Veerendra Swamy - AI/ML Engineer"
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}