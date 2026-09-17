import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../../constants/faq.js";
import { animateFAQ } from "../../animations/revealAnimations.js";

export default function FAQ() {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    return animateFAQ(sectionRef.current);
  }, []);

  const toggleFAQ = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className="faq-section bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="faq-title"
    >
      <div className="page-container">
        {/* Header */}
        <div className="faq-header mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Frequently Asked Questions
          </p>

          <h2
            id="faq-title"
            className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#0f2a5f] sm:text-4xl"
          >
            QUESTIONS, ANSWERED
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            A few helpful answers before you start planning your next journey.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-list mx-auto mt-10 max-w-3xl">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className={[
                  "faq-item overflow-hidden border-b border-slate-200",
                  isOpen ? "is-open" : "",
                ].join(" ")}
              >
                <button
                  id={`faq-question-${item.id}`}
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span
                    className={[
                      "text-sm font-semibold transition-colors duration-200 sm:text-base",
                      isOpen ? "text-sky-700" : "text-[#0f2a5f]",
                    ].join(" ")}
                  >
                    {item.question}
                  </span>

                  <span
                    className={[
                      "flex size-9 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-200",
                      isOpen
                        ? "border-sky-200 bg-sky-50 text-sky-600"
                        : "border-slate-200 bg-white text-slate-500",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <ChevronDown
                      size={17}
                      strokeWidth={1.8}
                      className={`transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={[
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 pr-12 text-sm leading-6 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
