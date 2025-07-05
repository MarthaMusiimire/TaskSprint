export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r p-6">
      <h1 className="text-2xl font-bold mb-6">Task-Sprint</h1>
      <nav className="flex flex-col space-y-4 text-gray-700 text-sm">
        <span>📊 Dashboard</span>
        <span>📝 Tasks</span>
        <span>📅 Calendar</span>
        <span>📈 Analytics</span>
        <span>👥 Team</span>
        <hr className="my-4" />
        <span>⚙️ Settings</span>
        <span>❓ Help</span>
        <span>🔓 Logout</span>
      </nav>
    </aside>
  );
}
