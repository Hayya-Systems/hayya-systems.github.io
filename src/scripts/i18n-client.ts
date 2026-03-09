import { locales, localeLabels } from '../i18n/index';
import type { SupportedLocale } from '../i18n/index';

const STORAGE_KEY = 'hayya-locale';
const DEFAULT_LOCALE: SupportedLocale = 'es';

export function getSavedLocale(): SupportedLocale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
    if (stored && stored in locales) return stored;
  } catch {}
  return DEFAULT_LOCALE;
}

export function applyI18n(locale: SupportedLocale): void {
  const t = locales[locale];
  if (!t) return;

  localStorage.setItem(STORAGE_KEY, locale);

  document.documentElement.lang = t.lang;
  document.documentElement.dir = t.dir;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n!;
    const value = resolveKey(t, key);
    if (typeof value !== 'string') return;
    const requiredSpan = el.querySelector('.form-required');
    if (requiredSpan) {
      el.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) node.textContent = ' ' + value + ' ';
      });
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder!;
    const value = resolveKey(t, key);
    if (typeof value === 'string') (el as HTMLInputElement | HTMLTextAreaElement).placeholder = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-list]').forEach(container => {
    const key = container.dataset.i18nList!;
    const value = resolveKey(t, key);
    if (!Array.isArray(value)) return;

    const template = container.querySelector('[data-i18n-list-item]');
    if (!template) return;

    const items = container.querySelectorAll('[data-i18n-list-item]');
    items.forEach((item, i) => {
      if (value[i] !== undefined) {
        const textNode = item.querySelector('[data-i18n-list-text]');
        if (textNode) textNode.textContent = value[i];
        else item.textContent = value[i];
      }
    });
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-paras]').forEach(container => {
    const key = container.dataset.i18nParas!;
    const value = resolveKey(t, key);
    if (typeof value !== 'string') return;
    const paras = value.split('\n\n').filter(Boolean);
    const existingParas = container.querySelectorAll('p.statement-para');
    existingParas.forEach((p, i) => {
      if (paras[i] !== undefined) p.textContent = paras[i];
    });
  });

  const privacySectionsContainer = document.querySelector('[data-i18n-privacy-sections]');
  if (privacySectionsContainer && Array.isArray((t as unknown as Record<string, unknown> & { privacy?: { sections?: Array<{title: string; text: string}> } }).privacy?.sections)) {
    const sections = (t as unknown as { privacy: { sections: Array<{title: string; text: string}> } }).privacy.sections;
    const sectionEls = privacySectionsContainer.querySelectorAll('[data-privacy-section]');
    sectionEls.forEach((el, i) => {
      const section = sections[i];
      if (!section) return;
      const titleEl = el.querySelector('[data-privacy-section-title]');
      const textEl = el.querySelector('[data-privacy-section-text]');
      if (titleEl) titleEl.textContent = section.title;
      if (textEl) textEl.textContent = section.text;
    });
  }

  const langLabel = document.querySelector('.lang-label');
  if (langLabel) {
    const short: Record<SupportedLocale, string> = { es: 'ES', en: 'EN', pt: 'PT', he: 'HE' };
    langLabel.textContent = short[locale];
  }

  document.querySelectorAll('[data-locale]').forEach(btn => {
    const btnLocale = (btn as HTMLElement).dataset.locale;
    btn.classList.toggle('lang-option--active', btnLocale === locale);
    btn.classList.toggle('mobile-lang-btn--active', btnLocale === locale);
    btn.setAttribute('aria-selected', String(btnLocale === locale));
  });
}

function resolveKey(obj: Record<string, unknown>, key: string): unknown {
  const parts = key.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

declare global {
  interface Window {
    applyI18n: (locale: SupportedLocale) => void;
    getSavedLocale: () => SupportedLocale;
  }
}

window.applyI18n = applyI18n;
window.getSavedLocale = getSavedLocale;

const saved = getSavedLocale();
if (saved !== DEFAULT_LOCALE) {
  applyI18n(saved);
}
