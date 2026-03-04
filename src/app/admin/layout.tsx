// app/admin/layout.tsx
"use client";
import { useState } from "react";
import Sidebar from "./component/adminSideBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar is fixed here, so it never disappears during navigation */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* This div moves depending on sidebar state */}
      <div
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"} lg:ml-64`}
      >
        {children}
      </div>
    </div>
  );
}
