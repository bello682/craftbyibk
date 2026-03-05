"use client";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDispatch } from "react-redux";
import { contactUsSendEmail } from "@/lib/store/redux/adminSlice";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);
  const dispatch = useDispatch();
  const [emailData, setEmailData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      // .unwrap() triggers the 'catch' block if the backend returns an error
      await dispatch(contactUsSendEmail(emailData) as any).unwrap();

      setStatus({ type: "success", msg: "MESSAGE SENT SUCCESSFULLY" });
      setEmailData({ fullName: "", email: "", message: "" }); // Clear fields
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setStatus({ type: "error", msg: error?.message || "FAILED TO SEND" });
      // Note: emailData is NOT reset here, preserving user input
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(null), 5000); // Auto-hide toast
    }
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/2348077276464?text=Hello%20Craft_ByIbk`,
      "_blank",
    );
  };
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-6"
          >
            <div
              className={`p-4 border-2 shadow-xl flex items-center gap-3 ${
                status.type === "success"
                  ? "bg-black text-white border-black"
                  : "bg-white text-red-600 border-red-600"
              }`}
            >
              <p className="text-[10px] font-black uppercase tracking-widest">
                {status.msg}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-20 px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        {/* BIG HEADER */}
        <section className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(50px,15vw,180px)] font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            GET IN <br />
            <span className="text-zinc-200">TOUCH.</span>
          </motion.h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT: CONTACT INFO */}
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                Collaborations
              </h4>
              <Link
                href="mailto:hello@craft_byibk.com"
                className="group flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-zinc-500 transition-colors"
              >
                hello@craft_byibk.com
                <ArrowUpRight
                  className="text-zinc-300 group-hover:text-black transition-colors"
                  size={32}
                />
              </Link>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                Support & Sales
              </h4>
              <Link
                href="tel:+2348077276464"
                className="text-2xl md:text-4xl font-bold hover:text-zinc-500 transition-colors"
              >
                {/* +234 (0) 807 727 6464 */}
                <button className="text-2xl md:text-4xl font-bold hover:text-zinc-500 transition-colors border-b border-zinc-200 pb-1 flex gap-2 items-center">
                  Dail Now
                  <ArrowUpRight
                    className="text-zinc-300 group-hover:text-black transition-colors"
                    size={32}
                  />
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-8">
              {/* <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                Studio Address
              </h4>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-sm font-medium">
                12 Artisanal Way, <br />
                Lekki Phase 1, Lagos, <br />
                Nigeria.
              </p> */}
              <div className="bg-zinc-50 rounded-[40px] p-10 flex flex-col justify-between">
                <p className="text-2xl font-medium leading-tight">
                  "Every piece we craft is a conversation between the artisan
                  and the owner. We look forward to starting yours."
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="mt-12 w-full bg-black text-white py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all"
                >
                  Start a Conversation <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: CLEAN FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-50 rounded-[40px] p-8 md:p-12 shadow-sm"
          >
            <form className="flex flex-col gap-8" onSubmit={handleSend}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={emailData.fullName}
                    placeholder="John Doe"
                    required
                    className="bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-sm"
                    onChange={(e) =>
                      setEmailData({ ...emailData, fullName: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">
                    Email
                  </label>

                  <input
                    type="email"
                    value={emailData.email}
                    required
                    placeholder="john@example.com"
                    className="bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-sm"
                    onChange={(e) =>
                      setEmailData({ ...emailData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">
                  Subject
                </label>
                <select className="bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-sm appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Custom Commission</option>
                  <option>Press</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={emailData.message}
                  required
                  placeholder="Tell us about your project..."
                  className="bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none transition-colors text-sm resize-none"
                  onChange={(e) =>
                    setEmailData({ ...emailData, message: e.target.value })
                  }
                ></textarea>
              </div>

              {isLoading ? (
                <button
                  disabled
                  className="bg-gray-500 text-gray-300 w-full py-6 mt-4 font-black uppercase tracking-widest text-xs cursor-not-allowed"
                >
                  Please wait...
                </button>
              ) : (
                <button className="bg-black text-white w-full py-6 mt-4 font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all rounded-full flex items-center justify-center gap-2 cursor-pointer">
                  Send Message <Send size={14} />
                </button>
              )}
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Helper Link Component if not already imported
function Link({ href, children, className, target }: any) {
  return (
    <a href={href} target={target} className={className}>
      {children}
    </a>
  );
}
