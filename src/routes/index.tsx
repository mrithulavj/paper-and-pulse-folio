import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { MagazineCard } from "@/components/publication/magazine-card";
import { SectionHeading } from "@/components/publication/section-heading";
import { SiteHeader } from "@/components/publication/site-header";
import { activities, magazineEditions, officeBearers } from "@/data/publication";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paper & Pulse — The Magazine" },
      {
        name: "description",
        content: "Paper & Pulse is the official college magazine—a living record of campus ideas, stories, art, and culture.",
      },
      { property: "og:title", content: "Paper & Pulse — The Magazine" },
      {
        property: "og:description",
        content: "The official college publication platform for campus stories, art, ideas, and culture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top" className="overflow-hidden">
      <SiteHeader />

      <section className="relative min-h-[92svh] bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-y-0 left-[69%] hidden w-px bg-primary-foreground/15 md:block" />
        <div className="mx-auto flex min-h-[92svh] max-w-[90rem] flex-col justify-end px-5 pb-8 pt-32 sm:px-8 lg:px-12">
          <div className="mb-auto flex items-start justify-between border-t border-primary-foreground/25 pt-4 text-[0.64rem] font-semibold uppercase tracking-[0.17em] text-primary-foreground/65">
            <span>Official college publication</span>
            <span className="hidden sm:block">Vol. 03 / 2026</span>
          </div>
          <div className="relative pt-16">
            <p className="mb-4 font-display text-2xl italic text-accent sm:text-4xl">The Magazine</p>
            <h1 className="max-w-[12ch] font-display text-[clamp(4.1rem,13vw,12rem)] leading-[0.72] tracking-normal">
              PAPER <span className="italic text-accent">&amp;</span> PULSE
            </h1>
            <div className="mt-10 grid items-end gap-8 border-t border-primary-foreground/25 pt-5 md:grid-cols-[1.7fr_1fr]">
              <p className="max-w-md text-sm leading-6 text-primary-foreground/70 sm:text-base">
                A living record of the voices, ideas, art, and moments that shape our college community.
              </p>
              <a
                href="#about"
                className="flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:text-accent md:justify-self-end"
              >
                Read our story <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-8 bg-background px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[90rem]">
          <SectionHeading index="01" title="About Paper & Pulse" />
          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-10">
            <p className="max-w-xs text-xs font-semibold uppercase leading-relaxed tracking-[0.16em] text-primary">
              By the campus, for the campus
            </p>
            <div>
              <p className="max-w-4xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
                We document the present, question the familiar, and make room for every voice worth hearing.
              </p>
              <div className="mt-12 grid gap-8 border-t border-foreground/20 pt-6 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
                <p>
                  Paper &amp; Pulse is the official platform for student writing, visual storytelling, reporting, and creative exchange across campus.
                </p>
                <p>
                  Each edition is assembled by an evolving community of editors and contributors, preserving the character of a year in print.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="magazine" className="scroll-mt-8 bg-secondary px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[90rem]">
          <SectionHeading
            index="02"
            title="Magazine"
            intro="Issues made to be read slowly, revisited often, and kept close."
          />
          <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {magazineEditions.map((edition) => (
              <MagazineCard key={edition.id} edition={edition} />
            ))}
          </div>
          <p className="mt-10 border-t border-foreground/20 pt-4 text-xs text-muted-foreground">
            Digital editions will be available to read here when publication files are added.
          </p>
        </div>
      </section>

      <section id="activities" className="scroll-mt-8 bg-background px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[90rem]">
          <SectionHeading
            index="03"
            title="Activities"
            intro="The magazine extends beyond its pages—into rooms where ideas are shared and new work begins."
          />
          <div className="mt-16 border-t border-foreground/25">
            {activities.map((activity, index) => (
              <article
                key={activity.id}
                className="group grid gap-5 border-b border-foreground/25 py-8 transition-colors hover:bg-secondary md:grid-cols-[0.3fr_1fr_1.4fr_0.6fr] md:items-start md:px-3"
              >
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                <div>
                  <p className="mb-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    {activity.category}
                  </p>
                  <h3 className="font-display text-3xl">{activity.title}</h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-muted-foreground">{activity.description}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] md:text-right">{activity.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="office-bearers" className="scroll-mt-8 bg-accent px-5 py-24 text-accent-foreground sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[90rem]">
          <SectionHeading
            index="04"
            title="Office Bearers"
            intro="The editorial collective behind every conversation, commission, and carefully considered page."
          />
          <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-6">
            {officeBearers.map((bearer, index) => (
              <article key={bearer.id}>
                <div className="relative aspect-[4/5] border border-accent-foreground/25 bg-background/35">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl text-accent-foreground/20">0{index + 1}</span>
                  </div>
                  <span className="absolute bottom-3 left-3 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-accent-foreground/55">
                    Portrait forthcoming
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl leading-none sm:text-3xl">{bearer.name}</h3>
                <p className="mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.15em] text-accent-foreground/65">
                  {bearer.designation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground px-5 py-14 text-background sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-12 border-b border-background/20 pb-14 md:grid-cols-[2fr_1fr]">
            <div>
              <p className="font-display text-5xl leading-none sm:text-7xl">Paper <span className="text-accent">&amp;</span> Pulse</p>
              <p className="mt-5 text-sm text-background/55">College / Institution Name</p>
            </div>
            <div className="flex items-end gap-5 md:justify-end">
              <a href="#top" aria-label="Instagram" className="transition-colors hover:text-accent"><Instagram className="size-5" /></a>
              <a href="#top" aria-label="LinkedIn" className="transition-colors hover:text-accent"><Linkedin className="size-5" /></a>
              <a href="mailto:editorial@example.edu" aria-label="Email Paper and Pulse" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-accent">
                Write to us <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 text-[0.64rem] uppercase tracking-[0.13em] text-background/45 sm:flex-row sm:justify-between">
            <p>© 2026 Paper &amp; Pulse</p>
            <p>Words in motion. Ideas in print.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
