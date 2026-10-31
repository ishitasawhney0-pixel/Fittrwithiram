
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Menu,
  X,
  Dumbbell,
  Flame,
  Leaf,
  Laptop,
  MoveUpRight,
} from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Fat Loss &",
    subtitle: "Body Recomposition",
    description: "Build a healthier body through sustainable training and nutrition.",
    icon: Flame,
    image: "photo-1517836357463-d25dfeac3438",
  },
  {
    number: "02",
    title: "Strength &",
    subtitle: "Muscle Building",
    description: "Build strength, improve endurance and become more powerful.",
    icon: Dumbbell,
    image: "photo-1534438327276-14e5300c3a48",
  },
  {
    number: "03",
    title: "Nutrition",
    subtitle: "Coaching",
    description: "Realistic nutrition guidance designed around your lifestyle.",
    icon: Leaf,
    image: "photo-1490645935967-10de6ba17061",
  },
  {
    number: "04",
    title: "Online",
    subtitle: "Personal Coaching",
    description: "Expert guidance and personalized support wherever you are.",
    icon: Laptop,
    image: "photo-1546483875-ad9014c88eba",
  },
];

const stats = [
  { value: "GOALS", label: "Start with what matters to you" },
  { value: "PLAN", label: "A routine built around your life" },
  { value: "SUPPORT", label: "Guidance along the way" },
  { value: "PROGRESS", label: "Consistency over perfection" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "#home"],
    ["About", "/about"],
    ["Programs", "/programs"],
    ["Transformations", "#results"],
    ["Nutrition", "#nutrition"],
    ["Contact", "/contact"],
  ];

  return (
    <main className="overflow-hidden bg-[#10110e] text-[#f5f4ed]">
      <nav className="absolute left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-xl">
        <div className="container-main flex h-[82px] items-center justify-between">
          <a href="#home" className="text-xl font-semibold tracking-tight">
            FITTRWITH<span className="text-[#c5f36b]">IRAM</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[12px] text-white/70 transition hover:text-[#c5f36b]"
              >
                {label}
              </a>
            ))}
          </div>

      <a href="/contact" className="lime-button hidden sm:inline-flex">
  Apply for coaching <ArrowRight size={16} />
