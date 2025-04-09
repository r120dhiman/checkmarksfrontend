import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import api from "../Api/api";

const Navbar = () => {
  const [userdata, setUserdata] = useState(null); // ✅ Use state instead of a variable

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("Authinfo"); // ✅ Get token from localStorage
      if (token) {
        try {
          const user = await api.userinfo(); // ✅ Fetch user info properly
          setUserdata(user);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
    };
    fetchUserData();
  }, []);

  const navItems = [
    { label: "Check Competition", to: "/#competition0" },
    { label: "Contact Us", to: "/contact-Us" },
    { label: "About Us", to: "/about-Us" },
    { label: "Mentorship", to: "/mentorship" },
    { label: "Privacy Policy", to: "/privacy-Policy" },
    { label: "Refund Policy", to: "/refundPolicy" },
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const handleLogout = () => {
    localStorage.removeItem("Authinfo"); // ✅ Clear token on logout
    setUserdata(null); // ✅ Reset state
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white py-3 border-b border-neutral-700/80">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
         <NavLink to="/"> <img className="h-10 w-10 mr-2" src={logo} alt="Checkmarks" /></NavLink>
          <span className="text-xl font-semibold bg-gradient-to-r from-violet-700 via-pink-300 to-indigo-400 text-transparent bg-clip-text">
            Checkmarks
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-gray-300 transition">
              <NavLink to={item.to} className="text-white">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ✅ Show Username if Logged In */}
        {userdata && <h1 className="mr-4">{userdata.name}</h1>}

        {/* Sign In / Logout Button (Desktop) */}
        <div className="hidden lg:flex">
          {userdata ? (
            <button
              onClick={handleLogout}
              className="py-2 px-5 border border-white rounded-lg hover:bg-gray-800 transition"
            >
              Logout
            </button>
          ) : (
            <a
              href="https:www.rohitdhiman.tech"
              className="py-2 px-5 border border-white rounded-lg hover:bg-gray-800 transition"
            >
              Developers
            </a>
            
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed top-0 right-0 z-50 bg-gray-800 text-white w-1/2 h- p-6 flex flex-col items-center space-y-6 lg:hidden shadow-lg rounded-2xl">
          <button onClick={toggleNavbar} className="absolute top-4 right-4">
            <X size={24} />
          </button>

          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-gray-300 transition">
                <NavLink to={item.to} onClick={toggleNavbar}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {userdata ? (
            <button
              onClick={() => {
                handleLogout();
                toggleNavbar();
              }}
              className="py-2 px-5 border border-white rounded-lg hover:bg-gray-800 transition"
            >
              Logout
            </button>
          ) : (
            <a
              href="https:www.rohitdhiman.tech"
              onClick={toggleNavbar}
              className="py-2 px-5 border border-white rounded-lg hover:bg-gray-800 transition"
            >
              Developers
            </a>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;