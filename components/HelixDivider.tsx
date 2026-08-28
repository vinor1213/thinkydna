export default function HelixDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        className="h-6 w-full"
      >
        <defs>
          <linearGradient id="helixGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#39103F" />
            <stop offset="45%" stopColor="#8A1442" />
            <stop offset="100%" stopColor="#D91A1E" />
          </linearGradient>
        </defs>
        <path
          d="M0 12 C 20 2, 40 22, 60 12 S 100 2, 120 12 S 160 22, 180 12 S 220 2, 240 12 S 280 22, 300 12 S 340 2, 360 12 S 390 20, 400 12"
          fill="none"
          stroke="url(#helixGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M0 12 C 20 22, 40 2, 60 12 S 100 22, 120 12 S 160 2, 180 12 S 220 22, 240 12 S 280 2, 300 12 S 340 22, 360 12 S 390 4, 400 12"
          fill="none"
          stroke="url(#helixGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
