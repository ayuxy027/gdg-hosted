import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaUserTie, FaCode } from "react-icons/fa";
import { PiMegaphoneDuotone } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { LuPaintBucket, LuBadgeDollarSign } from "react-icons/lu";

import {
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { teams, Teams, TeamMember } from "../lib/team-data";

const Team: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<keyof Teams>("Core");

  const teamIcons: { [key in keyof Teams]: JSX.Element } = {
    Core: <FaUserTie className="w-5 h-5 sm:w-6 sm:h-6" />,
    Tech: <FaCode className="w-5 h-5 sm:w-6 sm:h-6" />,
    Design: <LuPaintBucket className="w-5 h-5 sm:w-6 sm:h-6" />,
    Finance: <LuBadgeDollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
    "Public Relations": <PiMegaphoneDuotone className="w-5 h-5 sm:w-6 sm:h-6" />,
    "Event Management": <MdCalendarMonth className="w-5 h-5 sm:w-6 sm:h-6" />,
    Content: <FaPencil className="w-5 h-5 sm:w-6 sm:h-6" />,
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-blue-500 sm:py-16">
        <div className="container px-4 mx-auto max-w-7xl text-center text-white">
          <motion.h1
            className="mb-3 text-3xl font-semibold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our {activeTeam} Team
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-blue-100 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the passionate individuals behind GDG
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="container px-4 mx-auto max-w-7xl">
          {/* Team Navigation */}
          <motion.nav
            className="flex flex-wrap gap-2 justify-center mb-8 sm:gap-3 md:gap-4 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {(Object.keys(teams) as Array<keyof Teams>).map((teamName) => (
              <motion.button
                key={teamName}
                onClick={() => setActiveTeam(teamName)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${activeTeam === teamName
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:scale-105"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {teamIcons[teamName]}
                <span>{teamName}</span>
              </motion.button>
            ))}
          </motion.nav>

          {/* Team Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeam}
              className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {teams[activeTeam].map((member: TeamMember, index: number) => (
                <motion.div
                  key={member.id}
                  className="overflow-hidden bg-white rounded-xl shadow-md transition-all duration-300 group hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/80 via-black/40 group-hover:opacity-100"></div>
                    <div className="absolute right-0 bottom-0 left-0 p-4 text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                      <h3 className="mb-1 text-xl font-bold sm:text-2xl">{member.name}</h3>
                      <p className="text-sm font-medium text-gray-200 sm:text-base">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="mb-4 text-sm text-gray-600 sm:text-base">{member.bio}</p>
                    <div className="flex space-x-4">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.mail && (
                        <a
                          href={`mailto:${member.mail}`}
                          className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Team;