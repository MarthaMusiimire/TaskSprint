'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { day: 'Mon', projects: 3 },
  { day: 'Tue', projects: 4 },
  { day: 'Wed', projects: 2 },
  { day: 'Thu', projects: 5 },
  { day: 'Fri', projects: 6 },
  { day: 'Sat', projects: 3 },
  { day: 'Sun', projects: 1 },
];

export default function ProjectAnalytics() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-xl w-[540px]">
      <h3 className="text-base font-semibold mb-4">Weekly Project Activity</h3>
      <BarChart width={450} height={250} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="projects" fill="#de6295" />
      </BarChart>
    </div>
  );
}
