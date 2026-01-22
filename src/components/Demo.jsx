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
};
