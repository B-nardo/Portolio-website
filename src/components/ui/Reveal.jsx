import { useIntersection } from "../../hooks/useIntersection";

export default function Reveal({ children, className = "", style, delay = 0, as: Tag = "div", ...props }) {
  const { ref, visible } = useIntersection();
  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " reveal-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
