import { Calendar, Users, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    label: "Active Users",
    value: "10,000+",
  },
  {
    icon: Calendar,
    label: "Events Organized",
    value: "500+",
  },
  {
    icon: Globe2,
    label: "Global Reach",
    value: "100+ Countries",
  },
] as const;

export const StatsSection = () => (
  <section className="py-24 bg-white">
    <div className="px-8 mx-auto max-w-7xl">
      <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
        Our Impact
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <stat.icon className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="mb-1 text-3xl font-bold text-blue-600">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
