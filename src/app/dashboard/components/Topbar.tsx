'use client';

import { Search } from 'lucide-react';
import { Bell, Mail } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="w-full h-20 px-6 flex items-center justify-between bg-white shadow-sm">
      <div className="relative w-1/3">
        <span className="absolute left-3 top-2.5 text-gray-400">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Search task"
          className="pl-10 pr-4 py-2 w-full rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center space-x-4">
        <span><Bell className="w-5 h-5 text-gray-600" /></span>
        <span><Mail className="w-5 h-5 text-gray-600" /></span>
        <span className="font-semibold">Martha Martella</span>
      </div>
    </header>
  );
}
