import { CheckCircle } from "lucide-react";
import React from "react";
import { useAuthentication } from "../Contexts/AuthenticationContext";

const Notification = () => {
  const { currentPage } = useAuthentication();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl border border-white/20">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-pulse">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {currentPage === "login"
            ? "Signing you in..."
            : "Creating your account..."}
        </h3>
        <p className="text-gray-600 text-lg">
          Please wait while we process your request
        </p>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
