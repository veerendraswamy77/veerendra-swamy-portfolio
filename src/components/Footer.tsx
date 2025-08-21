import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                S Veerendra Swamy
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Aspiring AI & ML Engineer passionate about transforming ideas into innovative solutions 
                through clean design and efficient code.
              </p>
              <div className="flex items-center gap-2 text-white/70">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>using React & AI</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4 text-white">Quick Navigation</h4>
              <nav className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Experience", href: "#experience" },
                  { label: "Education", href: "#education" },
                  { label: "Contact", href: "#contact" }
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect Section */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4 text-white">Let's Connect</h4>
              <p className="text-white/80 text-sm mb-4">
                Ready to collaborate or discuss opportunities? Reach out through any of these channels.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-10 h-10 p-0 hover:bg-white/20 transition-all duration-300 group"
                >
                  <a 
                    href="https://github.com/veerendraswamy77" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-10 h-10 p-0 hover:bg-white/20 transition-all duration-300 group"
                >
                  <a 
                    href="https://linkedin.com/in/veerendra-swamy-s-2331a22b2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-10 h-10 p-0 hover:bg-white/20 transition-all duration-300 group"
                >
                  <a 
                    href="mailto:sveerendraswamy@gmail.com"
                    aria-label="Send Email"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-white/70 text-sm text-center md:text-left">
                © {currentYear} S Veerendra Swamy. All rights reserved.
              </div>

              {/* Back to Top */}
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-white/20 transition-all duration-300 group text-white/70 hover:text-white"
              >
                Back to Top
                <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}