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
        <div className="bg-background flex flex-col items-center pt-48 max-md:pt-20 w-screen">
            <RetroGrid className="fixed"/>
            <div className="">{children}</div>
        </div>
    );
};

export default BodyTemplate;
