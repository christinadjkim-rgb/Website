import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";
import { projects } from "../data/projects";

export function Works() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24 px-8 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1
              className="text-foreground"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.5rem",
                fontWeight: "400",
                letterSpacing: "0.02em",
              }}
            >
              Selected Works
            </h1>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ProjectCard({ project, index }: { project: { id: string; title: string; image: string }; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/works/${project.id}`}
        className="block group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-card">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
            style={{
              filter: isHovered ? "blur(2px)" : "blur(0px)",
            }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
            style={{
              backgroundColor: "rgba(26, 20, 16, 0.7)",
              opacity: isHovered ? 1 : 0,
            }}
          >
            <h2 className="text-xl font-bold text-white">{project.title}</h2>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}