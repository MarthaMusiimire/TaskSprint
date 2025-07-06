import { Folder, CheckCircle, Activity, Clock } from 'lucide-react';

export default function ProjectCards() {
  const cards = [
    {
      title: "Total Projects",
      value: 24,
      subtitle: "Increased from last month",
      bg: "bg-gradient-to-l from-blue-400 to-blue-700",
      icon: <Folder className="w-6 h-6 text-white fill-white" />,
    },
    {
      title: "Completed Projects",
      value: 10,
      subtitle: "Increased from last month",
      bg: "bg-gradient-to-l from-green-600 to-green-900",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
    },
    {
      title: "Running Projects",
      value: 12,
      subtitle: "Increased from last month",
      bg: "bg-gradient-to-l from-orange-400 to-orange-700",
      icon: <Activity className="w-6 h-6 text-white fill-white" />,
    },
    {
      title: "Pending Project",
      value: 2,
      subtitle: "On Discuss",
      bg: "bg-gradient-to-l from-red-400 to-red-700",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`rounded-xl p-4 shadow-md ${card.bg === "bg-white" ? "border" : card.bg} text-${card.bg === "bg-white" ? "gray-800" : "white"}`}
        >
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-medium">{card.title}</h4>
            {card.icon}
          </div>
          <p className="text-3xl font-bold mt-2">{card.value}</p>
          <p className={`text-xs mt-1 ${card.bg === "bg-white" ? "text-black-500" : "text-white/80"}`}>
            {card.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}
