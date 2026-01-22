import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <motion.div
          className="text-3xl font-bold tracking-tight font-display"
          whileHover={{ scale: 1.05 }}
        >
          Snippit
        </motion.div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#hero"
            className="text-gray-600 hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="#features"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Demo
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#footer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Contact
          </a>
          <motion.a
            href="#cta"
            className="btn-glossy btn-glossy-primary px-6 py-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
