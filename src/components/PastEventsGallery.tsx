import { images } from "../assets/images";
import { pastEvents } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function PastEventsGallery() {
  return (
    <section className="bg-emerald-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="A Look Back" title="Scenes from Past Events" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pastEvents.map((event) => (
            <figure
              key={event.image}
              className="group overflow-hidden rounded-xl border border-brass-200 bg-white shadow-sm"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={images[event.image]}
                  alt={event.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-3 text-center text-xs font-medium text-emerald-900">
                {event.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
