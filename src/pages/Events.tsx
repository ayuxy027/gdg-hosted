import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Build With AI",
      date: "15th October, 2024",
      time: "11:30am to 1:30pm",
      location: "GHRCEM A-Building E322",
      image: "\\src\\assets\\event1.avif",
      description: "Dive deep into the latest trends and updates in GenAI with an amazing surprise speaker! This talk is all you need to get a clear perspective on GenAI"
    },
    {
      id: 2,
      title: "Code4GovTech Orientation Session",
      date: "16th October, 2024",
      time: "11:30am to 1:30pm",
      location: "GHRCEM A-Building E316",
      image: "\\src\\assets\\event2.avif",
      description: "Get introduced to terms like DPG and DPI, and learn how to contribute to open source. This is your chance to give back to the community and win exciting rewards!"
    },
   
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-blue-600">
        <div className="px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold">Past Events</h1>
          <p className="text-xl">Exciting tech events, workshops, and meetups!</p>
        </div>
      </section>

      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="overflow-hidden bg-white rounded-lg shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-41"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                  <p className="mb-4 text-gray-600">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <button className="w-full py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-900">
                  registration closed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600">
        <div className="px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold">Upcoming Events</h1>
          <p className="text-xl">Join Us for Exciting Tech Events, Workshops, and Meetups!</p>
        </div>
      </section>
      <div className="no-events" style={{ textAlign: 'center', padding: '40px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <p style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Upcoming Events 🎉</p>
          <img  src="\src\assets\upcoming.JPG" style={{ width: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }} />
          <p style={{ fontSize: '1.2rem', color: '#555' }}>We’re planning something amazing just for you. Keep checking back!</p>
        </div>
    </div>
  );
};

export default Events;