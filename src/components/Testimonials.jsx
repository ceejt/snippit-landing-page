import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Snippit transformed my workflow. I used to spend hours cutting clips for Instagram. Now it's done in minutes with perfect ratios every time.",
      name: "Kurt Adones",
      role: "Gaming Creator • 125k followers",
      initials: "KA",
      gradient: "from-pink-300 to-purple-300",
    },
    {
      rating: 5,
      text: "The smart ratio detection is a game-changer. No more awkward crops or manual aspect ratio adjustments. Just upload and go.",
      name: "John Dio",
      role: "Fitness Influencer • 340k followers",
      initials: "JD",
      gradient: "from-blue-300 to-cyan-300",
    },
    {
      rating: 5,
      text: "Finally, a tool that actually understands short-form content. Direct sharing to platforms saves me so much time every day.",
      name: "Christine Paman",
      role: "Lifestyle Channel • 890k followers",
      initials: "CJ",
      gradient: "from-yellow-300 to-orange-300",
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
            Join thousands who've cut their editing time in half
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center font-bold text-white`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
