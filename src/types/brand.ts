export type SocialLink = {
  label: string;
  href: string;
};

export type Brand = {
  name: string;
  shortName: string;
  tagline: string;
  phoneDisplay: string;
  phoneE164: string;
  email: string;
  whatsappLink: string;
  url: string;
  logo: string;
  serviceArea: string;
  trustSignals: string[];
  socialLinks: SocialLink[];
};