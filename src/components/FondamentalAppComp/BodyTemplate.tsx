import RetroGrid from "../magicui/retro-grid";

/////////////////////////////////////////////////////////////////
// args du composant
interface BodyProps {
    children: React.ReactNode;
}

/////////////////////////////////////////////////////////////////
// composant structurant les pages
const BodyTemplate: React.FC<BodyProps> = ({ children }) => {
    return (
        <main className="flex flex-col items-center w-full">
            <RetroGrid className="fixed z-0" />
            <div className="relative z-10">{children}</div>
        </main>
    );
};

export default BodyTemplate;
