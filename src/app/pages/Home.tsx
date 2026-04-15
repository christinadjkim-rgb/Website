import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

const featuredProjects = [
  {
    id: "wooden-stool",
    title: "Out of Love",
    image:
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5011.JPG",
  },
  {
    id: "minimal-table",
    title: "Soban set plates",
    image:
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5235.jpg",
  },
  {
    id: "side-table",
    title: "Beyond",
    image:
      "https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_5478.jpg",
  },
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center pt-24 pb-16 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm max-w-lg mx-auto lg:mx-0">
                <ImageWithFallback
                  src="https://pub-433a7450f2ab4d2abb7f52787095f5f5.r2.dev/IMG_1786.JPG"
                  alt="Christina Kim"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 text-center"
            >
              <div className="space-y-3">
                <h1
                  className="text-foreground tracking-wide"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "3rem",
                    fontWeight: "400",
                    letterSpacing: "0.02em",
                  }}
                >
                  Christina Kim
                </h1>
                <p
                  className="text-secondary"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.125rem",
                    fontWeight: "300",
                    letterSpacing: "0.05em",
                  }}
                >
                  Product & Furniture Designer
                </p>
              </div>

              <p
                className="text-foreground leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: "300",
                  lineHeight: "1.8",
                }}
              >
                Christina Kim is a London-based product and furniture designer currently studying BA
                Product and Furniture Design at UAL (Chelsea College of Arts), whose work explores
                the relationship between material, memory, and emotional experience through tactile
                objects. Working with various materials, her practice combines
                conceptual thinking with hands-on material exploration, aiming to create quietly
                expressive objects that resonate through touch, presence, and time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Works Section */}
      <div className="py-24 px-8 lg:px-16 bg-background-secondary">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-foreground mb-4"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2rem",
                fontWeight: "400",
                letterSpacing: "0.02em",
              }}
            >Featured Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              to="/works"
              className="inline-block text-foreground hover:text-accent transition-colors duration-300 border-b border-foreground hover:border-accent pb-1"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                fontWeight: "400",
              }}
            >
              View All Works
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function FeaturedProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/works/${project.id}`}
        className="block group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-sm aspect-[3/4] bg-card">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
            style={{
              filter: isHovered ? "blur(2px)" : "blur(0px)",
            }}
          />

          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
            style={{
              backgroundColor: "rgba(26, 20, 16, 0.7)",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <h3
              className="text-white text-center px-8"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: "400",
                letterSpacing: "0.02em",
              }}
            >
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}