/////////////////////////////////////////////////////////////////
// composant footer
const Footer:React.FC = () => {

    function infoFoot(info:string, link:string) {
        return <a className="text-background font-medium text-xl max-md:text-md" href={link} target="_blank">{info}</a>
    }

    return <div className="w-screen h-60 bg-primary flex flex-col justify-center items-center pb-4">
        <div className="flex-grow"/>
        <div className="flex items-center justify-center w-full max-md:flex-col">
            {infoFoot("06 28 26 45 61", "tel:0628264561")}
            <p className="text-background pl-8 pr-8 text-2xl font-medium">-</p>
            {infoFoot("yannisseguin@gmail.com", "mailto:yannisseguin@gmail.com?subject=Objet%20du%20message&body=Corps%20du%20message")}
            <p className="text-background pl-8 pr-8 text-2xl font-medium">-</p>
            {infoFoot("seguin-dev.com", "https://seguin-dev.com")}
        </div>
        <div className="h-[25%] max-md:h-[10%]"/>
        <p className="w-screen text-center text-md max-md:text-xs font-normal text-background pb-4 max-md:pb-0">Créé et designé par Yannis Seguin<br/>©Copyright 2024 - Yannis Seguin</p>
    </div>
}

export default Footer;