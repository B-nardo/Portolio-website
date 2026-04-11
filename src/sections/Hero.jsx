import Button from "../components/ui/Button";
import { HERO_TAGS, SOCIAL_LINKS } from "../data/portfolio";
import { ExternalLink, Mail, Download } from 'lucide-react';
import { SOCIAL_ICON_MAP } from '../components/ui/SocialIcons';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center px-6 py-20 text-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">

        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-sm font-medium mb-8 cursor-default badge-hover animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </div>

        {/* Headline */}
        <h1
          className="text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-4 w-full animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Hi, I'm Bernardo Jose
        </h1>

        {/* Role */}
        <p
          className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium mb-4 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Full Stack Web Developer
        </p>

        {/* Description */}
        <p
          className="text-base md:text-xl text-slate-500 dark:text-slate-400 w-full max-w-2xl leading-relaxed mb-8 animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
         I build and support web applications, CRM systems, and content platforms—helping businesses maintain reliable workflows, manage data, and deliver structured web experiences.
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {HERO_TAGS.map((tag, i) => (
            <HeroTag key={tag} label={tag} animationDelay={320 + i * 50} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            <Button key="work" variant="primary" onClick={() => scrollTo("projects")}>
              View My Work <ExternalLink className="size-4" />
            </Button>,
            <Button key="contact" variant="secondary" onClick={() => scrollTo("contact")}>
              <Mail className="size-4" /> Get In Touch
            </Button>,
            <Button key="resume" variant="greenglow" href="#">
              Download Resume <Download className="size-4" />
            </Button>,
          ].map((btn, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${680 + i * 80}ms` }}>
              {btn}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-1 mb-2">
          {SOCIAL_LINKS.map((s, i) => {
            const Icon = SOCIAL_ICON_MAP[s.label];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors social-icon-link animate-fade-up"
                style={{ animationDelay: `${940 + i * 60}ms` }}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </a>
            );
          })}
        </div>

        {/* Scroll hint */}
        <div
          className="flex flex-col items-center gap-2 mt-10 text-slate-500 dark:text-slate-500 text-xs animate-fade-up"
          style={{ animationDelay: "1200ms" }}
        >
          <span>Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 dark:from-slate-500 to-transparent" />
        </div>

      </div>
    </section>
  );
}

function HeroTag({ label, animationDelay }) {
  return (
    <span
      className="px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 cursor-default hover:bg-slate-200 dark:hover:bg-white/10 badge-hover animate-fade-up"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {label}
    </span>
  );
}
