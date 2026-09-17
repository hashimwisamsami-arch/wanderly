import { ArrowRight, Compass } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section
      className="final-cta relative overflow-hidden bg-[#0f5fa8] py-16 sm:py-20 lg:py-24"
      aria-labelledby="final-cta-title"
    >
      {/* Decorative atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <span className="absolute -right-24 -top-24 size-80 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <div className="page-container relative">
        <div className="final-cta-content mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="final-cta-icon mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white">
            <Compass size={25} strokeWidth={1.7} aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2
            id="final-cta-title"
            className="final-cta-title mt-6 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
          >
            YOUR NEXT JOURNEY
            <span className="block">STARTS HERE</span>
          </h2>

          {/* Description */}
          <p className="final-cta-description mx-auto mt-5 max-w-2xl text-sm leading-7 text-sky-50/85 sm:text-base">
            Find a destination that excites you and start planning the trip
            you've been thinking about.
          </p>

          {/* Actions */}
          <div className="final-cta-actions mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NavLink
              to="/trips"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#0f2a5f] shadow-[0_12px_30px_rgb(15_42_95/0.16)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-sky-50 hover:shadow-[0_16px_34px_rgb(15_42_95/0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f5fa8]"
            >
              Explore Trips
              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </NavLink>

            <NavLink
              to="/destinations"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-[2px] transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f5fa8]"
            >
              Browse Destinations
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
