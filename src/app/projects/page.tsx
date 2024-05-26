import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate";
import Footer from "@/components/FondamentalAppComp/Footer";
import MainText from "@/components/ViewTemplate/MainText";
import ProjectCard from "@/components/ViewTemplate/ProjectCard";
import SousTitle from "@/components/ViewTemplate/SousTitle";
import Title from "@/components/ViewTemplate/Title";

const Projects:React.FC = () => {

    /////////////////////////////////////////////////////////////////
    // donnée des projets mobile (application)
    const cardMobileData = [
        {
            title: "CoockLeen",
            description: "Vous cherchez une application de cuisine collaborative ? L'esprit familial vous tient à cœur ? CookLeen est LA solution ! Cette application sert de premier projet Flutter.",
            href: "https://github.com/Youvataque/Coockleen-Flutter",
            type:  <p>Abandonné</p>,
            typeColor: "border-red-400 text-red-400 px-1 rounded-lg",
            tags: [<span>React</span>, <span>React Native</span>, <span>Expo</span>]
        },
        {
            title: "Montpellier Transport",
            description: "Vous en avez assez d'utiliser une application mal conçue au quotidien ? Vous souhaitez profiter d'une ergonomie et d'un design adaptés aux goûts actuels ? Choisissez Montpellier Transport ! Attention est en cours de développement !",
            href: "https://notOnline.com",
            type: <p>Contribution</p>,
            typeColor: "border-yellow-400 text-yellow-400 px-1 rounded-lg",
            tags: [<span>React</span>, <span>React Native</span>, <span>Expo</span>]
        },
        {
            title: "NewBat : l'informatique du bâtiment",
            description: "Entreprise du batiment ? Vous souhaitez passer au numérique ? Avec NewBat entamez votre transition ! Gérez vos entretiens, vos chantiers ainsi que vos devis avec une simplicité encore inégalé.",
            href: "https://www.youtube.com/watch?v=GpcRevrvhY8",
            type:  <p>Service</p>,
            typeColor: "border-green-400 text-green-400 px-1 rounded-lg",
            tags: [<span>React</span>, <span>React Native</span>, <span>Expo</span>]
        },
    ]

    /////////////////////////////////////////////////////////////////
    // donnée des projets web (site)
    const cardDesktopData = [
        {
            title: "_Portfolio",
            description: "Le portfolio est un essentiel pour tout développeur. Désireux de présenter mes réalisations et de mettre en avant mes compétences, voici le mien. Il sert également de premier projet en React !",
            href: "https://github.com/Youvataque/_Portfolio",
            type:  <p>Abandonné</p>,
            typeColor: "border-red-400 text-red-400 px-1 rounded-lg",
            tags: [<span>React</span>, <span>React Native</span>, <span>Expo</span>]
        },
        {
            title: "SolsÉnergiesBains",
            description: "SolsÉnergiesBains est aujourd'hui équipé d'un site internet sur mesure, piloté par une application mobile. Cela leur permet d'avoir toujours un site internet à la page, sans coûts mensuels.",
            href: "https://www.solsenergiesbains.com/",
            type:  <p>Prestation</p>,
            typeColor: "border-blue-400 text-blue-400 px-1 rounded-lg",
            tags: [<span>React</span>, <span>React Native</span>, <span>Expo</span>]
        },
        {
            title: "NewBat website",
            description: "Site vitrine servant à présenter plus en détail NewBat et son offre. Si vous êtes une entreprise du bâtiment, vous devriez jeter un œil.",
            href: "https://www.seguin-newbat.fr/",
            type:  <p>Commercial</p>,
            typeColor: "border-orange-400 text-orange-400 px-1 rounded-lg",
            tags: [<span>React</span>, <span>React Native</span>, <span>Expo</span>]
        },
        {
            title: "_PortfolioV2",
            description: "Le portfolio étant la devanture de tout développeur, voici une version revisitée du mien. Il utilise des technologies modernes, le code est bien plus propre et le design saura se faire apprécier.",
            href: "https://github.com/Youvataque/_Portfoliov2",
            type:  <p>Commercial</p>,
            typeColor: "border-orange-400 text-orange-400 px-1 rounded-lg",
            tags: [<span>React</span>, <span>React Native</span>, <span>Expo</span>]
        },
        
    ]

    /////////////////////////////////////////////////////////////////
    // zone de présentation (header)
    function header() {
        return (
            <div className="flex flex-col justify-center items-center">
                <Title text="Retrouvez tous mes projets !" style="text-secondary"/>
                <MainText text="Sur cette page vous pourrez retrouver l'ensemble de mes projets. Qu'ils soient publics ou privés, terminés ou abandonnés, tous seront disponibles ici afin de vous faire une idée de la qualité de mon travail et de l'importance que j'accorde à l'évolution." style="text-primary text-center"/>
            </div>
        );
    }

    /////////////////////////////////////////////////////////////////
    // zone des projets mobile
    function cardMobileZone() {
        return (
            <div className="flex flex-col w-full items-start">
                <SousTitle text="Projets mobile :" style="text-secondary pb-8"/>
                <div className="flex flex-wrap justify-center items-center w-full">
                    {cardMobileData.reverse().map((card) => (
                        <ProjectCard
                            title={card.title}
                            description={card.description}
                            href={card.href}
                            tags={card.tags}
                            type={card.type}
                            typeColor={card.typeColor}
                        />
                    ))}
                </div>
            </div>
        );
    }

    /////////////////////////////////////////////////////////////////
    // zone des projets web
    function cardDesktopZone() {
        return (
            <div className="flex flex-col w-full items-start mt-16">
                <SousTitle text="Projets web :" style="text-secondary pb-8"/>
                <div className="flex flex-wrap justify-center items-center w-full">
                    {cardDesktopData.reverse().map((card) => (
                        <ProjectCard
                            title={card.title}
                            description={card.description}
                            href={card.href}
                            tags={card.tags}
                            type={card.type}
                            typeColor={card.typeColor}
                        />
                    ))}
                </div>
            </div>
        );
    }

    /////////////////////////////////////////////////////////////////
    // corp du code
    return (
        <BodyTemplate>
            <div className="flex flex-col justify-center items-center w-[50vw] max-2xl:w-[70vw] max-md:w-[95vw]">
                <div className="pt-[4vw] max-2xl:pt-[8vw] max-md:pt-16"/>
                {header()}
                <div className="pt-[24vw] max-2xl:pt-[27vw] max-md:pt-32"/>
                {cardMobileZone()}
                {cardDesktopZone()}
                <div className="pt-[16vw] max-md:pt-12"/>
                <Footer/>
                <div className="pb-4"/>
            </div>
        </BodyTemplate>
    );
};

export default Projects;