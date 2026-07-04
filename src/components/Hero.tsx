import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      {/* Geometric star field, signature motif echoed at low opacity */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="star-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M25 4 L29.5 14 L41 12 L38.5 23 L48 29 L38 34.5 L41 46 L29 41.5 L25 50 L21 41.5 L9 46 L12 34.5 L2 29 L11.5 23 L9 12 L20.5 14 Z"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#star-pattern)" />
      </svg>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <span className="khatam mb-6 text-2xl text-brass-400" aria-hidden="true" />
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Muslim Corpers' Association of Nigeria
          <span className="mt-2 block text-brass-300">Ondo State Chapter</span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-lg text-emerald-100/90">
          Serving Islam through the nation &mdash; uniting Muslim corps members in faith, learning, and
          service across Ondo State.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/about"
            className="rounded-full bg-brass-500 px-8 py-3 text-sm font-semibold tracking-wide text-emerald-950 transition-colors hover:bg-brass-400"
          >
            Learn More
          </Link>
          <Link
            to="/registration"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Register as a Corps Member
          </Link>
        </div>
      </div>
    </section>
  );
}
