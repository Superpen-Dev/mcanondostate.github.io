import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { useSiteContent } from "../context/SiteContentContext";
import { resolveImageSrc } from "../utils/image";

export default function PastAmeers() {
  const { content } = useSiteContent();

  return (
    <>
      <PageHeader title="Past Ameers" subtitle="Recognising the leaders who shaped our chapter" />
      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Leadership History" title="Former Ameers" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.pastAmeers.map((ameer) => (
              <article key={ameer.name} className="overflow-hidden rounded-[2rem] border border-brass-200 bg-white shadow-sm">
                <img src={resolveImageSrc(ameer.image)} alt={ameer.name} className="h-56 w-full object-cover" />
                <div className="space-y-2 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-emerald-950">{ameer.name}</h3>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      {ameer.year}
                    </span>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-600">{ameer.title}</p>
                  <p className="text-sm text-emerald-800/80">{ameer.location}</p>
                  <p className="text-sm leading-7 text-emerald-900/90">{ameer.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
