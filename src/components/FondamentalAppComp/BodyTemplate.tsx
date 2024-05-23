interface BodyProps {
    children: React.ReactNode;
}

const BodyTemplate : React.FC<BodyProps> = ({ children }) => {
    return (
        <div className="bg-background flex flex-col items-center">
            <div className="h-20"/>
            {children}
        </div>
    );
};

export default BodyTemplate;
