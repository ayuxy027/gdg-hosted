/* eslint-disable @typescript-eslint/ban-ts-comment */

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { ArrowRight, Calendar, Users, Globe2 } from "lucide-react"

// Define types
type Stat = {
  id: number
  label: string
  value: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  position: number
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

// AnimatedCard component
const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
  >
    {children}
  </motion.div>
)

// DraggableStatsCard component
const DraggableStatsCard: React.FC<DraggableStatsCardProps> = ({ stat, containerWidth, setStats }) => {
  const [isDragging, setIsDragging] = useState(false)
  const cardWidth = containerWidth / 3 - 32 // Accounting for gap

  const getPositionX = (position: number): number => {
    const gap = 32 // 2rem gap
    return position * (cardWidth + gap)
  }

  const findNearestPosition = (dragX: number): number | null => {
    const positions = [0, 1, 2]
    let nearestPosition: number | null = null
    let minDistance = Number.POSITIVE_INFINITY

    positions.forEach((position) => {
      const posX = getPositionX(position)
      const distance = Math.abs(dragX - posX)
      if (distance < minDistance) {
        minDistance = distance
        nearestPosition = position
      }
    })

    return minDistance < cardWidth / 2 ? nearestPosition : null
  }
  // @ts-expect-error 
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragX = info.offset.x + getPositionX(stat.position)
    const nearestPosition = findNearestPosition(dragX)

    if (nearestPosition !== null && nearestPosition !== stat.position) {
      setStats((prevStats) => {
        const newStats = [...prevStats]
        const toCard = newStats.find((s) => s.position === nearestPosition)

        if (toCard) {
          const tempPosition = stat.position
          newStats.find((s) => s.id === stat.id)!.position = toCard.position
          toCard.position = tempPosition
        }

        return newStats
      })
    }

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
      className="absolute p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl cursor-grab active:cursor-grabbing"
      style={{
        width: cardWidth,
        left: 0,
      }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        animate={
          isDragging
            ? {
                rotate: [-1, 1],
                transition: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 0.2,
                },
              }
            : {}
        }
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full"
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        <div>
          <motion.h3 className="mb-1 text-3xl font-bold text-blue-600">{stat.value}</motion.h3>
          <motion.p className="text-sm text-gray-600">{stat.label}</motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main Home component
const Home: React.FC = () => {
  const [stats, setStats] = useState<Stat[]>([
    { id: 1, label: "Active Users", value: "10,000+", icon: Users, position: 0 },
    { id: 2, label: "Events Organized", value: "500+", icon: Calendar, position: 1 },
    { id: 3, label: "Global Reach", value: "100+ Countries", icon: Globe2, position: 2 },
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img src="/src/assets/homebg.JPG" alt="Developer Conference" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </motion.div>
        <div className="relative z-10 px-8 mx-auto text-white max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl font-bold"
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
          >
            <a
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl"
            >
              Upcoming Events
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Draggable Stats */}
      <section className="py-24 bg-white">
        <div className="px-8 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">Our Impact</h2>
          <div ref={containerRef} className="relative h-64 mb-16">
            <AnimatePresence>
              {containerWidth > 0 &&
                stats.map((stat) => (
                  <DraggableStatsCard key={stat.id} stat={stat} containerWidth={containerWidth} setStats={setStats} />
                ))}
            </AnimatePresence>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedCard delay={0.1}>
              <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">Regular Events</h3>
              <p className="leading-relaxed text-gray-600">
                Workshops, hackathons, and tech talks to keep you updated with the latest technologies.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Users className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">Community</h3>
              <p className="leading-relaxed text-gray-600">
                Join a diverse community of developers, designers, and tech enthusiasts.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Globe2 className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">Global Network</h3>
              <p className="leading-relaxed text-gray-600">
                Connect with developers from around the world and expand your network.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-blue-600">
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

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="px-8 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-12 mb-16"
          >
            <img src="/src/assets/logo2.png" alt="Logo" className="w-64 h-auto" />
            <div className="flex-1">
              <h2 className="mb-6 text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-xl leading-relaxed text-gray-600">
                Started in 2022, Google Developer Groups on Campus (GDGoC) are community-led developer groups that
                create opportunities for developers to meet and learn about Google technologies and development
                platforms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden shadow-2xl rounded-2xl"
          >
            <img src="/src/assets/team.JPG" alt="Team Collaboration" className="w-full h-[600px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
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
          <a
            href="https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-and-management-pune-india/"
            className="inline-block px-8 py-4 text-lg font-medium text-blue-600 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50"
          >
            Get Started
          </a>
        </motion.div>
      </section>
    </div>
  )
}

export default Home