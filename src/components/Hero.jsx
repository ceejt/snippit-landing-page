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

  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-pink-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full blur-3xl opacity-30"
          style={{ top: "10%", left: "5%" }}
          animate={{
            y: [0, -30, -60, -30, 0],
            x: [0, 30, -30, -60, 0],
            scale: [1, 1.05, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full blur-3xl opacity-30"
          style={{ bottom: "20%", right: "10%" }}
          animate={{
            y: [0, -30, -60, -30, 0],
            x: [0, 30, -30, -60, 0],
            scale: [1, 1.05, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full blur-3xl opacity-30"
          style={{ top: "50%", right: "5%" }}
          animate={{
            y: [0, -30, -60, -30, 0],
            x: [0, 30, -30, -60, 0],
            scale: [1, 1.05, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold tracking-wide inline-block">
              Smart Video Editing
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Clip it.
            <br />
            <span className="text-gradient">Snippit!</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Turn long-form content into{" "}
            <span className="font-semibold text-black">
              platform-perfect clips
            </span>{" "}
            with smart ratios and instant sharing. No awkward cuts, no wasted
            time.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#cta"
              className="btn-glossy btn-glossy-primary px-8 py-4 text-lg"
            >
              Start Cutting Now
            </a>
            <a
              href="#demo"
              className="btn-glossy btn-glossy-secondary px-8 py-4 text-lg"
            >
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 counter-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-gradient">
                {counts.clips}k+
              </div>
              <div className="text-sm text-gray-600">Clips Created</div>
            </div>
            <div className="transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-gradient">
                {counts.time} sec
              </div>
              <div className="text-sm text-gray-600">Avg. Edit Time</div>
            </div>
            <div className="transition-transform hover:scale-105">
              <div className="text-3xl font-bold text-gradient">
                {counts.satisfaction}%
              </div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl glass-effect">
            <div className="w-full h-96 bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center">
              <span className="text-6xl opacity-50">📹</span>
            </div>
          </div>

          <motion.div
            className="absolute -top-6 -right-6 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-60"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-60"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
