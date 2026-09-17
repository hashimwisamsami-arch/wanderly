import { ArrowRight, Map, Plane } from "lucide-react";
import { NavLink } from "react-router-dom";

const primaryButtonClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f2a5f] shadow-[0_12px_30px_rgb(15_42_95/0.15)] transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-[0_16px_34px_rgb(15_42_95/0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const secondaryButtonClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-white/75 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export default function Hero() {
  return (
    <section className="relative isolate min-h-180 overflow-hidden bg-[#75c9f4] text-white sm:min-h-190 lg:min-h-screen">
      {/* Soft readable overlay */}
      <div
        className="absolute inset-0 -z-10 bg-[#0f2a5f]/10"
        aria-hidden="true"
      />

      {/* Decorative travel atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <span className="hero-cloud hero-cloud-one" />
        <span className="hero-cloud hero-cloud-two" />
        <span className="hero-cloud hero-cloud-three" />
      </div>

      <div className="page-container relative flex min-h-180 items-center py-28 sm:min-h-190 sm:py-32 lg:min-h-screen lg:py-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-16">
          {/* Content */}
          <div className="max-w-2xl">
            <p className="hero-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              <span
                className="size-1.5 rounded-full bg-white"
                aria-hidden="true"
              />
              Travel beyond the ordinary
            </p>

            <h1 className="hero-title max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              GO WHERE YOUR STORY BEGINS
            </h1>

            <p className="hero-support mt-6 text-base font-semibold tracking-[0.01em] text-white/90 sm:text-lg">
              See more. Feel more. Travel differently.
            </p>

            <p className="hero-description mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Thoughtfully planned journeys, inspiring destinations, and
              flexible packages designed to make every trip easier to enjoy.
            </p>

            <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
              <NavLink to="/trips" className={primaryButtonClasses}>
                Explore Trips
                <ArrowRight size={17} aria-hidden="true" />
              </NavLink>

              <NavLink to="/destinations" className={secondaryButtonClasses}>
                View Destinations
                <Map size={17} aria-hidden="true" />
              </NavLink>
            </div>
          </div>

          {/* Travel visual */}
          <div
            className="hero-visual relative mx-auto h-85 w-full max-w-140 sm:h-107.5 lg:h-125"
            aria-hidden="true"
          >
            {/* Dotted flight path */}
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 560 500"
              fill="none"
            >
              <path
                className="hero-flight-path"
                d="M80 390C132 338 132 255 196 224C248 198 276 242 320 216C376 182 360 110 438 92"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 10"
                opacity="0.58"
              />
            </svg>

            {/* Small plane */}
            <div className="hero-plane absolute left-[52%] top-[37%]">
              <Plane
                size={28}
                strokeWidth={1.8}
                className="rotate-[-18deg] text-white drop-shadow-[0_5px_10px_rgb(15_42_95/0.14)]"
              />
            </div>

            {/* Kite */}
            <div className="hero-kite absolute right-[12%] top-[13%]">
              <div className="relative h-14 w-14 rotate-45 rounded-[10px] border-2 border-white/75 bg-white/15 shadow-[0_12px_25px_rgb(15_42_95/0.12)] backdrop-blur-[2px]">
                <span className="absolute left-1/2 top-1/2 h-8 w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/60" />
                <span className="absolute left-1/2 top-1/2 h-8 w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/60" />
              </div>

              <span className="absolute left-1/2 top-12 h-20 w-px -translate-x-1/2 rotate-[-8deg] border-l border-dashed border-white/65" />
              <span className="absolute left-[calc(50%-3px)] top-26 size-1.5 rounded-full bg-white/70" />
              <span className="absolute left-[calc(50%+5px)] top-29 size-1.5 rounded-full bg-white/55" />
            </div>

            {/* Decorative travel card */}
            <div className="hero-travel-card absolute right-[3%] top-[52%] w-44 rounded-[1.5rem] border border-white/25 bg-white/10 p-4 backdrop-blur-md sm:w-52">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/15">
                  <Map size={18} className="text-white" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    Discover
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    New stories
                  </p>
                </div>
              </div>

              <div className="mt-4 h-px bg-white/15" />

              <div className="mt-4 flex items-center justify-between text-[11px] text-white/70">
                <span>Explore freely</span>
                <span>∞</span>
              </div>
            </div>

            {/* Landmark silhouettes */}
            <div className="absolute bottom-[7%] left-[4%] flex items-end gap-1.5 opacity-40">
              <span className="h-20 w-7 rounded-t-sm bg-[#0f2a5f]/35" />
              <span className="relative h-28 w-10 rounded-t-sm bg-[#0f2a5f]/40">
                <span className="absolute -top-5 left-1/2 h-6 w-1 -translate-x-1/2 rounded-full bg-[#0f2a5f]/40" />
              </span>
              <span className="h-16 w-8 rounded-t-sm bg-[#0f2a5f]/30" />
              <span className="h-24 w-6 rounded-t-sm bg-[#0f2a5f]/35" />
              <span className="h-14 w-11 rounded-t-sm bg-[#0f2a5f]/25" />
            </div>

            {/* Decorative circles */}
            <span className="absolute left-[20%] top-[18%] size-4 rounded-full border border-white/40" />
            <span className="absolute bottom-[25%] right-[30%] size-2.5 rounded-full bg-white/50" />
            <span className="absolute right-[18%] top-[42%] size-3 rounded-full border border-white/45" />
          </div>
        </div>
      </div>
    </section>
  );
}
