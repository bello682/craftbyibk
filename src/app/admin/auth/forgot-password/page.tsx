"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPassword,
  clearMessages,
} from "../../../../lib/store/redux/adminAuthSlice";
import { AppDispatch, RootState } from "../../../../lib/store/store";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ForgotPasswordPage() {
  const { register, handleSubmit, watch } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, successMessage } = useSelector(
    (state: RootState) => state.auth,
  );

  const emailValue = watch("email");

  const onSubmit = async (data: any) => {
    const result = await dispatch(forgotPassword(data.email));
    if (forgotPassword.fulfilled.match(result)) {
      // Store email locally so Reset Password page knows who to verify
      localStorage.setItem("resetEmail", data.email);

      // SUCCESS
      toast.success(
        `OTP sent to ${result.payload.admin?.fullName! || "Admin otp sent!"}!`,
        {
          style: { borderRadius: "15px", background: "#18181b", color: "#fff" },
        },
      );

      setTimeout(() => {
        router.push("/admin/auth/reset-password");
      }, 2000);
    } else {
      // ERROR
      toast.error((result.payload as string) || "Invalid Credentials", {
        style: { borderRadius: "15px" },
      });
    }
  };

  useEffect(() => {
    dispatch(clearMessages());
    // If you want to force loading to false on mount, you can create
    // a specific 'resetLoading' action in your slice, but the
    // Matcher fix above usually solves this.
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      {/* This renders the toast notifications */}
      {/* <Toaster position="top-center" reverseOrder={false} /> */}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm italic"
          >
            {error}
          </motion.p>
        )}
        {successMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-emerald-600 text-sm font-medium"
          >
            {successMessage} Redirecting...
          </motion.p>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white p-10 rounded-3xl shadow-sm border border-zinc-200"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-serif text-zinc-900">Restore Access</h2>
          <p className="text-zinc-500 mt-2">
            Enter your email to receive a reset code.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="admin@craftbyibk.com"
              className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:ring-2 focus:ring-black transition-all"
            />
          </div>

          <button
            disabled={loading}
            className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all disabled:opacity-50"
          >
            {loading ? "Sending Code..." : "Send Reset OTP"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/admin/auth/admin-login"
            className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            ← Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
