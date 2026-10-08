/////////////////////////////////////////////////////////////////
// composant footer
const Footer: React.FC = () => {
    return (
        <footer className="mt-16 flex w-full items-center justify-between gap-2 border-t border-borderColor py-8 text-xs text-primary max-md:flex-col">
            <p>Créé et designé par SEGUIN Yannis</p>
            <p>© {new Date().getFullYear()} Seguin-dev</p>
        </footer>
    );
}

export default Footer;
