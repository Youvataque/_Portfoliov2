/////////////////////////////////////////////////////////////////
// args du composant
interface BodyProps {
    children: React.ReactNode;
}

/////////////////////////////////////////////////////////////////
// composant structurant les pages
const BodyTemplate: React.FC<BodyProps> = ({ children }) => {
    return (
        <main className="relative flex flex-col items-center w-full">
            {/* lavis bleu en haut de page */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[90vh] bg-gradient-to-b from-accentColor/70 via-accentColor/20 to-transparent" />
            {/* lavis bleu en bas de page, footer compris */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[90vh] bg-gradient-to-t from-accentColor/70 via-accentColor/20 to-transparent" />
            <div className="relative z-10 flex w-full flex-col items-center">{children}</div>
        </main>
    );
};

export default BodyTemplate;
