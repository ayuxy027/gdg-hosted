import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Calendar, Users, Globe2, Code, BookOpen, Rocket } from "lucide-react"

// Types
type Stat = {
  id: number
  label: string
  value: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  position: number
  description: string
}

type AnimatedCardProps = {
  children: React.ReactNode
  delay: number
}

type DraggableStatsCardProps = {
  stat: Stat
  containerWidth: number
  setStats: React.Dispatch<React.SetStateAction<Stat[]>>
}

// Placeholder images (replace these with your actual image URLs)
const PLACEHOLDER_IMAGES = {
  hero: "/src/assets/homebg.jpg",
  logo: "/src/assets/logo2.png",
  team: "/src/assets/team.jpg",
}

// AnimatedCard component with hover effects
const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="p-6 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
  >
    {children}
  </motion.div>
)

// Enhanced DraggableStatsCard with tooltips and animations
const DraggableStatsCard: React.FC<DraggableStatsCardProps> = ({ stat, containerWidth, setStats }) => {
  const [isDragging, setIsDragging] = useState(false)
  const cardWidth = containerWidth / 3 - 32

  const getPositionX = (position: number): number => {
    const gap = 32
    return position * (cardWidth + gap)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const Icon = stat.icon

  return (
    <motion.div
      layout
      drag="x"
      dragConstraints={{
        left: 0,
        right: containerWidth - cardWidth - 32,
      }}
      dragElastic={0.1}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      initial={false}
      animate={{
        x: getPositionX(stat.position),
        scale: isDragging ? 1.05 : 1,
        zIndex: isDragging ? 2 : 1,
      }}
      className="absolute p-6 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl cursor-grab active:cursor-grabbing group"
      style={{
        width: cardWidth,
        left: 0,
      }}
    >
      <motion.div className="flex flex-col items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-12 h-12 text-white transition-colors bg-blue-600 rounded-full group-hover:bg-blue-700"
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        <div className="text-center">
          <motion.h3 className="mb-1 text-3xl font-bold text-blue-600 group-hover:text-blue-700">
            {stat.value}
          </motion.h3>
          <motion.p className="text-sm text-gray-600">{stat.label}</motion.p>
          <motion.p className="mt-2 text-xs text-gray-500 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            {stat.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main Home component with improved sections
const Home: React.FC = () => {
  const [stats, setStats] = useState<Stat[]>([
    {
      id: 1,
      label: "Active Users",
      value: "10,000+",
      icon: Users,
      position: 0,
      description: "Engaged developers in our community"
    },
    {
      id: 2,
      label: "Events Organized",
      value: "500+",
      icon: Calendar,
      position: 1,
      description: "Technical workshops and meetups"
    },
    {
      id: 3,
      label: "Global Reach",
      value: "100+ Countries",
      icon: Globe2,
      position: 2,
      description: "Worldwide developer network"
    },
  ])

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const features = [
    {
      icon: Code,
      title: "Technical Workshops",
      description: "Hands-on learning with cutting-edge technologies"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access to exclusive developer content and tutorials"
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Networking and professional development opportunities"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img src={PLACEHOLDER_IMAGES.hero} alt="Developer Conference" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>
        </motion.div>
        <div className="relative z-10 px-8 mx-auto text-white max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-6xl font-bold tracking-tight"
          >
            Google Developer Groups
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mb-8 text-xl leading-relaxed text-gray-200"
          >
            Connect, learn, and grow with a global community of developers. Join us in building the future of
            technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
            >
              Upcoming Events
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-blue-600 transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="px-8 mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">Our Impact</h2>
          <div ref={containerRef} className="relative h-64 mb-16">
            <AnimatePresence>
              {containerWidth > 0 &&
                stats.map((stat) => (
                  <DraggableStatsCard key={stat.id} stat={stat} containerWidth={containerWidth} setStats={setStats} />
                ))}
            </AnimatePresence>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <AnimatedCard key={feature.title} delay={0.1 * (index + 1)}>
                <feature.icon className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                <h3 className="mb-4 text-2xl font-semibold text-center text-gray-900">{feature.title}</h3>
                <p className="leading-relaxed text-center text-gray-600">{feature.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Gradient */}
      <section id="about" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-8 mx-auto text-center text-white max-w-7xl"
        >
          <h2 className="mb-6 text-4xl font-bold">About Google Developer Groups</h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed">
            We are a community of developers passionate about Google technologies and dedicated to learning, sharing,
            and building together.
          </p>
        </motion.div>
      </section>

      {/* Story Section with Card Layout */}
      <section className="py-24 bg-white">
        <div className="px-8 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 mb-16 bg-gray-50 rounded-2xl"
          >
            <div className="flex items-center gap-12">
              <img src={PLACEHOLDER_IMAGES.logo} alt="Logo" className="w-64 h-auto shadow-lg rounded-xl" />
              <div className="flex-1">
                <h2 className="mb-6 text-4xl font-bold text-gray-900">Our Story</h2>
                <p className="text-xl leading-relaxed text-gray-600">
                  Started in 2022, Google Developer Groups on Campus (GDGoC) are community-led developer groups that
                  create opportunities for developers to meet and learn about Google technologies and development
                  platforms.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden shadow-2xl rounded-2xl"
          >
            <img src={PLACEHOLDER_IMAGES.team} alt="Team Collaboration" className="w-full h-[600px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-8 mx-auto text-center max-w-7xl"
        >
          <h2 className="mb-6 text-4xl font-bold text-white">Ready to Join Our Community?</h2>
          <p className="mb-8 text-xl text-white">
            Get involved in our upcoming events and connect with fellow developers.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-and-management-pune-india/"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-blue-600 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Join Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home