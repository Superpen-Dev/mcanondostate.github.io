import PageHeader from "../components/PageHeader";
import UpcomingEventsSection from "../components/UpcomingEventsSection";
import PastEventsGallery from "../components/PastEventsGallery";

export default function Events() {
  return (
    <>
      <PageHeader title="Events" subtitle="What's happening around MCAN Ondo State Chapter" />
      <UpcomingEventsSection />
      <PastEventsGallery />
    </>
  );
}
