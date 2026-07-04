import { useState } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { localGovernmentAmeers } from "../data/content";

export default function AmeersAccordion() {
  const [openLga, setOpenLga] = useState<string | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Chapter Leadership" title="Meet the Local Government Ameers" />
        <div className="divide-y divide-brass-200 overflow-hidden rounded-2xl border border-brass-200">
          {localGovernmentAmeers.map((item) => {
            const isOpen = openLga === item.lga;
            return (
              <div key={item.lga} className="bg-parchment">
                <button
                  onClick={() => setOpenLga(isOpen ? null : item.lga)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-emerald-50"
                >
                  <span className="font-medium text-emerald-950">{item.lga}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brass-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="space-y-1.5 px-6 pb-4 text-sm text-emerald-800/90">
                    <p className="flex items-center gap-2">
                      <Phone size={14} className="text-brass-500" /> {item.phone}
                    </p>
                    <p className="flex items-center gap-2 break-all">
                      <Mail size={14} className="text-brass-500" />
                      <a href={`mailto:${item.email}`} className="hover:text-brass-600">
                        {item.email}
                      </a>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
