import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// composant text simple
const Text:React.FC<{text:string, style:string}> = ({text, style}) => {
    return (
        <h2 className={cn("text-3.5xl font-bold max-xl:text-xl max-md:text-lg", style)}>{text}</h2>

    )
}

export default Text;