import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { articles, poems, stories } from "../data/content";

type TabKey = "articles" | "poems" | "stories";

const tabs: { key: TabKey; label: string }[] = [
  { key: "articles", label: "Articles" },
  { key: "poems", label: "Poems" },
  { key: "stories", label: "Stories" },
];

function ExpandableCard({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-brass-200 bg-white p-6 shadow-sm">
      <h3 className="font-display text-xl font-semibold text-emerald-950">{title}</h3>
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-3 rounded-full bg-emerald-900 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brass-500 hover:text-emerald-950"
      >
        {open ? "Show Less" : "Read More"}
      </button>
      {open && <div className="mt-4 space-y-2 text-sm leading-relaxed text-emerald-800/90">{children}</div>}
    </div>
  );
}

export default function Publications() {
  const [activeTab, setActiveTab] = useState<TabKey>("articles");

  return (
    <>
      <PageHeader title="Publications" subtitle="Articles, poems, and stories from the editorial board" />

      <section className="bg-parchment py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-colors ${
                  activeTab === tab.key
                    ? "bg-emerald-950 text-white"
                    : "bg-white text-emerald-900 hover:bg-emerald-100 border border-brass-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {activeTab === "articles" &&
              articles.map((a) => (
                <ExpandableCard key={a.title} title={a.title}>
                  {a.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </ExpandableCard>
              ))}

            {activeTab === "poems" &&
              poems.map((poem) => (
                <ExpandableCard key={poem.title} title={poem.title}>
                  {poem.lines.map((line, i) => (
                    <p key={i} className="italic">
                      {line}
                    </p>
                  ))}
                </ExpandableCard>
              ))}

            {activeTab === "stories" &&
              stories.map((story) => (
                <ExpandableCard key={story.title} title={story.title}>
                  {story.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </ExpandableCard>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
