import RetroGrid from "../magicui/retro-grid";

/////////////////////////////////////////////////////////////////
// args du composant
interface BodyProps {
    children: React.ReactNode;
}

/////////////////////////////////////////////////////////////////
// composant structurant les pages
const BodyTemplate : React.FC<BodyProps> = ({ children }) => {
    return (
        <main className="bg-background flex flex-col items-center w-screen">
            <RetroGrid className="fixed"/>
            <div className="">{children}</div>
        </main>
    );
};

export default BodyTemplate;
