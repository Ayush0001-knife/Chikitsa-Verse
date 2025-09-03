import { usePatientPage } from "../Contexts/PatientPageContext";

const HealthScoreCard = ({ title, score, icon: Icon }) => {
  const { getHealthScoreColor, getHealthScoreBg } = usePatientPage();

  return (
    <>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#F5F5F5]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Icon className="w-6 h-6 text-gray-500" />
            <h3 className="text-gray-700 font-medium">{title}</h3>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-3xl font-bold ${getHealthScoreColor(score.value)}`}
          >
            {score.value}
          </span>
          <span className="text-sm text-gray-500">Score</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full ${getHealthScoreBg(
              score.value
            )} transition-all duration-500`}
            style={{ width: `${score.value}%` }}
          ></div>
        </div>
        <div className="mt-3">
          <span
            className={`text-sm font-medium ${
              score.value >= 80 ? "text-[#388E3C]" : "text-[#FFA726]"
            }`}
          >
            {score.value >= 80 ? "Good" : "Needs Attention"}
          </span>
        </div>
      </div>
    </>
  );
};

export default HealthScoreCard;
