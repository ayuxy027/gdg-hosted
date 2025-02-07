import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <nav className="bg-white shadow-[2px_8px_15px_rgba(255,255,255,0.7)] fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50 rounded-3xl border border-black ">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
          <img 
            src="\src\assets\logogdg.png" 
            alt="GDG Logo" 
            className="object-contain h-10 w-35"
          />
          </Link>
        </div>
  
        {/* Desktop Menu */}
        <div className="items-center hidden space-x-8 md:flex">
          <Link
            to="/"
            className="px-4 py-2 transition-all duration-300 rounded-full hover:bg-black hover:text-white hover:rounded-full"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 transition-all duration-300 rounded-full hover:bg-black hover:text-white hover:rounded-full"
          >
            About Us
          </Link>
          <Link
            to="/events"
            className="px-4 py-2 transition-all duration-300 rounded-full hover:bg-black hover:text-white hover:rounded-full"
          >
            Events
          </Link>
          <Link
            to="/gallery"
            className="px-4 py-2 transition-all duration-300 rounded-full hover:bg-black hover:text-white hover:rounded-full"
          >
            Gallery
          </Link>
          <Link
            to="/team"
            className="px-4 py-2 transition-all duration-300 rounded-full hover:bg-black hover:text-white hover:rounded-full"
          >
            Team
          </Link>
          
          <Link
            to="https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-and-management-pune-india/"
            className="px-4 py-2 transition-all duration-300 rounded-full hover:bg-black hover:text-white hover:rounded-full"
          >
            Join us
          </Link>

        </div>
  
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="b">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  
     {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to="/"
            className="block px-3 py-2 rounded-md hover:bg-black hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/about"
            className="block px-3 py-2 rounded-md hover:bg-black hover:text-white"
        >
          About Us
        </Link>
        <Link
          to="/events"
            className="block px-3 py-2 rounded-md hover:bg-black hover:text-white"
        >
          Events
        </Link>
        <Link
          to="/gallery"
            className="block px-3 py-2 rounded-md hover:bg-black hover:text-white"
        >
          Gallery
        </Link>
        <Link
          to="/team"
            className="block px-3 py-2 rounded-md hover:bg-black hover:text-white"
        >
          Team
        </Link>
        <Link
          to="/contact"
            className="block px-3 py-2 rounded-md hover:bg-black hover:text-white"
        >
          Contact
        </Link>
        <Link
          to="https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-and-management-pune-india/"
            className="block px-3 py-2 rounded-md hover:bg-black hover:text-white"
        >
          Join us
        </Link>
      
      </div>
    </div>
  )}
</nav>
  

  );
};

export default Navbar;

