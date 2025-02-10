import { useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

import event1Image from "../assets/webimg/event1.avif";
import event2Image from "../assets/webimg/event2.avif";
import upcomingImage from "../assets/webimg/upcoming.jpg";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  status: "past" | "upcoming";
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
      title: "Upcoming Tech Workshop",
      date: "Coming Soon",
      time: "To be announced",
      location: "GHRCEM Campus",
      image: upcomingImage,
      description:
        "We're planning something amazing just for you. Stay tuned for more details about our upcoming workshop focused on cutting-edge technologies.",
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
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-blue-600 sm:py-16">
        <div className="container px-4 mx-auto max-w-7xl text-center text-white">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            GDSC Events
          </h1>
          <p className="text-lg font-medium text-blue-100 sm:text-xl md:text-2xl">
            Join us for exciting tech events, workshops, and meetups!
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          {/* Tab Toggle */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg shadow-sm">
              {["upcoming", "past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "upcoming" | "past")}
                  className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-md transition-all duration-200 
                    ${activeTab === tab
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex overflow-hidden flex-col h-full bg-white rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover absolute inset-0 w-full h-full transition-transform duration-300 hover:scale-105"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6 sm:p-8">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="flex-grow mb-6 text-base text-gray-600 sm:text-lg line-clamp-3">
                      {event.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600 sm:text-base">
                        <Calendar className="mr-3 w-5 h-5 text-blue-600 shrink-0" />
                        <span className="truncate">{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 sm:text-base">
                        <Clock className="mr-3 w-5 h-5 text-blue-600 shrink-0" />
                        <span className="truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 sm:text-base">
                        <MapPin className="mr-3 w-5 h-5 text-blue-600 shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                    <button
                      className={`mt-6 w-full py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium rounded-md transition-all duration-300 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                        ${event.status === "upcoming"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-500 cursor-not-allowed"
                        }`}
                      disabled={event.status === "past"}
                    >
                      {event.status === "upcoming" ? "Register Now" : "Event Ended"}
                    </button>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
