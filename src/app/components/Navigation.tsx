import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export function Navigation() {
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-6 flex justify-between items-center">
        <Link
          to="/"
          className="transition-colors duration-300 hover:text-accent"
          style={{ fontFamily: "var(--font-serif)", fontSize: "1.125rem", fontWeight: "500" }}
        >
          Christina Kim
        </Link>

        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-300 hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-foreground"
              }`}
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
