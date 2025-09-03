import Header from "../Components/Add-Patient-Components.jsx/Header";
import FormContent from "../Components/Add-Patient-Components.jsx/FormContent";

export const AddPatient = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#E0F7FA" }}>
      {/* Header */}
      <Header />

      {/* Form Content */}
      <FormContent />

      {/* Custom Styles */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #4db6ac;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(77, 182, 172, 0.4);
          transition: all 0.3s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(77, 182, 172, 0.6);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #4db6ac;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(77, 182, 172, 0.4);
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AddPatient;
