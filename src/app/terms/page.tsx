import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-300 p-8 md:p-20 font-sans">
      <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-amber-500 mb-8">Terms & Conditions</h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>Welcome to AdsGuruAI. By accessing or using our website and services, you agree to comply with and be bound by the following terms.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. Service Usage</h2>
          <p>AdsGuruAI provides AI-powered tools for generating digital ad copies and managing advertising campaigns. You agree to use our services only for lawful purposes and in compliance with Google Ads policies.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Account Security</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials. Any activity happening under your account is your responsibility.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Fair Use & Rate Limiting</h2>
          <p>Our "Unlimited" plans are subject to a fair use policy to prevent bot abuse and system overload. AdsGuruAI reserves the right to rate-limit or suspend accounts engaged in abusive, automated scraping, or illegal activities.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Liability</h2>
          <p>AdsGuruAI provides AI suggestions. We do not guarantee specific sales, ROAS, or business growth. Advertising involves financial risk, and you are solely responsible for the budget spent on third-party platforms like Google Ads.</p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-amber-500 hover:text-amber-400 font-semibold">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
