import { Calendar, MapPin, Clock } from "lucide-react";

// Method 1: Import images directly
// Uncomment these lines and adjust the paths to match your project structure
import event1Image from "../assets/webimg/event1.avif";
import event2Image from "../assets/webimg/event2.avif";
import upcomingImage from "../assets/webimg/upcoming.jpg";

const Events = () => {
  // Method 2: Use public folder paths
  // If your images are in the public folder, use these paths
  const events = [
    {
      id: 1,
      title: "Build With AI",
      date: "15th October, 2024",
      time: "11:30am to 1:30pm",
      location: "GHRCEM A-Building E322",
      // Choose either Method 1: event1Image
      // or Method 2: "/images/event1.avif"
      image: event1Image,
      description:
        "Dive deep into the latest trends and updates in GenAI with an amazing surprise speaker! This talk is all you need to get a clear perspective on GenAI",
    },
    {
      id: 2,
      title: "Code4GovTech Orientation Session",
      date: "16th October, 2024",
      time: "11:30am to 1:30pm",
      location: "GHRCEM A-Building E316",
      // Choose either Method 1: event2Image
      // or Method 2: "/images/event2.avif"
      image: event2Image,
      description:
        "Get introduced to terms like DPG and DPI, and learn how to contribute to open source. This is your chance to give back to the community and win exciting rewards!",
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-blue-600">
        <div className="px-4 mx-auto max-w-7xl text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold">Past Events</h1>
          <p className="text-xl">
            Exciting tech events, workshops, and meetups!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="overflow-hidden bg-white rounded-lg shadow-lg"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-48"
                  onError={(e) => {
                    // @ts-ignore 
                    e.target.src = "/api/placeholder/800/400";
                    // @ts-ignore 
                    e.target.alt = "Event placeholder image";
                  }}
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                  <p className="mb-4 text-gray-600">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-2 w-5 h-5" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-2 w-5 h-5" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="mr-2 w-5 h-5" />
                      {event.location}
                    </div>
                  </div>
                  <button className="py-2 mt-6 w-full text-white bg-blue-600 rounded-md transition-colors hover:bg-blue-700">
                    Registration closed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="px-4 mx-auto max-w-7xl text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold">Upcoming Events</h1>
          <p className="text-xl">
            Join Us for Exciting Tech Events, Workshops, and Meetups!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="p-10 mx-auto max-w-2xl text-center bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-4xl font-bold text-gray-800">
            Upcoming Events 🎉
          </h2>
          <img
            // Choose either Method 1: upcomingImage
            // or Method 2: "/images/upcoming.JPG"
            src={upcomingImage}
            alt="Upcoming events"
            className="mx-auto mb-6 w-full max-w-md rounded-lg shadow-md"
            onError={(e) => {
              // @ts-ignore 
              e.target.src = "/api/placeholder/400/300";
              // @ts-ignore 
              e.target.alt = "Upcoming events placeholder";
            }}
          />
          <p className="text-xl text-gray-600">
            We're planning something amazing just for you. Keep checking back!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Events;
