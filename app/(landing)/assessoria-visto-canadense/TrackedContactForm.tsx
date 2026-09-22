'use client';

import ContactForm from '@/components/ContactForm';
import { trackEvent } from './ConversionTracker';

export default function TrackedContactForm() {
  return <ContactForm onSuccess={() => trackEvent('contact_form_submit')} />;
}
