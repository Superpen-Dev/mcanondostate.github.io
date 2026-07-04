export default function SectionHeading({
  eyebrow,
  title,
  light,
}: {
  eyebrow?: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-brass-300" : "text-brass-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl font-semibold sm:text-4xl ${light ? "text-white" : "text-emerald-950"}`}>
        {title}
      </h2>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className={`h-px w-10 ${light ? "bg-brass-300/60" : "bg-brass-400/70"}`} />
        <span className={`khatam text-sm ${light ? "text-brass-300" : "text-brass-500"}`} />
        <span className={`h-px w-10 ${light ? "bg-brass-300/60" : "bg-brass-400/70"}`} />
      </div>
    </div>
  );
}
