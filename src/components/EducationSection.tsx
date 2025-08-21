import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.E. in Artificial Intelligence and Machine Learning",
    institution: "Ballari Institute of Technology",
    period: "2022 - Present",
    grade: "CGPA: 9.23",
    status: "Ongoing",
    icon: GraduationCap,
    color: "primary",
    highlights: [
      "Specializing in AI/ML algorithms and applications",
      "Strong focus on software development practices",
      "Active in technical clubs and project development",
      "Maintaining excellent academic performance"
    ],
    courses: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Structures", "Software Engineering"]
  },
  {
    degree: "12th Standard (Pre-University)",
    institution: "Higher Secondary Education",
    period: "2021",
    grade: "80.3%",
    status: "Completed",
    icon: BookOpen,
    color: "secondary",
    highlights: [
      "Strong foundation in Mathematics and Physics",
      "Developed analytical and problem-solving skills",
      "Prepared for engineering entrance examinations"
    ],
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
  },
  {
    degree: "10th Standard (Secondary)",
    institution: "Secondary Education Board",
    period: "2019", 
    grade: "62%",
    status: "Completed",
    icon: Trophy,
    color: "primary",
    highlights: [
      "Completed foundational education",
      "Developed core academic skills",
      "Built discipline and study habits"
    ],
    courses: ["Core Subjects", "Basic Sciences", "Mathematics"]
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Educational Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Academic excellence and continuous learning in the field of technology and engineering.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary hidden md:block"></div>

            {/* Education Items */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={edu.degree}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background shadow-glow transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                    <edu.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className="md:ml-20">
                    <Card className="hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-0 group">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge 
                                variant="outline" 
                                className={`${edu.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'} text-white border-0`}
                              >
                                {edu.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{edu.period}</span>
                            </div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-secondary font-medium">{edu.institution}</p>
                          </div>
                          <div className="text-right">
                            <div className={`text-2xl font-bold ${edu.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                              {edu.grade}
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-3 text-foreground">Key Highlights</h4>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <div className={`w-1.5 h-1.5 ${edu.color === 'primary' ? 'bg-primary' : 'bg-secondary'} rounded-full mt-2 flex-shrink-0`}></div>
                                <span className="text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Courses */}
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Relevant Coursework</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course) => (
                              <Badge 
                                key={course} 
                                variant="secondary"
                                className="text-xs"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Excellence Banner */}
          <div className="mt-16">
            <Card className="bg-gradient-hero text-white border-0 shadow-glow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">9.23</div>
                    <div className="text-sm opacity-90">Current CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">2026</div>
                    <div className="text-sm opacity-90">Expected Graduation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">AI/ML</div>
                    <div className="text-sm opacity-90">Specialization</div>
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