import { useEffect, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import { upcomingEvents } from "../data/content";
import SectionHeading from "./SectionHeading";

type UpcomingEventsSectionProps = {
  light?: boolean;
  variant?: "featured" | "standard";
};

export default function UpcomingEventsSection({ light, variant = "standard" }: UpcomingEventsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isFeatured = variant === "featured";

  useEffect(() => {
    if (!isFeatured || upcomingEvents.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % upcomingEvents.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isFeatured]);

  const activeEvent = upcomingEvents[activeIndex];

  const showPrevEvent = () => {
    setActiveIndex((current) => (current - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  const showNextEvent = () => {
    setActiveIndex((current) => (current + 1) % upcomingEvents.length);
  };

  return (
    <section className={light ? "bg-emerald-950 py-20" : "bg-white py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Save the Date" title="Upcoming Events" light={light} />

        {isFeatured ? (
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-[2rem] border border-emerald-200 bg-emerald-950 shadow-xl shadow-emerald-950/10">
              <div className="relative">
                <img src={images[activeEvent.image]} alt={activeEvent.title} className="h-72 w-full object-cover sm:h-[28rem]" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="inline-flex items-center rounded-full border border-brass-300/40 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brass-200">
                    Featured upcoming event
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                    {activeEvent.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-emerald-50/90 sm:text-base">{activeEvent.theme}</p>
                  <div className="mt-5 flex flex-wrap gap-3 text-sm text-emerald-50/90">
                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 backdrop-blur-sm">
                      <MapPin size={15} className="text-brass-400" />
                      {activeEvent.venue}
                    </span>
                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 backdrop-blur-sm">
                      <Calendar size={15} className="text-brass-400" />
                      {activeEvent.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-emerald-800/40 bg-emerald-950/80 px-4 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrevEvent}
                    className="rounded-full border border-emerald-700/70 bg-emerald-900/80 p-2 text-emerald-100 transition hover:border-brass-400 hover:text-white"
                    aria-label="View previous event"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextEvent}
                    className="rounded-full border border-emerald-700/70 bg-emerald-900/80 p-2 text-emerald-100 transition hover:border-brass-400 hover:text-white"
                    aria-label="View next event"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {upcomingEvents.map((event, index) => (
                    <button
                      key={event.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View ${event.title}`}
                      className={`h-2.5 rounded-full transition ${index === activeIndex ? "w-8 bg-brass-400" : "w-2.5 bg-emerald-700/70"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className={`rounded-[1.5rem] border p-6 shadow-sm ${light ? "border-emerald-800 bg-emerald-900" : "border-brass-200 bg-parchment"}`}>
                <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${light ? "text-brass-300" : "text-brass-600"}`}>
                  Why join us
                </p>
                <h3 className={`mt-3 font-display text-2xl font-semibold ${light ? "text-white" : "text-emerald-950"}`}>
                  A fresh lineup of gatherings, learning, and fellowship.
                </h3>
                <p className={`mt-3 text-sm leading-7 ${light ? "text-emerald-100/80" : "text-emerald-800/80"}`}>
                  Browse the full calendar and save your seat for the next gathering with MCAN Ondo State.
                </p>
                <Link
                  to="/events"
                  className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition ${light ? "text-brass-300 hover:text-brass-200" : "text-emerald-700 hover:text-emerald-900"}`}
                >
                  See all events
                  <Sparkles size={15} />
                </Link>
              </div>

              <div className="grid gap-3">
                {upcomingEvents.map((event, index) => (
                  <button
                    key={event.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      index === activeIndex
                        ? "border-brass-400 bg-brass-50 shadow-sm"
                        : light
                          ? "border-emerald-800/70 bg-emerald-900/70 hover:border-emerald-700"
                          : "border-emerald-200 bg-white hover:border-emerald-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className={`font-semibold ${light ? "text-white" : "text-emerald-950"}`}>{event.title}</p>
                        <p className={`mt-1 text-sm ${light ? "text-emerald-100/70" : "text-emerald-700"}`}>{event.date}</p>
                      </div>
                      {index === activeIndex && <Sparkles size={16} className="text-brass-500" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className={`overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-lg ${
                  light ? "border-emerald-800 bg-emerald-900" : "border-brass-200 bg-parchment"
                }`}
              >
                <img src={images[event.image]} alt={event.title} className="h-48 w-full object-cover" />
                <div className="space-y-2 p-6">
                  <h3 className={`font-display text-lg font-semibold ${light ? "text-white" : "text-emerald-950"}`}>
                    {event.title}
                  </h3>
                  <p className={`flex items-center gap-2 text-sm ${light ? "text-emerald-100/80" : "text-emerald-800/80"}`}>
                    <Sparkles size={15} className="text-brass-500" /> Theme: <strong>{event.theme}</strong>
                  </p>
                  <p className={`flex items-center gap-2 text-sm ${light ? "text-emerald-100/80" : "text-emerald-800/80"}`}>
                    <MapPin size={15} className="text-brass-500" /> Venue: <strong>{event.venue}</strong>
                  </p>
                  <p className={`flex items-center gap-2 text-sm ${light ? "text-emerald-100/80" : "text-emerald-800/80"}`}>
                    <Calendar size={15} className="text-brass-500" /> Date: <strong>{event.date}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
