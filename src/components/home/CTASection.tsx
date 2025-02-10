import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section className="py-12 bg-white md:py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 mx-auto max-w-3xl text-center sm:px-8 md:max-w-5xl lg:max-w-7xl"
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Ready to Join Our Community?
      </h2>
      <p className="mb-6 text-base text-gray-600 sm:text-lg md:text-xl">
        Get involved in our upcoming events and connect with fellow developers.
      </p>
      <a
        href="https://gdg.community.dev/"
        className="inline-flex gap-2 items-center px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-lg transition-all duration-300 sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-700"
      >
        Join Now
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </motion.div>
  </section>
);
