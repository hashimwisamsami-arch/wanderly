import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Car,
  Compass,
  Hotel,
  MapPin,
  Plane,
  Search,
  Users,
} from "lucide-react";

import { animateTripSearch } from "../../animations/revealAnimations.js";

const tripTabs = [
  {
    id: "flights",
    label: "Flights",
    icon: Plane,
  },
  {
    id: "hotels",
    label: "Hotels/Stays",
    icon: Hotel,
  },
  {
    id: "cars",
    label: "Cars/Transfers",
    icon: Car,
  },
  {
    id: "experiences",
    label: "Experiences",
    icon: Compass,
  },
];

const initialForm = {
  from: "",
  to: "",
  departure: "",
  returnDate: "",
  travelers: "1 Traveler",
};

function SearchField({ icon: Icon, label, children }) {
  return (
    <div className="group flex min-h-18.5 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 transition-[border-color,background-color,box-shadow] duration-200 hover:border-sky-200 hover:bg-white focus-within:border-sky-300 focus-within:bg-white focus-within:shadow-[0_8px_20px_rgb(14_165_233/0.08)]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
        <Icon size={18} aria-hidden="true" />
      </span>

      <div className="min-w-0 flex-1">
        <label className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          {label}
        </label>

        {children}
      </div>
    </div>
  );
}

export default function TripSearch() {
  const searchRef = useRef(null);

  const [activeTab, setActiveTab] = useState("flights");
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!searchRef.current) return;

    const cleanup = animateTripSearch(searchRef.current);

    return cleanup;
  }, []);
  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Booking/search logic will be connected later.
    console.log({
      type: activeTab,
      ...form,
    });
  }

  return (
    <section
      ref={searchRef}
      className="relative z-20 -mt-8 px-4 pb-8 sm:-mt-10 sm:pb-10 lg:-mt-12 lg:pb-12"
      aria-label="Trip search"
    >
      <div className="mx-auto max-w-7xl">
        <div className="trip-search-card rounded-[1.75rem] border border-white/80 bg-white p-4 shadow-[0_20px_60px_rgb(15_42_95/0.14)] sm:p-5 lg:p-6">
          {/* Tabs */}
          <div
            className="trip-search-tabs flex flex-wrap items-center gap-1 border-b border-slate-100 pb-3"
            role="tablist"
            aria-label="Trip type"
          >
            {tripTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-3.5 text-xs font-semibold transition-[background-color,color,box-shadow] duration-200 sm:px-4 sm:text-sm",
                    isActive
                      ? "bg-sky-50 text-sky-700 shadow-sm"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800",
                  ].join(" ")}
                >
                  <Icon size={16} aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search form */}
          <form
            className="trip-search-form mt-4 grid gap-3 lg:grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr_auto]"
            onSubmit={handleSubmit}
          >
            <SearchField icon={MapPin} label="From">
              <input
                type="text"
                value={form.from}
                onChange={(event) => updateField("from", event.target.value)}
                placeholder="Departure city"
                className="mt-1 w-full bg-transparent text-sm font-medium text-[#0f2a5f] outline-none placeholder:text-slate-400"
              />
            </SearchField>

            <SearchField icon={MapPin} label="To">
              <input
                type="text"
                value={form.to}
                onChange={(event) => updateField("to", event.target.value)}
                placeholder="Destination"
                className="mt-1 w-full bg-transparent text-sm font-medium text-[#0f2a5f] outline-none placeholder:text-slate-400"
              />
            </SearchField>

            <SearchField icon={CalendarDays} label="Departure">
              <input
                type="date"
                value={form.departure}
                onChange={(event) =>
                  updateField("departure", event.target.value)
                }
                className="mt-1 w-full bg-transparent text-sm font-medium text-[#0f2a5f] outline-none"
              />
            </SearchField>

            <SearchField icon={CalendarDays} label="Return">
              <input
                type="date"
                value={form.returnDate}
                onChange={(event) =>
                  updateField("returnDate", event.target.value)
                }
                className="mt-1 w-full bg-transparent text-sm font-medium text-[#0f2a5f] outline-none"
              />
            </SearchField>

            <SearchField icon={Users} label="Travelers">
              <select
                value={form.travelers}
                onChange={(event) =>
                  updateField("travelers", event.target.value)
                }
                className="mt-1 w-full cursor-pointer bg-transparent text-sm font-medium text-[#0f2a5f] outline-none"
              >
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>3 Travelers</option>
                <option>4 Travelers</option>
                <option>5+ Travelers</option>
              </select>
            </SearchField>

            <button
              type="submit"
              className="group inline-flex min-h-18.5 items-center justify-center gap-2 rounded-2xl bg-[#0f2a5f] px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgb(15_42_95/0.18)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#163a70] hover:shadow-[0_16px_30px_rgb(15_42_95/0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            >
              Search Trips
              <Search
                size={17}
                className="transition-transform duration-200 group-hover:scale-105"
                aria-hidden="true"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
