import Hero from "../components/Hero";
import MarqueeBanner from "../components/MarqueeBanner";
import VerseCard from "../components/VerseCard";
import ProgramsGrid from "../components/ProgramsGrid";
import UpcomingEventsSection from "../components/UpcomingEventsSection";
import PublicationsTeaser from "../components/PublicationsTeaser";
import AmeersAccordion from "../components/AmeersAccordion";
import PastEventsGallery from "../components/PastEventsGallery";

export default function Home() {
  return (
    <>
      <MarqueeBanner />
      <Hero />
      <VerseCard />
      <ProgramsGrid />
      <UpcomingEventsSection variant="featured" />
      <PublicationsTeaser />
      <AmeersAccordion />
      <PastEventsGallery />
    </>
  );
}
