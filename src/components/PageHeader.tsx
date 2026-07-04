export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-16 text-center text-white">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="star-pattern-ph" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M25 4 L29.5 14 L41 12 L38.5 23 L48 29 L38 34.5 L41 46 L29 41.5 L25 50 L21 41.5 L9 46 L12 34.5 L2 29 L11.5 23 L9 12 L20.5 14 Z"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#star-pattern-ph)" />
      </svg>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <span className="khatam mb-4 inline-block text-xl text-brass-400" aria-hidden="true" />
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 text-emerald-100/85">{subtitle}</p>}
      </div>
    </section>
  );
}
