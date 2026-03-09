/* ===================================================
   Hayya System — i18n Type Definitions
   All translation objects must implement this shape.
   =================================================== */

export interface Translations {
  lang: string;
  dir: 'ltr' | 'rtl';

  meta: {
    siteName: string;
    tagline: string;
    description: string;
  };

  nav: {
    home: string;
    about: string;
    services: string;
    values: string;
    mission: string;
    vision: string;
    careers: string;
    privacy: string;
    contact: string;
  };

  footer: {
    tagline: string;
    contact: string;
    email: string;
    legal: string;
    allRightsReserved: string;
    privacyPolicy: string;
  };

  home: {
    heroLabel: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta1: string;
    heroCta2: string;
    aboutLabel: string;
    aboutTitle: string;
    aboutText1: string;
    aboutText2: string;
    aboutCta: string;
    servicesLabel: string;
    servicesTitle: string;
    servicesLead: string;
    servicesCta: string;
    valuesLabel: string;
    valuesTitle: string;
    contactLabel: string;
    contactTitle: string;
    contactLead: string;
    contactCta: string;
  };

  about: {
    pageLabel: string;
    pageTitle: string;
    pageLead: string;
    block1Title: string;
    block1Text: string;
    block2Title: string;
    block2Text: string;
    block3Title: string;
    block3Text: string;
    block4Title: string;
    block4Text: string;
  };

  services: {
    pageLabel: string;
    pageTitle: string;
    pageLead: string;
    service1Title: string;
    service1Desc: string;
    service1Items: string[];
    service2Title: string;
    service2Desc: string;
    service2Items: string[];
    service3Title: string;
    service3Desc: string;
    service3Items: string[];
    service4Title: string;
    service4Desc: string;
    service4Items: string[];
    contactCta: string;
  };

  values: {
    pageLabel: string;
    pageTitle: string;
    pageLead: string;
    value1Title: string; value1Desc: string;
    value2Title: string; value2Desc: string;
    value3Title: string; value3Desc: string;
    value4Title: string; value4Desc: string;
    value5Title: string; value5Desc: string;
    value6Title: string; value6Desc: string;
  };

  mission: {
    pageLabel: string;
    pageTitle: string;
    pageLead: string;
    statement: string;
    body: string;
  };

  vision: {
    pageLabel: string;
    pageTitle: string;
    pageLead: string;
    statement: string;
    body: string;
  };

  careers: {
    pageLabel: string;
    pageTitle: string;
    pageLead: string;
    intro: string;
    lookingForTitle: string;
    lookingForText: string;
    areas: string[];
    howToApplyTitle: string;
    howToApplyText: string;
    cta: string;
  };

  privacy: {
    pageLabel: string;
    pageTitle: string;
    pageLead: string;
    lastUpdated: string;
    sections: Array<{ title: string; text: string }>;
  };

  contact: {
    pageLabel: string;
    pageTitle: string;
    pageLead: string;
    directContact: string;
    directContactText: string;
    formTitle: string;
    formNote: string;
    fieldName: string;
    fieldEmail: string;
    fieldOrg: string;
    fieldSubject: string;
    fieldMessage: string;
    fieldSubmit: string;
    formDisclaimer: string;
  };
}
