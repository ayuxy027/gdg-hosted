import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const HeroSection = () => (
  <section className="relative h-[600px] flex items-center">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 z-0"
    >
      <img src="/src/assets/webimg/homebg.jpg" alt="Developer Conference" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
    </motion.div>
    <div className="relative z-10 px-8 mx-auto text-white max-w-7xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-5xl font-bold"
      >
        Google Developer Groups
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mb-8 text-xl leading-relaxed text-gray-200"
      >
        Connect, learn, and grow with a global community of developers.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="/events"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Upcoming Events
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  </section>
)
