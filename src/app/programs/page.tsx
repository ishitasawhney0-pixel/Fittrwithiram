
import Link from "next/link";
import { ArrowRight, Dumbbell, Flame, Leaf, Laptop } from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Fitness Foundations",
    description: "Build consistency, develop healthy habits and establish a fitness routine that works for your lifestyle.",
    icon: Flame,
    tag: "GET STARTED",
  },
  {
    number: "02",
    title: "Strength & Movement",
    description: "Explore strength training, movement and ways to become more confident in your physical abilities.",
    icon: Dumbbell,
    tag: "BUILD STRENGTH",
  },
  {
    number: "03",
    title: "Nutrition & Wellness",
    description: "Discover balanced eating habits and practical approaches to everyday nutrition.",
    icon: Leaf,
    tag: "LIVE BETTER",
  },
  {
    number: "04",
    title: "Personal Guidance",
    description: "Start a conversation about your goals and explore the guidance that may suit your journey.",
    icon: Laptop,
    tag: "YOUR JOURNEY",
  },
];

export default function ProgramsPage() {
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

      <section className="container-main py-20 sm:py-28">
        <p className="eyebrow">FIND YOUR DIRECTION</p>
        <h1 className="display-heading mt-6 max-w-3xl text-5xl sm:text-7xl">
          Your goals.
          <br />
          <span className="text-[#c5f36b]">Your journey.</span>
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-8 text-white/55">
          Every fitness journey starts somewhere. Explore these areas
          of focus and get in touch to discuss your individual goals.
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.number}
                className="group rounded-2xl border border-white/10 bg-[#191a16] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c5f36b]/50 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.25em] text-[#c5f36b]">
                    {program.tag}
                  </span>
                  <span className="text-sm text-white/30">
                    {program.number}
                  </span>
                </div>

                <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#c5f36b]/40 text-[#c5f36b]">
                  <Icon size={25} />
                </div>

                <h2 className="display-heading mt-8 text-3xl">
                  {program.title}
                </h2>

                <p className="mt-5 min-h-16 text-sm leading-7 text-white/50">
                  {program.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm transition hover:text-[#c5f36b]"
                >
                  Discuss your goals
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f5f3eb] py-20 text-[#171812]">
        <div className="container-main text-center">
          <p className="eyebrow text-[#829c45]">TAKE THE FIRST STEP</p>
          <h2 className="display-heading mt-5 text-4xl sm:text-6xl">
            Let's get started.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-black/55">
            Have questions or want to explore your options? Reach out
            and start a conversation.
          </p>
          <Link href="/contact" className="lime-button mt-9">
            Make an enquiry <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <footer className="py-8">
        <div className="container-main flex justify-between gap-4 text-xs text-white/40">
          <span>FITTRWITHIRAM</span>
          <span>© 2026 All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
