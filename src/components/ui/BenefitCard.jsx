export default function BenefitCard({ icon: Icon, title, description }) {
  return (
    <article className="benefit-card group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgb(15_42_95/0.06)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-sky-100 hover:shadow-[0_16px_36px_rgb(15_42_95/0.09)]">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-[background-color,color,transform] duration-200 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white">
        <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[#0f2a5f]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
