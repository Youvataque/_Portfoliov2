import Github from "@/Icon/Github"
import Linkedin from "@/Icon/Linkedin"
import Youtube from "@/Icon/Youtube"
import { Mail } from "lucide-react"

/////////////////////////////////////////////////////////////////
// data des réseaux sociaux
const socials = [
    { Icon: Github, link: "https://github.com/Youvataque", label: "GitHub" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/yannis-seguin-540432161/", label: "LinkedIn" },
    { Icon: Youtube, link: "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA", label: "YouTube" },
    { Icon: Mail, link: "mailto:yannisseguin@gmail.com", label: "Email", lucide: true },
]

/////////////////////////////////////////////////////////////////
// Composant des réseaux sociaux (boutons allongés logo + nom)
const SocialMedia: React.FC = () => {
    return (
        <div className="flex flex-row flex-wrap gap-3 mt-4">
            {socials.map(({ Icon, link, label, lucide }) => (
                <a
                    key={label}
                    href={link}
                    target="_blank"
                    aria-label={label}
                    className="group flex items-center gap-2.5 rounded-2xl px-5 py-2.5 max-md:px-4 max-md:py-2 border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
                >
                    {lucide ? (
                        <Mail className="w-[18px] h-[18px] text-primary group-hover:text-secondary transition-colors duration-300" />
                    ) : (
                        <Icon
                            width="20px"
                            height="20px"
                            color="text-primary fill-current group-hover:text-secondary transition-colors duration-300"
                        />
                    )}
                    <span className="text-sm max-md:text-xs font-medium text-primary group-hover:text-secondary transition-colors duration-300">
                        {label}
                    </span>
                </a>
            ))}
        </div>
    )
}

export default SocialMedia
