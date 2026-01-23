import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Snippit transformed my workflow. I used to spend hours cutting clips for Instagram. Now it's done in minutes with perfect ratios every time.",
      name: "Kurt Adones",
      role: "Tech Content Creator • 125k followers",
      initials: "KA",
      gradient: "from-pink-300 to-purple-300",
    },
  ];
  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold mb-6">
            Trusted by <span className="text-gradient">Content Creators</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands who've cut their editing time in half!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
