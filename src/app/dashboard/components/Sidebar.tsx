

import Link from 'next/link';
import {
  Home,
  FileText,
  Calendar,
  BarChart,
  Users,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Task-Sprint</h1>
      <nav className="flex flex-col space-y-4 text-gray-700 text-sm">
        <Link href="/dashboard" className="flex items-center space-x-2 hover:text-gray-900">
          <Home className="w-4 h-4" />
          <span>Dashboard</span>
        </Link>
        <Link href="/tasks" className="flex items-center space-x-2 hover:text-gray-900">
          <FileText className="w-4 h-4" />
          <span>Tasks</span>
        </Link>
        <Link href="/calendar" className="flex items-center space-x-2 hover:text-gray-900">
          <Calendar className="w-4 h-4" />
          <span>Calendar</span>
        </Link>
        <Link href="/analytics" className="flex items-center space-x-2 hover:text-gray-900">
          <BarChart className="w-4 h-4" />
          <span>Analytics</span>
        </Link>
        <Link href="/team" className="flex items-center space-x-2 hover:text-gray-900">
          <Users className="w-4 h-4" />
          <span>Team</span>
        </Link><br></br><br></br>
        <h1>GENERAL</h1>
        <Link href="/settings" className="flex items-center space-x-2 hover:text-gray-900">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </Link>
        <Link href="/help" className="flex items-center space-x-2 hover:text-gray-900">
          <HelpCircle className="w-4 h-4" />
          <span>Help</span>
        </Link>
        <Link href="/logout" className="flex items-center space-x-2 hover:text-gray-900">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  );
}
