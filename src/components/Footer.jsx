import { motion } from "framer-motion";
import FBIcon from "./assets/footer-fb.svg";
import IGIcon from "./assets/footer-ig.svg";
import LinkedinIcon from "./assets/footer-linkedin.svg";

const Footer = () => {
  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Updates", href: "#updates" },
  ];
  const resourceLinks = [
    { name: "Documentation", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Support", href: "#" },
    { name: "Blog", href: "#" },
  ];
  const contactLinks = [
    {
      name: "hello@snippit.app",
      href: "mailto:hello@snippit.app",
      icon: "📧",
    },
    {
      name: "Facebook",
      href: "#",
      icon: <img src={FBIcon} alt="FB" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <img src={IGIcon} alt="IG" />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <img src={LinkedinIcon} alt="Linkedin" />,
    },
  ];
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold mb-4">Snippit</div>
            <p className="text-gray-400">
              The clip cutter for your content needs.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
