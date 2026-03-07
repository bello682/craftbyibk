"use client";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  verifyOTP,
  resendOTP,
  clearMessages,
  logout,
} from "../../../../lib/store/redux/adminAuthSlice";
import { AppDispatch, RootState } from "../../../../lib/store/store";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error, successMessage } = useSelector(
    (state: RootState) => state.auth,
  );

  // Inside your component, update the handleChange and inputs:
  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Get only the last character
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    // Get email from storage
    const email =
      typeof window !== "undefined" ? localStorage.getItem("pendingEmail") : "";

    if (!email) {
      toast.error("Session expired. Please register again.");
      return;
    }

    const result = await dispatch(verifyOTP({ email, otp: otpString }));
    if (verifyOTP.fulfilled.match(result)) {
      // 1. CLEAR THE REDUX STATE IMMEDIATELY
      // This prevents AdminLayout from seeing 'isVerified: true' and redirecting to Dashboard
      dispatch(logout());

      // Clean up storage after successful verification
      localStorage.removeItem("pendingEmail");

      // SUCCESS
      toast.success(
        `Verification Successful ${result.payload.admin?.fullName! || "Verification Successful! Please login"}!`,
        {
          style: { borderRadius: "15px", background: "#18181b", color: "#fff" },
        },
      );

      setTimeout(() => {
        router.push("/admin/auth/admin-login");
      }, 2000);
    } else {
      // ERROR
      toast.error((result.payload as string) || "Invalid Credentials", {
        style: { borderRadius: "15px" },
      });
    }
  };

  const handleResend = () => {
    const email =
      typeof window !== "undefined" ? localStorage.getItem("pendingEmail") : "";
    if (email) {
      dispatch(resendOTP(email));
      // SUCCESS
      toast.success("OTP resent successfully! Please check your email.", {
        style: { borderRadius: "15px", background: "#18181b", color: "#fff" },
      });
    } else {
      // ERROR
      toast.error("Email not found. Please try again.", {
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md w-full text-center"
      >
        <h2 className="text-3xl font-serif mb-4 text-zinc-900">
          Verify Identity
        </h2>
        <p className="text-zinc-500 mb-8">
          Enter the 6-digit code sent to your email.
        </p>

        <div className="flex justify-center gap-2 mb-8">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              // Corrected Ref Callback
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              value={data}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-16 border-2 rounded-xl text-center text-2xl font-bold bg-white border-zinc-200 focus:border-black outline-none transition-all"
            />
          ))}
        </div>

        <button
          type="button" // Explicitly set type to button
          onClick={(e) => {
            e.preventDefault();
            handleVerify();
          }}
          disabled={loading}
          className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
        >
          {loading ? "Verifying..." : "Confirm Code"}
        </button>

        <button
          type="button"
          onClick={handleResend}
          className="mt-6 text-zinc-500 underline text-sm"
        >
          Didn't get a code? Resend
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </motion.div>
    </div>
  );
}
