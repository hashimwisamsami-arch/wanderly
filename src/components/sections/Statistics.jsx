import { useEffect, useRef } from "react";

import { statistics } from "../../constants/statistics.js";
import { animateStatistics } from "../../animations/revealAnimations.js";
import StatItem from "../ui/StatItem.jsx";

export default function Statistics() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    return animateStatistics(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0f5fa8] py-10 sm:py-12 lg:py-14"
      aria-label="Wanderly statistics"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute -left-20 top-1/2 size-52 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <span className="absolute -right-20 top-0 size-64 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <div className="page-container relative">
        <div className="statistics-grid grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {statistics.map((statistic) => (
            <StatItem
              key={statistic.id}
              value={statistic.value}
              label={statistic.label}
              icon={statistic.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
