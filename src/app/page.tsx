import ProjectCards from './dashboard/components/ProjectCards';
import ProjectAnalytics from './dashboard/components/ProjectAnalytics';
import Reminders from './dashboard/components/Reminders';
import ProjectList from './dashboard/components/ProjectList';
import TeamCollab from './dashboard/components/TeamCollab';

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <ProjectCards />

      {/* Row with Analytics - Reminders - ProjectList */}
      <div className="grid grid-cols-[2fr_1fr_1.5fr] gap-6">
        <ProjectAnalytics />
        <Reminders />
        <ProjectList />
      </div>
      <div className="grid grid-cols-[2fr_1fr_1.5fr] gap-6 mt-6">
        <TeamCollab />
      </div>
    </div>
  );
}
