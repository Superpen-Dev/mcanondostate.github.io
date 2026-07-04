import { Target, Eye, Megaphone } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { images } from "../assets/images";
import { executives } from "../data/content";

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

const aims = [
  "To serve as a coordinating body and a forum for the exchange of ideas between Muslim corps members in all parts of the federation.",
  "To fight and protect the legitimate interests and rights of all Muslim Youth Corps members in the country.",
  "To promote a better understanding of Islam among Muslim corps members, students, and the rest of the populace with a view to having a more dedicated and unified ummah.",
  "To coordinate the efforts of various Islamic organizations in the propagation of Islam in Nigeria and throughout the world.",
];

export default function About() {
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
            <p>
              MCAN, an acronym for the "Muslim Corpers' Association of Nigeria," has, for more than three
              decades, fostered a close relationship among Muslim graduates who have successfully qualified
              for the one-year National Youth Service in various states across the Federation.
            </p>
            <p>
              The National Youth Service Corps (NYSC) scheme, brought to light by Decree No. 24 of 1973,
              made it possible in Nigeria to deploy eligible graduates from universities and other relevant
              institutions of higher learning within the country and abroad to undertake National Service in
              states or areas other than their state of origin. This facilitated the gathering of fresh
              Muslim graduates under a platform where Muslim corps members could organize and coordinate
              themselves for the purpose of collectively carrying out Islamic responsibilities, leading to
              the formation of the Muslim Corpers' Association of Nigeria (MCAN).
            </p>
            <p>
              The Association was inaugurated during the 1978/1979 service year. MCAN has its National
              Headquarters in Mabushi, Abuja, and branches in all 36 states of the Federation, including the
              FCT.
            </p>
            <p>
              The Association was registered under the Corporate Affairs Commission of Nigeria in 1994.
              Membership is open to all serving Muslim corps members in the Federation and the FCT. All
              serving Muslim corps members become part of MCAN upon registration with the Association at
              their arrival in the various NYSC Orientation Camps.
            </p>
            <p className="font-semibold text-emerald-950">
              The Muslim Corpers' Association of Nigeria (MCAN) has the following aims and objectives:
            </p>
            <ul className="space-y-3">
              {aims.map((aim, i) => (
                <li key={i} className="flex gap-3">
                  <span className="khatam mt-1.5 shrink-0 text-[0.6rem] text-brass-500" aria-hidden="true" />
                  <span>{aim}</span>
                </li>
              ))}
            </ul>
            <p>
              The Association works towards achieving these aims and objectives through various programs at
              different organizational levels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Chapter Leadership" title="Meet Our Executives" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executives.map((exec) => (
              <div key={exec.name} className="overflow-hidden rounded-2xl border border-brass-200 bg-white shadow-sm">
                <img src={images.ameer} alt={exec.name} className="h-56 w-full object-cover" />
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
