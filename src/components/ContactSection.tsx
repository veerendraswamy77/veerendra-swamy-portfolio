import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MapPin, 
  Send,
  MessageCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8660886411",
    href: "tel:+918660886411",
    color: "primary"
  },
  {
    icon: Mail,
    label: "Email", 
    value: "sveerendraswamy@gmail.com",
    href: "mailto:sveerendraswamy@gmail.com",
    color: "secondary"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "veerendraswamy77",
    href: "https://github.com/veerendraswamy77",
    color: "primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "veerendra-swamy-s",
    href: "https://linkedin.com/in/veerendra-swamy-s-2331a22b2",
    color: "secondary"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-hero text-white border-0 shadow-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MessageCircle className="w-6 h-6" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Whether you're interested in collaborating on a project, discussing AI/ML opportunities, 
                    or just want to connect with a fellow developer, I'm always open to meaningful conversations.
                  </p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-white/70" />
                    <span className="text-white/90">Ballari, Karnataka, India</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={contact.label}
                    className="group hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <a 
                        href={contact.href}
                        target={contact.label === "GitHub" || contact.label === "LinkedIn" ? "_blank" : undefined}
                        rel={contact.label === "GitHub" || contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 hover:text-primary transition-colors duration-200"
                      >
                        <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center
                          ${contact.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'}
                          group-hover:animate-bounce-in
                        `}>
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{contact.label}</div>
                          <div className="text-muted-foreground text-sm">{contact.value}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-card animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="border-muted focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-muted focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or just say hello!"
                          required
                          className="min-h-32 border-muted focus:border-primary transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:bg-gradient-secondary transition-all duration-300 shadow-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}