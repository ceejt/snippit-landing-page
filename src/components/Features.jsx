import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CutIcon from "./assets/features-cut.svg";
import SmartIcon from "./assets/features-ratio.svg";
import ShareIcon from "./assets/features-share.svg";

const Features = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <img src={CutIcon} alt="Fast" />,
      title: "Cut Highlights in Seconds",
      description:
        "Snippit helps you quickly isolate the best moments from long videos without manually scrubbing timelines. Smart selection, zero hassle.",
    },
    {
      icon: <img src={SmartIcon} alt="Ratio" />,
      title: "Smart Ratio Generation",
      description:
        "Automatically adjusts video split ratios for Facebook Reels, Instagram Stories, and TikTok. Platform-perfect every time.",
    },
    {
      icon: <img src={ShareIcon} alt="Share" />,
      title: "Share Directly",
      description:
        "Export and share clips directly to your favorite platforms. No downloads, no re-uploads. From editor to audience instantly.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
};
export default Features;
