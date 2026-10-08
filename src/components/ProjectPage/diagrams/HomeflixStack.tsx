/////////////////////////////////////////////////////////////////
// nœud du schéma : carte arrondie avec titre et sous-titre ; dashed pour un composant hors dépôt public
function Node({ x, y, w, h, title, sub, dashed }: { x: number; y: number; w: number; h: number; title: string; sub: string; dashed?: boolean }) {
    return (
        <g>
            <rect
                x={x} y={y} width={w} height={h} rx={16}
                className={dashed ? "fill-project-bg stroke-project-muted" : "fill-project-surface stroke-project-line"}
                strokeWidth={1.5}
                strokeDasharray={dashed ? "5 5" : undefined}
            />
            <text x={x + w / 2} y={y + h / 2 - 4} textAnchor="middle" className="fill-project-ink text-[15px] font-bold">{title}</text>
            <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" className="fill-project-muted text-[11px] font-semibold">{sub}</text>
        </g>
    );
}

/////////////////////////////////////////////////////////////////
// liaison animée entre deux nœuds (le flux défile le long du trait)
function Flow({ d }: { d: string }) {
    return (
        <g>
            <path d={d} className="stroke-project-line" strokeWidth={2} fill="none" />
            <path d={d} className="stroke-project-accent animate-flow motion-reduce:animate-none" strokeWidth={2} strokeDasharray="6 10" strokeLinecap="round" fill="none" />
        </g>
    );
}

/////////////////////////////////////////////////////////////////
// illustration HomeFlix : l'app parle à l'API A (publique, conteneurisée avec qBittorrent),
// qui passe par l'API B (hors dépôt public) pour atteindre la source des torrents
const HomeflixStack: React.FC = () => {
    return (
        <svg viewBox="0 0 600 340" className="h-full w-full" role="img" aria-label="L'app Flutter reliée à l'API A et à qBittorrent dans Docker ; l'API B, hors du dépôt public, fait le pont avec la source des torrents">
            <defs>
                <radialGradient id="hf-glow" cx="45%" cy="55%" r="50%">
                    <stop offset="0%" className="[stop-color:var(--color-project-accent)]" stopOpacity={0.32} />
                    <stop offset="75%" className="[stop-color:var(--color-project-accent)]" stopOpacity={0} />
                </radialGradient>
            </defs>
            <rect width={600} height={340} fill="url(#hf-glow)" />

            {/* conteneur Docker (dépôt public) */}
            <rect x={140} y={100} width={250} height={215} rx={24} className="fill-project-accent/5 stroke-project-accent/60" strokeWidth={1.5} strokeDasharray="7 7" />
            <rect x={158} y={86} width={78} height={28} rx={14} className="fill-project-accent" />
            <text x={197} y={105} textAnchor="middle" className="fill-project-bg text-[12px] font-extrabold">Docker</text>

            {/* zone hors dépôt public */}
            <rect x={418} y={86} width={164} height={28} rx={14} className="fill-project-surface stroke-project-muted" strokeWidth={1} />
            <text x={500} y={105} textAnchor="middle" className="fill-project-muted text-[11px] font-bold">hors dépôt public</text>

            {/* liaisons */}
            <Flow d="M 70 96 L 70 150" />
            <Flow d="M 120 195 C 140 195, 140 160, 160 160" />
            <Flow d="M 265 202 L 265 228" />
            <Flow d="M 370 160 L 430 160" />
            <Flow d="M 505 195 L 505 235" />

            {/* nœuds */}
            <Node x={20} y={40} w={100} h={56} title="TMDB" sub="fiches" />
            <Node x={20} y={150} w={100} h={90} title="App" sub="Flutter" />
            <Node x={160} y={118} w={210} h={84} title="API A" sub="bibliothèque · streaming" />
            <Node x={160} y={228} w={210} h={68} title="qBittorrent" sub="téléchargements" />
            <Node x={430} y={125} w={150} h={70} title="API B" sub="pont vers la source" dashed />
            <Node x={430} y={235} w={150} h={60} title="Source" sub="torrents" dashed />

            {/* le watcher qui surveille tout */}
            <circle cx={240} cy={189} r={3.5} className="fill-project-accent animate-pulse motion-reduce:animate-none" />
            <text x={249} y={193} className="fill-project-accent text-[10px] font-bold">watcher</text>
        </svg>
    );
};

export default HomeflixStack;
