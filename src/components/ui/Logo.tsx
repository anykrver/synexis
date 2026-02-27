export default function Logo({ className = 'w-8 h-8' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer rounded square */}
            <rect x="1" y="1" width="30" height="30" rx="8" fill="var(--ne-accent)" />

            {/* Crossbar grid lines - horizontal */}
            <line x1="8" y1="11" x2="24" y2="11" stroke="var(--ne-bg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <line x1="8" y1="16" x2="24" y2="16" stroke="var(--ne-bg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <line x1="8" y1="21" x2="24" y2="21" stroke="var(--ne-bg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

            {/* Crossbar grid lines - vertical */}
            <line x1="11" y1="8" x2="11" y2="24" stroke="var(--ne-bg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <line x1="16" y1="8" x2="16" y2="24" stroke="var(--ne-bg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <line x1="21" y1="8" x2="21" y2="24" stroke="var(--ne-bg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

            {/* Junction dots - active nodes */}
            <circle cx="11" cy="11" r="2" fill="var(--ne-bg)" />
            <circle cx="16" cy="16" r="2" fill="var(--ne-bg)" />
            <circle cx="21" cy="11" r="2" fill="var(--ne-bg)" />
            <circle cx="11" cy="21" r="2" fill="var(--ne-bg)" />
            <circle cx="21" cy="21" r="2" fill="var(--ne-bg)" />

            {/* Center highlight dot */}
            <circle cx="16" cy="16" r="3" fill="var(--ne-bg)" opacity="0.9" />
        </svg>
    );
}
