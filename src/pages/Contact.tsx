import { useState } from 'react';
import { Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-16 sm:pt-20">
      <section className="container-px py-16 text-center sm:py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-sky-500">
          Contact
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-sky-900 sm:text-5xl">
          Say hello
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-sky-700/80">
          Questions, ideas, or just a kind word — we read everything and reply
          to what we can. Write to us below or use the details on the side.
        </p>
      </section>

      <section className="container-px pb-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-sky-200/40 sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={48} className="text-foam-500" />
                  <h2 className="mt-5 font-serif text-2xl font-semibold text-sky-900">
                    Message received
                  </h2>
                  <p className="mt-2 max-w-sm text-sky-600">
                    Thank you for reaching out. We read every note and will
                    reply when we can.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-medium text-sky-700 link-underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Your name">
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Email address">
                      <input
                        type="email"
                        required
                        placeholder="jane@email.com"
                        className="form-input"
                      />
                    </Field>
                  </div>
                  <Field label="Subject">
                    <input
                      type="text"
                      required
                      placeholder="What is this about?"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Message">
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message…"
                      className="form-input resize-none"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-900 px-6 py-3.5 text-sm font-medium text-sky-50 transition-all duration-300 hover:gap-3 hover:bg-sky-800 sm:w-auto"
                  >
                    Send message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <ContactRow
                icon={Mail}
                title="Email"
                text="hello@minimallife.example"
              />
              <ContactRow
                icon={MapPin}
                title="Location"
                text="Written from a small room by the coast."
              />
              <ContactRow
                icon={MessageSquare}
                title="Press & partnerships"
                text="For collaborations, use the subject line “hello partner.”"
              />
              <div className="mt-2 rounded-2xl bg-gradient-to-br from-sky-100 to-foam-100 p-6">
                <p className="font-serif text-lg font-semibold text-sky-900">
                  We reply slowly
                </p>
                <p className="mt-2 text-sm leading-relaxed text-sky-700/80">
                  We answer most messages within a week. If it is urgent, say so
                  in the subject line — we will do our best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-sky-800">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-sky-200/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-sky-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-sky-600">{text}</p>
      </div>
    </div>
  );
}
