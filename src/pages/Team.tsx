import React, { useState } from 'react';
import { Linkedin, Mail, Code, Megaphone, Palette, Calendar, PenTool, DollarSign, Users, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { teams, Teams, TeamMember } from '../lib/team-data';

const Team: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<keyof Teams>('Core');

  const teamIcons: { [key in keyof Teams]: JSX.Element } = {
    'Core': <Users className="w-6 h-6" />,
    'Tech': <Code className="w-6 h-6" />,
    'Design': <Palette className="w-6 h-6" />,
    'Finance': <DollarSign className="w-6 h-6" />,
    'Public Relations': <Megaphone className="w-6 h-6" />,
    'Event Management': <Calendar className="w-6 h-6" />,
    'Content': <PenTool className="w-6 h-6" />,
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-20 text-white bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <motion.h1
            className="mb-6 text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our {activeTeam} Team
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the passionate individuals behind GDG
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.nav
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {(Object.keys(teams) as Array<keyof Teams>).map((teamName) => (
              <motion.button
                key={teamName}
                onClick={() => setActiveTeam(teamName)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTeam === teamName
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {teamIcons[teamName]}
                <span>{teamName}</span>
              </motion.button>
            ))}
          </motion.nav>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeam}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {teams[activeTeam].map((member: TeamMember, index: number) => (
                <motion.div
                  key={member.id}
                  className="overflow-hidden transition-all duration-300 transform bg-white shadow-xl rounded-xl hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-64 hover:scale-90 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute text-white bottom-4 left-4">
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
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.mail && (
                        <a
                          href={`mailto:${member.mail}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          <Mail className="h-5 w-5" />
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
