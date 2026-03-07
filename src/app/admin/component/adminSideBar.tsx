"use client";
// 1. Added Dispatch and SetStateAction to types
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  Bell,
  Mail,
  PlusCircle,
  Hammer,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { logout } from "@/lib/store/redux/adminAuthSlice";

const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  {
    name: "Collections",
    href: "/admin/adminView/collections",
    icon: PlusCircle,
  },
  { name: "Shop", href: "/admin/adminView/shop", icon: ShoppingBag },
  { name: "Others", href: "/admin/adminView/others", icon: ShoppingBag },
  { name: "Notifications", href: "/admin/adminView/notifications", icon: Bell },
  {
    name: "Manage Products",
    href: "/admin/adminView/deleteProducts",
    icon: Hammer,
  },
  // { name: "Inbox", href: "/admin/adminView/inbox", icon: Mail },
  // { name: "Logout", href: "/admin/adminView/inbox", icon: Mail },
];

// 2. Define what props this sidebar expects
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// 3. Update the function to accept these props
export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault(); // Stop the link from just navigating

    // 1. Clear Redux & LocalStorage
    dispatch(logout());

    // 2. Send them to the login page
    router.push("/admin/auth/admin-login");
  };

  // Note: Local useState is removed because isOpen is now coming from Dashboard

  const Logo = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center"
    >
      <span className="font-display text-xl font-bold tracking-tight text-inherit">
        CRAFT
      </span>
      <span className="relative font-display text-xl font-light tracking-tight text-inherit flex items-center">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1.1, 1],
            opacity: [0.1, 0.15, 0.15, 0.1],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
        >
          <div className="w-8 h-8 bg-zinc-400 rounded-full blur-xl absolute opacity-30" />
          <Hammer size={30} className="text-current" />
        </motion.div>
        _BY
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-inherit ml-1">
        IBK
      </span>
    </motion.div>
  );

  return (
    <>
      {/* MOBILE TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-5 right-4 z-[100] p-2 bg-black text-white rounded-md border border-zinc-800"
      >
        {/* This switches between the Menu and X icon based on the state */}
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* SIDEBAR ASIDE */}
      <aside
        className={`
    fixed top-0 left-0 h-full bg-black text-white p-6 flex flex-col gap-10 border-r border-zinc-900 z-[90]
    transition-transform duration-300 ease-in-out w-64
    ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
  `}
      >
        <div className="py-4 border-b border-zinc-800">
          <Logo />
        </div>

        <nav className="flex flex-col gap-2 h-full">
          {/* 1. Main Navigation Links */}
          <div className="flex-1 flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all text-sm ${
                  pathname === item.href
                    ? "bg-white text-black font-bold"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            ))}
          </div>

          {/* 2. Logout Button (Placed at the bottom) */}
          <div className="mt-auto pt-4 border-t border-zinc-800">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 p-3 w-full rounded-lg text-zinc-500 hover:text-red-500 hover:bg-zinc-900 transition-all text-sm"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* OVERLAY FOR MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
