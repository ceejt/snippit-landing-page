import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CutIcon from "./assets/features-cut.svg";

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
      icon: "📐",
      title: "Smart Ratio Detection",
      description:
        "Automatically adjusts aspect ratios for Facebook Reels (9:16), Instagram Stories, and TikTok. Platform-perfect every time.",
    },
    {
      icon: "🚀",
      title: "Share Directly",
      description:
        "Export and share clips directly to your favorite platforms. No downloads, no re-uploads. From editor to audience instantly.",
    },
  ];
};
export default Features;
