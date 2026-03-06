"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../../../lib/store/redux/adminAuthSlice";
import { AppDispatch, RootState } from "../../../../lib/store/store";
import { motion } from "framer-motion";
import Link from "next/link";
import { Lock, UserPlus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast"; // 🍞 Toast import
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading } = useSelector((state: RootState) => state.auth);

  const onSubmit = async (data: any) => {
    const result = await dispatch(loginAdmin(data));

    if (loginAdmin.fulfilled.match(result)) {
      // SUCCESS
      toast.success(
        `Welcome back, ${result.payload.admin?.fullName || "Admin"}!`,
        {
          style: { borderRadius: "15px", background: "#18181b", color: "#fff" },
        },
      );

      // The token is already set in localStorage by the Thunk logic
      // We give the toast a moment to breathe before redirecting
      setTimeout(() => router.push("/admin/dashboard"), 1500);
    } else {
      // ERROR
      toast.error((result.payload as string) || "Invalid Credentials", {
        style: { borderRadius: "15px" },
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      {/* This renders the toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-md w-full p-8 bg-white rounded-3xl shadow-2xl border border-zinc-100"
      >
        <div className="text-center mb-10">
          {/* <div className="inline-flex items-center justify-center w-50 h-16 bg-zinc-900 text-white rounded-2xl mb-4 shadow-lg">
            <span className="text-2xl font-serif"> Craft_ByIbk</span>
          </div> */}
          <h1 className="text-4xl font-serif text-zinc-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-zinc-400 mt-2 italic">
            Craft_ByIbk Artisan Portal
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="group">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
            />
          </div>

          <div className="group">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center justify-end">
            <Link
              href="/admin/auth/forgot-password"
              className="text-xs font-medium text-zinc-400 hover:text-black flex items-center gap-1 transition-colors uppercase tracking-widest"
            >
              <Lock size={12} />
              Forgot Access?
            </Link>
          </div>

          <button
            disabled={loading}
            className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold shadow-xl hover:bg-black transform hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 disabled:translate-y-0"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing In...
              </span>
            ) : (
              "Enter Dashboard"
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-zinc-50 text-center">
          <p className="text-zinc-400 text-sm">
            Not registered?{" "}
            <Link
              href="/admin/auth/register"
              className="text-zinc-900 font-bold hover:underline inline-flex items-center gap-1"
            >
              Request Access
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
