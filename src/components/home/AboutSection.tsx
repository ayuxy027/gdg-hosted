import { motion } from "framer-motion"

export const AboutSection = () => (
  <section>
    <div className="py-24 bg-blue-600">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-8 mx-auto text-center text-white max-w-7xl"
    >
      <h2 className="mb-6 text-4xl font-bold">About Google Developer Groups</h2>
      <p className="max-w-3xl mx-auto text-xl leading-relaxed">
        We are a community of developers passionate about Google technologies.
      </p>
      
      </motion.div>
      </div>


      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-4 mb-8 sm:p-6 lg:p-8 sm:mb-12 lg:mb-16 bg-gray-50 rounded-2xl"
      >
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-auto">
            <img 
              src="/src/assets/logo2.png" 
              alt="Logo" 
              className="w-full max-w-[256px] h-auto shadow-lg rounded-xl mx-auto"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:mb-6 sm:text-4xl">
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
            className="overflow-hidden shadow-2xl rounded-2xl"
          >
            <img src="/src/assets/team.jpg" alt="Team Collaboration" className="w-full h-[700px] object-cover" />
          </motion.div>
          
      </motion.div>
    </div>
    



    
  </section>
)
