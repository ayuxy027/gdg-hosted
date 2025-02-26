import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30 sm:py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 mx-auto max-w-3xl text-center sm:px-8 md:max-w-5xl lg:max-w-7xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-2xl font-thin tracking-wide text-blue-500 sm:text-3xl md:text-4xl"
      >
        Ready to Join Our Community?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 text-base font-light text-gray-600 sm:text-lg md:text-xl"
      >
        Get involved in our upcoming events and connect with fellow developers.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="https://gdg.community.dev/"
          className="inline-flex gap-2 items-center px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-xl transition-all duration-300 hover:bg-blue-400 hover:scale-105 hover:shadow-lg sm:px-8 sm:py-4 sm:text-lg group"
        >
          Join Now
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 sm:w-5 sm:h-5" />
        </a>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 text-sm text-gray-500 font-light"
      >
        Made with ❤️ by GDG Tech Team
      </motion.p>
    </motion.div>
  </section>
);
