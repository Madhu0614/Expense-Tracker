"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold text-black">
        Expense Tracker
      </Link>
    </nav>
  );
}
