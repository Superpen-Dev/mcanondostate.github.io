import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { articles } from "../data/content";

export default function PublicationsTeaser() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const featured = articles.slice(0, 2);

  return (
    <section className="bg-emerald-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="From the Editorial Board" title="Featured Publications" />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((article, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={article.title}
                className="flex flex-col rounded-2xl border border-brass-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-xl font-semibold text-emerald-950">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-emerald-800/80">
                  {isOpen ? article.paragraphs[0] : `${article.paragraphs[0].slice(0, 140)}...`}
                </p>
                {isOpen && (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-emerald-800/80">
                    {article.paragraphs.slice(1).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="mt-4 self-start rounded-full bg-emerald-900 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brass-500 hover:text-emerald-950"
                >
                  {isOpen ? "Show Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/publications"
            className="inline-block rounded-full border border-emerald-900 px-8 py-3 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-900 hover:text-white"
          >
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  );
}
