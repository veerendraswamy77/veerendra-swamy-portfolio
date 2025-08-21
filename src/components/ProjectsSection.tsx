import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "Network Latency Tester",
    description: "Python-based network performance testing tool designed to measure and analyze network latency across different endpoints.",
    fullDescription: "Led a team of 4 developers to create a comprehensive network latency testing solution. The tool provides real-time monitoring, detailed analytics, and performance insights for network administrators. Built with Python, featuring a clean CLI interface and robust error handling.",
    tech: ["Python", "Networking", "CLI", "Data Analysis"],
    duration: "1 Month",
    team: "Team of 4",
    highlights: [
      "Real-time latency monitoring",
      "Multi-endpoint testing capabilities", 
      "Detailed performance analytics",
      "Cross-platform compatibility"
    ]
  },
  {
    title: "Black & White Image Colourisation",
    description: "Advanced deep learning model using U-Net architecture and CNNs to automatically colorize grayscale images.",
    fullDescription: "Developed a sophisticated computer vision model that transforms black and white images into realistic color versions. The project uses U-Net architecture combined with Convolutional Neural Networks to learn color patterns and apply them accurately to grayscale inputs.",
    tech: ["Python", "TensorFlow", "U-Net", "CNN", "Computer Vision"],
    duration: "3 Months",
    team: "Solo Project",
    highlights: [
      "U-Net + CNN hybrid architecture",
      "High-quality colorization results",
      "Training on large image datasets",
      "Real-time processing capabilities"
    ]
  }
];

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Innovative solutions showcasing expertise in software development, AI/ML, and team leadership.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Project Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-gradient-primary text-primary-foreground hover:bg-gradient-secondary transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Expandable Details */}
                  {expandedProject === index && (
                    <div className="mt-6 p-6 bg-muted/50 rounded-lg animate-fade-in">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.fullDescription}
                      </p>
                      
                      <h4 className="font-semibold mb-3 text-foreground">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Expand Button */}
                  <Button
                    variant="ghost"
                    onClick={() => toggleProject(index)}
                    className="mt-4 w-full justify-center gap-2 hover:bg-accent"
                  >
                    {expandedProject === index ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}