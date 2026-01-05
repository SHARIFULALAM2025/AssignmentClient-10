import React from 'react';
import Component from '../Component/Component';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/Auth/AuthContext';

const Privacy = () => {
    const sections = [
      { id: 'introduction', title: 'Introduction' },
      { id: 'data-collection', title: 'Information We Collect' },
      { id: 'data-usage', title: 'How We Use Data' },
      { id: 'environmental-impact', title: 'Our Green Commitment' },
      { id: 'your-rights', title: 'Your Privacy Rights' },
      { id: 'contact', title: 'Contact Us' },
  ]
  const {theme} =useContext(AuthContext)
    return (
      <Component>
        <div
          className={`min-h-screen ${
            theme === 'dark' ? 'bg-black text-stone-50' : 'bg-white text-black'
          }   text-slate-800 font-sans selection:bg-emerald-100`}
        >
          {/* Header Section */}
          <header className="bg-emerald-900 py-16 px-6 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-emerald-800/50 border border-emerald-700 rounded-full">
                Legal Transparency
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-emerald-100 text-lg opacity-90">
                Last updated: January 5, 2026 • 5 min read
              </p>
            </div>
          </header>

          <main className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
            {/* Sticky Table of Contents (Desktop) */}
            <aside className="hidden md:block w-64 shrink-0 sticky top-8 h-fit">
              <nav className="space-y-1 border-l-2 border-emerald-100 ml-4">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block pl-4 py-2 text-sm font-medium text-slate-500 hover:text-emerald-600 hover:border-emerald-600 border-l-2 border-transparent -ml-[2px] transition-all"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content Section */}
            <article className="prose prose-slate prose-emerald max-w-none flex-1">
              <section id="introduction" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold dark:text-white text-slate-900 border-b pb-2 mb-6">
                  1. Introduction
                </h2>
                <p className="leading-relaxed">
                  Welcome to the Greenest Project. Your privacy is as important
                  to us as the planet. This policy describes how we handle your
                  information with the same care and transparency we apply to
                  our environmental efforts.
                </p>
              </section>

              <section id="data-collection" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold dark:text-white text-slate-900 border-b pb-2 mb-6">
                  2. Information We Collect
                </h2>
                <div className="dark:bg-black dark:text-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
                  <h3 className="text-lg font-semibold mt-0 mb-3 text-emerald-800">
                    Direct Information
                  </h3>
                  <p>
                    We collect email addresses and names only when you
                    voluntarily provide them for our newsletter or
                    carbon-tracking tools.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-3 text-emerald-800">
                    Automated Data
                  </h3>
                  <p>
                    We use eco-friendly, cookieless analytics to understand how
                    users interact with our site without infringing on your
                    digital footprint.
                  </p>
                </div>
              </section>

              <section
                id="environmental-impact"
                className="mb-12 scroll-mt-8 dark:bg-black dark:text-white  p-8 rounded-2xl border border-emerald-100"
              >
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                  3. Our Green Data Commitment
                </h2>
                <p className="text-emerald-800 leading-relaxed italic">
                  "We believe that data storage has a carbon footprint. By
                  practicing data minimization, we reduce the energy required to
                  power our servers, contributing to a cooler planet."
                </p>
                <ul className="mt-4 space-y-2 text-emerald-900 font-medium">
                  <li className="flex items-center gap-2">
                    ✓ Servers powered by 100% renewable energy
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Zero sale of personal data to third parties
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Automatic deletion of inactive data after 12 months
                  </li>
                </ul>
              </section>

              <section id="your-rights" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold dark:text-white text-slate-900 border-b pb-2 mb-6">
                  4. Your Privacy Rights
                </h2>
                <p>Under global data protection laws, you have the right to:</p>
                <div className="grid grid-cols-1 dark:bg-white dark:text-black  sm:grid-cols-2 gap-4 mt-4">
                  {[
                    'Access your data',
                    'Request deletion',
                    'Object to processing',
                    'Data portability',
                  ].map((right) => (
                    <div
                      key={right}
                      className="flex items-center p-3 bg-slate-100 rounded-lg text-sm font-semibold"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      {right}
                    </div>
                  ))}
                </div>
              </section>

              <section id="contact" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-bold dark:text-white text-slate-900 border-b pb-2 mb-6">
                  5. Contact Us
                </h2>
                <p>
                  Questions about your data or our eco-initiatives? Reach out to
                  our Privacy Officer at:
                </p>
                <a
                  href="mailto:privacy@greenestproject.com"
                  className="inline-block mt-4 px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
                >
                  privacy@greenestproject.com
                </a>
              </section>
            </article>
          </main>
        </div>
      </Component>
    )
};

export default Privacy;