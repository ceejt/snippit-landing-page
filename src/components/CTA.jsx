import { motion } from "framer-motion";

const CTA = () => {
  const features = [
    "✓ Unlimited clips",
    "✓ All platforms",
    "✓ No watermarks",
    "✓ Priority support",
  ];

  return (
    <section
      id="cta"
      className="py-32 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <motion.div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-pink-300 to-pink-400 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default CTA;
