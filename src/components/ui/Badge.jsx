export default function Badge({ children, className = "" }) {
  return (
    <span className={`
      inline-block px-3 py-1 text-xs font-semibold rounded-md
      bg-slate-100 dark:bg-white/[0.08]
      border border-slate-200 dark:border-white/[0.08]
      text-slate-600 dark:text-slate-400
      hover:bg-slate-200 dark:hover:bg-white/[0.14]
      hover:border-slate-300 dark:hover:border-white/[0.18]
      hover:text-slate-800 dark:hover:text-slate-300
      badge-hover
      ${className}
    `}>
      {children}
    </span>
  );
}