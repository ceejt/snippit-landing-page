import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [counts, setCounts] = useState({ clips: 0, time: 0, satisfaction: 0 });

  useEffect(() => {
    const animateCounter = (target, key, suffix = "") => {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current < target) {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        } else {
          setCounts((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(10, "clips");
            animateCounter(5, "time");
            animateCounter(98, "satisfaction");
          }
        });
      },
      { threshold: 0.5 },
    );

    const element = document.querySelector(".counter-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);
};


