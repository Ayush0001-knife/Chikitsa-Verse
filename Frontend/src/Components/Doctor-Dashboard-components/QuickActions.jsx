import { Activity, Calendar, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-8 right-8 z-40 backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-4 shadow-2xl flex gap-3">
      <button className="p-3 rounded-xl text-white bg-green-700 hover:scale-110 transition-all">
        <Calendar className="w-5 h-5" />
      </button>
      <button className="p-3 rounded-xl text-white bg-teal-500 hover:scale-110 transition-all">
        <Activity className="w-5 h-5" />
      </button>
      <button
        className="p-3 rounded-xl text-white bg-orange-500 hover:scale-110 transition-all"
        onClick={() => navigate("/add-patient")}
      >
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
};

export default QuickActions;
