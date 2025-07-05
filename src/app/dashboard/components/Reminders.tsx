export default function Reminders() {
  return (
    <div className="bg-white p-4 border rounded-md shadow-md w-full">
      <h3 className="text-base font-semibold mb-3">Reminders</h3>

      <div className="mb-3">
        <p className="text-sm font-medium">Meeting with Martha Martella</p>
        <p className="text-xs text-gray-500">Today • 11:00 AM - 12:00 PM</p>
      </div>

      <button className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-800">
        Start Meeting
      </button>
    </div>
  );
}
