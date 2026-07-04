import { Landmark, HeartHandshake } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { useSiteContent } from "../context/SiteContentContext";

export default function Donate() {
  const { content } = useSiteContent();
  const { donateContent } = content;

  return (
    <>
      <PageHeader title="Support Our Cause" subtitle="Your generosity sustains our work in the community" />

      <section className="bg-parchment py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="font-display text-xl italic leading-relaxed text-emerald-900">
            {donateContent.quote}
          </p>
          <p className="mt-6 text-emerald-800/90">
            {donateContent.description}
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="See the Impact" title="Our Mosque Outreach" />
          <div className="overflow-hidden rounded-2xl border border-brass-200 shadow-sm">
            <video controls className="w-full" poster="">
              <source src="/mcanmosqueshelp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-brass-200 bg-white p-8 text-center shadow-sm">
            <HeartHandshake size={32} className="mx-auto text-brass-500" />
            <h3 className="mt-4 font-display text-xl font-semibold text-emerald-950">Donate Online</h3>
            <p className="mt-2 text-sm text-emerald-800/80">
              Give securely online via Flutterwave in a few taps.
            </p>
            <a
              href={donateContent.paymentLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-brass-500 px-8 py-3 text-sm font-semibold tracking-wide text-emerald-950 transition-colors hover:bg-brass-400"
            >
              Donate with Flutterwave
            </a>
          </div>

          <div className="rounded-2xl border border-brass-200 bg-white p-8 text-center shadow-sm">
            <Landmark size={32} className="mx-auto text-brass-500" />
            <h3 className="mt-4 font-display text-xl font-semibold text-emerald-950">Bank Transfer</h3>
            <p className="mt-2 text-sm text-emerald-800/80">Send your donation directly to our account.</p>
            <dl className="mt-6 space-y-2 text-left text-sm text-emerald-900">
              <div className="flex justify-between border-b border-brass-100 pb-2">
                <dt className="font-semibold">Bank Name</dt>
                <dd>{donateContent.bankName}</dd>
              </div>
              <div className="flex justify-between border-b border-brass-100 pb-2">
                <dt className="font-semibold">Account Name</dt>
                <dd>{donateContent.accountName}</dd>
              </div>
              <div className="flex justify-between pb-2">
                <dt className="font-semibold">Account Number</dt>
                <dd>{donateContent.accountNumber}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
