'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  // gtag.js doesn't read arbitrary dataLayer.push() calls — it only processes
  // events sent through gtag() itself, so this explicit call is what actually
  // makes whatsapp_click / phone_click / lead_form_submit / contact_form_submit
  // show up as GA4 events once GoogleTag.tsx has loaded the gtag.js snippet.
  window.gtag?.('event', event, params);
}

// Delegated click tracking for every WhatsApp / call link on the page, so
// new CTAs added later are tracked automatically without extra wiring.
export default function ConversionTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('https://wa.me/')) {
        trackEvent('whatsapp_click', { link_url: href });
      } else if (href.startsWith('tel:')) {
        trackEvent('phone_click', { link_url: href });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
