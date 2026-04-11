import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import { SKILLS, PROFICIENCY, SKILL_FEATURES } from "../data/portfolio";
import { COLOR_MAP } from "../constants/colors";
import { CaseSensitive, Code, Server, Database, Wrench, Brain, Globe, Smartphone, GitBranch, Zap, LayoutTemplate } from 'lucide-react';

  const ICON_MAP = {
  general: CaseSensitive,
  frontend: Code,
  backend: Server,
  database: Database,
  cms: LayoutTemplate,
  tools: Wrench,
  deploy: Brain,
  globe: Globe,
  phone: Smartphone,
  gitbranch: GitBranch,
  zap: Zap,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal><SectionHeader
          badge="Skills & Expertise"
          title="Technical Proficiency"
          subtitle="Technologies and tools I use to bring ideas to life"
        /></Reveal>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.cat} delay={i * 60}>
              <SkillCategoryCard skill={skill} />
            </Reveal>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {SKILL_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <FeatureCard feature={f} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function SkillCategoryCard({ skill }) {
  const c = COLOR_MAP[skill.color];
   const Icon = ICON_MAP[skill.icon];
  return (
    <div className="glass rounded-2xl h-full p-5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="size-9 p-2 rounded-lg flex items-center justify-center card-icon-wrap"
          style={{ background: c.bg, color: c.icon }}
        >
          {Icon && <Icon />}
        </div>
        <span className="font-semibold text-base">
          {skill.cat}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skill.items.map(item => (
          <SkillTag key={item} label={item} color={c} />
        ))}
      </div>
    </div>
  );
}

function SkillTag({ label, color }) {
  return (
    <span
      className="px-2.5 py-1 rounded-md text-sm font-medium cursor-default badge-hover"
      style={{ background: color.bg, color: "#fff" }}
      onMouseEnter={e => e.currentTarget.style.background = color.hover}
      onMouseLeave={e => e.currentTarget.style.background = color.bg}
    >
      {label}
    </span>
  );
}

// function ProficiencyCard() {
//   const { ref, visible } = useIntersection();
//   return (
//     <div ref={ref} className="glass rounded-2xl p-6">
//       <h3 className="font-semibold text-base mb-5">Proficiency Levels</h3>
//       <div className="flex flex-col gap-4">
//         {PROFICIENCY.map(p => (
//           <div key={p.name}>
//             <div className="flex justify-between mb-1.5">
//               <span className="text-sm font-medium">{p.name}</span>
//               <span className="text-xs text-slate-400">{p.pct}%</span>
//             </div>
//             <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
//               <div
//                 className="h-full rounded-full bg-slate-100 dark:bg-slate-100 transition-all duration-[1200ms] ease-out"
//                 style={{ width: visible ? `${p.pct}%` : "0%" }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function DevStatsCard() {
//   return (
//     <div className="rounded-2xl p-6 bg-slate-100 dark:bg-slate-100 text-slate-900">
//       <h3 className="font-semibold text-base mb-5 text-center">Development Stats</h3>
//       <div className="flex flex-col divide-y divide-slate-300">
//         {[["Lines of Code","50K+"],["Projects Built","15+"],["Coffee Consumed","∞"]].map(([label, val]) => (
//           <div key={label} className="flex justify-between py-3">
//             <span className="text-sm opacity-75">{label}</span>
//             <span className="font-bold text-base">{val}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

function FeatureCard({ feature }) {
  const Icon = ICON_MAP[feature.icon];

  return (
    <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 min-h-[160px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-default group">
      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.07] flex items-center justify-center text-2xl card-icon-wrap">
        {Icon && <Icon />}
      </div>
      <div>
        <p className="font-semibold text-sm mb-1">{feature.title}</p>
        <p className="text-xs text-muted leading-relaxed">{feature.desc}</p>
      </div>
    </div>
  );
}