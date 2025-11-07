import React, { useState } from "react";
import logo from "./assets/JDGLogo-Black.png";
import Jainam from "./assets/ProfilePic.jpg"

// Single‑file, responsive landing site for a game studio or a specific game.
// Works in a standard React/Vite project. Uses Tailwind utility classes.
// Replace BRAND, copy, and placeholder images as needed.

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 ${className}`}>{children}</section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm backdrop-blur bg-white/5 border-white/15">
    {children}
  </span>
);

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src={logo} alt="JDG Studios Logo" className="h-8 w-8 rounded-xl object-cover" />
    <span className="font-extrabold tracking-tight text-lg md:text-xl">JDG Studios</span>
  </div>
);

const Nav = ({ open, setOpen }) => (
  <header className="sticky top-0 z-50 backdrop-blur bg-neutral-900/60 border-b border-white/10">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <Logo />
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a className="hover:text-white/90 text-white/80" href="#features">Features</a>
        <a className="hover:text-white/90 text-white/80" href="#game">Game</a>
        <a className="hover:text-white/90 text-white/80" href="#roadmap">Roadmap</a>
        <a className="hover:text-white/90 text-white/80" href="#team">Team</a>
        <a className="hover:text-white/90 text-white/80" href="#contact">Contact</a>
        <a className="ml-2 rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium hover:opacity-90" href="#download">Download</a>
      </nav>
      <button className="md:hidden p-2 rounded-lg border border-white/15" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-80"><path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
    </div>
    {open && (
      <div className="md:hidden border-t border-white/10 bg-neutral-950/80">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-4 text-sm">
          {[
            ["Features", "#features"],
            ["Game", "#game"],
            ["Roadmap", "#roadmap"],
            ["Team", "#team"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="text-white/80" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#download" className="rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium w-fit">Download</a>
        </div>
      </div>
    )}
  </header>
);

const PlaceholderImage = ({ label = "Screenshot", aspect = "aspect-[16/9]" }) => (
  <div className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900`}> 
    <div className="absolute inset-0 opacity-30" style={{backgroundImage: "radial-gradient(circle at 20% 30%, #818cf8 0, transparent 35%), radial-gradient(circle at 80% 60%, #f472b6 0, transparent 35%)"}} />
    <div className="absolute inset-0 grid place-items-center">
      <div className="text-center">
        <div className="text-xs tracking-widest uppercase text-white/50">Placeholder</div>
        <div className="text-lg font-semibold">{label}</div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, body, icon }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition">
    <div className="flex items-center gap-3 mb-3">
      <span className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5">{icon}</span>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-white/70 text-sm leading-relaxed">{body}</p>
  </div>
);

const Footer = () => (
  <footer className="mt-20 border-t border-white/10">
    <Section className="py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
      <div className="flex items-center gap-2">
        <Logo />
        <span className="hidden md:inline">© {new Date().getFullYear()} JDG Studio. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#privacy" className="hover:text-white/90">Privacy</a>
        <a href="#terms" className="hover:text-white/90">Terms</a>
        <a href="#press" className="hover:text-white/90">Press</a>
      </div>
    </Section>
  </footer>
);

