import Link from "next/link";
import { ArrowRight, Award, Camera, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#10110e] text-[#f5f4ed]">
      <nav className="border-b border-white/10">
        <div className="container-main flex h-[82px] items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            FITTRWITH<span className="text-[#c5f36b]">IRAM</span>
          </Link>
          <Link href="/" className="text-sm text-white/60 hover:text-[#c5f36b]">
            Back to home
          </Link>
        </div>
      </nav>

      <section className="container-main grid items-center gap-14 py-20 lg:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/iram-portrait.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="absolute bottom-8 left-8 text-xs tracking-[0.3em] text-[#c5f36b]">
            FITTR WITH IRAM
          </p>
        </div>

        <div>
          <p className="eyebrow">GET TO KNOW YOUR COACH</p>
          <h1 className="display-heading mt-6 text-5xl sm:text-7xl">
            Meet
            <br />
            <span className="text-[#c5f36b]">Iram.</span>
          </h1>

          {/* Small Credentials Textbox */}
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-[#c5f36b]/25 bg-[#c5f36b]/10 px-4 py-2.5 text-xs font-medium tracking-wide text-[#c5f36b]">
            <Award size={16} className="shrink-0" />
            <span>Certified Nutritionist &amp; Fitness Specialist</span>
          </div>

          <p className="mt-7 text-sm leading-8 text-white/65">
            Welcome to FITTRWITHIRAM — a space dedicated to evidence-based
            fitness, sustainable nutrition, and building healthier everyday
            habits.
          </p>

          <p className="mt-5 text-sm leading-8 text-white/65">
            As a Certified Nutritionist and Fitness Specialist, I combine
            structured training with practical dietary guidance so your
            lifestyle transformation stays realistic, balanced, and lasting.
          </p>

          <p className="mt-5 text-sm leading-8 text-white/65">
            Whether you&apos;re beginning your fitness journey or looking to
            take the next step, let&apos;s start a conversation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="lime-button">
              Get in touch <ArrowRight size={17} />
            </Link>
            <a
              href="https://www.instagram.com/fittrwith.wani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm hover:border-[#c5f36b] hover:text-[#c5f36b]"
            >
              <Camera size={17} /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Dedicated Credentials Section */}
      <section className="border-t border-white/10 py-16">
        <div className="container-main">
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow">CREDENTIALS &amp; EXPERTISE</p>
              <h2 className="display-heading mt-4 text-3xl sm:text-4xl">
                Certified guidance you can{" "}
                <span className="text-[#c5f36b]">trust.</span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-xl border border-white/10 bg-[#10110e] p-5">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#c5f36b]">
                  <CheckCircle2 size={18} />
                  <span>Certified Nutritionist</span>
                </div>
                <p className="mt-2.5 text-xs leading-6 text-white/60">
                  Personalized, sustainable nutrition strategies tailored to
                  your body, routine, and long-term health goals without
                  restrictive fad dieting.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#10110e] p-5">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#c5f36b]">
                  <CheckCircle2 size={18} />
                  <span>Certified Fitness Specialist</span>
                </div>
                <p className="mt-2.5 text-xs leading-6 text-white/60">
                  Structured strength, conditioning, and movement programming
                  designed for safe progression, consistency, and measurable
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3eb] py-20 text-[#171812]">
        <div className="container-main text-center">
          <p className="eyebrow text-[#829c45]">THE PHILOSOPHY</p>
          <h2 className="display-heading mt-5 text-4xl sm:text-6xl">
            Small steps.
            <br />
            Lasting progress.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-black/55">
            Fitness is not about perfection. It&apos;s about consistency,
            finding what works for you and creating habits you can maintain.
          </p>
          <Link href="/contact" className="lime-button mt-9">
            Start your journey <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <footer className="py-8">
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
