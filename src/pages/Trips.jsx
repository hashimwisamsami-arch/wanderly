import { CalendarDays, MapPin, Star } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Spotlight } from "../components/ui/spotlight";
import { BorderBeam } from "../components/ui/border-beam";
import { trips } from "../constants/trips.js";

function TripCard({ trip, featured = false }) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-panel border bg-white shadow-[0_10px_30px_rgb(15_42_95/0.06)]",
        "transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-1 hover:border-sky-100 hover:shadow-[0_18px_40px_rgb(15_42_95/0.1)]",
        featured ? "border-sky-200" : "border-slate-100",
      ].join(" ")}
    >
      {featured && (
        <BorderBeam
          size={100}
          duration={8}
          borderWidth={1.5}
          colorFrom="#38bdf8"
          colorTo="#2563eb"
        />
      )}

      <div className="relative aspect-16/10 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0f2a5f] backdrop-blur-sm">
            {trip.duration}
          </span>

          <span className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0f2a5f] backdrop-blur-sm">
            <Star size={13} fill="currentColor" aria-hidden="true" />
            {trip.rating}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <MapPin size={14} aria-hidden="true" />
          {trip.location}
        </div>

        <h2 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#0f2a5f]">
          {trip.title}
        </h2>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500">Starting from</p>
            <p className="mt-1 text-lg font-bold text-[#0f2a5f]">
              {trip.price}
            </p>
          </div>

          <NavLink
            to="/bookings"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-sky-600 px-4 text-sm font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            View Trip
            <CalendarDays size={15} aria-hidden="true" />
          </NavLink>
        </div>
      </div>
    </article>
  );
}

export default function Trips() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f5fa8] py-28 sm:py-32">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        <div className="page-container relative z-10">
          <div className="mx-auto max-w-3xl text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              Wanderly Trips
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              EXPLORE OUR
              <span className="block">TRIPS</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-sky-50/85 sm:text-base">
              Discover thoughtfully planned journeys, inspiring destinations,
              and travel experiences made easier with Wanderly.
            </p>
          </div>
        </div>
      </section>

      {/* Trips */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="page-container">
          <div className="mb-8 flex flex-col gap-2 sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
              Choose your journey
            </p>

            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#0f2a5f] sm:text-3xl">
              Trips worth taking
            </h2>

            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              Browse a selection of journeys designed for different travel
              styles and unforgettable experiences.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trips.map((trip, index) => (
              <TripCard key={trip.id} trip={trip} featured={index === 1} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
