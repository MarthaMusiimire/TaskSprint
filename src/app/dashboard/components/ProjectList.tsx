import { Rocket, Code, Palette, Server } from 'lucide-react';


export default function ProjectList() {
  const projects = [
    { name: "Website Redesign", 
      status: "Ongoing",
      icon: <Palette className="w-4 h-4 text-white" />,
      color: 'bg-pink-500', 
      due: "Aug 7" },


    { name: "API Development", 
      status: "Review",
      icon: <Server className="w-4 h-4 text-white" />,
      color: 'bg-blue-500', 
      due: "Aug 9" },


    { name: "Marketing Launch", 
      status: "Done",
      icon: <Rocket className="w-4 h-4 text-white" />,
      color: 'bg-green-500', 
      due: "Aug 3" },

      { name: "Code clean up", 
      status: "Done",
      icon: <Code className="w-4 h-4 text-white" />,
      color: 'bg-green-500', 
      due: "Aug 3" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-xl w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold">All Projects</h3>
        <button className="bg-green-700 text-white text-sm px-3 py-1 rounded hover:bg-green-900">
            + New
        </button>
      </div><br></br>
      
      <ul className="space-y-3 text-sm">
        {projects.map((project, idx) => (
    <div key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-md shadow-sm">
      <div className={`p-2 rounded-full ${project.color}`}>
        {project.icon}
      </div>
      <p className="text-sm font-medium">{project.name}</p>
    </div>
  ))}
      </ul>
      
    </div>
  );
}
