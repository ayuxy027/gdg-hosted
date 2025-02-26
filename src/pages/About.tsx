import { Target, Heart, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import team from "../assets/webimg/team.jpg";

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-500 sm:py-16">
        <div className="container px-4 mx-auto max-w-7xl text-center text-white">
          <motion.h1
            className="mb-3 text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 sm:mb-4 sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Google Developer Groups
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-blue-100 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are a community of developers passionate about Google technologies.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              {
                icon: <Target className="w-10 h-10 text-blue-500" />,
                title: "Our Mission",
                description: "To create an inclusive environment where developers can network, learn, and grow together."
              },
              {
                icon: <Heart className="w-10 h-10 text-blue-500" />,
                title: "Our Values",
                description: "Community, Innovation, Knowledge sharing, and Inclusivity are at the heart of everything we do."
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-blue-500" />,
                title: "Our Vision",
                description: "To empower developers to build innovative solutions that make a positive impact on society."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 text-center bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
              >
                <div className="inline-flex justify-center items-center mb-4">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8 bg-white sm:py-10 md:py-12">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
              Our Story
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Founded in 2022, Google Developer Groups on Campus (GDGoC) are community-led initiatives that bring developers together to learn, share, and build using Google technologies.
              We aim to foster a supportive community where developers can grow and create meaningful projects that make a difference in the world.
            </p>
          </motion.div>
          <motion.div
            className="relative mt-8 overflow-hidden rounded-lg shadow-md aspect-[16/9]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={team}
              alt="Team Collaboration"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
