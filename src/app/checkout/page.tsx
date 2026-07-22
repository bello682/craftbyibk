// "use client";

// import { useState } from "react";
// import PaystackPop from "@paystack/inline-js";
// import {
//   CreditCard,
//   Lock,
//   CheckCircle2,
//   AlertCircle,
//   Loader2,
// } from "lucide-react";

// export default function CheckoutPage() {
//   const [email, setEmail] = useState("");
//   const [amount, setAmount] = useState<number | "">(5000); // Default NGN 5,000
//   const [loading, setLoading] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState<
//     "idle" | "success" | "failed"
//   >("idle");
//   const [reference, setReference] = useState("");

//   const handlePayment = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !amount || Number(amount) <= 0) {
//       alert("Please enter a valid email and amount");
//       return;
//     }

//     setLoading(true);
//     setPaymentStatus("idle");

//     // 1. Generate a unique transaction reference
//     const uniqueRef = `TRX_${Date.now()}_${Math.floor(Math.random() * 1000000)}`;

//     const paystackKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
//     if (!paystackKey) {
//       alert("Paystack Public Key is missing in environment variables.");
//       setLoading(false);
//       return;
//     }

//     // 2. Initialize Paystack Popup
//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//       key: paystackKey,
//       email: email,
//       amount: Number(amount) * 100, // Paystack expects amount in KOBO (multiply NGN by 100)
//       currency: "NGN",
//       ref: uniqueRef,
//       onSuccess: (transaction: { reference: string }) => {
//         setLoading(false);
//         setReference(transaction.reference);
//         setPaymentStatus("success");

//         // OPTIONAL: Call your backend API here to trigger instant status check
//         // fetch('/api/verify-payment', { method: 'POST', body: JSON.stringify({ reference: transaction.reference }) })
//       },
//       onCancel: () => {
//         setLoading(false);
//         alert("Transaction was cancelled by the user.");
//       },
//       onError: (error: any) => {
//         setLoading(false);
//         setPaymentStatus("failed");
//         console.error("Paystack Error:", error);
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
//           <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
//             <CreditCard className="h-6 w-6" />
//           </div>
//           <div>
//             <h1 className="text-lg font-bold">Sandbox Checkout</h1>
//             <p className="text-xs text-zinc-400">
//               Test Payment Gateway Integration
//             </p>
//           </div>
//         </div>

//         {/* Success Alert */}
//         {paymentStatus === "success" && (
//           <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 space-y-1">
//             <div className="flex items-center gap-2 font-semibold text-sm">
//               <CheckCircle2 className="h-4 w-4" />
//               Payment Received!
//             </div>
//             <p className="text-xs text-emerald-300/80 break-all">
//               Ref: <span className="font-mono">{reference}</span>
//             </p>
//             <p className="text-[11px] text-zinc-400 pt-1">
//               Your backend webhook will process this asynchronously.
//             </p>
//           </div>
//         )}

//         {/* Checkout Form */}
//         <form onSubmit={handlePayment} className="space-y-4">
//           <div>
//             <label className="block text-xs font-medium text-zinc-400 mb-1.5">
//               Customer Email
//             </label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="customer@example.com"
//               className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-medium text-zinc-400 mb-1.5">
//               Amount (NGN ₦)
//             </label>
//             <div className="relative">
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
//                 ₦
//               </span>
//               <input
//                 type="number"
//                 required
//                 min="100"
//                 value={amount}
//                 onChange={(e) =>
//                   setAmount(e.target.value ? Number(e.target.value) : "")
//                 }
//                 placeholder="5000"
//                 className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-3.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50"
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="h-4 w-4 animate-spin" />
//                 Initializing...
//               </>
//             ) : (
//               <>
//                 <Lock className="h-4 w-4" />
//                 Pay ₦{amount ? Number(amount).toLocaleString() : 0}
//               </>
//             )}
//           </button>
//         </form>

//         {/* Test Notice */}
//         <div className="mt-6 pt-4 border-t border-zinc-800/60 text-center">
//           <p className="text-[11px] text-zinc-500">
//             🔒 Sandbox Mode • Use Paystack test cards to simulate success or
//             failure.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
