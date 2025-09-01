import { Card, CardContent } from "@/components/ui/card";
const profilePhoto = "/lovable-uploads/0fba2849-d615-4ece-ae99-c7e5d73f97c1.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-glass relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/6 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-secondary mx-auto rounded-full shadow-glow"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Profile Image with Enhanced Glassmorphism */}
            <div className="flex justify-center lg:justify-start animate-slide-in">
              <div className="relative group">
                <div className="glass-card p-4 hover-lift hover-glow">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden">
                    <img 
                      src={profilePhoto} 
                      alt="S Veerendra Swamy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-secondary rounded-full opacity-30 animate-float glow-secondary"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-primary rounded-full opacity-30 animate-float glow-primary" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-hero rounded-full opacity-20 animate-float" style={{ animationDelay: '2.5s' }}></div>
              </div>
            </div>

            {/* Content with Futuristic Cards */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Card className="glass-card hover-lift hover-glow group">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    I am an aspiring <span className="font-semibold bg-gradient-secondary bg-clip-text text-transparent">Software Developer</span>, 
                    <span className="font-semibold bg-gradient-primary bg-clip-text text-transparent"> Product Designer</span>, and 
                    <span className="font-semibold bg-gradient-hero bg-clip-text text-transparent"> AI/ML Engineer</span> currently pursuing 
                    a B.E. in Artificial Intelligence and Machine Learning.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    With strong foundations in programming, web development, and databases, I enjoy 
                    transforming ideas into real-world solutions through clean design and efficient code. 
                    I am also skilled in machine learning and AI tools, enabling me to build innovative 
                    and impactful applications.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <span className="font-semibold bg-gradient-secondary bg-clip-text text-transparent">Adaptable and optimistic</span>, 
                    I am eager to learn and grow while contributing to meaningful projects that make 
                    a difference in the world.
                  </p>
                </CardContent>
              </Card>

              {/* Enhanced Stats Card */}
              <div className="flex justify-center">
                <Card className="glass-card bg-gradient-hero border-2 border-accent/20 hover-lift hover:glow-accent group">
                  <CardContent className="p-8 text-center">
                    <div className="font-heading text-4xl font-bold mb-2 text-white group-hover:scale-110 transition-transform duration-300">9.23</div>
                    <div className="text-white/90 font-medium tracking-wider">CGPA</div>
                    <div className="mt-3 w-12 h-1 bg-white/30 mx-auto rounded-full"></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}