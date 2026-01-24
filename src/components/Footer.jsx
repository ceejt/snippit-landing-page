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
};

export default Footer;
