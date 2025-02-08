import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation().pathname;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/team', label: 'Team' },
  ];

  const NavLink = ({ to, children, external }) => {
    const isActive = location === to;
    const baseClasses = "relative px-4 py-2 transition-all duration-300 rounded-full group";
    const linkClasses = `${baseClasses} ${isActive ? 'bg-black text-white' : 'hover:text-black'}`;

    if (external) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={linkClasses}>
          {children}
          <span className="absolute inset-0 w-full h-full transition-all duration-300 bg-black rounded-full opacity-0 group-hover:opacity-10" />
        </a>
      );
    }

    return (
      <Link to={to} className={linkClasses}>
        {children}
        <span className="absolute inset-0 w-full h-full transition-all duration-300 bg-black rounded-full opacity-0 group-hover:opacity-10" />
      </Link>
    );
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
      <nav className={`
        mx-auto max-w-7xl 
        rounded-3xl
        transition-all duration-300
        border border-black/10
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-lg' 
          : 'bg-white shadow-[2px_8px_15px_rgba(0,0,0,0.1)]'
        }
      `}>
        <div className="px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/src/assets/logogdg.png"
                  alt="GDG Logo"
                  className="w-auto h-10"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-and-management-pune-india/"
                external
              >
                Join us
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen
                ? 'max-h-screen opacity-100 visible pb-4'
                : 'max-h-0 opacity-0 invisible'
            }`}
          >
            <div className="space-y-1 rounded-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 text-base transition-all duration-200 rounded-full ${
                    location === item.path
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-and-management-pune-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-base transition-all duration-200 rounded-full hover:bg-gray-100"
              >
                Join us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;