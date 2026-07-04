export type UpcomingEvent = {
  title: string;
  theme: string;
  venue: string;
  date: string;
  image: string;
};

export type PastEvent = {
  image: string;
  caption: string;
};

export type ExecutiveItem = {
  name: string;
  post: string;
  profession: string;
  stateOfOrigin: string;
  institution: string;
  phone: string;
  email: string;
  image: string;
};

export type AboutContent = {
  headline: string;
  intro: string;
  history: string[];
  aims: string[];
};

export type DonateContent = {
  quote: string;
  description: string;
  paymentLink: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
};

export type ContactContent = {
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
};

export type PastAmeerItem = {
  name: string;
  title: string;
  year: string;
  location: string;
  image: string;
  bio: string;
};

export interface SiteContent {
  navLinks: Array<{ to: string; label: string }>;
  upcomingEvents: UpcomingEvent[];
  pastEvents: PastEvent[];
  executives: ExecutiveItem[];
  aboutContent: AboutContent;
  donateContent: DonateContent;
  contactContent: ContactContent;
  pastAmeers: PastAmeerItem[];
}

export const defaultSiteContent: SiteContent = {
  navLinks: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/events", label: "Events" },
    { to: "/past-ameers", label: "Past Ameers" },
    { to: "/publications", label: "Publications" },
    { to: "/donate", label: "Donate" },
    { to: "/registration", label: "Registration" },
    { to: "/contact", label: "Contact" },
    { to: "/admin", label: "Admin" },
  ],
  upcomingEvents: [
    { title: "Annual Islamic Lecture", theme: "Faith and Character", venue: "MCAN Secretariat, Akure", date: "12 August 2026", image: "nikah" },
    { title: "Youth Outreach Summit", theme: "Leadership and Service", venue: "Ondo City Hall", date: "20 September 2026", image: "pnight" },
    { title: "Community Charity Drive", theme: "Compassion in Action", venue: "Irele Town Hall", date: "10 October 2026", image: "fassist" },
  ],
  pastEvents: [
    { image: "IMG_3080", caption: "Annual Charity Gala 2024" },
    { image: "IMG_3101", caption: "Community Outreach Program" },
    { image: "IMG_3138", caption: "Youth Empowerment Seminar" },
    { image: "IMG_3139", caption: "Sports Day Celebration" },
    { image: "IMG_3152", caption: "Health Awareness Workshop" },
  ],
  executives: [
    {
      name: "Toheeb Ishola Alli",
      post: "President (Ameer)",
      profession: "Accountant",
      stateOfOrigin: "Oyo",
      institution: "University of Ilorin",
      phone: "+234 706 483 5520",
      email: "allitoheebishola1@gmail.com",
      image: "ameer",
    },
  ],
  aboutContent: {
    headline: "A community of faith, service, and leadership.",
    intro: "MCAN Ondo State Chapter exists to support Muslim corps members through faith-based learning, service to the community, and leadership development.",
    history: [
      "MCAN was founded during the 1978/1979 service year and has grown into a vibrant umbrella body for Muslim corps members nationwide.",
      "The Ondo State Chapter continues to promote Islamic values, service to humanity, and networking among members in every local government.",
      "The chapter remains committed to spiritual growth, mentorship, and impactful community engagement throughout the state.",
    ],
    aims: [
      "To foster unity and cooperation among Muslim corps members in Ondo State.",
      "To promote the propagation of Islamic teachings and moral development.",
      "To coordinate community service and welfare initiatives for members and the wider public.",
    ],
  },
  donateContent: {
    quote: '"The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears, in every ear a hundred grains." — Qur\'an 2:261',
    description: "Your generous donation helps us sustain outreach, support programs, and community service across Ondo State.",
    paymentLink: "https://www.flutterwave.com/pay/yourpaymentlink",
    bankName: "First Bank of Nigeria",
    accountName: "MCAN Ondo Capital Project",
    accountNumber: "3051345672",
  },
  contactContent: {
    phone: "+234 806 235 9302",
    email: "mcanondostate23@gmail.com",
    address: "Ondo State, Nigeria",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.912362225054!2d-122.08424968469106!3d37.4219997798258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5cdd2e84f53%3A0x120d7344c8f6a9f5!2sGoogleplex!5e0!3m2!1sen!2s!4v1617168793848!5m2!1sen!2s",
  },
  pastAmeers: [
    {
      name: "Alhaji S. O. Yusuf",
      title: "Former Ameer",
      year: "2023",
      location: "Akure South",
      image: "ameer",
      bio: "A respected leader who strengthened community outreach and member engagement between 2022 and 2024.",
    },
    {
      name: "Bro. M. A. Ojo",
      title: "Former Ameer",
      year: "2021",
      location: "Ondo West",
      image: "islam",
      bio: "Championed youth mentorship and prayer-focused programs across the chapter.",
    },
  ],
};

export function createDefaultSiteContent(): SiteContent {
  return {
    ...defaultSiteContent,
    navLinks: [...defaultSiteContent.navLinks],
    upcomingEvents: [...defaultSiteContent.upcomingEvents],
    pastEvents: [...defaultSiteContent.pastEvents],
    executives: [...defaultSiteContent.executives],
    aboutContent: { ...defaultSiteContent.aboutContent, history: [...defaultSiteContent.aboutContent.history], aims: [...defaultSiteContent.aboutContent.aims] },
    donateContent: { ...defaultSiteContent.donateContent },
    contactContent: { ...defaultSiteContent.contactContent },
    pastAmeers: [...defaultSiteContent.pastAmeers],
  };
}
