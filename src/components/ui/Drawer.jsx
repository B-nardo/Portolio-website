import { useEffect } from "react";
import { X } from "lucide-react";

export default function Drawer({ open, onClose, title, children }) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 400ms cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="fixed top-0 right-0 z-50 h-full w-full max-w-2xl bg-slate-50 dark:bg-zinc-900 border-l border-black/[0.07] dark:border-white/[0.07] shadow-2xl flex flex-col"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Sticky header */}
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-black/[0.06] dark:border-white/[0.06] shrink-0">
          <h2 className="font-bold text-base leading-snug">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 size-8 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {children}
        </div>
      </div>
    </>
  );
}
