export default function StatItem({ value, label, icon: Icon }) {
  return (
    <div className="stat-item flex items-center gap-4 text-white">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
        <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <div>
        <p className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
          {value}
        </p>

        <p className="mt-0.5 text-xs font-medium text-sky-100/80 sm:text-sm">
          {label}
        </p>
      </div>
    </div>
  );
}
