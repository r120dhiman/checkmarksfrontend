import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Blur Effect */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/src/assets/logo.svg" alt="Checkmarks" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-500 text-transparent bg-clip-text">
                Checkmarks
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your smart companion for engineering entrance preparation. Get personalized mentorship and instant performance analysis.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-pink-500 text-transparent bg-clip-text">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/about-Us" 
                className="text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact-Us"
                className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
              <Link to="/mentorship"
                className="text-gray-400 hover:text-white transition-colors text-sm">
                Mentorship
              </Link>
              <Link to="/privacy-Policy"
                className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy &  Terms of Service
              </Link>
              <Link to="/refundPolicy"
                className="text-gray-400 hover:text-white transition-colors text-sm">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-pink-500 text-transparent bg-clip-text">
              Contact Us
            </h3>
            <div className="space-y-2">
              <a href="mailto:checkmarks.tech@gmail.com" 
                className="flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                <Mail size={16} className="mr-2" />
                checkmarks.tech@gmail.com
              </a>
              <p className="flex items-center text-gray-400 text-sm">
                <MapPin size={16} className="mr-2" />
                IIT BHU, Varanasi
              </p>
              <a href="tel:9050635560"
                className="flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                <Phone size={16} className="mr-2" />
                +91 90506 35560
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Checkmarks. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-Policy"
                className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/refundPolicy"
                className="text-gray-400 hover:text-white transition-colors text-sm">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;