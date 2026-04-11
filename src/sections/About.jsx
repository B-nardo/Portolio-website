import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import { EXPERIENCE, ABOUT_TRAITS, ABOUT_STATS } from "../data/portfolio";
import { User, Target, Coffee, Code, BookOpen } from 'lucide-react';

const ICON_MAP = {
  1: Code,
  2: Target,
  3: Coffee,
  4: BookOpen,
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal><SectionHeader
          badge="About Me"
          title="Get to know me better"
          subtitle="Passionate about creating digital experiences that make a difference"
        /></Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <Reveal><StoryCard /></Reveal>
            {ABOUT_TRAITS.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}><TraitCard trait={t} iconMap={ICON_MAP} /></Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <ExperienceCard />
            <Reveal><StatsCard /></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryCard() {
  return (
    <div className="glass rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
      <h3 className="font-semibold text-base flex items-center gap-2 mb-4">
        <span><User/></span> My Story
      </h3>
      <div className="pt-0 space-y-4">
        <p>I am a Full Stack Web Developer with expertise in building dynamic, user-friendly applications using modern frontend and backend technologies.</p>
        <p>I specialize in the MERN stack and have a passion for creating applications that are not only functional but also provide excellent user experiences.</p>
        <p>When I'm not coding, I explore new technologies, contribute to open-source projects, or share knowledge with the developer community.</p>
      </div>
    </div>
  );
}

function TraitCard({ trait, iconMap }) {
  const Icon = iconMap[trait.id];
  return (
    <div className="glass rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 cursor-default group">
      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.07] flex items-center justify-center text-xl shrink-0 card-icon-wrap">
        {Icon && <Icon className="w-5 h-5" />}
      </div>
      <div>
        <p className="font-semibold text-lg mb-2">{trait.title}</p>
        <p className="text-muted leading-relaxed">{trait.desc}</p>
      </div>
    </div>
  );
}

function ExperienceCard() {
  return (
    <div className="glass rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl transition-all duration-700">
      <h3 className="font-semibold text-base mb-6">Experience</h3>
      <div className="flex flex-col">
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-100 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-zinc-950" />
                </div>
                {i < EXPERIENCE.length - 1 && (
                  <div className="w-px flex-1 bg-slate-200 dark:bg-white/10 mt-1" />
                )}
              </div>
              {/* Content */}
              <div className={`pb-6 ${i === EXPERIENCE.length - 1 ? "pb-0" : ""}`}>
                <p className="font-semibold text-lg">{exp.role}</p>
                <p className="font-medium text-slate-500 dark:text-slate-300 mt-0.5">{exp.company}</p>
                <p className="text-xs text-slate-500 mt-0.5 mb-2">{exp.period}</p>
                <p className="text-sm text-muted leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="rounded-2xl p-6 bg-slate-100 dark:bg-slate-100 text-slate-900 hover:-translate-y-1 hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
      <div className="grid grid-cols-2 gap-4">
        {ABOUT_STATS.map(([num, label]) => (
          <div key={label} className="text-center">
            <p className="text-3xl font-bold">{num}</p>
            <p className="text-xs opacity-70 mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
