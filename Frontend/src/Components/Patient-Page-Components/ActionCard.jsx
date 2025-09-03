const ActionCard = ({ title, icon: Icon, bgColor, textColor, onClick }) => (
  <button
    onClick={onClick}
    className={`${bgColor} ${textColor} rounded-2xl p-6 text-left hover:scale-105 transition-all duration-200 shadow-sm border border-[#F5F5F5] w-full`}
  >
    <Icon className="w-6 h-6 mb-3" />
    <span className="font-medium text-sm">{title}</span>
  </button>
);

export default ActionCard;
