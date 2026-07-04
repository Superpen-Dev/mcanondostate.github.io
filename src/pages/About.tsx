import { Target, Eye, Megaphone } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { useSiteContent } from "../context/SiteContentContext";
import { resolveImageSrc } from "../utils/image";

const pillars = [
  {
    icon: Target,
    label: "Mission",
    text: "Adherence to the pristine teachings of Islam in all affairs of life.",
  },
  {
    icon: Eye,
    label: "Vision",
    text: "Towards achieving an ideal (morally bounded) Islamic society.",
  },
  {
    icon: Megaphone,
    label: "Slogan",
    text: "Serving Islam (Allah) through the nation.",
  },
];

export default function About() {
  const { content } = useSiteContent();
  const { aboutContent, executives } = content;

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Muslim Corpers' Association of Nigeria, Ondo State Chapter"
      />

      <section className="bg-parchment py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, label, text }) => (
              <div key={label} className="arch-top border border-brass-200 bg-white px-6 pb-8 pt-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900 text-brass-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold text-emerald-950">{label}</h3>
                <p className="mt-2 text-sm uppercase tracking-wide text-emerald-800/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="Since 1978/1979" title="Our History" />
          <div className="space-y-5 text-emerald-900/90 leading-relaxed">
            <p>{aboutContent.intro}</p>
            {aboutContent.history.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-semibold text-emerald-950">{aboutContent.headline}</p>
            <ul className="space-y-3">
              {aboutContent.aims.map((aim, i) => (
                <li key={i} className="flex gap-3">
                  <span className="khatam mt-1.5 shrink-0 text-[0.6rem] text-brass-500" aria-hidden="true" />
                  <span>{aim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Chapter Leadership" title="Meet Our Executives" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executives.map((exec) => (
              <div key={exec.name} className="overflow-hidden rounded-2xl border border-brass-200 bg-white shadow-sm">
                <img src={resolveImageSrc(exec.image)} alt={exec.name} className="h-56 w-full object-cover" />
                <div className="space-y-1.5 p-6 text-sm">
                  <h3 className="font-display text-lg font-semibold text-emerald-950">{exec.name}</h3>
                  <p>
                    <strong className="text-emerald-950">Post:</strong> {exec.post}
                  </p>
                  <p>
                    <strong className="text-emerald-950">Profession:</strong> {exec.profession}
                  </p>
                  <p>
                    <strong className="text-emerald-950">State of Origin:</strong> {exec.stateOfOrigin}
                  </p>
                  <p>
                    <strong className="text-emerald-950">Institution:</strong> {exec.institution}
                  </p>
                  <p>
                    <strong className="text-emerald-950">Phone:</strong>{" "}
                    <a href={`tel:${exec.phone.replace(/\s/g, "")}`} className="text-brass-600 hover:underline">
                      {exec.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-emerald-950">Email:</strong>{" "}
                    <a href={`mailto:${exec.email}`} className="text-brass-600 hover:underline break-all">
                      {exec.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
