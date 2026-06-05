import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-300 p-8 md:p-20 font-sans">
      <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-amber-500 mb-8">Refund & Cancellation Policy</h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>Last updated: June 2026</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. No Refund Policy</h2>
          <p>AdsGuruAI is a SaaS (Software as a Service) platform that provides digital AI generation credits and tools. Due to the immediate consumption nature of digital services and AI processing costs, <strong>all sales are final and strictly non-refundable</strong>.</p>
          <p>Once a subscription is purchased or credits are added to your account, we cannot issue a refund, partial refund, or credit for any unused AI requests or days remaining in your subscription plan.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Cancellation Policy</h2>
          <p>You can cancel your subscription at any time to prevent future automatic billing. Cancellation will take effect at the end of your current billing cycle.</p>
          <p>To cancel your subscription, please navigate to the "Billing & Plans" section in your Dashboard or contact our support team.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Upgrades and Downgrades</h2>
          <p>If you upgrade your plan, the new billing rate will be applied immediately. Downgrading a plan will take effect from the next billing cycle. No prorated refunds are provided for downgrades.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-amber-500 hover:text-amber-400 font-semibold flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
