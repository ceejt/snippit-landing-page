import { motion } from "framer-motion";
import { RatioIcon } from "./assets/demo-split.svg";
import { SocialIcon } from "./assets/demo-social.svg";
import { ZeroIcon } from "./assets/demo-zero.svg";

const Demo = () => {
  const advantages = [
    {
      icon: <img src={RatioIcon} alt="Ratio" />,
      bg: "bg-pink-100",
      title: "Smart Ratio Time Splits",
      description:
        "Automatically detects optimal clip lengths based on platform requirements. No guesswork, just perfect cuts.",
    },
    {
      icon: <img src={SocialIcon} alt="Sharing" />,
      bg: "bg-blue-100",
      title: "Direct Social Sharing",
      description:
        "One-click export to Facebook Reels, Instagram Stories, and more. Skip the download-upload cycle.",
    },
    {
      icon: <img src={ZeroIcon} alt="Zero" />,
      bg: "bg-purple-100",
      title: "Zero Learning Curve",
      description:
        "Intuitive interface designed for beginners. Start cutting professionally from minute one.",
    },
  ];

  return (
    <section
      id="demo"
      className="py-32 bg-gradient-to-br from-gray-50 to-pink-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-6xl opacity-30">🎬</span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-300 rounded-2xl blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
