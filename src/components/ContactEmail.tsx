export default function ContactEmail({ className = "" }: { className?: string }) {
  return (
    <a
      href="mailto:service@dharmpathusa.com"
      className={`group inline-flex items-center gap-1.5 rounded-full bg-black/20 px-2.5 py-1 whitespace-nowrap ring-1 ring-white/15 backdrop-blur-sm transition-colors duration-200 hover:bg-black/30 hover:ring-gold/50 ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5 shrink-0 text-gold transition-colors group-hover:text-amber-200"
        fill="none"
      >
        <rect x="2.5" y="4.5" width="15" height="11" rx="1.75" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 5.5 10 11l6.5-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-devanagari text-[12px] font-semibold tracking-wide text-gold drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] transition-colors group-hover:text-amber-200 sm:text-sm">
        service@dharmpathusa.com
      </span>
    </a>
  );
}
