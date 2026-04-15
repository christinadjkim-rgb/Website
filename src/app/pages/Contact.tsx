import { motion } from "motion/react";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Footer } from "../components/Footer";

export function Contact() {
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
    <div className="min-h-screen">
      <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-16"
          >
            {/* Title */}
            <div className="space-y-4">
              <h1
                className="text-foreground"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.5rem",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                }}
              >
                Get in Touch
              </h1>
              <p
                className="text-secondary max-w-xl mx-auto"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "1.8",
                }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-8">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p
                      className="text-secondary"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
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
                        fontSize: "1rem",
                        fontWeight: "300",
                      }}
                    >
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
