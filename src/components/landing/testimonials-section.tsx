"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "AdsGuruAI cut our CPC by 40% in just one week. The regional language ad copies are a game-changer for our local clients.",
    name: "Rahul S.",
    role: "Agency Owner",
    avatar: "RS",
  },
  {
    quote: "Finally, a Google Ads tool that understands the Indian market. The WhatsApp lead integration is pure magic!",
    name: "Priya M.",
    role: "E-com Founder",
    avatar: "PM",
  },
  {
    quote: "The zero-code landing page builder saved us thousands of rupees. We deploy campaigns 10x faster now.",
    name: "Amit D.",
    role: "Freelance Marketer",
    avatar: "AD",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Trusted by{" "}
          <span className="gradient-text">500+ Indian Marketers & Agencies</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 border border-[#F59E0B]/20 hover:border-[#F59E0B]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] group"
            >
              {/* 5-Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B] drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-base leading-relaxed mb-8">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EA580C] flex items-center justify-center text-[#0F172A] font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-[#9CA3AF] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
