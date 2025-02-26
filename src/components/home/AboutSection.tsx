import { motion } from "framer-motion";
import team from "../../assets/webimg/team.jpg";
import logo from "../../assets/webimg/logo2.png";

export const AboutSection = () => (
  <section>
    <div className="py-16 bg-blue-500 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 mx-auto max-w-7xl text-center text-white"
      >
        <h2 className="mb-6 font-semibold sm:text-2xl md:text-4xl">
          About Google Developer Groups
        </h2>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed">
          We are a community of developers passionate about Google technologies.
        </p>
      </motion.div>
    </div>

    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-4 bg-gray-50 rounded-2xl sm:p-6 lg:p-8"
      >
        <div className="flex flex-col gap-6 items-center lg:flex-row lg:gap-12">
          <div className="w-full lg:w-auto">
            <img
              src={logo}
              alt="Logo"
              className="w-full max-w-[256px] h-auto shadow-lg rounded-xl mx-auto"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold text-gray-900 sm:mb-6 sm:text-4xl">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
              Started in 2022, Google Developer Groups on Campus (GDGoC) are
              community-led developer groups that create opportunities for
              developers to meet and learn about Google technologies and
              development platforms.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mt-8 overflow-hidden rounded-lg shadow-md aspect-[16/9]"
        >
          <img
            src={team}
            alt="Team Collaboration"
            className="object-cover absolute inset-0 w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);
