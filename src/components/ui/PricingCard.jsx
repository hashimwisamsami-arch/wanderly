import { Check, Sparkles } from "lucide-react";

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
}) {
  return (
    <article
      className={[
        "pricing-card flex h-full flex-col rounded-[1.5rem] border bg-white p-6 shadow-[0_14px_36px_rgb(15_42_95/0.09)] transition-[transform,box-shadow,border-color] duration-300",
        popular
          ? "border-sky-300 shadow-[0_18px_45px_rgb(15_42_95/0.16)]"
          : "border-slate-100",
      ].join(" ")}
    >
      {/* Badge area */}
      <div className="mb-3 min-h-6">
        {popular && (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
            <Sparkles size={12} aria-hidden="true" />
            Most Popular
          </div>
        )}
      </div>

      {/* Card heading */}
      <div>
        <p className="text-sm font-semibold text-sky-600">{name}</p>

        <div className="mt-4 flex items-end gap-1">
          <span className="text-4xl font-bold tracking-[-0.04em] text-[#0f2a5f]">
            {price}
          </span>

          <span className="mb-1 text-xs text-slate-400">/ trip</span>
        </div>

        <p className="mt-4 min-h-12 text-sm leading-6 text-slate-600">
          {description}
        </p>
      </div>

      <div className="my-6 h-px bg-slate-100" />

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-slate-600"
          >
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <Check size={12} strokeWidth={2.5} aria-hidden="true" />
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        type="button"
        className={[
          "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 active:scale-[0.98] md:mt-auto",
          popular
            ? "bg-[#0f2a5f] text-white shadow-md shadow-[#0f2a5f]/20 hover:-translate-y-0.5 hover:bg-[#163a70] hover:shadow-lg hover:shadow-[#0f2a5f]/30"
            : "border border-slate-200 bg-white text-[#0f2a5f] shadow-sm hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50/50 hover:text-sky-600 hover:shadow-md",
        ].join(" ")}
      >
        Choose Plan
      </button>
    </article>
  );
}
