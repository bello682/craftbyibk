"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Bell,
  AlertTriangle,
  Info,
  Sparkles,
  Megaphone,
} from "lucide-react";

type NotificationType = "alert" | "warning" | "info" | "success" | "promo";

const config: any = {
  alert: { color: "bg-red-600", icon: AlertTriangle, label: "Urgent" },
  warning: { color: "bg-amber-500", icon: Info, label: "Notice" },
  info: { color: "bg-zinc-900", icon: Bell, label: "Update" },
  success: { color: "bg-emerald-600", icon: Sparkles, label: "Studio" },
  promo: { color: "bg-purple-600", icon: Megaphone, label: "Promo" },
};

export default function TopBanner({
  notifications,
  onClose,
}: {
  notifications: any[];
  onClose: (val: boolean) => void;
}) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!notifications || notifications.length === 0 || !isBannerVisible)
    return null;

  // Get the most recent notification for the Top Bar
  const latest = [...notifications].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )[0];

  const style = config[latest.type] || config.info;

  return (
    <>
      {/* FIXED TOP STRIP - Show Latest Only */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[60] h-10 ${style.color} text-white flex items-center px-4 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div
            onClick={() => setIsModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-white/20 px-2 py-0.5 rounded">
              {latest.title || style.label}
            </span>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-[10px] md:text-xs font-bold uppercase tracking-widest truncate max-w-[200px] md:max-w-none"
            >
              {latest.message}
            </motion.p>
            <span className="text-[8px] font-black underline underline-offset-4 group-hover:text-white/70 transition-colors hidden sm:inline">
              VIEW ARCHIVE
            </span>
          </div>

          <button
            onClick={() => {
              setIsBannerVisible(false);
              onClose(false);
            }}
            className="p-1 hover:bg-black/20 rounded transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </motion.div>

      {/* MODAL - Show All Notifications */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-[40px] overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="p-8 border-b border-zinc-100 flex justify-between items-center">
                <h2 className="text-xl font-black uppercase tracking-tighter">
                  Studio Notifications
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-y-auto p-6 space-y-4 custom-scrollbar">
                {notifications.map((notif: any) => {
                  const nStyle = config[notif.type] || config.info;
                  const Icon = nStyle.icon;
                  return (
                    <div
                      key={notif._id}
                      className="group p-6 rounded-3xl bg-zinc-50 hover:bg-zinc-100 transition-colors border border-transparent hover:border-zinc-200"
                    >
                      <div className="flex gap-4 items-start">
                        <div
                          className={`w-10 h-10 rounded-2xl ${nStyle.color} flex items-center justify-center text-white shrink-0 shadow-md`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                              {notif.title}
                            </span>
                            <span className="text-[8px] text-zinc-300">•</span>
                            <span className="text-[9px] text-zinc-400">
                              {new Date(notif.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm font-bold uppercase tracking-tight text-black leading-snug">
                            {notif.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-8 bg-zinc-50 border-t border-zinc-100">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em]"
                >
                  Dismiss Archive
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
