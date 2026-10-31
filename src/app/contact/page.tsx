
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Camera, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    coaching: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");
  const [emailLink, setEmailLink] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const details = `
New Coaching Enquiry — FITTRWITHIRAM

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Fitness Goal: ${form.goal}
Coaching Preference: ${form.coaching}

Message:
${form.message || "No additional message"}
`;

    setWhatsappLink(
      `https://wa.me/919541487835?text=${encodeURIComponent(details)}`
    );

    setEmailLink(
      `mailto:fittrwithiram@gmail.com?subject=${encodeURIComponent(
        "New Coaching Enquiry - " + form.name
      )}&body=${encodeURIComponent(details)}`
    );

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#10110e] text-[#f5f4ed]">
      <nav className="border-b border-white/10">
        <div className="container-main flex h-[82px] items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            FITTRWITH<span className="text-[#c5f36b]">IRAM</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/60 transition hover:text-[#c5f36b]"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </nav>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-[#a3d94c]/10 blur-[150px]" />

        <div className="container-main relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="pt-4">
            <p className="eyebrow">LET'S START SOMETHING GOOD</p>

            <h1 className="display-heading mt-7 text-5xl sm:text-6xl xl:text-7xl">
              Your next
              <br />
              chapter
              <br />
              <span className="text-[#c5f36b]">starts here.</span>
            </h1>

            <p className="mt-8 max-w-md text-sm leading-8 text-white/55">
              Every journey begins with a conversation. Tell us a little
              about yourself and what you'd like to achieve. Iram would
              love to hear from you.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href="https://wa.me/919541487835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/75 transition hover:text-[#c5f36b]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span className="block text-xs text-white/40">WHATSAPP</span>
                  <span className="mt-1 block text-sm">+91 95414 87835</span>
                </span>
              </a>

              <a
                href="mailto:fittrwithiram@gmail.com"
                className="flex items-center gap-4 text-white/75 transition hover:text-[#c5f36b]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-xs text-white/40">EMAIL</span>
                  <span className="mt-1 block text-sm">
                    fittrwithiram@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="https://www.instagram.com/fittrwith.wani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/75 transition hover:text-[#c5f36b]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
                 <Camera size={20} />
                </span>
                <span>
                  <span className="block text-xs text-white/40">INSTAGRAM</span>
                  <span className="mt-1 block text-sm">@fittrwith.wani</span>
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#191a16] p-6 sm:p-10">
            {!submitted ? (
              <>
                <div className="mb-9">
                  <p className="eyebrow">ENQUIRY FORM</p>
                  <h2 className="display-heading mt-4 text-3xl sm:text-4xl">
                    Tell us about your goals.
                  </h2>
                  <p className="mt-3 text-sm text-white/45">
                    Fill in the details below to get started.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs text-white/60">
                        Your name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Enter your name"
                        className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none transition placeholder:text-white/25 focus:border-[#c5f36b]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs text-white/60">
                        Email address *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none transition placeholder:text-white/25 focus:border-[#c5f36b]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs text-white/60">
                      Phone / WhatsApp number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none transition placeholder:text-white/25 focus:border-[#c5f36b]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs text-white/60">
                      What is your primary fitness goal? *
                    </label>
                    <select
                      required
                      value={form.goal}
                      onChange={(e) =>
                        setForm({ ...form, goal: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-[#191a16] px-4 py-4 text-sm text-white/75 outline-none focus:border-[#c5f36b]"
                    >
                      <option value="">Choose your goal</option>
                      <option>Weight management</option>
                      <option>Strength and muscle building</option>
                      <option>General fitness and wellness</option>
                      <option>Nutrition guidance</option>
                      <option>Building a consistent routine</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs text-white/60">
                      Preferred coaching option *
                    </label>
                    <select
                      required
                      value={form.coaching}
                      onChange={(e) =>
                        setForm({ ...form, coaching: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-[#191a16] px-4 py-4 text-sm text-white/75 outline-none focus:border-[#c5f36b]"
                    >
                      <option value="">Choose an option</option>
                      <option>Online coaching</option>
                      <option>In-person coaching</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs text-white/60">
                      Anything else you'd like us to know?
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us a little more about your goals..."
                      className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none transition placeholder:text-white/25 focus:border-[#c5f36b]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="lime-button w-full"
                  >
                    Submit your enquiry <ArrowRight size={17} />
                  </button>

                  <p className="text-center text-[11px] leading-5 text-white/35">
                    Your details will be prepared for you to send through
                    WhatsApp or email. Nothing is sent automatically.
                  </p>
                </form>
              </>
            ) : (
              <div className="flex min-h-[540px] flex-col items-center justify-center text-center">
                <CheckCircle2
                  size={55}
                  className="text-[#c5f36b]"
                />
                <p className="eyebrow mt-7">ENQUIRY PREPARED</p>
                <h2 className="display-heading mt-4 text-4xl">
                  You're one step closer.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                  Your details are ready. Choose how you'd like to send
                  your enquiry to Iram.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lime-button mt-9 w-full"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                  <ArrowRight size={17} />
                </a>

                <a
                  href={emailLink}
                  className="mt-4 flex w-full items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm transition hover:border-[#c5f36b] hover:text-[#c5f36b]"
                >
                  <Mail size={18} />
                  Send via Email
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-xs text-white/40 underline underline-offset-4 hover:text-white"
                >
                  Edit my details
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container-main flex flex-col justify-between gap-4 text-xs text-white/40 sm:flex-row">
          <p>
            FITTRWITH<span className="text-[#c5f36b]">IRAM</span>
          </p>
          <p>© 2026 FITTRWITHIRAM. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
