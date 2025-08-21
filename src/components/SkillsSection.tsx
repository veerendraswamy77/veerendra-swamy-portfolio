import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  Cpu, 
  FileCode,
  Coffee,
  Layers
} from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["C", "C++", "Java", "Python"],
    color: "primary"
  },
  {
    category: "Web Development", 
    icon: Globe,
    items: ["HTML", "CSS", "React.js"],
    color: "secondary"
  },
  {
    category: "Databases",
    icon: Database,
    items: ["SQL", "Database Design"],
    color: "primary"
  },
  {
    category: "Machine Learning",
    icon: Brain,
    items: ["Neural Networks", "Deep Learning", "Computer Vision"],
    color: "secondary"
  },
  {
    category: "AI Tools",
    icon: Cpu,
    items: ["TensorFlow", "Model Training", "Data Analysis"],
    color: "primary"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit spanning programming, web development, databases, 
              and cutting-edge AI/ML technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.category}
                className="group hover:shadow-glow hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-xl mb-4 flex items-center justify-center
                    ${skill.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'}
                    group-hover:animate-bounce-in
                  `}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Category */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {skill.category}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div 
                        key={item}
                        className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        <div className={`
                          w-2 h-2 rounded-full 
                          ${skill.color === 'primary' ? 'bg-primary' : 'bg-secondary'}
                        `}></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Banner */}
          <div className="mt-16">
            <Card className="bg-gradient-hero text-white border-0 shadow-glow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-6 h-6" />
                    <span className="font-medium">Problem Solver</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-6 h-6" />
                    <span className="font-medium">Quick Learner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-6 h-6" />
                    <span className="font-medium">Clean Code Advocate</span>
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