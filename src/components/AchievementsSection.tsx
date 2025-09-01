import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code, Award, Target } from "lucide-react";

const achievements = [
  {
    title: "Top 5 Rank",
    subtitle: "Hackfest Coding Competition",
    description: "Secured top 5 position in a competitive coding hackathon, showcasing problem-solving skills and innovative thinking under time pressure.",
    icon: Trophy,
    color: "primary",
    category: "Competition",
    skills: ["Competitive Programming", "Problem Solving", "Time Management"]
  },
  {
    title: "Top 2 Position",
    subtitle: "College Ideathon",
    description: "Achieved 2nd place in college ideathon competition, demonstrating creativity, innovation, and presentation skills in developing breakthrough ideas.",
    icon: Award,
    color: "secondary",
    category: "Innovation",
    skills: ["Creative Thinking", "Innovation", "Presentation", "Team Collaboration"]
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Recognition for excellence in competitive programming and technical innovation.
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="group hover:shadow-glow hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-0 animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className={`
                    w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center
                    ${achievement.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'}
                    group-hover:animate-pulse-glow
                  `}>
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Category Badge */}
                  <Badge 
                    variant="outline" 
                    className={`mb-3 ${achievement.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'} text-white border-0`}
                  >
                    {achievement.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                    {achievement.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-secondary font-medium mb-3">
                    {achievement.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {achievement.skills.map((skill) => (
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
            ))}

            {/* Additional Achievement Placeholders */}
            <Card className="group hover:shadow-glow transition-all duration-300 bg-card/30 backdrop-blur-sm border-dashed border-2 border-muted animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-muted/50">
                  <Target className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-muted-foreground mb-2">
                  More Achievements
                </h3>
                <p className="text-muted-foreground text-sm">
                  Continuously working on new projects and participating in competitions to achieve more milestones.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 bg-card/30 backdrop-blur-sm border-dashed border-2 border-muted animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-muted/50">
                  <Code className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-muted-foreground mb-2">
                  Future Goals
                </h3>
                <p className="text-muted-foreground text-sm">
                  Aiming for recognition in AI/ML competitions and open-source contributions to the developer community.
                </p>
              </CardContent>
            </Card>
          </div>

            {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">2</div>
                <div className="text-sm opacity-90">Competition Awards</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-secondary text-secondary-foreground">
              <CardContent className="p-6 text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">Top 2</div>
                <div className="text-sm opacity-90">Best Rank</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Code className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">10+</div>
                <div className="text-sm opacity-90">Major Projects</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-secondary text-secondary-foreground">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">9.23</div>
                <div className="text-sm opacity-90">Academic CGPA</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}