export default function YouTubeButton({
  href,
  label,
  iconOnly = false,
  className = "",
}: {
  href: string;
  label: string;
  iconOnly?: boolean;
  className?: string;
}) {
  const icon = (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 text-gold transition-colors group-hover:text-amber-200"
      fill="currentColor"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );

  if (iconOnly) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        aria-label={label}
        className={`group inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/20 ring-1 ring-white/15 backdrop-blur-sm transition-colors duration-200 hover:bg-black/30 hover:ring-gold/50 ${className}`}
      >
        {icon}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1.5 rounded-full bg-black/20 px-2.5 py-1 whitespace-nowrap ring-1 ring-white/15 backdrop-blur-sm transition-colors duration-200 hover:bg-black/30 hover:ring-gold/50 ${className}`}
    >
      {icon}
      <span className="font-devanagari text-[12px] font-semibold tracking-wide text-gold drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] transition-colors group-hover:text-amber-200 sm:text-sm">
        {label}
      </span>
    </a>
  );
}
