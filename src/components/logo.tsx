export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z"
        fill="url(#grad1)"
      />
      <g fill="hsl(var(--primary-foreground))">
        <rect x="7" y="11" width="2" height="5" rx="1" />
        <rect x="15" y="11" width="2" height="5" rx="1" />
        <rect x="5" y="12" width="2" height="3" rx="1" />
        <rect x="17" y="12" width="2" height="3" rx="1" />
        <rect x="9" y="13" width="6" height="1.5" rx="0.75" />
      </g>
    </svg>
  );
}
