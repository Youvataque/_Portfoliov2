import RetroGrid from "../magicui/retro-grid";

interface BodyProps {
    children: React.ReactNode;
}

const BodyTemplate : React.FC<BodyProps> = ({ children }) => {
    return (
        <div className="bg-background flex flex-col items-center pt-20">
            <RetroGrid className="fixed"/>
            <div className="">{children}</div>
        </div>
    );
};

export default BodyTemplate;
