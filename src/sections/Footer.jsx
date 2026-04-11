import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">

        <span className="text-slate-500">
          © {new Date().getFullYear()} Bernardo Jose · Designed & built with{" "}
          <span className="text-sky-400">♥</span>
        </span>
        <div className="flex gap-6">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}