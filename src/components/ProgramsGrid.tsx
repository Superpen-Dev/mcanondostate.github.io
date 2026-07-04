import {
  BookOpen,
  BookMarked,
  Languages,
  GraduationCap,
  Presentation,
  HeartHandshake,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { programs } from "../data/content";

const iconMap: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  "book-marked": BookMarked,
  languages: Languages,
  "graduation-cap": GraduationCap,
  presentation: Presentation,
  "heart-handshake": HeartHandshake,
  handshake: Handshake,
};

export default function ProgramsGrid() {
  return (
    <section className="bg-parchment py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="What We Do" title="Our Programs" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = iconMap[program.icon] ?? BookOpen;
            return (
              <div
                key={program.title}
                className="arch-top group relative flex flex-col items-center gap-3 border border-brass-200 bg-white px-6 pb-8 pt-10 text-center shadow-sm transition-shadow hover:shadow-lg hover:shadow-emerald-950/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900 text-brass-300 transition-colors group-hover:bg-brass-500 group-hover:text-emerald-950">
                  <Icon size={26} />
                </div>
                <h4 className="font-display text-lg font-semibold text-emerald-950">{program.title}</h4>
                <p className="text-sm leading-relaxed text-emerald-800/80">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
