import { useState, type FormEvent } from "react";
import { ImagePlus, LogOut, Plus, Trash2, Users, CalendarDays, FileText, HandCoins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { useSiteContent } from "../../context/SiteContentContext";
import type { DonateContent, ExecutiveItem, PastAmeerItem, UpcomingEvent } from "../../data/siteContent";
import { resolveImageSrc } from "../../utils/image";

const AUTH_KEY = "mcan-admin-auth";
const REGISTRATIONS_STORAGE_KEY = "mcan-ondo-registrations";

type SectionKey = "events" | "registrations" | "about" | "executives" | "donate" | "contacts" | "pastAmeers";

type RegistrationEntry = {
  regNo: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  institutionAttended: string;
  submittedAt: string;
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { content, updateSection } = useSiteContent();
  const [activeSection, setActiveSection] = useState<SectionKey>("events");
  const [eventForm, setEventForm] = useState<UpcomingEvent>({ title: "", theme: "", venue: "", date: "", image: "nikah" });
  const [executiveForm, setExecutiveForm] = useState<ExecutiveItem>({ name: "", post: "", profession: "", stateOfOrigin: "", institution: "", phone: "", email: "", image: "ameer" });
  const [amaeerForm, setAmeerForm] = useState<PastAmeerItem>({ name: "", title: "", year: "", location: "", image: "ameer", bio: "" });
  const [aboutForm, setAboutForm] = useState(content.aboutContent);
  const [donateForm, setDonateForm] = useState<DonateContent>(content.donateContent);
  const [contactForm, setContactForm] = useState(content.contactContent);
  const [feedback, setFeedback] = useState("");
  const [editingEventIndex, setEditingEventIndex] = useState<number | null>(null);
  const [editingExecutiveIndex, setEditingExecutiveIndex] = useState<number | null>(null);
  const [editingAmeerIndex, setEditingAmeerIndex] = useState<number | null>(null);
  const [registrations, setRegistrations] = useState<RegistrationEntry[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = window.localStorage.getItem(REGISTRATIONS_STORAGE_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored) as RegistrationEntry[];
    } catch {
      return [];
    }
  });

  function handleLogout() {
    window.localStorage.removeItem(AUTH_KEY);
    navigate("/admin/login", { replace: true });
  }

  function saveFeedback(message: string) {
    setFeedback(message);
    window.setTimeout(() => setFeedback(""), 3000);
  }

  function handleImageUpload(file: File, setter: (value: string) => void) {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setter(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }

  function handleEventSubmit(event: FormEvent) {
    event.preventDefault();
    const nextEvents = [...content.upcomingEvents];
    if (editingEventIndex === null) {
      nextEvents.push(eventForm);
    } else {
      nextEvents[editingEventIndex] = eventForm;
    }
    updateSection("upcomingEvents", nextEvents);
    setEventForm({ title: "", theme: "", venue: "", date: "", image: "nikah" });
    setEditingEventIndex(null);
    saveFeedback("Events updated.");
  }

  function handleExecutiveSubmit(event: FormEvent) {
    event.preventDefault();
    const nextExecutives = [...content.executives];
    if (editingExecutiveIndex === null) {
      nextExecutives.push(executiveForm);
    } else {
      nextExecutives[editingExecutiveIndex] = executiveForm;
    }
    updateSection("executives", nextExecutives);
    setExecutiveForm({ name: "", post: "", profession: "", stateOfOrigin: "", institution: "", phone: "", email: "", image: "ameer" });
    setEditingExecutiveIndex(null);
    saveFeedback("Executive list updated.");
  }

  function handleAmeerSubmit(event: FormEvent) {
    event.preventDefault();
    const nextAmeers = [...content.pastAmeers];
    if (editingAmeerIndex === null) {
      nextAmeers.push(amaeerForm);
    } else {
      nextAmeers[editingAmeerIndex] = amaeerForm;
    }
    updateSection("pastAmeers", nextAmeers);
    setAmeerForm({ name: "", title: "", year: "", location: "", image: "ameer", bio: "" });
    setEditingAmeerIndex(null);
    saveFeedback("Past ameer list updated.");
  }

  function handleDeleteEvent(index: number) {
    const next = content.upcomingEvents.filter((_, itemIndex) => itemIndex !== index);
    updateSection("upcomingEvents", next);
    saveFeedback("Event removed.");
  }

  function handleDeleteExecutive(index: number) {
    const next = content.executives.filter((_, itemIndex) => itemIndex !== index);
    updateSection("executives", next);
    saveFeedback("Executive removed.");
  }

  function handleDeleteAmeer(index: number) {
    const next = content.pastAmeers.filter((_, itemIndex) => itemIndex !== index);
    updateSection("pastAmeers", next);
    saveFeedback("Past ameer removed.");
  }

  function handleRegistrationDelete(index: number) {
    const next = registrations.filter((_, itemIndex) => itemIndex !== index);
    window.localStorage.setItem(REGISTRATIONS_STORAGE_KEY, JSON.stringify(next));
    setRegistrations(next);
    saveFeedback("Registration removed.");
  }

  const stats = [
    { label: "Events", value: content.upcomingEvents.length, icon: CalendarDays },
    { label: "Executives", value: content.executives.length, icon: Users },
    { label: "Past Ameers", value: content.pastAmeers.length, icon: FileText },
    { label: "Registrations", value: registrations.length, icon: HandCoins },
  ];

  const sections: Array<{ key: SectionKey; label: string }> = [
    { key: "events", label: "Events" },
    { key: "registrations", label: "Registrations" },
    { key: "about", label: "About" },
    { key: "executives", label: "Executives" },
    { key: "donate", label: "Donate" },
    { key: "contacts", label: "Contacts" },
    { key: "pastAmeers", label: "Past Ameers" },
  ];

  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-emerald-800 bg-emerald-900/80 p-6 shadow-xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass-300">Website Control Center</p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-white">Admin Dashboard</h1>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-700 bg-emerald-950 px-4 py-2 text-sm font-semibold transition hover:border-brass-400 hover:text-brass-300"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>

        {feedback && <div className="rounded-2xl border border-brass-400/30 bg-emerald-900/70 px-4 py-3 text-sm">{feedback}</div>}

        <div className="grid gap-3 md:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-[1.5rem] border border-emerald-800 bg-emerald-900/70 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-emerald-200">{label}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
                </div>
                <div className="rounded-full bg-white/10 p-3 text-brass-300">
                  <Icon size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 rounded-[2rem] border border-emerald-800 bg-emerald-900/70 p-3">
          {sections.map((section) => (
            <button
              key={section.key}
              type="button"
              onClick={() => setActiveSection(section.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeSection === section.key ? "bg-brass-500 text-emerald-950" : "text-emerald-100 hover:bg-emerald-800"}`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-emerald-800 bg-white p-6 text-emerald-950 shadow-xl">
            {activeSection === "events" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold">Manage Upcoming Events</h2>
                  <p className="mt-2 text-sm text-emerald-800/80">Add, edit, or remove your featured upcoming events.</p>
                </div>
                <form onSubmit={handleEventSubmit} className="space-y-4">
                  <input required value={eventForm.title} onChange={(e) => setEventForm((current) => ({ ...current, title: e.target.value }))} placeholder="Event title" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={eventForm.theme} onChange={(e) => setEventForm((current) => ({ ...current, theme: e.target.value }))} placeholder="Theme" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={eventForm.venue} onChange={(e) => setEventForm((current) => ({ ...current, venue: e.target.value }))} placeholder="Venue" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={eventForm.date} onChange={(e) => setEventForm((current) => ({ ...current, date: e.target.value }))} placeholder="Date" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <label className="block rounded-2xl border border-dashed border-brass-300 bg-parchment p-4 text-sm text-emerald-800">
                    <span className="mb-2 flex items-center gap-2 font-semibold text-emerald-950"><ImagePlus size={16} />Upload event image</span>
                    <input type="file" accept="image/*" className="block w-full text-sm" onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        handleImageUpload(file, (value) => setEventForm((current) => ({ ...current, image: value })));
                      }
                    }} />
                  </label>
                  <select value={eventForm.image.startsWith("data:") ? "" : eventForm.image} onChange={(e) => setEventForm((current) => ({ ...current, image: e.target.value }))} className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm">
                    <option value="">Use a built-in image</option>
                    {Object.keys(images).map((imageKey) => (
                      <option key={imageKey} value={imageKey}>{imageKey}</option>
                    ))}
                  </select>
                  {eventForm.image && (
                    <div className="overflow-hidden rounded-2xl border border-brass-200">
                      <img src={resolveImageSrc(eventForm.image)} alt="Event preview" className="h-40 w-full object-cover" />
                    </div>
                  )}
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brass-500 hover:text-emerald-950">
                    <Plus size={16} />
                    {editingEventIndex === null ? "Add event" : "Save event"}
                  </button>
                </form>
                <div className="space-y-3">
                  {content.upcomingEvents.map((event, index) => (
                    <div key={`${event.title}-${index}`} className="flex items-center justify-between rounded-2xl border border-brass-200 bg-parchment px-4 py-3">
                      <div>
                        <p className="font-semibold text-emerald-950">{event.title}</p>
                        <p className="text-sm text-emerald-700">{event.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => { setEventForm(event); setEditingEventIndex(index); }} className="rounded-full border border-emerald-200 px-3 py-1 text-sm text-emerald-800">Edit</button>
                        <button type="button" onClick={() => handleDeleteEvent(index)} className="rounded-full border border-red-200 p-2 text-red-600"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "registrations" && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-2xl font-semibold">Pending Registrations</h2>
                  <p className="mt-2 text-sm text-emerald-800/80">Review registration submissions and remove any that should not appear.</p>
                </div>
                <div className="space-y-3">
                  {registrations.length === 0 && <p className="rounded-2xl border border-dashed border-brass-200 p-6 text-sm text-emerald-700">No registrations recorded yet.</p>}
                  {registrations.map((entry, index) => (
                    <div key={`${entry.regNo}-${index}`} className="rounded-2xl border border-brass-200 bg-parchment p-4 text-sm text-emerald-900">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold">{entry.firstName} {entry.lastName}</p>
                          <p className="mt-1">Reg no: {entry.regNo}</p>
                          <p>Mobile: {entry.mobileNumber}</p>
                          <p>Institution: {entry.institutionAttended}</p>
                          <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">Submitted {entry.submittedAt}</p>
                        </div>
                        <button type="button" onClick={() => handleRegistrationDelete(index)} className="rounded-full border border-red-200 p-2 text-red-600"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "about" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold">Edit About Section</h2>
                  <p className="mt-2 text-sm text-emerald-800/80">Update the headline, intro, history, and aims shown on the public About page.</p>
                </div>
                <div className="space-y-4">
                  <input value={aboutForm.headline} onChange={(e) => setAboutForm((current) => ({ ...current, headline: e.target.value }))} className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Headline" />
                  <textarea value={aboutForm.intro} onChange={(e) => setAboutForm((current) => ({ ...current, intro: e.target.value }))} className="min-h-24 w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Intro" />
                  <textarea value={aboutForm.history.join("\n")} onChange={(e) => setAboutForm((current) => ({ ...current, history: e.target.value.split("\n").filter(Boolean) }))} className="min-h-36 w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="History (one paragraph per line)" />
                  <textarea value={aboutForm.aims.join("\n")} onChange={(e) => setAboutForm((current) => ({ ...current, aims: e.target.value.split("\n").filter(Boolean) }))} className="min-h-24 w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Aims (one per line)" />
                  <button type="button" onClick={() => { updateSection("aboutContent", aboutForm); saveFeedback("About content updated."); }} className="rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white">Save About Content</button>
                </div>
              </div>
            )}

            {activeSection === "executives" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold">Meet Our Executives</h2>
                  <p className="mt-2 text-sm text-emerald-800/80">Add or update executive members shown on the About page.</p>
                </div>
                <form onSubmit={handleExecutiveSubmit} className="space-y-3">
                  <input required value={executiveForm.name} onChange={(e) => setExecutiveForm((current) => ({ ...current, name: e.target.value }))} placeholder="Full name" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={executiveForm.post} onChange={(e) => setExecutiveForm((current) => ({ ...current, post: e.target.value }))} placeholder="Post" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={executiveForm.profession} onChange={(e) => setExecutiveForm((current) => ({ ...current, profession: e.target.value }))} placeholder="Profession" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={executiveForm.stateOfOrigin} onChange={(e) => setExecutiveForm((current) => ({ ...current, stateOfOrigin: e.target.value }))} placeholder="State of origin" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={executiveForm.institution} onChange={(e) => setExecutiveForm((current) => ({ ...current, institution: e.target.value }))} placeholder="Institution" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={executiveForm.phone} onChange={(e) => setExecutiveForm((current) => ({ ...current, phone: e.target.value }))} placeholder="Phone" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={executiveForm.email} onChange={(e) => setExecutiveForm((current) => ({ ...current, email: e.target.value }))} placeholder="Email" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <label className="block rounded-2xl border border-dashed border-brass-300 bg-parchment p-4 text-sm text-emerald-800">
                    <span className="mb-2 flex items-center gap-2 font-semibold text-emerald-950"><ImagePlus size={16} />Upload executive image</span>
                    <input type="file" accept="image/*" className="block w-full text-sm" onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        handleImageUpload(file, (value) => setExecutiveForm((current) => ({ ...current, image: value })));
                      }
                    }} />
                  </label>
                  {executiveForm.image && (
                    <div className="overflow-hidden rounded-2xl border border-brass-200">
                      <img src={resolveImageSrc(executiveForm.image)} alt="Executive preview" className="h-40 w-full object-cover" />
                    </div>
                  )}
                  <div className="rounded-2xl border border-brass-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                    <p className="font-semibold">Tip</p>
                    <p className="mt-1">Use a clear portrait image for the executive card on the public About page.</p>
                  </div>
                  <button type="submit" className="rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white">{editingExecutiveIndex === null ? "Add executive" : "Save executive"}</button>
                </form>
                <div className="space-y-3">
                  {content.executives.map((executive, index) => (
                    <div key={`${executive.name}-${index}`} className="flex items-center justify-between rounded-2xl border border-brass-200 bg-parchment px-4 py-3">
                      <div>
                        <p className="font-semibold text-emerald-950">{executive.name}</p>
                        <p className="text-sm text-emerald-700">{executive.post}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => { setExecutiveForm(executive); setEditingExecutiveIndex(index); }} className="rounded-full border border-emerald-200 px-3 py-1 text-sm text-emerald-800">Edit</button>
                        <button type="button" onClick={() => handleDeleteExecutive(index)} className="rounded-full border border-red-200 p-2 text-red-600"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "donate" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold">Update Donation Page</h2>
                  <p className="mt-2 text-sm text-emerald-800/80">Change the donation message, link, and bank details shown to supporters.</p>
                </div>
                <div className="space-y-4">
                  <textarea value={donateForm.quote} onChange={(e) => setDonateForm((current) => ({ ...current, quote: e.target.value }))} className="min-h-24 w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Donation quote" />
                  <textarea value={donateForm.description} onChange={(e) => setDonateForm((current) => ({ ...current, description: e.target.value }))} className="min-h-24 w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Donation description" />
                  <input value={donateForm.paymentLink} onChange={(e) => setDonateForm((current) => ({ ...current, paymentLink: e.target.value }))} className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Flutterwave link" />
                  <input value={donateForm.bankName} onChange={(e) => setDonateForm((current) => ({ ...current, bankName: e.target.value }))} className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Bank name" />
                  <input value={donateForm.accountName} onChange={(e) => setDonateForm((current) => ({ ...current, accountName: e.target.value }))} className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Account name" />
                  <input value={donateForm.accountNumber} onChange={(e) => setDonateForm((current) => ({ ...current, accountNumber: e.target.value }))} className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Account number" />
                  <button type="button" onClick={() => { updateSection("donateContent", donateForm); saveFeedback("Donation content updated."); }} className="rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white">Save Donation Content</button>
                </div>
              </div>
            )}

            {activeSection === "contacts" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold">Update Contact Details</h2>
                  <p className="mt-2 text-sm text-emerald-800/80">Control the public contact information visible on the contact page.</p>
                </div>
                <div className="space-y-4">
                  <input value={contactForm.phone} onChange={(e) => setContactForm((current) => ({ ...current, phone: e.target.value }))} className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Phone number" />
                  <input value={contactForm.email} onChange={(e) => setContactForm((current) => ({ ...current, email: e.target.value }))} className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Email address" />
                  <input value={contactForm.address} onChange={(e) => setContactForm((current) => ({ ...current, address: e.target.value }))} className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Address" />
                  <textarea value={contactForm.mapEmbedUrl} onChange={(e) => setContactForm((current) => ({ ...current, mapEmbedUrl: e.target.value }))} className="min-h-24 w-full rounded-md border border-brass-200 px-4 py-3 text-sm" placeholder="Google Maps embed URL" />
                  <button type="button" onClick={() => { updateSection("contactContent", contactForm); saveFeedback("Contact details updated."); }} className="rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white">Save Contact Content</button>
                </div>
              </div>
            )}

            {activeSection === "pastAmeers" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-semibold">Past Ameers</h2>
                  <p className="mt-2 text-sm text-emerald-800/80">Add or update the leaders featured on the Past Ameers page.</p>
                </div>
                <form onSubmit={handleAmeerSubmit} className="space-y-3">
                  <input required value={amaeerForm.name} onChange={(e) => setAmeerForm((current) => ({ ...current, name: e.target.value }))} placeholder="Name" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={amaeerForm.title} onChange={(e) => setAmeerForm((current) => ({ ...current, title: e.target.value }))} placeholder="Title" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={amaeerForm.year} onChange={(e) => setAmeerForm((current) => ({ ...current, year: e.target.value }))} placeholder="Year" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <input required value={amaeerForm.location} onChange={(e) => setAmeerForm((current) => ({ ...current, location: e.target.value }))} placeholder="Location" className="w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <textarea required value={amaeerForm.bio} onChange={(e) => setAmeerForm((current) => ({ ...current, bio: e.target.value }))} placeholder="Brief biography" className="min-h-24 w-full rounded-md border border-brass-200 px-4 py-3 text-sm" />
                  <label className="block rounded-2xl border border-dashed border-brass-300 bg-parchment p-4 text-sm text-emerald-800">
                    <span className="mb-2 flex items-center gap-2 font-semibold text-emerald-950"><ImagePlus size={16} />Upload past ameer image</span>
                    <input type="file" accept="image/*" className="block w-full text-sm" onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        handleImageUpload(file, (value) => setAmeerForm((current) => ({ ...current, image: value })));
                      }
                    }} />
                  </label>
                  {amaeerForm.image && (
                    <div className="overflow-hidden rounded-2xl border border-brass-200">
                      <img src={resolveImageSrc(amaeerForm.image)} alt="Past ameer preview" className="h-40 w-full object-cover" />
                    </div>
                  )}
                  <button type="submit" className="rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white">{editingAmeerIndex === null ? "Add past ameer" : "Save past ameer"}</button>
                </form>
                <div className="space-y-3">
                  {content.pastAmeers.map((ameer, index) => (
                    <div key={`${ameer.name}-${index}`} className="flex items-center justify-between rounded-2xl border border-brass-200 bg-parchment px-4 py-3">
                      <div>
                        <p className="font-semibold text-emerald-950">{ameer.name}</p>
                        <p className="text-sm text-emerald-700">{ameer.title}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button type="button" onClick={() => { setAmeerForm(ameer); setEditingAmeerIndex(index); }} className="rounded-full border border-emerald-200 px-3 py-1 text-sm text-emerald-800">Edit</button>
                        <button type="button" onClick={() => handleDeleteAmeer(index)} className="rounded-full border border-red-200 p-2 text-red-600"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-emerald-800 bg-emerald-900/70 p-6 shadow-xl">
              <h2 className="font-display text-2xl font-semibold text-white">Quick Notes</h2>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-emerald-100/90">
                <li>• Use the sign-in credentials <span className="font-semibold text-white">admin@mcano.com</span> and <span className="font-semibold text-white">admin123</span> to enter the dashboard.</li>
                <li>• Changes are saved locally in your browser so you can update the site content instantly.</li>
                <li>• Fresh registrations are collected from the public registration form and shown here for review.</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-emerald-800 bg-white p-6 text-emerald-950 shadow-xl">
              <h3 className="font-display text-xl font-semibold">Dashboard Tips</h3>
              <div className="mt-4 space-y-3 text-sm text-emerald-800/80">
                <div className="rounded-2xl border border-brass-200 bg-parchment p-3">
                  <p className="font-semibold text-emerald-950">Image upload</p>
                  <p className="mt-1">Executive and Past Ameer entries can now use a real uploaded image instead of only the default sample images.</p>
                </div>
                <div className="rounded-2xl border border-brass-200 bg-parchment p-3">
                  <p className="font-semibold text-emerald-950">Keep it fresh</p>
                  <p className="mt-1">Update your events and leadership section often so the homepage stays current.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
