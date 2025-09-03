import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { useNav } from "../Contexts/NavContext";

import { User, Settings, Bell, Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { activePage, setActivePage } = useNav();

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 backdrop-blur-xl bg-white/20 border border-white/40 rounded-2xl shadow-xl ">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div
            className="w-15 h-15 rounded-full flex items-center justify-center border border-black "
            onClick={() => setActivePage("patients")}
            style={{ backgroundColor: "#1E3A5F" }}
          >
            <div className="w-full h-full rounded-full bg-teal-400 cursor-pointer">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <h1
            className="text-xl font-bold text-gray-800 cursor-pointer"
            onClick={() => setActivePage("patients")}
          >
            Chikítśaⱽerse
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-800 font-medium transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
            onClick={() => setActivePage("patients")}
            style={{
              backgroundColor:
                activePage === "patients" ? "#4DB6AC" : "transparent",
            }}
          >
            Patients
          </button>
          <button
            className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-800 font-medium transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
            onClick={() => setActivePage("reports")}
            style={{
              backgroundColor:
                activePage === "reports" ? "#4DB6AC" : "transparent",
            }}
          >
            Reports
          </button>
          <button
            className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-800 font-medium transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
            onClick={() => setActivePage("prevention")}
            style={{
              backgroundColor:
                activePage === "prevention" ? "#4DB6AC" : "transparent",
            }}
          >
            Prevention
          </button>
          <button
            className="px-6 py-2 rounded-full text-gray-600 hover:text-gray-800 font-medium transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
            onClick={() => setActivePage("chat")}
            style={{
              backgroundColor:
                activePage === "chat" ? "#4DB6AC" : "transparent",
            }}
          >
            Chat
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-white/20">
            <Sun className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/20">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/20 space-y-2 px-4">
          <button
            className="w-full px-4 py-2 rounded-lg text-left text-white font-medium"
            style={{ backgroundColor: "#4DB6AC" }}
          >
            Patients
          </button>
          <button className="w-full px-4 py-2 rounded-lg text-left text-gray-600 hover:bg-white/10">
            Reports
          </button>
          <button className="w-full px-4 py-2 rounded-lg text-left text-gray-600 hover:bg-white/10">
            Prevention
          </button>
          <button className="w-full px-4 py-2 rounded-lg text-left text-gray-600 hover:bg-white/10">
            Chat
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
