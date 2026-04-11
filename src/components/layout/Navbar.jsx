import { useTheme } from "../../context/ThemeContext";
import { NAV_LINKS } from "../../data/portfolio";
import {
  Home,
  User,
  FolderKanban,
  CodeXml,
  Mail,
  Sun,
  Moon,
  BookText
} from "lucide-react";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const { dark, toggle } = useTheme();

  const ICON_MAP = {
    hero: Home,
    about: User,
    "case-studies": BookText,
    projects: FolderKanban,
    skills: CodeXml,
    contact: Mail,
  };

  return (
    <header className="sticky top-3 z-50 flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-2 px-4 h-14 rounded-full bg-white/60 dark:bg-zinc-950/70 backdrop-blur-xl border border-black/[0.07] dark:border-white/[0.07]"
        style={{ boxShadow: "inset 0 1px 0px rgba(255,255,255,0.55), 0 2px 12px rgba(0,0,0,0.07)" }}
      >
        {/* Nav icon links */}
        {NAV_LINKS.map((link) => {
          const Icon = ICON_MAP[link.href];
          return (
            <button
              key={link.href}
              title={link.label}
              onClick={() => scrollTo(link.href)}
              className="size-10 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/10 transition-all duration-150"
            >
              {Icon && <Icon className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />

        {/* Theme toggle */}
        <button
          onClick={toggle}
          title="Toggle theme"
          className="size-10 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/10 transition-all duration-150"
        >
          {dark ? <Sun className="w-5 h-5" strokeWidth={1.5} /> : <Moon className="w-5 h-5" strokeWidth={1.5} />}
        </button>
      </nav>
    </header>
  );
}
