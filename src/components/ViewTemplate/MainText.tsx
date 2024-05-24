import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// composant text référencé du google

const MainText:React.FC<{text:string, style:string}> = ({text, style}) => {
    return (
        <h1 className={cn("text-3.5xl font-normal", style)}>{text}</h1>

    )
}

export default MainText;
