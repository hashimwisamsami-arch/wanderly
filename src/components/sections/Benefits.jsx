import { useEffect, useRef } from "react";

import { benefits } from "../../constants/benefits.js";
import { animateBenefits } from "../../animations/revealAnimations.js";
import BenefitCard from "../ui/BenefitCard.jsx";

export default function Benefits() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    return animateBenefits(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="benefits-title"
    >
      <div className="page-container">
        <div className="benefits-header mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Why Wanderly
          </p>

          <h2
            id="benefits-title"
            className="text-3xl font-bold tracking-[-0.03em] text-[#0f2a5f] sm:text-4xl"
          >
            Travel with confidence
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Thoughtful planning, flexible options, and support designed to make
            your travel experience easier from start to finish.
          </p>
        </div>

        <div className="benefits-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
