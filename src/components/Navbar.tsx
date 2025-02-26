import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logogdg from "../assets/webimg/logogdg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation().pathname;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/events", label: "Events" },
    { path: "/gallery", label: "Gallery" },
    { path: "/team", label: "Team" },
  ];

  const NavLink = ({ to, children, external = false }: {
    to: string;
    children: React.ReactNode;
    external?: boolean;
  }) => {
    const isActive = location === to;
    const baseClasses = "relative px-4 py-2 text-sm font-medium transition-all duration-500 rounded-full";
    const linkClasses = `${baseClasses} ${isActive
      ? "bg-blue-500/80 text-white backdrop-blur-sm shadow-md shadow-blue-200/50"
      : "text-gray-700 hover:text-blue-500 hover:bg-blue-50/50"
      }`;

    if (external) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          {children}
          <span className="absolute inset-0 w-full h-full bg-blue-100 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </a>
      );
    }

    return (
      <Link to={to} className={linkClasses}>
        {children}
        <span className="absolute inset-0 w-full h-full bg-blue-100 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100" />
      </Link>
    );
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4">
      <nav
        className={`
          mx-auto max-w-7xl 
          rounded-2xl
          transition-all duration-500 ease-in-out
          border border-gray-200/30
          ${scrolled
            ? "shadow-lg backdrop-blur-xl bg-white/70"
            : "shadow-md backdrop-blur-sm bg-white/80"
          }
        `}
      >
        <div className="px-4 mx-auto sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={logogdg}
                  alt="GDG Logo"
                  className="w-auto h-8 sm:h-10"
                  loading="eager"
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-center items-center p-2 text-gray-700 rounded-lg transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-500 ease-in-out ${isOpen
              ? "pb-4 max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
              }`}
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 
                    ${location === item.path
                      ? "bg-blue-600/80 text-white backdrop-blur-sm"
                      : "text-gray-700 hover:bg-blue-50/70 hover:text-blue-600"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://gdg.community.dev/gdg-on-campus-g-h-raisoni-college-of-engineering-and-management-pune-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-300 hover:bg-blue-50/70 hover:text-blue-600"
              >
                Join us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
