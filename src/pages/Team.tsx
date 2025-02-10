import React, { useState } from "react";
import {
  Linkedin,
  Mail,
  Code,
  Megaphone,
  Palette,
  Calendar,
  PenTool,
  DollarSign,
  Users,
  Github,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { teams, Teams, TeamMember } from "../lib/team-data";

const Team: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<keyof Teams>("Core");

  const teamIcons: { [key in keyof Teams]: JSX.Element } = {
    Core: <Users className="w-6 h-6" />,
    Tech: <Code className="w-6 h-6" />,
    Design: <Palette className="w-6 h-6" />,
    Finance: <DollarSign className="w-6 h-6" />,
    "Public Relations": <Megaphone className="w-6 h-6" />,
    "Event Management": <Calendar className="w-6 h-6" />,
    Content: <PenTool className="w-6 h-6" />,
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-blue-500 sm:py-16">
        <div className="container px-4 mx-auto max-w-7xl text-center text-white">
          <motion.h1
            className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl"
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
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          {/* Team Navigation */}
          <motion.nav
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {(Object.keys(teams) as Array<keyof Teams>).map((teamName) => (
              <motion.button
                key={teamName}
                onClick={() => setActiveTeam(teamName)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${activeTeam === teamName
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
              className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {teams[activeTeam].map((member: TeamMember, index: number) => (
                <motion.div
                  key={member.id}
                  className="overflow-hidden bg-white rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-64 transition-transform duration-500 hover:scale-90"
                    />
                    <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="mb-1 text-2xl font-bold">{member.name}</h3>
                      <p className="font-medium text-gray-200">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-gray-600">{member.bio}</p>
                    <div className="flex space-x-4">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 transition-colors duration-200 hover:text-blue-600"
                        >
                          <Linkedin className="w-5 h-5" />
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
