/* ===================================================
   Hayya System — i18n Utility
   =================================================== */

export { es } from './es';
export { en } from './en';
export { pt } from './pt';
export { he } from './he';
export type { Translations } from './types';

import { es } from './es';
import { en } from './en';
import { pt } from './pt';
import { he } from './he';
import type { Translations } from './types';

export type SupportedLocale = 'es' | 'en' | 'pt' | 'he';

export const locales: Record<SupportedLocale, Translations> = { es, en, pt, he };

export const defaultLocale: SupportedLocale = 'es';

export function getTranslations(locale?: SupportedLocale): Translations {
  return locales[locale ?? defaultLocale] ?? locales[defaultLocale];
}

export const localeLabels: Record<SupportedLocale, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
  he: 'עברית',
};
