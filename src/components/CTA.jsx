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
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-pink-300 to-pink-400 rounded-full blur-3xl"
          style={{ top: "-10%", left: "-10%" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full blur-3xl"
          style={{ bottom: "-10%", right: "-10%" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
        />
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Start Cutting with
            <br />
            <span className="text-gradient">Smart Ratios</span>
          </h2>
          <div className="space-y-4 mb-12">
            <p className="text-2xl font-semibold text-gray-800">
              For creators who want less trimming and more publishing.
            </p>
            <p className="text-xl text-gray-600">
              Spend less time cutting and more time creating.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#"
              className="btn-glossy btn-glossy-primary px-12 py-5 text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.a>
          </div>
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm font-medium shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.125 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
