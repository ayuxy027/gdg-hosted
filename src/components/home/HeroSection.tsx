import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/webimg/homebg.webp";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="flex relative items-center min-h-screen">
      {/* Background with Enhanced Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative h-full"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-10 px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="text-3xl font-thin leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Google Developer Groups
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              type: "spring",
              stiffness: 100
            }}
            className="max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl lg:text-2xl"
          >
            Connect, learn, and grow with a global community of developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 100
            }}
            className="relative"
          >
            <Link
              to="/events"
              className="group relative inline-flex items-center overflow-hidden
                px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4
                text-sm sm:text-base md:text-lg font-medium
                text-white rounded-full
                transition-all duration-300
                bg-gradient-to-r from-blue-600 to-blue-500
                hover:from-blue-500 hover:to-blue-600
                shadow-[0_0_15px_rgba(59,130,246,0.5)]
                hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
                border border-white/20
                backdrop-filter backdrop-blur-sm
                before:absolute before:content-[''] before:w-12
                before:h-[300%] before:-top-[100%] before:-left-24
                before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
                before:rotate-[35deg] before:transition-all before:duration-700 before:ease-in-out
                hover:before:translate-x-[350%]
                after:absolute after:content-[''] after:z-20 after:w-12
                after:h-[300%] after:-top-[100%] after:-left-24
                after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent
                after:rotate-[35deg] after:transition-all after:duration-700 after:delay-75 after:ease-in-out
                hover:after:translate-x-[350%]"
            >
              {/* Button Content */}
              <span className="relative z-30">Upcoming Events</span>

              <motion.div
                className="relative z-30 ml-2 sm:ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-4 h-4 transition-transform duration-300 sm:w-5 sm:h-5 group-hover:translate-x-1" />
              </motion.div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/10" />
            </Link>

            {/* Background Glow Animation */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl -z-10 bg-blue-500/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Impact Cards - Only visible on md and above */}
      <div className="hidden absolute right-0 left-0 bottom-8 z-20 px-6 md:block lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-3 gap-6">
            <ImpactCard
              title="900+"
              description="Active Members"
              delay={1.1}
            />
            <ImpactCard
              title="55+"
              description="Events Organized"
              delay={1.3}
            />
            <ImpactCard
              title="20+"
              description="Workshops Conducted"
              delay={1.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ImpactCardProps {
  title: string;
  description: string;
  delay: number;
}

const ImpactCard = ({ title, description, delay }: ImpactCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const springConfig = {
    damping: 25,
    stiffness: 250,
    mass: 0.5
  };

  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;
    x.set(distanceX * 0.5);
    y.set(distanceY * 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      style={{ perspective: 1500 }}
    >
      <motion.div
        className="relative p-4 rounded-xl border backdrop-blur-lg cursor-pointer lg:p-6 bg-white/10 border-white/20"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative z-10"
          style={{ transform: "translateZ(40px)" }}
        >
          <motion.h3
            className="mb-2 text-2xl text-white font-semi lg:text-3xl"
            style={{ transform: "translateZ(15px)" }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-base text-gray-200 lg:text-lg"
            style={{ transform: "translateZ(10px)" }}
          >
            {description}
          </motion.p>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br rounded-xl from-white/5 to-white/10"
          style={{ transform: "translateZ(-10px)" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;