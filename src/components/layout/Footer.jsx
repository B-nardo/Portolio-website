import { SOCIAL_LINKS } from "../../data/portfolio";
import { Mail } from "lucide-react";
import { SOCIAL_ICON_MAP } from "../ui/SocialIcons";


function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const QUICK_LINKS = ["about", "projects", "skills", "contact"];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/80 dark:bg-white/[0.02] backdrop-blur-sm px-6 pt-12 pb-6">
      <div className=" max-w-[1280px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3">
             
              <span className="font-semibold text-base">Bernardo Jose II</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 max-w-xs">
              Full Stack Web Developer passionate about creating digital experiences that make a difference.
            </p>
            <div className="flex gap-1">
              {SOCIAL_LINKS.map(s => {
                const Icon = SOCIAL_ICON_MAP[s.label];
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  >
                    {Icon && <Icon className="size-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-sm mb-3">Quick Links</p>
            <nav className="flex flex-col gap-3">
              {QUICK_LINKS.map(id => (
                <button key={id} onClick={() => scrollTo(id)}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-left w-fit capitalize"
                >
                  {id}
                </button>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="font-semibold text-sm mb-3">Get In Touch</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Ready to start a project?</p>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <Mail className="size-4"/> Send Email
            </button>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-2">Response within 24 hours</p>
          </div>

        </div>

        <hr className="border-slate-200 dark:border-white/[0.08] mb-6" />

        <div className="flex flex-wrap justify-between items-center gap-3">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Bernardo Jose II. Built with care.
          </span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 dark:text-slate-400">Built with React</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 dark:border-white/20 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}