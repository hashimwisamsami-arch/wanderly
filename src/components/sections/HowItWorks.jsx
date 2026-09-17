import { useEffect, useRef } from "react";

import { processSteps } from "../../constants/process.js";
import { animateHowItWorks } from "../../animations/revealAnimations.js";
import StepItem from "../ui/StepItem.jsx";

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    return animateHowItWorks(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="how-it-works-title"
    >
      <div className="page-container">
        <div className="how-it-works-header mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Simple process
          </p>

          <h2
            id="how-it-works-title"
            className="text-3xl font-bold uppercase tracking-[-0.03em] text-[#0f2a5f] sm:text-4xl"
          >
            Your trip, simplified
          </h2>
        </div>

        <div className="relative flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:flex lg:flex-row lg:items-start lg:gap-6">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative flex flex-1 lg:flex-col">
              <StepItem
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />

              {index < processSteps.length - 1 && (
                <span
                  className="step-connector absolute -right-6 top-7 hidden h-px w-8 bg-sky-200 lg:block xl:-right-7 xl:w-10"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
