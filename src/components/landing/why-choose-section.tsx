"use client";

import { Globe, TrendingDown, Wand2, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Built for the Indian Market",
    description:
      "Stop struggling with English prompts. Generate high-converting ads in Hindi, Tamil, Telugu, and more. Plus, target local Indian pin-codes effortlessly.",
  },
  {
    icon: TrendingDown,
    title: "Stop Wasting Your Budget",
    description:
      "Tired of fake clicks? Our AI automatically builds Indian negative keyword lists and sets smart ad schedules to protect your daily budget.",
  },
  {
    icon: Wand2,
    title: "Zero-Code Magic",
    description:
      "You don't need a developer. From writing Performance Max assets to building complete landing pages with Privacy Policies—do it all in one click.",
  },
  {
    icon: MessageCircle,
    title: "Leads Straight to WhatsApp",
    description:
      "Forget complicated CRMs. AdsGuruAI connects your campaigns directly to WhatsApp, so you can close high-intent leads instantly from your phone.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#EA580C]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Top Marketers Choose{" "}
            <span className="gradient-text">AdsGuruAI</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We didn&apos;t just build an AI tool. We built a Google Ads expert
            that understands Indian businesses.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)]"
              style={{
                borderTop: "2px solid rgba(245, 158, 11, 0.5)",
              }}
            >
              {/* Icon with glow */}
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-[#F59E0B]/20 rounded-full blur-xl scale-150 group-hover:bg-[#F59E0B]/30 transition-colors" />
                <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F59E0B]/20 to-[#EA580C]/20 border border-[#F59E0B]/30">
                  <feature.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#F59E0B] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F59E0B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
