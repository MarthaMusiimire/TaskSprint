export default function Topbar() {
  return (
    <header className="w-full h-20 px-6 flex items-center justify-between border-b bg-white">
      <input
        type="text"
        placeholder="Search task"
        className="border px-4 py-2 rounded-md w-1/3"
      />
      <div className="flex items-center space-x-4">
        <span>🔔</span>
        <span>📧</span>
        <span className="font-semibold">Martha Martella</span>
      </div>
    </header>
  );
}
