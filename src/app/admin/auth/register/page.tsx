"use client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessages,
  registerAdmin,
} from "../../../../lib/store/redux/adminAuthSlice";
import { AppDispatch, RootState } from "../../../../lib/store/store";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const result = await dispatch(registerAdmin(data));
    if (registerAdmin.fulfilled.match(result)) {
      // SUCCESS
      toast.success(
        `OTP sent to ${result.payload.admin?.fullName! || "Admin otp sent!"}!`,
        {
          style: { borderRadius: "15px", background: "#18181b", color: "#fff" },
        },
      );

      setTimeout(() => {
        router.push("/admin/auth/verify-otp");
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-zinc-200"
      >
        <h2 className="text-3xl font-serif text-zinc-900 mb-2">
          Join the Craft_ByIbk Team
        </h2>
        <p className="text-zinc-500 mb-8">
          Create your admin account for Craft_ByIbk.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Full Name
            </label>
            <input
              {...register("fullName", { required: "Name is required" })}
              className="w-full mt-1 px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full mt-1 px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: 6,
              })}
              className="w-full mt-1 px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            disabled={loading}
            className="w-full py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-medium disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register Admin"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-600">
          Already have an account?{" "}
          <Link href="/admin/auth/admin-login" className="font-bold underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
