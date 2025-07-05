export default function ProjectList() {
  const projects = [
    { name: "Cross-Browser Testing", status: "Ongoing", due: "Aug 7" },
    { name: "Backend API", status: "Review", due: "Aug 9" },
    { name: "Optimise Page Load", status: "Done", due: "Aug 3" },
  ];

  return (
    <div className="bg-white p-4 border rounded-md shadow-md w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold">All Projects</h3>
        <button className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-800">
            + New
        </button>
      </div><br></br>
      
      <ul className="space-y-3 text-sm">
        {projects.map((project, index) => (
          <li key={index} className="flex justify-between">
            <span>{project.name}</span>
            <span className="text-gray-500 text-xs">{project.due}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
}
