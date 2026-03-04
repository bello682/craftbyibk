"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createNotification,
  getNotifications,
  deleteNotification,
} from "../../../../lib/store/redux/adminSlice";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Send,
  Trash2,
  AlertCircle,
  Megaphone,
  CheckCircle2,
  Info,
  Clock,
} from "lucide-react";

export default function NotificationPage() {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state: any) => state.admin);

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    message: "",
    type: "promo" as const,
  });
  const [status, setStatus] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  useEffect(() => {
    dispatch(getNotifications() as any);
  }, [dispatch]);

  const handlePush = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.message) return;

    setIsLoading(true);
    try {
      await dispatch(createNotification(form) as any).unwrap();
      setStatus({ type: "success", msg: "BROADCAST SENT SUCCESSFULLY" });
      setForm({ title: "", message: "", type: "promo" });
    } catch (err: any) {
      setStatus({ type: "error", msg: "FAILED TO SEND BROADCAST" });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(null), 4000);
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "alert":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-700",
          icon: <AlertCircle size={18} />,
        };
      case "warning":
        return {
          bg: "bg-amber-50",
          border: "border-amber-200",
          text: "text-amber-700",
          icon: <Info size={18} />,
        };
      case "success":
        return {
          bg: "bg-emerald-50",
          border: "border-emerald-200",
          text: "text-emerald-700",
          icon: <CheckCircle2 size={18} />,
        };
      default:
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-700",
          icon: <Megaphone size={18} />,
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 md:p-10 lg:p-16  bg-zinc-50 min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-2">
              Communications Hub
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-black">
              Broadcast
            </h1>
          </div>
          <Bell size={40} className="text-zinc-200 hidden md:block" />
        </div>

        {/* Create Notification Form */}
        <section className="mb-16">
          <form
            onSubmit={handlePush}
            className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <Send size={16} /> Create Global Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <input
                  type="text"
                  placeholder="NOTIFICATION TITLE"
                  value={form.title}
                  required
                  className="w-full bg-transparent border-b-2 border-zinc-200 p-3 focus:border-black outline-none transition-all font-bold uppercase tracking-tight"
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <textarea
                  placeholder="WRITE YOUR MESSAGE HERE..."
                  value={form.message}
                  required
                  className="w-full bg-zinc-50 border-2 border-dashed border-zinc-200 p-4 focus:border-black focus:bg-white outline-none transition-all font-medium h-24 uppercase text-sm"
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <div className="space-y-6">
                <div className="group">
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block text-zinc-500">
                    Alert Priority
                  </label>
                  <select
                    value={form.type}
                    className="w-full bg-transparent border-b-2 border-zinc-200 p-3 focus:border-black outline-none transition-all font-black uppercase appearance-none cursor-pointer"
                    onChange={(e: any) =>
                      setForm({ ...form, type: e.target.value })
                    }
                  >
                    <option value="promo">PROMOTION</option>
                    <option value="success">SUCCESS</option>
                    <option value="warning">SYSTEM WARNING</option>
                    <option value="alert">URGENT ALERT</option>
                  </select>
                </div>

                <button
                  disabled={isLoading}
                  className="w-full bg-black text-white p-5 font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  {isLoading ? "PUSHING..." : "DISPATCH"}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-[10px] font-black uppercase tracking-widest ${status.type === "success" ? "text-emerald-600" : "text-red-600"}`}
                >
                  {status.msg}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </section>

        {/* History Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black uppercase tracking-tighter italic">
              Message History
            </h2>
            <div className="h-px flex-1 bg-zinc-200 mx-6"></div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase">
              {notifications?.length || 0} TOTAL
            </span>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {notifications.map((n: any) => {
                const styles = getTypeStyles(n.type);
                return (
                  <motion.div
                    key={n._id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`group relative bg-white border-2 border-zinc-200 p-6 transition-all hover:border-black flex justify-between items-start`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`mt-1 p-2 rounded-lg ${styles.bg} ${styles.text}`}
                      >
                        {styles.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-black uppercase tracking-tight text-lg">
                            {n.title}
                          </h4>
                          <span
                            className={`text-[8px] px-2 py-0.5 border font-black uppercase rounded ${styles.border} ${styles.text}`}
                          >
                            {n.type}
                          </span>
                        </div>
                        <p className="text-zinc-600 text-sm max-w-2xl leading-relaxed">
                          {n.message}
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-zinc-400 text-[9px] font-bold uppercase tracking-widest">
                          <Clock size={10} />
                          {new Date(n.createdAt).toLocaleDateString()} —{" "}
                          {new Date(n.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => dispatch(deleteNotification(n._id) as any)}
                      className="opacity-0 group-hover:opacity-100 p-3 text-zinc-300 hover:text-red-600 hover:bg-red-50 transition-all rounded-full"
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
