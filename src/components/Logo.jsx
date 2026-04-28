export default function Logo({ size = 80, animated = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={animated ? 'logo-animated' : ''}
    >
      {/* Outer hexagon ring */}
      <path
        d="M40 4L72 22V58L40 76L8 58V22L40 4Z"
        stroke="url(#gradient-border)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Inner glow hexagon */}
      <path
        d="M40 12L66 27V53L40 68L14 53V27L40 12Z"
        fill="url(#gradient-fill)"
        opacity="0.15"
      />

      {/* Letter P */}
      <text
        x="40"
        y="50"
        textAnchor="middle"
        fontSize="36"
        fontWeight="800"
        fontFamily="Inter, sans-serif"
        fill="url(#gradient-text)"
        letterSpacing="-1"
      >
        P
      </text>

      {/* Corner accent dots */}
      <circle cx="40" cy="5" r="2" fill="#6c63ff" />
      <circle cx="71.5" cy="22.5" r="2" fill="#6c63ff" />
      <circle cx="71.5" cy="57.5" r="2" fill="#6c63ff" />
      <circle cx="40" cy="75" r="2" fill="#6c63ff" />
      <circle cx="8.5" cy="57.5" r="2" fill="#6c63ff" />
      <circle cx="8.5" cy="22.5" r="2" fill="#6c63ff" />

      <defs>
        <linearGradient id="gradient-border" x1="8" y1="4" x2="72" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6c63ff" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="gradient-fill" x1="14" y1="12" x2="66" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6c63ff" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="gradient-text" x1="22" y1="14" x2="58" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#c4b5fd" />
        </linearGradient>
      </defs>
    </svg>
  )
}
