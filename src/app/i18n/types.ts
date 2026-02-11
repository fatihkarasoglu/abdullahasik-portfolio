export type LocaleDict = {
  nav: {
    about: string;
    services: string;
    stories: string;
    contact: string;
    cta: string;
    lang: string;
  };

  hero: {
    role: string;
    name: string;
    headlineA: string;
    headlineB: string;
    sub: string;
    primary: string;
    secondary: string;
  };

  plans: {
    title: string;
    subtitle: string;
    popular: string;
    select: string;
  };

  stories: {
    title: string;
    subtitle: string;
    more: string;
    less: string;
    readMore: string;
    readLess: string;
  };

  contact: {
    kicker: string;
    titleA: string;
    titleB: string;
    subtitle: string;

    info: {
      emailLabel: string;
      phoneLabel: string;
      whatsappLabel: string;
      whatsappCta: string;
    };

    form: {
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      goal: string;
      message: string;
      send: string;
    };
  };
  about: {
    kicker: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    body: string;
    techniquesTitle: string;
    techniques: string[];
    educationTitle: string;
    education: { label: string; value: string }[];
  };

  faq: {
    titleA: string;
    titleB: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    items: { q: string; a: string }[];
  };

  footer: {
    tagline: string;
    quickLinks: string;
    socials: string;
    legal: string;
    copyright: string;
    privacy: string;
  };
};
