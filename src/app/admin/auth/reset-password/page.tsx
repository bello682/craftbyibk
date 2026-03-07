"use client";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessages,
  resetPassword,
} from "../../../../lib/store/redux/adminAuthSlice";
import { AppDispatch, RootState } from "../../../../lib/store/store";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPasswordPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;
    const newOtp = [
      ...otp.map((d, idx) => (idx === index ? element.value : d)),
    ];
    setOtp(newOtp);
    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const onSubmit = async (data: any) => {
    const email = localStorage.getItem("resetEmail");
    const otpString = otp.join("");

    const payload = {
      email,
      otp: otpString,
      newPassword: data.newPassword,
    };

    const result = await dispatch(resetPassword(payload));
    if (resetPassword.fulfilled.match(result)) {
      localStorage.removeItem("resetEmail");
      // router.push("/admin/auth/admin-login");

      // SUCCESS
      toast.success(
        `Password reset successful, ${result.payload.admin?.fullName || "Admin password reset successful"}!`,
        {
          style: { borderRadius: "15px", background: "#18181b", color: "#fff" },
        },
      );

      // The token is already set in localStorage by the Thunk logic
      // We give the toast a moment to breathe before redirecting
      setTimeout(() => router.push("/admin/auth/admin-login"), 1500);
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
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-md w-full bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm"
      >
        <h2 className="text-3xl font-serif text-center mb-6">
          Create New Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* OTP Section */}
          <div>
            <label className="block text-center text-sm text-zinc-500 mb-4">
              Enter 6-digit Reset Code
            </label>
            <div className="flex justify-between gap-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={data}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  className="w-full h-14 border border-zinc-200 rounded-xl text-center text-xl font-bold focus:ring-2 focus:ring-black outline-none transition-all"
                />
              ))}
            </div>
          </div>

          {/* Password Section */}
          <div className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              {...register("newPassword", { required: true, minLength: 6 })}
              className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              {...register("confirmPassword", {
                validate: (val, d) =>
                  val === watch("newPassword") || "Passwords do not match",
              })}
              className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black transition-all"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center italic">{error}</p>
          )}

          <button
            disabled={loading}
            className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold shadow-lg hover:bg-black transition-all disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
