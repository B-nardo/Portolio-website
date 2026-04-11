export function getTokens(dark) {
  return {
    bg:           dark ? "#09090b"                    : "#f8fafc",
    text:         dark ? "#f1f5f9"                    : "#0f172a",
    muted:        dark ? "#94a3b8"                    : "#64748b",
    card:         dark ? "rgba(0,0,0,0.55)"           : "rgba(255,255,255,0.75)",
    surface:      dark ? "rgba(255,255,255,0.06)"     : "rgba(255,255,255,0.6)",
    border:       dark ? "rgba(255,255,255,0.08)"     : "rgba(0,0,0,0.1)",
    navBg:        dark ? "rgba(9,9,11,0.82)"          : "rgba(248,250,252,0.85)",
    inputBg:      dark ? "rgba(255,255,255,0.05)"     : "rgba(255,255,255,0.85)",
    inputBorder:  dark ? "rgba(255,255,255,0.12)"     : "rgba(0,0,0,0.12)",
    badgeBg:      dark ? "rgba(255,255,255,0.08)"     : "rgba(0,0,0,0.07)",
    primary:      dark ? "#f1f5f9"                    : "#0f172a",
    primaryInv:   dark ? "#09090b"                    : "#f8fafc",
    gridLine:     dark ? "rgba(156,163,175,0.18)"     : "rgba(100,116,139,0.18)",
    featCard:     dark ? "rgba(255,255,255,0.04)"     : "rgba(255,255,255,0.6)",
    featCardHover:dark ? "rgba(255,255,255,0.08)"     : "rgba(255,255,255,0.9)",
    iconBg:       dark ? "rgba(255,255,255,0.07)"     : "rgba(0,0,0,0.06)",
    profBarBg:    dark ? "rgba(255,255,255,0.08)"     : "rgba(0,0,0,0.08)",
    primaryBtn:   dark
      ? "linear-gradient(135deg,#334155,#0f172a)"
      : "linear-gradient(135deg,#1e293b,#0f172a)",
  };
}