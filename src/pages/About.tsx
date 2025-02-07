import { Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-blue-600">
        <div className="px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold">About Google Developer Groups</h1>
          <p className="max-w-3xl mx-auto text-xl">We are a community of developers passionate about Google technologies and dedicated to learning, sharing, and building together.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="mb-4 text-xl font-semibold">Our Mission</h3>
              <p className="text-gray-600">To create an inclusive environment where developers can network, learn, and grow together.</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="mb-4 text-xl font-semibold">Our Values</h3>
              <p className="text-gray-600">Community, Innovation, Knowledge sharing, and Inclusivity are at the heart of everything we do.</p>
            </div>
            <div className="text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="mb-4 text-xl font-semibold">Our Vision</h3>
              <p className="text-gray-600">To empower developers to build innovative solutions that make a positive impact on society.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
            Started in 2022, Google Developer Groups on Campus (GDGoC) are community-led developer groups that create opportunities for developers to meet and learn about Google technologies and development platforms

            </p>
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
    </div>
  );
};

export default About;