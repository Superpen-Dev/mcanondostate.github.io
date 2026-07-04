import { Calendar, MapPin, Sparkles } from "lucide-react";
import { images } from "../assets/images";
import { upcomingEvents } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function UpcomingEventsSection({ light }: { light?: boolean }) {
  return (
    <section className={light ? "bg-emerald-950 py-20" : "bg-white py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Save the Date" title="Upcoming Events" light={light} />
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
      </div>
    </section>
  );
}
