'use client';

import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Contact Form */}
          <div className="rounded bg-white p-8 shadow-md sm:p-10">
            <h2
              className="mb-2 text-2xl font-bold sm:text-3xl"
              style={{ color: '#2E2E2E' }}
            >
              Send Us a Message
            </h2>
            <p className="mb-8 text-base" style={{ color: '#6E6E6E' }}>
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            {/* Success Message */}
            {status === 'success' && (
              <div className="mb-6 rounded p-4" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="mb-6 rounded p-4" style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA' }}>
                <p className="text-sm font-medium" style={{ color: '#991B1B' }}>
                  {errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: '#2E2E2E' }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Johnson"
                    className="w-full rounded border px-4 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2"
                    style={{
                      borderColor: '#E5E7EB',
                      color: '#2E2E2E',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: '#2E2E2E' }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Summit Mining Co."
                    className="w-full rounded border px-4 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2"
                    style={{
                      borderColor: '#E5E7EB',
                      color: '#2E2E2E',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: '#2E2E2E' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@summitmining.com"
                    className="w-full rounded border px-4 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2"
                    style={{
                      borderColor: '#E5E7EB',
                      color: '#2E2E2E',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: '#2E2E2E' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+51 XXX XXX XXX"
                    className="w-full rounded border px-4 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2"
                    style={{
                      borderColor: '#E5E7EB',
                      color: '#2E2E2E',
                    }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: '#2E2E2E' }}
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. We need 200 high-visibility jackets with our company logo for our mining crew. Delivery needed by March..."
                  className="w-full resize-none rounded border px-4 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2"
                  style={{
                    borderColor: '#E5E7EB',
                    color: '#2E2E2E',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-8 w-full rounded px-8 py-4 text-sm font-bold tracking-wide text-white transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
                style={{ backgroundColor: '#B89A54' }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right: Why Contact Us */}
          <div className="flex flex-col justify-center">
            <h3
              className="mb-6 text-2xl font-bold sm:text-3xl"
              style={{ color: '#2E2E2E' }}
            >
              Why Work With{' '}
              <span style={{ color: '#B89A54' }}>Andes Workwear</span>
            </h3>
            <div
              className="mb-8 h-1 w-16"
              style={{ backgroundColor: '#B89A54' }}
            />

            <div className="space-y-6">
              {[
                {
                  title: 'Custom Quotes',
                  description:
                    'Get tailored pricing based on your exact needs — quantity, materials, and branding.',
                },
                {
                  title: 'Bulk Orders',
                  description:
                    'We specialize in large-scale orders with consistent quality and on-time delivery.',
                },
                {
                  title: 'Custom Branding',
                  description:
                    'Add your company logo, colors, and identity to any workwear product in our catalog.',
                },
                {
                  title: 'Fast Turnaround',
                  description:
                    'With 9+ years of manufacturing experience, we deliver on schedule — every time.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: '#B89A54' }}
                  >
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="mb-1 text-base font-bold"
                      style={{ color: '#2E2E2E' }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#6E6E6E' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp shortcut */}
            <div
              className="mt-10 rounded p-6"
              style={{ backgroundColor: '#F2F2F2' }}
            >
              <p
                className="mb-3 text-sm font-bold"
                style={{ color: '#2E2E2E' }}
              >
                Prefer to chat directly?
              </p>
              <a
                href="https://wa.me/+13683384802"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
