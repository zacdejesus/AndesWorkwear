import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Andes Workwear",
  description:
    "Get in touch with Andes Workwear for custom quotes, bulk orders, and professional workwear solutions.",
};

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative z-10 overflow-hidden px-4 py-20 sm:px-8 md:py-32"
        style={{ backgroundColor: '#1d2430' }}
      >
        <div className="mx-auto max-w-6xl">
          <h1
            className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl"
            style={{ color: '#B89A54' }}
          >
            Get in Touch
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: '#F2F2F2' }}>
            Ready to equip your team? Contact us for custom quotes, bulk orders, and
            branding solutions tailored to your business.
          </p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section style={{ backgroundColor: '#2E2E2E' }}>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: '#B89A54' }}
              >
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide" style={{ color: '#B89A54' }}>
                  Email
                </p>
                <a href="mailto:info@andesworkwear.com" className="text-sm font-medium text-white hover:underline">
                  info@andesworkwear.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: '#B89A54' }}
              >
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide" style={{ color: '#B89A54' }}>
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/+13683384802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white hover:underline"
                >
                  +1 (368) 338-4802
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: '#B89A54' }}
              >
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide" style={{ color: '#B89A54' }}>
                  Location
                </p>
                <p className="text-sm font-medium text-white">
                  Calgary, AB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Why Contact Us */}
      <Contact />
    </main>
  );
};

export default ContactPage;
