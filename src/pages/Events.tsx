import { useState } from "react";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import event1Image from "../assets/webimg/event1.avif";
import event2Image from "../assets/webimg/event2.avif";
import upcomingImage from "../assets/webimg/upcoming.jpg";
import productEvent from "../assets/webimg/ProductEvent.jpeg";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  status: "past" | "upcoming";
  registrationLink?: string;
}

const Events = () => {
  const [activeTab, setActiveTab] = useState<"past" | "upcoming">("upcoming");

  const allEvents: Event[] = [
    {
      id: 1,
      title: "Build With AI",
      date: "15th October, 2024",
      time: "11:30am to 1:30pm",
      location: "GHRCEM A-Building E322",
      image: event1Image,
      description:
        "Dive deep into the latest trends and updates in GenAI with an amazing surprise speaker! This talk is all you need to get a clear perspective on GenAI",
      status: "past",
    },
    {
      id: 2,
      title: "Code4GovTech Orientation Session",
      date: "16th October, 2024",
      time: "11:30am to 1:30pm",
      location: "GHRCEM A-Building E316",
      image: event2Image,
      description:
        "Get introduced to terms like DPG and DPI, and learn how to contribute to open source. This is your chance to give back to the community and win exciting rewards!",
      status: "past",
    },
    {
      id: 3,
      title: "Product Teardown Session",
      date: "27th February, 2025",
      time: "11:30 AM to 1:30 PM",
      location: "GHRCEM E316",
      image: productEvent,
      description:
        "Explore real-world case studies, learn how GovTech is transforming governance, and gain practical insights to build better products.",
      status: "upcoming",
      registrationLink: "https://lu.ma/lzr38flh"
    },
    {
      id: 4,
      title: "Upcoming Tech Workshop",
      date: "Coming Soon",
      time: "To be announced",
      location: "GHRCEM Campus",
      image: upcomingImage,
      description:
        "We're planning something amazing just for you 🌝",
      status: "upcoming",
    },
  ];

  const filteredEvents = allEvents.filter(event => event.status === activeTab);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/api/placeholder/800/400";
    target.alt = "Event placeholder image";
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-500 sm:py-16">
        <div className="container px-4 mx-auto max-w-7xl text-center text-white">
          <motion.h1
            className="mb-3 text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 sm:mb-4 sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            GDG GHRCEM Events
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-blue-100 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join us for exciting tech events, workshops, and meetups!
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          {/* Tab Toggle */}
          <motion.div
            className="flex justify-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-flex p-1 bg-white rounded-lg shadow-md">
              {["upcoming", "past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "upcoming" | "past")}
                  className={`px-6 sm:px-8 py-2.5 text-sm sm:text-base font-semibold rounded-md transition-all duration-300 
                    ${activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
                </button>
              ))}
            </div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex overflow-hidden flex-col h-full bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/50 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-col flex-grow p-6 sm:p-8">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 sm:text-2xl line-clamp-2 group-hover:text-blue-600">
                      {event.title}
                    </h3>
                    <p className="flex-grow mb-6 text-base text-gray-600 sm:text-lg line-clamp-3">
                      {event.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-gray-600 transition-colors duration-300 sm:text-base group-hover:text-blue-500">
                        <Calendar className="mr-3 w-5 h-5 text-blue-500" />
                        <span className="truncate">{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 transition-colors duration-300 sm:text-base group-hover:text-blue-500">
                        <Clock className="mr-3 w-5 h-5 text-blue-500" />
                        <span className="truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 transition-colors duration-300 sm:text-base group-hover:text-blue-500">
                        <MapPin className="mr-3 w-5 h-5 text-blue-500" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                    {event.id === 3 && event.status === "upcoming" ? (
                      <a
                        href="https://lu.ma/lzr38flh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 justify-center items-center px-6 py-3 mt-6 w-full text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Register Now <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        className={`mt-6 w-full py-3 px-6 text-base font-semibold rounded-lg transition-all duration-300 
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                          ${event.status === "upcoming"
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-lg"
                            : "bg-gray-100 text-gray-500 cursor-not-allowed"
                          }`}
                        disabled={event.status === "past"}
                      >
                        {event.status === "upcoming" ? "Opening Soon" : "Event Ended"}
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-lg text-gray-600 sm:text-xl">
                  No {activeTab} events at the moment.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
