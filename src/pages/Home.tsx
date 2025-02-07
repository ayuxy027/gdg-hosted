import { ArrowRight, Calendar, Users, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCard } from '../components/AnimatedCard';

const Home = () => {
  return (
    <div>
    <div className="pt-16">
      {/* Hero Section */}
      <section className=" h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="\src\assets\homebg.JPG"
            alt="Developer Conference"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 px-4 mx-auto text-white max-w-7xl sm:px-6 lg:px-8">
          <h1 className="hero-title">Google Developer Groups</h1>
          <p className="max-w-2xl mb-8 text-xl subtitle">Connect, learn, and grow with a global community of developers. Join us in building the future of technology.</p>
          <Link 
            to="/events" 
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-md animated-button hover:bg-blue-700"
          >
            Upcoming Events
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3 stagger-animate">
            <AnimatedCard delay={0.1}>
              <div className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-float" />
                <h3 className="mb-2 text-xl font-semibold">Regular Events</h3>
                <p className="text-gray-600">Workshops, hackathons, and tech talks to keep you updated with the latest technologies.</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-float" />
                <h3 className="mb-2 text-xl font-semibold">Community</h3>
                <p className="text-gray-600">Join a diverse community of developers, designers, and tech enthusiasts.</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3}>
              <div className="p-6 text-center">
                <Globe2 className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-float" />
                <h3 className="mb-2 text-xl font-semibold">Global Network</h3>
                <p className="text-gray-600">Connect with developers from around the world and expand your network.</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600">
        <div className="px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold">About Google Developer Groups</h1>
          <p className="max-w-3xl mx-auto text-xl">We are a community of developers passionate about Google technologies and dedicated to learning, sharing, and building together.</p>
        </div> 
      </section>
      
      
      <section className="py-5 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6">
           <img src="\src\assets\logo2.png" alt="Logo" className="h-auto w-45" />
          <div className="max-w-lg text-left">
           <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
           <p className="max-w-3xl mx-auto text-gray-600">
              Started in 2022, Google Developer Groups on Campus (GDGoC) are 
             community-led developer groups that create opportunities for developers 
             to meet and learn about Google technologies and development platforms.
           </p>
           </div>
           </div>
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="\src\assets\team.JPG"
              alt="Team Collaboration"
              className="rounded-lg shadow-lg w-full h-[550px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="mb-6 text-3xl font-bold text-white">Ready to Join Our Community?</h2>
          <p className="mb-8 text-lg text-white">Get involved in our upcoming events and connect with fellow developers.</p>
          <Link 
            to="https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-and-management-pune-india/" 
            className="inline-block px-8 py-3 text-blue-600 bg-white rounded-md animated-button hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;