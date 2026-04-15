import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { projectId } = useParams();
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const project = currentIndex !== -1 ? projects[currentIndex] : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Project not found</h2>
          <Link to="/works" className="text-accent hover:underline">
            Return to Works
          </Link>
        </div>
      </div>
    );
  }

  // Calculate previous and next projects
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1600px] mx-auto px-8 lg:px-16 mb-12"
        >
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Works
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-8 lg:px-16 mb-16"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <ImageWithFallback
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Project Info */}
        <div className="max-w-3xl mx-auto px-8 lg:px-16 space-y-16 text-center">
          {/* Title and Materials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
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
              {project.title}
            </h1>
            <p
              className="text-secondary"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                fontWeight: "300",
              }}
            >
              {project.materials}
            </p>
          </motion.div>

          {/* Concept */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2
              className="text-foreground"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              Concept
            </h2>
            <p
              className="text-foreground leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                fontWeight: "300",
                lineHeight: "1.8",
              }}
              dangerouslySetInnerHTML={{
                __html: project.concept.replace(/\bsoban\b/g, '<em>soban</em>')
              }}
            />
          </motion.div>

          {/* Process Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`grid gap-8 ${project.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}
          >
            {project.images.map((image: string, index: number) => (
              <div key={index} className="aspect-square overflow-hidden rounded-sm">
                <ImageWithFallback src={image} alt={`Detail ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-5xl mx-auto px-8 lg:px-16 mt-24 mb-16"
        >
          <div className="flex justify-between items-start gap-8">
            {/* Previous Project */}
            <div className="flex-1">
              {previousProject ? (
                <Link
                  to={`/works/${previousProject.id}`}
                  className="group block text-left"
                >
                  <div
                    className="flex items-center gap-2 mb-3 text-secondary group-hover:text-accent transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      fontWeight: "300",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </div>
                  <h3
                    className="text-foreground group-hover:text-accent transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {previousProject.title}
                  </h3>
                </Link>
              ) : (
                <div className="opacity-0">
                  {/* Placeholder to maintain layout */}
                </div>
              )}
            </div>

            {/* Next Project */}
            <div className="flex-1">
              {nextProject ? (
                <Link
                  to={`/works/${nextProject.id}`}
                  className="group block text-right"
                >
                  <div
                    className="flex items-center justify-end gap-2 mb-3 text-secondary group-hover:text-accent transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      fontWeight: "300",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-foreground group-hover:text-accent transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {nextProject.title}
                  </h3>
                </Link>
              ) : (
                <div className="opacity-0">
                  {/* Placeholder to maintain layout */}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
