import { Card, CardContent } from "@/components/ui/card";
const profilePhoto = "/lovable-uploads/0fba2849-d615-4ece-ae99-c7e5d73f97c1.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-card group-hover:shadow-glow transition-all duration-500">
                  <img 
                    src={profilePhoto} 
                    alt="S Veerendra Swamy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    I am an aspiring <span className="text-primary font-semibold">Software Developer</span>, 
                    <span className="text-secondary font-semibold"> Product Designer</span>, and 
                    <span className="text-primary font-semibold"> AI/ML Engineer</span> currently pursuing 
                    a B.E. in Artificial Intelligence and Machine Learning.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    With strong foundations in programming, web development, and databases, I enjoy 
                    transforming ideas into real-world solutions through clean design and efficient code. 
                    I am also skilled in machine learning and AI tools, enabling me to build innovative 
                    and impactful applications.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <span className="text-secondary font-semibold">Adaptable and optimistic</span>, 
                    I am eager to learn and grow while contributing to meaningful projects that make 
                    a difference in the world.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="flex justify-center">
                <Card className="bg-gradient-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">9.23</div>
                    <div className="text-sm opacity-90">CGPA</div>
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