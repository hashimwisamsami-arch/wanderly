import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarDays, Check, MapPin, Users } from "lucide-react";
import { gsap } from "gsap";

import { Spotlight } from "../components/ui/spotlight";
import { BorderBeam } from "../components/ui/border-beam";
import { trips } from "../constants/trips.js";

const initialForm = {
  trip: trips[0]?.id ?? "",
  departure: "",
  returnDate: "",
  travelers: "1",
  fullName: "",
  email: "",
};

export default function Bookings() {
  const pageRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const root = pageRef.current;

    if (!root) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const hero = root.querySelector(".booking-hero-content");
    const bookingCard = root.querySelector(".booking-card");
    const summary = root.querySelector(".booking-summary");

    if (reduceMotion) {
      gsap.set([hero, bookingCard, summary], {
        opacity: 1,
        y: 0,
      });

      return undefined;
    }

    gsap.set(hero, {
      opacity: 0,
      y: 24,
    });

    gsap.set(bookingCard, {
      opacity: 0,
      y: 30,
    });

    gsap.set(summary, {
      opacity: 0,
      y: 20,
    });

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .to(hero, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      })
      .to(
        bookingCard,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        "-=0.3",
      )
      .to(
        summary,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.25",
      );

    return () => {
      gsap.killTweensOf([hero, bookingCard, summary]);
    };
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  const selectedTrip = trips.find((trip) => trip.id === form.trip) ?? trips[0];

  return (
    <main ref={pageRef} className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f5fa8] py-28 sm:py-32 lg:py-36">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        <div className="page-container relative z-10">
          <div className="booking-hero-content mx-auto max-w-3xl text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              Start planning
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              BOOK YOUR
              <span className="block">JOURNEY</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-sky-50/85 sm:text-base">
              Choose your trip, select your dates, and tell us how many
              travelers are joining you.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="page-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)] lg:items-start">
            {/* Form */}
            <div className="booking-card relative overflow-hidden rounded-panel border border-slate-100 bg-white p-6 shadow-[0_12px_35px_rgb(15_42_95/0.07)] sm:p-8">
              <BorderBeam
                size={110}
                duration={9}
                borderWidth={1.5}
                colorFrom="#38bdf8"
                colorTo="#2563eb"
              />

              <div className="relative">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
                    Booking details
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#0f2a5f]">
                    Plan your trip
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Fill in the details below to prepare your booking request.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Trip */}
                  <div>
                    <label
                      htmlFor="trip"
                      className="mb-2 block text-sm font-semibold text-[#0f2a5f]"
                    >
                      Choose a trip
                    </label>

                    <select
                      id="trip"
                      name="trip"
                      value={form.trip}
                      onChange={handleChange}
                      className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-[border-color,box-shadow] duration-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    >
                      {trips.map((trip) => (
                        <option key={trip.id} value={trip.id}>
                          {trip.title} — {trip.location}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dates */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="departure"
                        className="mb-2 block text-sm font-semibold text-[#0f2a5f]"
                      >
                        Departure
                      </label>

                      <div className="relative">
                        <CalendarDays
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          aria-hidden="true"
                        />

                        <input
                          id="departure"
                          name="departure"
                          type="date"
                          value={form.departure}
                          onChange={handleChange}
                          className="min-h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition-[border-color,box-shadow] duration-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="returnDate"
                        className="mb-2 block text-sm font-semibold text-[#0f2a5f]"
                      >
                        Return
                      </label>

                      <div className="relative">
                        <CalendarDays
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          aria-hidden="true"
                        />

                        <input
                          id="returnDate"
                          name="returnDate"
                          type="date"
                          value={form.returnDate}
                          onChange={handleChange}
                          className="min-h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition-[border-color,box-shadow] duration-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Travelers */}
                  <div>
                    <label
                      htmlFor="travelers"
                      className="mb-2 block text-sm font-semibold text-[#0f2a5f]"
                    >
                      Travelers
                    </label>

                    <div className="relative">
                      <Users
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        aria-hidden="true"
                      />

                      <select
                        id="travelers"
                        name="travelers"
                        value={form.travelers}
                        onChange={handleChange}
                        className="min-h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition-[border-color,box-shadow] duration-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      >
                        <option value="1">1 traveler</option>
                        <option value="2">2 travelers</option>
                        <option value="3">3 travelers</option>
                        <option value="4">4 travelers</option>
                        <option value="5">5 travelers</option>
                        <option value="6+">6+ travelers</option>
                      </select>
                    </div>
                  </div>

                  {/* Personal details */}
                  <div className="border-t border-slate-100 pt-6">
                    <p className="text-sm font-semibold text-[#0f2a5f]">
                      Your details
                    </p>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Full name
                        </label>

                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 transition-[border-color,box-shadow] duration-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 transition-[border-color,box-shadow] duration-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-6 text-sm font-semibold text-white shadow-[0_10px_25px_rgb(14_165_233/0.2)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-[0_14px_30px_rgb(14_165_233/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  >
                    Request Booking
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>

                  {submitted && (
                    <div
                      role="status"
                      className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      />

                      <p>
                        Your booking request has been prepared successfully.
                        This demo does not submit a real reservation.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Summary */}
            <aside className="booking-summary lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-panel border border-slate-100 bg-white shadow-[0_12px_35px_rgb(15_42_95/0.07)]">
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={selectedTrip.image}
                    alt={selectedTrip.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#071b38]/70 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <MapPin size={13} aria-hidden="true" />
                      {selectedTrip.location}
                    </div>

                    <h2 className="mt-1 text-xl font-bold">
                      {selectedTrip.title}
                    </h2>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
                    Selected trip
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Duration</span>

                      <span className="font-semibold text-[#0f2a5f]">
                        {selectedTrip.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Travelers</span>

                      <span className="font-semibold text-[#0f2a5f]">
                        {form.travelers}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="text-sm text-slate-500">
                        Starting from
                      </span>

                      <span className="text-xl font-bold text-[#0f2a5f]">
                        {selectedTrip.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <p className="text-sm font-semibold text-[#0f2a5f]">
                  Need help?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  If you need help choosing a trip or preparing your booking,
                  contact the Wanderly travel support team.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
