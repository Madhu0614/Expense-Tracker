"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, List, Settings, BarChart2, Folder, Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white border rounded shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r shadow-sm p-4 flex flex-col gap-4 transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-4">💰 Tracker</h2>
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <Home className="w-4 h-4" /> Overview
          </Link>

          <Link
            href="/expenses"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <List className="w-4 h-4" /> Expenses
          </Link>

          <Link
            href="/budgets"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <Folder className="w-4 h-4" /> Budgets
          </Link>

          <Link
            href="/reports"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <BarChart2 className="w-4 h-4" /> Reports
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="w-4 h-4" /> Settings
          </Link>
        </nav>
      </aside>

      {/* Page Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
