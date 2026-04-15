import { motion } from "motion/react";
import { Mail, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Christina.dj.kim@gmail.com",
      link: "mailto:Christina.dj.kim@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "christina.d.kim_",
      link: "https://instagram.com/christina.d.kim_",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "christina-kim",
      link: "https://www.linkedin.com/in/christina-kim-087478210",
    },
  ];

  return (
    <footer className="bg-background border-t border-border py-16 px-8 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center space-y-12">
          {/* Contact Links */}
          <div className="flex flex-row items-center justify-center gap-6 md:gap-16">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                {/* Mobile: Icon only */}
                <div className="md:hidden w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <contact.icon className="w-5 h-5" />
                </div>
                
                {/* Desktop: Icon + Text */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p
                      className="text-secondary"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem",
                        fontWeight: "400",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {contact.label}
                    </p>
                    <p
                      className="text-foreground group-hover:text-accent transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        fontWeight: "300",
                      }}
                    >
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p
              className="text-secondary"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: "300",
              }}
            >
              © {new Date().getFullYear()} Christina Kim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}