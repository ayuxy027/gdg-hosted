import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/webimg/homebg.webp";

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
            className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
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
          >
            <a
              href="/events"
              className="inline-flex gap-2 items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg transition-all duration-300 sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-700 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
            >
              Upcoming Events
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </a>
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
            className="mb-2 text-2xl font-bold text-white lg:text-3xl"
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