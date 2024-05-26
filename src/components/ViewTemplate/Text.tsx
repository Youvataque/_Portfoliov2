import { cn } from "@/lib/utils";
import LetterPullup from "../magicui/letter-pullup";

/////////////////////////////////////////////////////////////////
// composant text à apparition animé
const Text:React.FC<{text:string, style:string}> = ({text, style}) => {
    return (
        <LetterPullup 
            className={cn("text-3.5xl font-bold max-xl:text-xl max-md:text-lg", style)}
            words={text}
        >
        </LetterPullup>

    )
}

export default Text;