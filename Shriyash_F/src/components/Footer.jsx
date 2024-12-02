import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-lg m-4">
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
            At Shriyash Hi-Tech Nursary, we are passionate about bringing the beauty of nature to your home. With years of expertise in growing and nurturing premium plant seedlings, we offer a wide variety of plants that are perfect for every space. Whether you're a seasoned gardener or just starting, our high-quality plants, expert advice, and sustainable practices are here to help you grow your green dream. Join us in making the world greener, one plant at a time!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={()=> navigate("/")} className="text-sm text-gray-400 hover:text-white">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/about")} className="text-sm text-gray-400 hover:text-white">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/home")} className="text-sm text-gray-400 hover:text-white">
                  Services
                </button>
              </li>
              <li>
                <button onClick={()=> navigate("/contact")} className="text-sm text-gray-400 hover:text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567820752302&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl hover:text-blue-800 transition duration-300" />

              </a>
              <a
                href="Shriyashnursery@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
               <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-2xl hover:text-blue-600 transition duration-300" />

              </a>
              <a
                href="Shriyashnursery@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl hover:text-blue-900 transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com/shriyashnursery/profilecard/?igsh=MTE4MjBodjJiNHBieg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl hover:text-pink-700 transition duration-300" />
              </a>
              <div className="flex space-x-4">
      
      
    </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Shriyash Hi-Tech Nursary. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
