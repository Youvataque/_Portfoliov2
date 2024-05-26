import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// composant text référencé du google
const MainText:React.FC<{text:string, style:string}> = ({text, style}) => {
    return (
        <h1 className={cn("text-2xl max-xl:text-lg max-md:text-md text-primary pt-4", style)}>{text}</h1>
    )
}

export default MainText;
