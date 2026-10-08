/////////////////////////////////////////////////////////////////
// en-tête de section : surtitre optionnel (avec index) + titre
const SectionHeader: React.FC<{ index?: string; eyebrow?: string; title: string }> = ({ index, eyebrow, title }) => (
    <div className="mb-12 max-md:mb-8 flex flex-col gap-3">
        {eyebrow && (
            <span className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-secondary">
                {index && (
                    <>
                        <span>{index}</span>
                        <span className="h-px w-10 bg-secondary/40" />
                    </>
                )}
                {eyebrow}
            </span>
        )}
        <h2 className="text-5xl max-xl:text-4xl max-md:text-3xl font-bold tracking-tight text-primary">{title}</h2>
    </div>
);

export default SectionHeader;
