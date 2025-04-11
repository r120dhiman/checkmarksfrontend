import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { userData, logout } = useAuth(); // Access userData and logout from AuthContext
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Check Competition", to: "/#competition0" },
    { label: "Mentorship", to: "/mentorship" },
    { label: "Contact Us", to: "/contact-Us" },
    { label: "About Us", to: "/about-Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img className="h-8 w-8" src={logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-500 text-transparent bg-clip-text">
                Checkmarks
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-white bg-gray-700" 
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Auth Buttons */}
            {userData ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-300">
                  {userData.name || userData.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <NavLink
                  to="/login"
                  className="bg-transparent hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
            >
              {item.label}
            </NavLink>
          ))}

          {/* Auth Buttons */}
          {userData ? (
            <div className="space-y-4">
              <span className="block text-sm font-medium text-gray-300">
                {userData.name || userData.email}
              </span>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-transparent hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;