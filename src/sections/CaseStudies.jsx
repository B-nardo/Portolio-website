import { useState } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import Drawer from "../components/ui/Drawer";
import { CASE_STUDIES } from "../data/portfolio";

export default function CaseStudies() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            badge="Case Studies"
            title="Real Work, Real Process"
            subtitle="Detailed breakdowns of professional projects — workflows, responsibilities, and outcomes."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.id} delay={i * 80}>
              <CaseStudyCard study={study} onOpen={() => setSelected(study)} />
            </Reveal>
          ))}
        </div>
      </div>

      <Drawer
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
      >
        {selected && <DrawerContent study={selected} />}
      </Drawer>
    </section>
  );
}

function CaseStudyCard({ study, onOpen }) {
  return (
    <div onClick={onOpen} className="glass rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 h-full cursor-pointer">
      <div className="flex-1">
        <h3 className="font-semibold text-base mb-2 leading-snug">{study.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{study.summary}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {study.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <Button variant="ghost" onClick={onOpen} className="w-fit btn-animated">
        Read Case Study →
      </Button>
    </div>
  );
}

function DrawerContent({ study }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Meta grid */}
      {study.meta.length > 0 && (
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 p-4 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06]">
          {study.meta.map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">
                {label}
              </p>
              <p className="text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      )}

            {/* Section blocks */}
      {study.sections.map((section, i) => (
        <SectionBlock key={i} section={section} />
      ))}

      {/* Images — hidden when empty */}
      {study.images.length > 0 && (
        <div className="flex flex-col gap-6">
          {study.images.map((image, i) => (
            <div key={i} className="flex flex-col gap-2">
              <p className="text-sm font-semibold">{image.title}</p>
              <img
                src={image.src}
                alt={image.title}
                className="w-full rounded-xl object-cover border border-black/[0.06] dark:border-white/[0.06]"
              />
              {image.caption && (
                <p className="text-xs text-muted leading-relaxed">{image.caption}</p>
              )}
            </div>
          ))}
        </div>
      )}


    </div>
  );
}

function SectionBlock({ section }) {
  if (section.type === "text") {
    return (
      <div>
        <h3 className="font-semibold text-base mb-2">{section.heading}</h3>
        <p className="text-muted text-sm leading-relaxed">{section.body}</p>
      </div>
    );
  }

  if (section.type === "steps") {
    return (
      <div>
        <h3 className="font-semibold text-base mb-3">{section.heading}</h3>
        <ol className="flex flex-col gap-2 mb-3">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="shrink-0 w-5 h-5 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-400 mt-0.5">
                {i + 1}
              </span>
              <span className="text-muted leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
        {section.note && (
          <p className="text-xs text-muted italic border-l-2 border-slate-300 dark:border-white/20 pl-3">
            {section.note}
          </p>
        )}
      </div>
    );
  }

  if (section.type === "bullets") {
    return (
      <div>
        <h3 className="font-semibold text-base mb-3">{section.heading}</h3>
        <ul className="flex flex-col gap-1.5">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-muted leading-relaxed">
              <span className="shrink-0 w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (section.type === "subsections") {
    return (
      <div>
        <h3 className="font-semibold text-base mb-4">{section.heading}</h3>
        <div className="flex flex-col gap-5">
          {section.subsections.map((sub, i) => (
            <div key={i} className="pl-4 border-l-2 border-slate-200 dark:border-white/10">
              <h4 className="font-semibold text-sm mb-1">{sub.subheading}</h4>
              {sub.intro && (
                <p className="text-muted text-sm mb-2 leading-relaxed">{sub.intro}</p>
              )}
              <ul className="flex flex-col gap-1.5">
                {sub.bullets.map((item, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
