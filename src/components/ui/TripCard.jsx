import { CalendarDays, MapPin, Star } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function TripCard({
  title,
  location,
  duration,
  price,
  rating,
  image,
}) {
  return (
    <article className="trip-card group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-[0_12px_32px_rgb(15_42_95/0.07)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgb(15_42_95/0.11)]">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0f2a5f] shadow-sm backdrop-blur-sm">
          <Star size={13} fill="currentColor" aria-hidden="true" />
          {rating}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0f2a5f]">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin
            size={15}
            className="shrink-0 text-sky-600"
            aria-hidden="true"
          />
          <span>{location}</span>
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays
            size={15}
            className="shrink-0 text-sky-600"
            aria-hidden="true"
          />
          <span>{duration}</span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
              From
            </p>

            <p className="mt-1 text-xl font-bold text-[#0f2a5f]">{price}</p>
          </div>

          <NavLink
            to="/trips"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-sky-100 bg-sky-50 px-4 text-sm font-semibold text-sky-700 transition-[background-color,color,border-color] duration-200 hover:border-sky-600 hover:bg-sky-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
          >
            View Trip
          </NavLink>
        </div>
      </div>
    </article>
  );
}
