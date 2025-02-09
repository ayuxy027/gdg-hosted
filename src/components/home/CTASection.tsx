import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section className="py-24 bg-white">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-8 mx-auto text-center max-w-7xl"
    >
      <h2 className="mb-6 text-4xl font-bold text-gray-900">
        Ready to Join Our Community?
      </h2>
      <p className="mb-8 text-xl text-gray-600">
        Get involved in our upcoming events and connect with fellow developers.
      </p>
      <a
        href="https://gdg.community.dev/"
        className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Join Now
        <ArrowRight className="w-5 h-5" />
      </a>
    </motion.div>
  </section>
);
