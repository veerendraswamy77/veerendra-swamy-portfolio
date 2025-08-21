import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Award } from "lucide-react";

const experiences = [
  {
    title: "Kriya Club Member",
    organization: "Technical Club",
    period: "2022 - Present",
    type: "Leadership & Technical",
    icon: Code,
    description: "Active member contributing to workshops, hackathons, and innovative projects within the technical community.",
    achievements: [
      "Organized and participated in coding workshops",
      "Led project development initiatives", 
      "Mentored junior club members",
      "Contributed to hackathon events"
    ],
    skills: ["Leadership", "Project Management", "Mentoring", "Event Organization"]
  },
  {
    title: "Cultural Events Volunteer",
    organization: "College Community",
    period: "2022 - Present", 
    type: "Community Service",
    icon: Users,
    description: "Dedicated volunteer for cultural events and celebrations, fostering community engagement and event management skills.",
    achievements: [
      "Coordinated multiple cultural festivals",
      "Managed event logistics and team coordination",
      "Enhanced communication and organizational skills",
      "Built strong community connections"
    ],
    skills: ["Event Management", "Team Coordination", "Communication", "Community Building"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Experience & Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Building leadership skills and technical expertise through active community involvement and project management.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary md:transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title}
                  className={`relative flex items-center animate-fade-in-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background shadow-glow md:transform md:-translate-x-1/2 z-10">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <exp.icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <Card className="hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-0 group">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="bg-gradient-primary text-primary-foreground border-0">
                              {exp.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                            {exp.title}
                          </h3>
                          <p className="text-secondary font-medium">{exp.organization}</p>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            Key Contributions
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}