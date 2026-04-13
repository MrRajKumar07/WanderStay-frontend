import { LucideIcon } from "lucide-react";

const StatCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="p-4 rounded-xl shadow bg-white flex items-center gap-4">
      <div className="p-3 bg-blue-100 rounded-full">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default StatCard;