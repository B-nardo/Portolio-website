import Badge from "./Badge";

export default function SectionHeader({ badge, title, subtitle, className = "", style }) {
  return (
    <div className={`text-center mb-12 ${className}`} style={style}>
      <Badge>{badge}</Badge>
      <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-3 tracking-tight leading-[1.1]">
        {title}
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}