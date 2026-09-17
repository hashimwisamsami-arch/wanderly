import { useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { testimonial } from "../../constants/testimonial.js";
import { animateTestimonial } from "../../animations/revealAnimations.js";

export default function Testimonial() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    return animateTestimonial(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonial-section relative overflow-hidden bg-[#0f5fa8] pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-labelledby="testimonial-title"
    >
      {/* Decorative atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute -left-24 top-10 size-72 rounded-full bg-white/5 blur-3xl" />
        <span className="absolute -right-24 bottom-0 size-80 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <div className="page-container relative">
        {/* Section heading */}
        <div className="testimonial-header mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100/80">
            Social Proof
          </p>

          <h2
            id="testimonial-title"
            className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl"
          >
            What Travelers Say
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-sky-50/80 sm:text-base">
            Real journeys, real stories, and experiences worth remembering.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="testimonial-card mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-white/10 bg-white p-6 shadow-[0_20px_55px_rgb(15_42_95/0.18)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            {/* Quote icon */}
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Quote size={25} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="min-w-0 flex-1">
              {/* Rating */}
              <div
                className="flex items-center gap-1"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                    strokeWidth={1.5}
                    className="text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-5 text-lg font-medium leading-8 tracking-[-0.01em] text-[#0f2a5f] sm:text-xl sm:leading-9">
                “{testimonial.quote}”
              </blockquote>

              {/* Author */}
              <div className="mt-7 flex items-center gap-4">
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#0f2a5f]">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {testimonial.trip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small trust message */}
        <p className="testimonial-footer mt-7 text-center text-xs font-medium text-sky-100/70">
          Thoughtfully planned journeys. Memorable experiences.
        </p>
      </div>
    </section>
  );
}
