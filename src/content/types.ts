import type { RouteKey } from "@/lib/routes";

export type InquiryKey = "search" | "collaboration" | "talent" | "other";

export type SeoKey = Exclude<RouteKey, "privacy">;

export type TimelineItem = {
  role: string;
  dates: string;
  place: string;
  body: string;
};

export type EducationItem = {
  title: string;
  detail: string;
};

export type ServiceCard = {
  title: string;
  body: string;
};

export type SiteCopy = {
  localeLabel: string;
  otherLocaleLabel: string;
  skip: string;
  menuOpen: string;
  menuClose: string;
  brandDescriptor: string;
  nav: { key: Exclude<RouteKey, "privacy">; label: string }[];
  ctas: {
    discuss: string;
    collaboration: string;
    exploreSearch: string;
    workTogether: string;
    exploreTalent: string;
    startConversation: string;
    discussCollaboration: string;
    discussNeeds: string;
    contactAna: string;
  };
  footer: {
    rights: string;
    line: string;
    privacy: string;
  };
  copied: string;
  contactCards: {
    email: string;
    phone: string;
    linkedin: string;
    copyEmail: string;
    copyPhone: string;
  };
  home: {
    eyebrow: string;
    headline: string;
    supporting: string;
    credibility: string[];
    overviewTitle: string;
    footprintLabel: string;
    footprint: string;
    educationLabel: string;
    education: EducationItem[];
    specialtiesLabel: string;
    specialties: string;
    languagesLabel: string;
    languages: string;
    supportTitle: string;
    supportNote: string;
    services: { title: string; body: string; cta: string; key: "search" | "collaboration" | "talent" }[];
    credentialsTitle: string;
    practiceTitle: string;
    practice: string[];
    calloutTitle: string;
    callout: string;
    tabs: { id: string; label: string; title: string; items: { title: string; body: string }[] }[];
    timelineTitle: string;
    timeline: TimelineItem[];
    sectorsTitle: string;
    sectors: string;
    closingTitle: string;
    closing: string;
    based: string;
  };
  search: {
    eyebrow: string;
    title: string;
    lede: string;
    intro: string;
    supportTitle: string;
    support: string[];
    methodTitle: string;
    steps: { title: string; body: string }[];
    environments: string;
    ctaTitle: string;
    ctaBody: string;
  };
  collaboration: {
    eyebrow: string;
    title: string;
    lede: string;
    intro: string;
    supportTitle: string;
    support: string[];
    principlesTitle: string;
    principles: string[];
    ctaTitle: string;
    ctaBody: string;
  };
  talent: {
    eyebrow: string;
    title: string;
    lede: string;
    intro: string;
    areasTitle: string;
    services: ServiceCard[];
    engagementTitle: string;
    engagement: string;
    ctaTitle: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lede: string;
    intro: string[];
    snapshotTitle: string;
    snapshot: string[];
    expertiseTitle: string;
    expertise: string[];
    internationalTitle: string;
    international: string;
    ctaTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    fields: {
      name: string;
      company: string;
      email: string;
      location: string;
      inquiry: string;
      description: string;
      timing: string;
      consent: string;
    };
    inquiryOptions: { value: InquiryKey; label: string }[];
    placeholders: {
      name: string;
      company: string;
      email: string;
      location: string;
      description: string;
      timing: string;
    };
    submit: string;
    sending: string;
    required: string;
    errors: {
      name: string;
      company: string;
      email: string;
      location: string;
      inquiry: string;
      description: string;
      consent: string;
      generic: string;
    };
    successTitle: string;
    successBody: string;
    successDirect: string;
    another: string;
  };
  privacy: {
    title: string;
    lede: string;
    sections: { heading: string; body: string }[];
  };
  seo: Record<SeoKey, { title: string; description: string }>;
  notFound: { title: string; body: string; home: string };
  error: { title: string; body: string; retry: string };
};
