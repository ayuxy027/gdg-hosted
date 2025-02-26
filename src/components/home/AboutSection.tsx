import { motion } from "framer-motion";
import team from "../../assets/webimg/team.jpg";
import logo from "../../assets/webimg/logo2.png";

export const AboutSection = () => (
  <section className="overflow-hidden relative">
    <div className="py-16 bg-gradient-to-br from-blue-400 to-blue-500/90 sm:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 mx-auto max-w-7xl text-center sm:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-3xl font-thin tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          About Google Developer Groups
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-3xl text-base font-light leading-relaxed text-blue-50 sm:text-lg md:text-xl lg:text-2xl"
        >
          We are a community of developers passionate about Google technologies.
          We organize events and workshops to help you shoot up your skill sets and career graph.
        </motion.p>
      </motion.div>
    </div>

    <div className="relative z-10 px-4 mx-auto -mt-10 max-w-7xl sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-5 rounded-3xl shadow-xl backdrop-blur-sm bg-white/95 sm:p-8 lg:p-10"
      >
        <div className="flex flex-col gap-6 items-center lg:flex-row lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-auto"
          >
            <div className="relative group">
              <img
                src={logo}
                alt="Logo"
                className="w-full max-w-[240px] h-auto rounded-2xl mx-auto transition-transform duration-300 group-hover:scale-105 sm:max-w-[280px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr to-transparent rounded-2xl opacity-0 transition-opacity duration-300 from-blue-400/20 group-hover:opacity-100" />
            </div>
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-semibold tracking-normal text-blue-500 sm:text-3xl lg:text-4xl"
            >
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base font-light leading-relaxed text-gray-600 sm:text-lg lg:text-xl"
            >
              Started in 2022, Google Developer Groups on Campus (GDGoC) are
              community-led developer groups that create opportunities for
              developers to meet and learn about Google technologies and
              development platforms.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mt-10 overflow-hidden rounded-2xl shadow-lg aspect-[16/9] group sm:mt-12"
        >
          <img
            src={team}
            alt="Team Collaboration"
            className="object-cover absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-blue-500/30 group-hover:opacity-100" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);
