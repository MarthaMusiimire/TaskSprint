export default function TeamCollab() {
  const team = [
    { name: "Sarah", avatar: "https://i.pravatar.cc/40?img=1" },
    { name: "James", avatar: "https://i.pravatar.cc/40?img=2" },
    { name: "Liam", avatar: "https://i.pravatar.cc/40?img=3" },
    { name: "Ava", avatar: "https://i.pravatar.cc/40?img=4" },
  ];

  return (
    <div className="bg-white p-4 border rounded-md shadow-md w-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-semibold">Team</h3>
        <button className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-800">
            + Add Member
        </button>
      </div>

      <div className="flex -space-x-2 overflow-hidden mb-2">
        {team.map((member, idx) => (
          <img
            key={idx}
            src={member.avatar}
            alt={member.name}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        ))}
      </div>

      <p className="text-xs text-gray-500">{team.length} members collaborating</p>
    </div>
  );
}