</a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#141510] px-8 py-6 lg:hidden">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4 text-sm text-white/80"
              >
                {label}
              </a>
            ))}
            <a
             href="/contact"
              onClick={() => setMenuOpen(false)}
              className="lime-button mt-5 w-full"
            >
              Apply for coaching <ArrowRight size={16} />
            </a>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative flex min-h-[760px] items-center overflow-hidden pt-28"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-55"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2000&q=90')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10110e] via-[#10110e]/90 to-[#10110e]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10110e] via-transparent to-black/30" />
          <div className="absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-[#a3d94c]/10 blur-[150px]" />
        </div>

        <div className="container-main relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-[690px] py-16"
          >
            <p className="eyebrow mb-8">
              DISCIPLINE · PROGRESS · A STRONGER YOU
            </p>

            <h1 className="display-heading text-5xl sm:text-6xl md:text-7xl xl:text-[88px]">
              BUILD A{" "}
              <span className="text-[#c5f36b]">HEALTHIER,</span>
              <br />
              HAPPIER YOU.
            </h1>

            <p className="mt-8 max-w-[470px] text-base leading-7 text-white/65">
              Personalized fitness coaching, sustainable nutrition and
              real guidance to help you look better, feel stronger and
              live healthier.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#programs" className="lime-button">
                Explore programs <ArrowRight size={17} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-[14px] text-sm transition hover:border-[#c5f36b] hover:text-[#c5f36b]"
              >
                <Play size={15} /> Meet Iram
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-9">
              <div>
                <p className="display-heading text-3xl">YOUR</p>
                <p className="mt-1 text-xs text-white/50">
                  Journey starts here
                </p>
              </div>
              <div className="h-11 w-px bg-white/20" />
              <div>
                <p className="text-[#c5f36b] tracking-[0.3em]">✳ ✳ ✳ ✳ ✳</p>
                <p className="mt-2 text-xs text-white/50">
                  Progress over perfection
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="relative hidden h-[550px] lg:block"
          >
            <div
              className="absolute inset-0 rounded-t-[48%] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(to top, #10110e 0%, transparent 50%), url('https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=1100&q=90')",
              }}
            />
            <div className="absolute -right-5 top-16 rounded-full border border-[#c5f36b]/50 bg-black/30 p-9 text-center backdrop-blur-md">
              <p className="text-[10px] tracking-[0.3em] text-[#c5f36b]">
                FITNESS
              </p>
              <p className="mt-2 text-[10px] tracking-[0.3em]">NUTRITION</p>
              <p className="mt-2 text-[10px] tracking-[0.3em]">LIFESTYLE</p>
            </div>
            <p className="absolute bottom-12 right-0 font-serif text-5xl italic text-[#c5f36b]">
              Fittr with Iram.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c5f36b]/50 to-transparent" />
      </section>

      <section className="relative border-y border-white/10 bg-[#171912] py-9">
        <div className="container-main grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="border-l border-white/15 pl-5"
            >
              <p className="display-heading text-3xl text-[#c5f36b] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-white/55">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="programs" className="bg-[#f5f3eb] py-24 text-[#171812]">
        <div className="container-main">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-[#829c45]">CHOOSE YOUR GOAL</p>
              <h2 className="display-heading mt-4 text-4xl sm:text-5xl">
                Find Your Strength.
              </h2>
            </div>
            <p className="max-w-[320px] text-sm leading-6 text-black/55">
              Thoughtful coaching programs designed around your
              individual goals, lifestyle and fitness journey.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.a
                  href="#contact"
                  id={program.number === "03" ? "nutrition" : undefined}
                  key={program.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="group relative flex min-h-[390px] flex-col justify-end overflow-hidden rounded-xl bg-[#202119] p-6 text-white"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/${program.image}?w=800&q=85')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />

                  <div className="relative z-10">
                    <div className="mb-12 flex h-11 w-11 items-center justify-center rounded-full border border-[#c5f36b]/60 text-[#c5f36b]">
                      <Icon size={20} />
                    </div>
                    <p className="text-xs tracking-[0.2em] text-[#c5f36b]">
                      PROGRAM {program.number}
                    </p>
                    <h3 className="display-heading mt-3 text-2xl">
                      {program.title}
                      <br />
                      {program.subtitle}
                    </h3>
                    <p className="mt-4 text-xs leading-6 text-white/70">
                      {program.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/25 pt-4">
                      <span className="text-xs">Explore program</span>
                      <MoveUpRight
                        size={19}
                        className="text-[#c5f36b] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-[#11120e] py-24">
        <div className="container-main grid items-center gap-14 lg:grid-cols-2">
          <div className="relative h-[460px] overflow-hidden rounded-2xl bg-[#24251f]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/iram-portrait.png')",
                backgroundPosition: "center 35%",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-7 left-7 text-xs tracking-[0.3em] text-[#c5f36b]">
              STRONGER EVERY DAY
            </p>
          </div>

          <div>
            <p className="eyebrow">MEET YOUR COACH</p>
            <h2 className="display-heading mt-6 text-5xl sm:text-6xl">
              Your Journey.
              <br />
              <span className="text-[#c5f36b]">Your Strength.</span>
            </h2>
            <p className="mt-8 max-w-[500px] text-sm leading-8 text-white/60">
              Fitness is more than a physical transformation. It is
              about building confidence, developing discipline and
              creating habits that last.
            </p>
            <p className="mt-4 max-w-[500px] text-sm leading-8 text-white/60">
              Discover a coaching approach that puts your goals,
              lifestyle and long-term wellbeing first.
            </p>
            <a href="#contact" className="lime-button mt-9">
              Start your journey <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="results" className="bg-[#f5f3eb] py-20 text-[#171812]">
        <div className="container-main flex flex-col items-center text-center">
          <p className="eyebrow text-[#829c45]">THE JOURNEY MATTERS</p>
          <h2 className="display-heading mt-5 text-4xl sm:text-6xl">
            Progress, not perfection.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-black/55">
            Every fitness journey is different. The goal is to build
            sustainable habits, celebrate progress and keep moving
            forward.
          </p>
          <a href="#contact" className="lime-button mt-8">
            Begin your transformation <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer id="contact" className="bg-[#10110e] py-16">
        <div className="container-main">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 md:flex-row md:items-center">
            <div>
              <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
              <h2 className="display-heading mt-5 text-4xl sm:text-5xl">
                Ready to become
                <br />
                <span className="text-[#c5f36b]">your strongest self?</span>
              </h2>
            </div>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="lime-button"
            >
              Let's talk <ArrowRight size={17} />
            </a>
          </div>

          <div className="flex flex-col justify-between gap-6 pt-8 sm:flex-row sm:items-center">
            <p className="text-lg font-semibold tracking-tight">
              FITTRWITH<span className="text-[#c5f36b]">IRAM</span>
            </p>
            <p className="text-xs text-white/40">
              © 2026 FITTRWITHIRAM. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
              <a
                href="https://www.instagram.com/fittrwith.wani/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#c5f36b]"
              >
                Instagram ↗
              </a>
              <a
                href="https://www.facebook.com/share/1Ncwj7MMPL/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#c5f36b]"
              >
                Facebook ↗
              </a>
              <a
                href="https://www.linkedin.com/in/wani-iram-firdous-72b095183"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#c5f36b]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
