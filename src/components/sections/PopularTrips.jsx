import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import { trips } from "../../constants/trips.js";
import { animatePopularTrips } from "../../animations/revealAnimations.js";
import TripCard from "../ui/TripCard.jsx";

export default function PopularTrips() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    return animatePopularTrips(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="popular-trips-title"
    >
      <div className="page-container">
        <div className="popular-trips-header mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Featured journeys
            </p>

            <h2
              id="popular-trips-title"
              className="text-3xl font-bold uppercase tracking-[-0.03em] text-[#0f2a5f] sm:text-4xl"
            >
              Trips worth taking
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A few journeys to put on your list.
            </p>
          </div>

          <NavLink
            to="/trips"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#0f2a5f] shadow-sm transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
          >
            View All Trips
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </NavLink>
        </div>

        <div className="popular-trips-grid grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {trips.map((trip) => (
            <TripCard
              key={trip.id}
              title={trip.title}
              location={trip.location}
              duration={trip.duration}
              price={trip.price}
              rating={trip.rating}
              image={trip.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
