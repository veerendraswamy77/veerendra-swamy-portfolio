import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Brain, Award, ExternalLink, ChevronRight } from "lucide-react";

const certifications = [
  {
    title: "Google Cloud Career Launchpad",
    issuer: "Google Cloud",
    track: "Generative AI Track",
    description: "Comprehensive certification program focused on generative AI technologies and cloud computing fundamentals.",
    icon: Brain,
    color: "primary",
    skills: ["Generative AI", "Cloud Computing", "Google Cloud Platform", "AI/ML"],
    status: "Completed",
    year: "2024"
  },
  {
    title: "EZ Training Completion Certificate", 
    issuer: "EZ Training",
    track: "Professional Development",
    description: "Professional training certification demonstrating commitment to continuous learning and skill development.",
    icon: Award,
    color: "secondary",
    skills: ["Professional Development", "Training", "Skill Enhancement"],
    status: "Completed",
    year: "2024"
  },
  {
    title: "Cloud Practitioner",
    issuer: "Cloud Provider",
    track: "Cloud Fundamentals",
    description: "Foundational cloud computing certification covering core concepts and best practices.",
    icon: Cloud,
    color: "primary", 
    skills: ["Cloud Computing", "Infrastructure", "Best Practices", "Architecture"],
    status: "Completed",
    year: "2024"
  }
];

export function CertificationsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Certifications & Training
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Professional certifications showcasing expertise in cloud computing, AI/ML, and continuous learning commitment.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="group relative overflow-hidden hover:shadow-glow transition-all duration-500 bg-card/50 backdrop-blur-sm border-0 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0">
                  {/* Front Face */}
                  <div className={`p-6 transition-transform duration-500 ${
                    hoveredCard === index ? 'transform -translate-y-2' : ''
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`
                        w-14 h-14 rounded-xl flex items-center justify-center
                        ${cert.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'}
                        group-hover:animate-bounce-in
                      `}>
                        <cert.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${cert.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'} text-white border-0 text-xs`}
                      >
                        {cert.status}
                      </Badge>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <p className="text-secondary font-medium mb-2">
                      {cert.issuer}
                    </p>

                    <Badge variant="secondary" className="mb-3 text-xs">
                      {cert.track}
                    </Badge>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{cert.skills.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="p-2 hover:bg-accent group-hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 bg-gradient-primary/5 backdrop-blur-sm flex items-center justify-center animate-fade-in">
                      <Button className="bg-white/20 backdrop-blur-sm border-white/30 text-foreground hover:bg-white/30">
                        View Certificate
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Summary */}
          <div className="mt-16">
            <Card className="bg-gradient-hero text-white border-0 shadow-glow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">3</div>
                    <div className="text-sm opacity-90">Professional Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">2024</div>
                    <div className="text-sm opacity-90">Latest Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">AI/ML</div>
                    <div className="text-sm opacity-90">Specialization Focus</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}