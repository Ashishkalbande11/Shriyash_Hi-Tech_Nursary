import React, { useState } from "react";
import logo2 from "../images/Shriyash.logo.jpg"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-100 shadow-md p-4 flex">
            {/* First Row: Logo */}
            <div className="flex justify-between items-center md:flex-auto">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src={logo2}
                        alt="Logo"
                        className="h-[120px]"
                    />
                    
                </div>

               
            </div>

            <div className=" flex-[90%] md:items-end">
              {/* Second Row: Search Bar and Buttons */}
               {/* Hamburger Menu for Mobile */}
               <button
                    className="text-gray-700 md:hidden flex items-end"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            <div className={`md:flex justify-between items-center mt-4 ${isMenuOpen ? "block" : "hidden"} md:block`}>
                {/* Search Bar */}
                <div className="flex-grow max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                    />
                </div>
                {/* Buttons */}
                <div className="flex space-x-4 mt-4 md:mt-0 md:ml-4 justify-center">
                    <button onClick={() => {
                      navigate("/login")
                    }} className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg hover:bg-[#3b9b40]">
                        Login
                    </button>
                    <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg hover:bg-[#3b9b40]">
                        Cart
                    </button>
                </div>
            </div>

            {/* Third Row: Navigation Links */}
            <div className={`flex-col md:flex-row md:flex ml-[150px] gap-6 items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 ${isMenuOpen ? "flex" : "hidden"} md:flex`}>
                <button
                    onClick={() => {
                      navigate("/home")
                    }}
                    className="text-gray-700 hover:text-[#4CAF50] font-semibold"
                >
                    Home
                </button>
                <button
                    onClick={()=>{
                      navigate('/about')
                    }}
                    className="text-gray-700 hover:text-[#4CAF50] font-semibold"
                >
                    About
                </button>
                <button
                    onClick={() => {
                      navigate('/contact')
                    }}
                    className="text-gray-700 hover:text-[#4CAF50] font-semibold"
                >
                    Contact
                </button>
                <button
                    onClick={() =>{
                      navigate('/shop')
                    }}
                    className="text-gray-700 hover:text-[#4CAF50] font-semibold"
                >
                    Shop
                </button>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;
