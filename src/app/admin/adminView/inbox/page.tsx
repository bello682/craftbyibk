"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { contactUsSendEmail } from "@/lib/store/redux/adminSlice";
import { motion } from "framer-motion";
import { Send, User, Mail as MailIcon } from "lucide-react";

export default function InboxPage() {
  const dispatch = useDispatch();
  const [emailData, setEmailData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    // Hits endpoint: /adminUploadImages/contact-us
    dispatch(contactUsSendEmail(emailData) as any);
    alert("Message Sent to Admin Queue");
  };

  return (
    <div className="p-4 md:p-10 lg:p-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-12">
          Support // Inbox
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-8">
              Internal Support Dispatch
            </p>
            <form onSubmit={handleSend} className="space-y-6">
              <div className="relative">
                <User
                  className="absolute left-0 top-3 text-zinc-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="w-full pl-8 py-3 border-b border-zinc-200 focus:border-black outline-none text-xs font-bold tracking-widest uppercase"
                  onChange={(e) =>
                    setEmailData({ ...emailData, fullName: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <MailIcon
                  className="absolute left-0 top-3 text-zinc-400"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="ADMIN EMAIL"
                  className="w-full pl-8 py-3 border-b border-zinc-200 focus:border-black outline-none text-xs font-bold tracking-widest uppercase"
                  onChange={(e) =>
                    setEmailData({ ...emailData, email: e.target.value })
                  }
                />
              </div>
              <textarea
                placeholder="YOUR MESSAGE..."
                className="w-full p-4 bg-zinc-50 border border-zinc-100 focus:border-black outline-none h-40 text-xs font-medium"
                onChange={(e) =>
                  setEmailData({ ...emailData, message: e.target.value })
                }
              ></textarea>
              <button className="w-full bg-black text-white py-6 text-xs font-bold tracking-[0.4em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-4">
                DISPATCH MESSAGE <Send size={14} />
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <div className="bg-zinc-900 text-white p-12 flex flex-col justify-between">
            <h3 className="text-xl font-bold tracking-tighter uppercase">
              Communication Hub
            </h3>
            <div className="space-y-8">
              <div>
                <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-2">
                  Endpoint
                </p>
                <p className="text-sm font-mono text-zinc-300">
                  /adminUploadImages/contact-us
                </p>
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase mb-2">
                  Service Status
                </p>
                <p className="text-sm text-green-400 uppercase font-bold tracking-widest text-[10px]">
                  Email Server Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
