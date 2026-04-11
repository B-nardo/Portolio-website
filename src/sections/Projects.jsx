import { useState } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { PROJECTS, PROJECT_FILTERS } from "../data/portfolio";
import { ExternalLink, CodeXml } from "lucide-react";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Projects() {
  const [filter, setFilter] = useState("All Projects");

  const filtered = filter === "All Projects"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal><SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          subtitle="A showcase of my recent work and technical expertise"
        /></Reveal>

        {/* Filter row */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {PROJECT_FILTERS.map((f, i) => (
            <Reveal key={f} delay={i * 60}>
              <button
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold badge-hover
                  ${f === filter
                    ? "bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900"
                    : "bg-slate-100 dark:bg-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.08]"
                  }`}
              >
                {f}
              </button>
            </Reveal>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="flex justify-center">
          <div className="glass rounded-2xl px-12 py-10 text-center w-full max-w-lg hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
            <h3 className="font-bold text-xl mb-2">Interested in working together?</h3>
            <p className="text-muted text-sm mb-6 leading-relaxed">I'm always open to discussing new opportunities and interesting projects.</p>
            <Button variant="outline" onClick={() => scrollTo("contact")}>
              Let's Talk <ExternalLink className="size-4" />
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full space-y-4 glass rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

      {/* Image */}
      <div className="overflow-hidden h-52 object-cover">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-base group-hover:text-slate-300 transition-colors">
            {project.title}
          </h3>
          <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 badge-hover cursor-default">
            {project.category}
          </span>
        </div>

       <div className="flex-1">
         <p className="text-muted text-sm leading-relaxed mb-3">{project.desc}</p>
       </div>

        {/* Tags */}
        <div className="mt-auto">
                  <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400 badge-hover cursor-default">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors btn-animated btn-icon-left"
            style={{ transition: "transform 220ms cubic-bezier(0.16,1,0.3,1), background-color 200ms ease, gap 200ms ease" }}
          >
            <ExternalLink className="size-4"/> Live Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            style={{ transition: "transform 220ms cubic-bezier(0.16,1,0.3,1), background-color 200ms ease" }}
            title="View Repository"
          >
            <CodeXml className="size-4"/>
          </a>
        </div>
        </div>
      </div>

    </div>
  );
}
