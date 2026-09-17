export default function StepItem({ number, title, description, icon: Icon }) {
  return (
    <article className="step-item group relative flex flex-1 flex-col items-start text-left">
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-[background-color,color,transform] duration-200 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white">
          <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <span
          className="text-3xl font-bold tracking-[-0.03em] text-sky-100"
          aria-hidden="true"
        >
          {number}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[#0f2a5f]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
