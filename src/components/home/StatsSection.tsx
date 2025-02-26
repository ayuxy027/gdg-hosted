import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const stats = [
  {
    icon: FcGoogle,
    label: "Google Backing",
    value: "Modern Tools and SDKs",
  },
  {
    icon: FaRegUser,
    label: "Active Users",
    value: "100,000+",
  },
  {
    icon: BsGlobeCentralSouthAsia,
    label: "Global Reach",
    value: "100+ Countries",
  },
] as const;

export const StatsSection = () => (
  <section className="py-12 bg-white">
    <div className="px-4 mx-auto max-w-6xl sm:px-8">
      <h2 className="mb-8 text-2xl font-thin text-center text-gray-800 sm:text-3xl">
        The GDG Impact
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-4 rounded-xl shadow-sm transition-shadow duration-300 bg-gray-50/80 hover:shadow sm:p-6"
          >
            <stat.icon className="mb-3 w-8 h-8 text-blue-500 sm:w-10 sm:h-10" />
            <h3 className="mb-1 text-lg font-semibold text-gray-800 sm:text-xl">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);