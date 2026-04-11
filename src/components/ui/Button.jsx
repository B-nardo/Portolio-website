const variants = {
  primary:   "bg-gradient-to-br from-slate-700 to-slate-950 dark:from-slate-200 dark:to-slate-50 text-white dark:text-slate-900 hover:opacity-90",
  secondary: "bg-white/10 dark:bg-slate-900/30 text-slate-900 dark:text-white border border-slate-900 dark:border-slate-300 backdrop-blur hover:bg-white/20",
  greenglow:      "bg-gradient-to-r from-[#00C853] to-[#00E676] hover:from-[#00E676] hover:to-[#00C853] text-white shadow-[0_0_20px_2px_rgba(0,230,118,0.4)]",
  blue:      "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white shadow-[0_0_20px_2px_rgba(99,102,241,0.4)]",
  outline:   "bg-transparent border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10",
  ghost:     "bg-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10",
};

const baseClass = `
  inline-flex items-center justify-center gap-2
  px-6 py-3 rounded-lg font-semibold text-sm
  disabled:opacity-60 disabled:cursor-not-allowed
  btn-animated
`;

const baseStyle = {
  transition: "opacity 200ms ease, box-shadow 220ms cubic-bezier(0.16,1,0.3,1), background-color 200ms ease",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  disabled = false,
  type = "button",
  href,
  target,
  rel,
  className = "",
}) {
  const classes = `${baseClass} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        style={baseStyle}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      className={classes}
    >
      {children}
    </button>
  );
}
