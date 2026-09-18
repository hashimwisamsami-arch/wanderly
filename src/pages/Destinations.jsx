import { useEffect, useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

import { Spotlight } from "../components/ui/spotlight";
import { BorderBeam } from "../components/ui/border-beam";
import { destinations } from "../constants/destinations.js";

export default function Destinations() {
  const pageRef = useRef(null);

  useEffect(() => {
    const root = pageRef.current;

    if (!root) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const heroContent = root.querySelector(".destinations-hero-content");
    const sectionHeader = root.querySelector(".destinations-header");
    const cards = root.querySelectorAll(".destination-card");

    if (reduceMotion) {
      gsap.set([heroContent, sectionHeader, cards], {
        opacity: 1,
        y: 0,
      });

      return undefined;
    }

    gsap.set(heroContent, {
      opacity: 0,
      y: 24,
    });

    gsap.set(sectionHeader, {
      opacity: 0,
      y: 20,
    });

    gsap.set(cards, {
      opacity: 0,
      y: 28,
    });

    const heroTimeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    heroTimeline.to(heroContent, {
      opacity: 1,
      y: 0,
      duration: 0.7,
    });

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(sectionHeader, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });

        headerObserver.disconnect();
      },
      {
        threshold: 0.2,
      },
    );

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out",
        });

        cardsObserver.disconnect();
      },
      {
        threshold: 0.15,
      },
    );

    if (sectionHeader) {
      headerObserver.observe(sectionHeader);
    }

    if (cards.length > 0) {
      cardsObserver.observe(cards[0]);
    }

    return () => {
      headerObserver.disconnect();
      cardsObserver.disconnect();

      gsap.killTweensOf([heroContent, sectionHeader, ...cards]);
    };
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f5fa8] py-28 sm:py-32 lg:py-36">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        <div className="page-container relative z-10">
          <div className="destinations-hero-content mx-auto max-w-3xl text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              Discover the world
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              EXPLORE
              <span className="block">DESTINATIONS</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-sky-50/85 sm:text-base">
              Discover places worth seeing, experiences worth remembering, and
              journeys designed to inspire your next adventure.
            </p>

            <NavLink
              to="/trips"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#0f2a5f] shadow-[0_12px_30px_rgb(15_42_95/0.16)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-sky-50 hover:shadow-[0_16px_34px_rgb(15_42_95/0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f5fa8]"
            >
              Explore Trips
              <ArrowRight size={16} aria-hidden="true" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="page-container">
          <div className="destinations-header mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
              Places to discover
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0f2a5f] sm:text-3xl">
              Find your next destination
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              From coastal escapes to mountain adventures, explore places that
              can turn your next trip into a memorable journey.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination, index) => (
              <article
                key={destination.id}
                className={[
                  "destination-card group relative overflow-hidden rounded-panel",
                  "border bg-white shadow-[0_10px_30px_rgb(15_42_95/0.06)]",
                  "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                  "hover:-translate-y-1 hover:border-sky-100 hover:shadow-[0_18px_40px_rgb(15_42_95/0.1)]",
                  index === 1 ? "border-sky-200" : "border-slate-100",
                ].join(" ")}
              >
                {index === 1 && (
                  <BorderBeam
                    size={90}
                    duration={8}
                    borderWidth={1.5}
                    colorFrom="#38bdf8"
                    colorTo="#2563eb"
                  />
                )}

                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.name}, ${destination.country}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#071b38]/75 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#0f2a5f] backdrop-blur-sm">
                    {destination.tag}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <MapPin size={13} aria-hidden="true" />
                      {destination.country}
                    </div>

                    <h3 className="mt-1.5 text-xl font-bold tracking-[-0.02em]">
                      {destination.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-6 text-slate-600">
                    {destination.description}
                  </p>

                  <NavLink
                    to="/trips"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-[gap,color] duration-200 hover:gap-2.5 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  >
                    View trips
                    <ArrowRight size={15} aria-hidden="true" />
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
