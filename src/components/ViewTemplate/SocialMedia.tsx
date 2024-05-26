import Github from "@/Icon/Github"
import { Dock, DockIcon } from "../magicui/dock"
import Linkedin from "@/Icon/Linkedin"
import Youtube from "@/Icon/Youtube"
import Twitter from "@/Icon/Twitter"
import Facebook from "@/Icon/Facebook"

/////////////////////////////////////////////////////////////////
// Composant des réseaux sociaux (doc ou icon en fonction du format d'écran)
const SocialMedia:React.FC = () => {
    
    /////////////////////////////////////////////////////////////////
    // bouton pour les icones
    function iconButton(icon:JSX.Element, link:string) {
        return <a href={link} target="_blank" className="group">
        {icon}
        </a>
    }

    /////////////////////////////////////////////////////////////////
    // zone des icones
    function docZone() {
        return <Dock className="max-md:hidden">
        <DockIcon className="group">
            {iconButton(<Github width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>, "https://github.com/Youvataque")}
        </DockIcon>
        <DockIcon className="group">
            {iconButton(<Linkedin width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.linkedin.com/in/yannis-seguin-540432161/")}
        </DockIcon>
        <DockIcon className="group" size={20}>
            {iconButton(<Youtube width="31px" height="31px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA")}
        </DockIcon>
        <DockIcon className="group">
            {iconButton(<Twitter width="31px" height="31px" color="text-primary fill-current group-hover:text-secondary"/>, "https://x.com/SEGUIN_Yannis")}
        </DockIcon>
        <DockIcon className="group max-md:hidden">
            {iconButton(<Facebook width="28px" height="28px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.facebook.com/youvataque?locale=fr_FR")}
        </DockIcon>
        </Dock>
    }

  /////////////////////////////////////////////////////////////////
  // version du docZone pour mobile
  function mobileDocZone() {
    return <div className="flex flex-row md:hidden gap-1 pt-1">
      {iconButton(<Github width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>, "https://github.com/Youvataque")}
      {iconButton(<Linkedin width="33px" height="33px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.linkedin.com/in/yannis-seguin-540432161/")}
      {iconButton(<Youtube width="31px" height="31px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.youtube.com/channel/UCQUgpvsakyzaLKko-a4lfBA")}
      {iconButton(<Twitter width="31px" height="31px" color="text-primary fill-current group-hover:text-secondary"/>, "https://x.com/SEGUIN_Yannis")}
      {iconButton(<Facebook width="28px" height="28px" color="text-primary fill-current group-hover:text-secondary"/>, "https://www.facebook.com/youvataque?locale=fr_FR")}
    </div>
  }
    return <div>
        {docZone()}
        {mobileDocZone()}
    </div>
}

export default SocialMedia

