// // app/admin/layout.tsx
// "use client";
// import { useState } from "react";
// import Sidebar from "./component/adminSideBar";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-zinc-50 flex">
//       {/* Sidebar is fixed here, so it never disappears during navigation */}
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//       {/* This div moves depending on sidebar state */}
//       <div
//         className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"} lg:ml-64`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store/store";
import Sidebar from "./component/adminSideBar";
import { Toaster } from "react-hot-toast"; // 1. Import Toaster

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  const { token, isVerified } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const checkAuth = () => {
      const publicRoutes = [
        "/admin/auth/admin-login",
        "/admin/auth/register",
        "/admin/auth/forgot-password",
        "/admin/auth/reset-password",
      ];
      const isPublicRoute = publicRoutes.includes(pathname);
      const isVerifyRoute = pathname === "/admin/auth/verify-otp"; // Fixed path consistency

      // 1. No Token? Send to login
      if (!token && !isPublicRoute && !isVerifyRoute) {
        router.replace("/admin/auth/admin-login");
      }
      // 2. Has Token but not verified? Send to OTP
      else if (token && !isVerified && !isVerifyRoute && !isPublicRoute) {
        router.replace("/admin/auth/verify-otp");
      }
      // 3. Fully Authenticated? Prevent access to Auth pages
      else if (token && isVerified && (isPublicRoute || isVerifyRoute)) {
        router.replace("/admin/dashboard"); // Ensure this matches your dashboard path
      }

      setIsChecking(false);
    };

    checkAuth();
  }, [token, isVerified, pathname, router]);

  const isAuthPage = [
    "/admin/auth/admin-login",
    "/admin/auth/register",
    "/admin/auth/verify-otp",
    "/admin/auth/forgot-password",
    "/admin/auth/reset-password",
  ].includes(pathname);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* 2. Place Toaster here - it will now work globally for all admin pages */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#ffffff",
            color: "#18181b",
            borderRadius: "12px",
            border: "1px solid #e4e4e7",
            fontSize: "14px",
          },
          success: {
            iconTheme: { primary: "#18181b", secondary: "#ffffff" },
          },
        }}
      />

      {isAuthPage ? (
        <div className="min-h-screen">{children}</div>
      ) : (
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <main
            className={`flex-1 transition-all duration-300 ${
              isSidebarOpen ? "ml-64" : "ml-0"
            } lg:ml-64 p-4 lg:p-8`}
          >
            {children}
          </main>
        </div>
      )}
    </div>
  );
}
