import { Target, Heart, Lightbulb } from "lucide-react";
import team from "../assets/webimg/team.jpg";

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-blue-600 sm:py-16">
        <div className="container px-4 mx-auto max-w-7xl text-center text-white">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            About Google Developer Groups
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-medium text-blue-100 sm:text-xl md:text-2xl">
            We are a community of developers passionate about Google technologies
            and dedicated to learning, sharing, and building together.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Target className="w-12 h-12 text-blue-600" />,
                title: "Our Mission",
                description: "To create an inclusive environment where developers can network, learn, and grow together."
              },
              {
                icon: <Heart className="w-12 h-12 text-blue-600" />,
                title: "Our Values",
                description: "Community, Innovation, Knowledge sharing, and Inclusivity are at the heart of everything we do."
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
                title: "Our Vision",
                description: "To empower developers to build innovative solutions that make a positive impact on society."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 text-center bg-white rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="inline-flex justify-center items-center mb-6">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 sm:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8 bg-white sm:py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Our Story
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
              Started in 2022, Google Developer Groups on Campus (GDGoC) are
              community-led developer groups that create opportunities for developers
              to meet and learn about Google technologies and development platforms.
            </p>
          </div>
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
            <img
              src={team}
              alt="Team Collaboration"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
