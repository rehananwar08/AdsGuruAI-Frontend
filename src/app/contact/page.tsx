import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-300 p-8 md:p-20 font-sans flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl text-center">
        <h1 className="text-4xl font-bold text-amber-500 mb-6">Contact Us</h1>
        <p className="mb-8 text-gray-400">Have questions about our plans or need support? We're here to help.</p>
        
        <div className="space-y-6 text-left bg-[#0A1122] p-8 rounded-2xl border border-white/5">
          <div>
            <h3 className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email Support</h3>
            {/* ⚠️ Baad mein apna asli email yahan daaliyega */}
            <p className="text-lg text-white font-medium">support@adsguruai.in</p>
          </div>
          
          <div>
            <h3 className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Phone</h3>
            {/* ⚠️ Baad mein apna asli phone number yahan daaliyega */}
            <p className="text-lg text-white font-medium">+91-9876543210</p>
            <p className="text-xs text-gray-500 mt-1">Available Mon-Fri, 10 AM - 6 PM IST</p>
          </div>

          <div>
            <h3 className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Registered Office</h3>
            {/* ✅ Aapka Darbhanga ka address update kar diya gaya hai */}
            <p className="text-white leading-relaxed">
              Ward- 31 S M Zubair Colony Chakrahmat Bhigo,<br />
              Darbhanga, Bihar, India - 846004
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-amber-500 hover:text-amber-400 font-semibold">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
