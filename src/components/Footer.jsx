
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer id="footer" className=" bg-white/30 backdrop-blur-md ">
     
        <div className="mt-6 border-t border-gray-200 pt-4">
          <p className="text-center text-gray-600 text-[10px] sm:text-xs">
            © {new Date().getFullYear()} Checkmarks. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;