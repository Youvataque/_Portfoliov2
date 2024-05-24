import { cn } from "@/lib/utils";

/////////////////////////////////////////////////////////////////
// composant titre
const Title:React.FC<{text:string, style:string}> = ({text, style}) => {
    return (
        <h2 className={cn("text-8xl font-bold max-xl:text-4xl max-md:text-3xl", style)}>{text}</h2>
    )
}

export default Title;