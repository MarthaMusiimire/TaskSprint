export default function ProjectCards() {
  const cards = [
    {
      title: "Total Projects",
      value: 24,
      subtitle: "Increased from last month",
      bg: "bg-gradient-to-l from-green-600 to-green-900",
    },
    {
      title: "Completed Projects",
      value: 10,
      subtitle: "Increased from last month",
      bg: "bg-white",
    },
    {
      title: "Running Projects",
      value: 12,
      subtitle: "Increased from last month",
      bg: "bg-white",
    },
    {
      title: "Pending Project",
      value: 2,
      subtitle: "On Discuss",
      bg: "bg-gradient-to-l from-red-600 to-red-800",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`rounded-xl p-4 shadow-sm ${card.bg === "bg-white" ? "border" : card.bg} text-${card.bg === "bg-white" ? "gray-800" : "white"}`}
        >
          <h4 className="text-sm font-medium">{card.title}</h4>
          <p className="text-3xl font-bold mt-2">{card.value}</p>
          <p className={`text-xs mt-1 ${card.bg === "bg-white" ? "text-gray-500" : "text-green-200"}`}>
            {card.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}
