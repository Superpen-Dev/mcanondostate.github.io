import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-parchment px-4 py-32 text-center">
      <span className="khatam text-3xl text-brass-500" aria-hidden="true" />
      <h1 className="font-display text-4xl font-semibold text-emerald-950">Page Not Found</h1>
      <p className="max-w-md text-emerald-800/80">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="mt-4 rounded-full bg-emerald-950 px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brass-500 hover:text-emerald-950"
      >
        Back to Home
      </Link>
    </section>
  );
}
