import { motion } from "framer-motion";
import GmailIcon from "./assets/footer-gmail.svg";
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
      name: "snippit@gmail.com",
      href: "mailto:snippit@gmail.com",
      icon: <img src={GmailIcon} alt="Gmail" />,
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
      icon: <img src={LinkedinIcon} alt="Linkedin" className="w-5 h-5" />,
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
            <p className="text-gray-400 text-sm mt-2">
              © 2026 Snippit. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>{link.icon}</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm text-center">
            Designed & developed by{" "}
            <a
              href="www.linkedin.com/in/cj-tinae"
              className="text-pink-400 font-semibold hover:text-pink-300 transition-colors"
            >
              Ceejt
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
