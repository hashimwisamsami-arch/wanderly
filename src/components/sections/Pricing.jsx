import { useEffect, useRef } from "react";
import { Plane, Sparkles } from "lucide-react";

import { pricingPlans } from "../../constants/pricing.js";
import { animatePricing } from "../../animations/revealAnimations.js";
import PricingCard from "../ui/PricingCard.jsx";

export default function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    return animatePricing(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0f5fa8] py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="pricing-title"
    >
      {/* Decorative atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="absolute -left-24 top-20 size-72 rounded-full bg-white/10 blur-3xl" />
        <span className="absolute bottom-0 right-0 size-96 rounded-full bg-sky-300/10 blur-3xl" />

        <span className="absolute left-[36%] top-[16%] size-3 rounded-full bg-white/30" />
        <span className="absolute left-[42%] top-[68%] size-2 rounded-full bg-white/40" />
        <span className="absolute left-[17%] top-[48%] size-2 rounded-full bg-white/25" />
      </div>

      <div className="page-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.8fr] xl:gap-16">
          {/* Left visual/content */}
          <div className="pricing-intro max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
              Flexible packages
            </p>

            <h2
              id="pricing-title"
              className="text-4xl font-bold uppercase leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              Choose your
              <span className="block">travel style</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-sky-50/85 sm:text-base">
              Select the level of comfort and service that works best for your
              journey.
            </p>

            {/* Plane visual */}
            <div className="pricing-visual relative mt-12 h-56 max-w-sm">
              <div className="absolute left-0 top-1/2 h-px w-full border-t border-dashed border-white/30" />

              <div className="absolute left-[12%] top-[42%] h-20 w-20 rounded-full border border-white/20" />

              <div className="absolute left-[38%] top-[18%] h-28 w-28 rounded-full border border-white/10" />

              <div className="absolute left-[48%] top-[42%] flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
                <Plane
                  size={25}
                  className="rotate-[-18deg] text-white"
                  strokeWidth={1.7}
                />
              </div>

              <div className="absolute right-[4%] top-[20%]">
                <Sparkles
                  size={18}
                  className="text-sky-100/70"
                  aria-hidden="true"
                />
              </div>

              <span className="absolute left-[7%] bottom-[20%] size-2 rounded-full bg-white/60" />
              <span className="absolute left-[25%] bottom-[12%] size-1.5 rounded-full bg-white/40" />
              <span className="absolute right-[22%] bottom-[24%] size-2 rounded-full bg-white/50" />
            </div>
          </div>

          {/* Pricing cards */}
          <div className="pricing-grid grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
