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
    return (
        <section id="features" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold mb-6">
            Turn long-form into<br />
            <span className="text-gradient">digestible content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Made for sharing. Built for creators who value their time.
          </p>
        </motion.div>
            </div>
        </section>
        
    );
};
export default Features;