export default function Website() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen text-white bg-neutral-950 selection:bg-indigo-500/40">
      {/* Decorative backdrop */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500" />
      </div>

      <Nav open={open} setOpen={setOpen} />

      {/* HERO */}
      <Section id="hero" className="py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1">
            <Pill>🎮 New: <strong className="font-semibold">Project "SkyRune"</strong> closed alpha live</Pill>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Build. Play. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-rose-400">Repeat.</span>
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              We craft tight game loops, bold aesthetics, and worlds you want to live in. Dive into our debut title and join the community shaping what comes next.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="rounded-xl px-5 py-3 bg-white text-neutral-900 font-semibold text-sm text-center">Download Alpha</a>
              <a href="#trailer" className="rounded-xl px-5 py-3 bg-white/10 border border-white/15 font-semibold text-sm text-center">Watch Trailer</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M12 20l9-16H3l9 16z"/></svg> Windows</span>
              <span className="inline-flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg> macOS</span>
              <span className="inline-flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M4 4h16v16H4z"/></svg> Linux</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <PlaceholderImage label="Hero Gameplay Capture" />
          </div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" className="py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Why players stick around</h2>
          <p className="text-white/70 mt-2 max-w-2xl">A focused set of mechanics, generous juice, and rock‑solid performance. Designed for 60fps on mid‑range hardware.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <FeatureCard title="Tight Core Loop" body="Minute‑to‑minute gameplay tuned with telemetry. Every action pushes progress and mastery." icon={<IconLoop />} />
          <FeatureCard title="Stylized Visuals" body="Crisp silhouettes, bold color language, and a look that ages well across devices." icon={<IconSpark />} />
          <FeatureCard title="Player‑First Netcode" body="Rollback‑friendly architecture with authoritative servers and low‑latency input." icon={<IconNet />} />
        </div>
      </Section>

      {/* GAME SHOWCASE */}
      <Section id="game" className="py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Game — SkyRune</h2>
            <p className="text-white/70 mt-2 max-w-2xl">A fast‑paced arena roguelite where you carve runes mid‑air to weave spells and chain aerial combos.</p>
          </div>
          <a href="#wishlist" className="hidden md:inline rounded-xl px-4 py-2 bg-white/10 border border-white/15 text-sm">Add to Wishlist</a>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <PlaceholderImage label="Trailer / Hero Shot" />
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <PlaceholderImage label="Combat" aspect="aspect-video" />
              <PlaceholderImage label="Runes UI" aspect="aspect-video" />
              <PlaceholderImage label="Boss Arena" aspect="aspect-video" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Pitch</h3>
              <p className="text-sm text-white/70">Aerial movement meets spellcraft. Draw mid‑air gestures to cast, then cancel into dashes and parries to keep your combo alive. Procedural arenas. Permanent meta progression.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-2">Platforms</h3>
              <p className="text-sm text-white/70">PC (Steam), PS5, Xbox Series X|S. Nintendo Switch 2 target TBD.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ROADMAP */}
      <Section id="roadmap" className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Roadmap</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Closed Alpha",
              date: "Nov–Dec 2025",
              items: ["Core combat v1", "3 arenas", "10 rune spells", "Steam Playtest"],
            },
            {
              title: "Open Beta",
              date: "Q1 2026",
              items: ["Co‑op", "Ranked ladders", "Expanded meta", "Controller remap"],
            },
            {
              title: "1.0 Launch",
              date: "Q2 2026",
              items: ["Campaign", "Boss rush", "Mod hooks", "Console release"],
            },
          ].map((col) => (
            <div key={col.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{col.title}</h3>
                <Pill>{col.date}</Pill>
              </div>
              <ul className="list-disc pl-5 text-sm text-white/70 space-y-1">
                {col.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <Section id="team" className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Meet the team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {["Jainam D.", "Dev One", "Dev Two", "Artist"].map((name, i) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="h-15 w-12 rounded-xl bg-gradient-to-br from-indigo-400 to-fuchsia-500">{
                    [<img src={Jainam} alt="Jainam Profile" className="h-15 w-12 rounded-xl bg-gradient-to-br from-indigo-400 to-fuchsia-500" />][i]
                  }</div>
                <div>
                  <div className="font-semibold">{name}</div>
                  <div className="text-xs text-white/60">{["Founder / Engineer","Gameplay","Systems","Art & UI"][i]}</div>
                </div>
              </div>
              <p className="text-sm text-white/70 mt-3">Building delightful combat, scalable services, and player‑first UX.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* NEWSLETTER / CONTACT */}
      <Section id="contact" className="py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Be first to play new builds</h3>
              <p className="text-white/70 mt-1">Join the newsletter for playtests, devlogs, and behind‑the‑scenes.</p>
            </div>
            <form className="flex w-full md:w-auto gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" required placeholder="you@email.com" className="w-full md:w-72 rounded-xl px-4 py-3 bg-neutral-900 border border-white/15 outline-none focus:ring-2 focus:ring-indigo-400" />
              <button className="rounded-xl px-4 py-3 bg-white text-neutral-900 font-semibold">Subscribe</button>
            </form>
          </div>
        </div>
        <div id="download" className="mt-6 text-center text-sm text-white/60">Alpha keys distributed via email. By subscribing you agree to our <a href="#terms" className="underline">Terms</a>.</div>
      </Section>

      <Footer />
    </div>
  );
}

/* -------- Icons (inline SVG React components) -------- */
function IconLoop(){
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-90">
      <path strokeWidth="2" d="M3 12a7 7 0 0112.124-4.95M21 12a7 7 0 01-12.124 4.95"/>
      <path strokeWidth="2" d="M14 7h3V4M10 17H7v3"/>
    </svg>
  );
}
function IconSpark(){
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-90">
      <path strokeWidth="2" d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z"/>
    </svg>
  );
}
function IconNet(){
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-90">
      <circle cx="12" cy="12" r="9" strokeWidth="2"/>
      <path strokeWidth="2" d="M3 12h18M12 3c3 3 3 15 0 18M8 5.5c2 2.5 2 10.5 0 13M16 5.5c-2 2.5-2 10.5 0 13"/>
    </svg>
  );
}

// ---------- Tailwind quick setup (for static embeds) ----------
// If your project doesn't already include Tailwind, add the CDN to index.html for quick preview:
// <script src="https://cdn.tailwindcss.com"></script>
// For production, install and configure Tailwind properly.
