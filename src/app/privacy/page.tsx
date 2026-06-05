import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-300 p-8 md:p-20 font-sans">
      <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-amber-500 mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>At AdsGuruAI, protecting your data is our top priority. This policy outlines how we handle your information.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. Information We Collect</h2>
          <p>We collect your name, email address, and authentication data when you sign up via Google Firebase. Payment details are securely processed via Razorpay; we do not store your credit card/bank details on our servers.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. How We Use Your Data</h2>
          <p>We use your data to provide AI services, manage subscriptions, and send important service updates. Your campaign inputs are processed by our AI partners (e.g., Google Gemini) solely for generating your ad copy.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Data Sharing</h2>
          <p>We absolutely do not sell, rent, or trade your personal information or business campaign data to any third parties.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-amber-500 hover:text-amber-400 font-semibold">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
