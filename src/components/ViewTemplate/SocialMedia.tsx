import Github from "@/Icon/Github"
import Linkedin from "@/Icon/Linkedin"
import Youtube from "@/Icon/Youtube"
import { FileText } from "lucide-react"

/////////////////////////////////////////////////////////////////
// data des réseaux sociaux
const socials = [
    { Icon: Github, link: "https://github.com/Youvataque", label: "GitHub" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/yannis-seguin-540432161/", label: "LinkedIn" },
    { Icon: Youtube, link: "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA", label: "YouTube" },
    { Icon: FileText, link: "/cv.pdf", label: "CV", lucide: true },
]

/////////////////////////////////////////////////////////////////
// Composant des réseaux sociaux (boutons allongés logo + nom)
const SocialMedia: React.FC = () => {
    return (
        <div className="flex flex-row flex-wrap gap-3">
            {socials.map(({ Icon, link, label, lucide }) => (
                <a
                    key={label}
                    href={link}
                    target="_blank"
                    aria-label={label}
                    className="group flex items-center gap-2.5 rounded-2xl px-5 py-2.5 max-md:px-4 max-md:py-2 bg-elementColor/60 backdrop-blur-lg shadow-lg shadow-primary/15 hover:shadow-2xl hover:shadow-primary/30 transition-shadow duration-300"
                >
                    {lucide ? (
                        <FileText className="w-[18px] h-[18px] text-primary" />
                    ) : (
                        <Icon
                            width="20px"
                            height="20px"
                            color="text-primary fill-current"
                        />
                    )}
                    <span className="text-sm max-md:text-xs font-medium text-primary">
                        {label}
                    </span>
                </a>
            ))}
        </div>
    )
}

export default SocialMedia
