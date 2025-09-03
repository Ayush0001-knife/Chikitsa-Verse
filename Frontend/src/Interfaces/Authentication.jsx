import React, { useState, useEffect } from "react";
import {
  Heart,
  CheckCircle,
  ArrowLeft,
  Stethoscope,
  FileText,
} from "lucide-react";
import { useAuthentication } from "../Components/Contexts/AuthenticationContext";
import Login from "../Components/Authentication-Components/Login";
import Register from "../Components/Authentication-Components/Register";
import { useNavigate } from "react-router-dom";
import Notification from "../Components/Notification.jsx/Notification";

const AuthPages = () => {
  const { currentPage, setCurrentPage, setIsVisible, setErrors, isLoading } =
    useAuthentication();

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    setErrors({});
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block animate-float">
        <div className="w-20 h-20 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl flex items-center justify-center border border-white/20">
          <Stethoscope className="w-10 h-10 text-blue-600" />
        </div>
      </div>

      <div className="absolute bottom-20 right-10 hidden lg:block animate-float delay-1000">
        <div className="w-20 h-20 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl flex items-center justify-center border border-white/20">
          <FileText className="w-10 h-10 text-teal-500" />
        </div>
      </div>

      <div className="absolute top-1/3 right-20 hidden xl:block animate-float delay-500">
        <div className="w-16 h-16 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl flex items-center justify-center border border-white/20">
          <Heart className="w-8 h-8 text-purple-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-lg">
        {/* Back Button - Moved to top-4 */}
        <button
          className="absolute top-4 left-0 flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20"
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Page Toggle */}
        <div className="flex bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-2 mb-8 shadow-2xl mt-16">
          <button
            onClick={() => setCurrentPage("login")}
            className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
              currentPage === "login"
                ? "bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white shadow-xl transform scale-105"
                : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setCurrentPage("register")}
            className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
              currentPage === "register"
                ? "bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white shadow-xl transform scale-105"
                : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
            }`}
          >
            Register
          </button>
        </div>

        {/* Page Content */}
        <div className="relative overflow-hidden">
          {currentPage === "login" ? <Login /> : <Register />}
        </div>

        {/* Loading Overlay */}
        {isLoading && <Notification />}
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AuthPages;
