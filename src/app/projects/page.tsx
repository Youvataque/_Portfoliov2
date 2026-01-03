import {
    SiGithub,
    SiFlutter,
    SiFirebase,
    SiAdobephotoshop,
    SiReact,
    SiTypescript,
    SiDocker,
    SiNextdotjs,
    SiTailwindcss,
    SiVite,
    SiFigma,
    SiCss3
} from "react-icons/si";
import BodyTemplate from "@/components/FondamentalAppComp/BodyTemplate";
import Footer from "@/components/FondamentalAppComp/Footer";
import MainText from "@/components/ViewTemplate/MainText";
import ProjectCard from "@/components/ViewTemplate/ProjectCard";
import SousTitle from "@/components/ViewTemplate/SousTitle";
import Title from "@/components/ViewTemplate/Title";

const Projects: React.FC = () => {

    /////////////////////////////////////////////////////////////////
    // donnée des projets mobile (application)
    const cardMobileData = [
        {
            title: "CoockLeen",
            description: "Vous cherchez une application de cuisine collaborative ? L'esprit familial vous tient à cœur ? CookLeen est LA solution ! Cette application sert de premier projet Flutter.",
            href: "https://github.com/Youvataque/Coockleen-Flutter",
            type: <p>Abandonné</p>,
            typeColor: "border-red-400 text-red-400 px-1 rounded-lg",
            tags: [
                <SiFlutter key="flutter1" className="w-5 h-5 text-red-400" />,
                <SiFirebase key="firebase1" className="w-5 h-5 text-red-400" />,
                <SiGithub key="github1" className="w-5 h-5 text-red-400" />,
                <SiAdobephotoshop key="photoshop1" className="w-5 h-5 text-red-400" />
            ]
        },
        {
            title: "Montpellier Transport",
            description: "Vous en avez assez d'utiliser une application mal conçue au quotidien ? Vous souhaitez profiter d'une ergonomie et d'un design adaptés aux goûts actuels ? Choisissez Montpellier Transport ! Attention est en cours de développement !",
            href: "https://montpellier-transports.fr/",
            type: <p>Contribution</p>,
            typeColor: "border-yellow-400 text-yellow-400 px-1 rounded-lg",
            tags: [
                <SiFlutter key="flutter2" className="w-5 h-5 text-yellow-400" />,
                <SiFirebase key="firebase2" className="w-5 h-5 text-yellow-400" />,
                <SiGithub key="github2" className="w-5 h-5 text-yellow-400" />
            ]
        },
        {
            title: "HomeFlix",
            description: "Mettez vous aussi en place votre propre plateforme vidéo ! Relié à la source de votre choix vous pourrez télécharger, regarder et administrer votre contenue de façon fluide et confortable.",
            href: "https://github.com/Youvataque/HomeFlix-yggpowered",
            type: <p>OpenSource</p>,
            typeColor: "border-purple-400 text-purple-400 px-1 rounded-lg",
            tags: [
                <SiFlutter key="flutter2" className="w-5 h-5 text-purple-400" />,
                <SiReact key="react1" className="w-5 h-5 text-purple-400" />,
                <SiTypescript key="typescript1" className="w-5 h-5 text-purple-400" />,
                <SiGithub key="github2" className="w-5 h-5 text-purple-400" />,
                <SiAdobephotoshop key="photoshop2" className="w-5 h-5 text-purple-400" />,
                <SiDocker key="docker2" className="w-5 h-5 text-purple-400" />
            ]
        },
        {
            title: "NewBat : l'informatique du bâtiment",
            description: "Entreprise du batiment ? Vous souhaitez passer au numérique ? Avec NewBat entamez votre transition ! Gérez vos entretiens, vos chantiers ainsi que vos devis avec une simplicité encore inégalé.",
            href: "https://www.youtube.com/watch?v=GpcRevrvhY8",
            type: <p>Service</p>,
            typeColor: "border-green-400 text-green-400 px-1 rounded-lg",
            tags: [
                <SiFlutter key="flutter3" className="w-5 h-5 text-green-400" />,
                <SiFirebase key="firebase3" className="w-5 h-5 text-green-400" />,
                <SiFigma key="figma1" className="w-5 h-5 text-green-400" />,
                <SiGithub key="github3" className="w-5 h-5 text-green-400" />,
                <SiAdobephotoshop key="photoshop2" className="w-5 h-5 text-green-400" />
            ]
        },
    ]

    /////////////////////////////////////////////////////////////////
    // donnée des projets web (site)
    const cardDesktopData = [
        {
            title: "_Portfolio",
            description: "Le portfolio est un essentiel pour tout développeur. Désireux de présenter mes réalisations et de mettre en avant mes compétences, voici le mien. Il sert également de premier projet en React !",
            href: "https://github.com/Youvataque/_Portfolio",
            type: <p>Abandonné</p>,
            typeColor: "border-red-400 text-red-400 px-1 rounded-lg",
            tags: [
                <SiReact key="react1" className="w-5 h-5 text-red-400" />,
                <SiCss3 key="css1" className="w-5 h-5 text-red-400" />,
                <SiGithub key="github4" className="w-5 h-5 text-red-400" />,
                <SiFigma key="figma2" className="w-5 h-5 text-red-400" />,
                <SiAdobephotoshop key="photoshop3" className="w-5 h-5 text-red-400" />
            ]
        },
        {
            title: "NewBat website",
            description: "Site vitrine servant à présenter plus en détail NewBat et son offre. Si vous êtes une entreprise du bâtiment, vous devriez jeter un œil.",
            href: "https://gestionnaireinterventions.web.app/",
            type: <p>Commercial</p>,
            typeColor: "border-orange-400 text-orange-400 px-1 rounded-lg",
            tags: [
                <SiReact key="react3" className="w-5 h-5 text-orange-400" />,
                <SiVite key="vite2" className="w-5 h-5 text-orange-400" />,
                <SiTailwindcss key="tailwind2" className="w-5 h-5 text-orange-400" />,
                <SiTypescript key="typescript2" className="w-5 h-5 text-orange-400" />,
                <SiFigma key="figma4" className="w-5 h-5 text-orange-400" />,
                <SiGithub key="github6" className="w-5 h-5 text-orange-400" />,
                <SiAdobephotoshop key="photoshop5" className="w-5 h-5 text-orange-400" />
            ]
        },
        {
            title: "Épona & Vous",
            description: "Conception et développement sur-mesure pour l'agence Épona & Vous. Ce site vitrine allie élégance et modernité, avec une attention particulière portée à l'expérience utilisateur, aux animations fluides et au référencement naturel (SEO).",
            href: "https://www.epona-et-vous.fr/",
            type: <p>Prestation</p>,
            typeColor: "border-blue-400 text-blue-400 px-1 rounded-lg",
            tags: [
                <SiReact key="react2" className="w-5 h-5 text-blue-400" />,
                <SiNextdotjs key="next1" className="w-5 h-5 text-blue-400" />,
                <SiTailwindcss key="tailwind1" className="w-5 h-5 text-blue-400" />,
                <SiTypescript key="typescript1" className="w-5 h-5 text-blue-400" />,
                <SiFigma key="figma3" className="w-5 h-5 text-blue-400" />,
                <SiGithub key="github5" className="w-5 h-5 text-blue-400" />,
                <SiAdobephotoshop key="photoshop4" className="w-5 h-5 text-blue-400" />,
            ]
        },
        {
            title: "SolsÉnergiesBains",
            description: "SolsÉnergiesBains est aujourd'hui équipé d'un site internet sur mesure, piloté par une application mobile. Cela leur permet d'avoir toujours un site internet à la page, sans coûts mensuels.",
            href: "https://www.solsenergiesbains.com/",
            type: <p>Prestation</p>,
            typeColor: "border-blue-400 text-blue-400 px-1 rounded-lg",
            tags: [
                <SiReact key="react2" className="w-5 h-5 text-blue-400" />,
                <SiFlutter key="flutter4" className="w-5 h-5 text-blue-400" />,
                <SiFirebase key="firebase4" className="w-5 h-5 text-blue-400" />,
                <SiVite key="vite1" className="w-5 h-5 text-blue-400" />,
                <SiTailwindcss key="tailwind1" className="w-5 h-5 text-blue-400" />,
                <SiTypescript key="typescript1" className="w-5 h-5 text-blue-400" />,
                <SiFigma key="figma3" className="w-5 h-5 text-blue-400" />,
                <SiGithub key="github5" className="w-5 h-5 text-blue-400" />,
                <SiAdobephotoshop key="photoshop4" className="w-5 h-5 text-blue-400" />
            ]
        },
        {
            title: "_PortfolioV2",
            description: "Le portfolio étant la devanture de tout développeur, voici une version revisitée du mien. Il utilise des technologies modernes, le code est bien plus propre et le design saura se faire apprécier.",
            href: "https://github.com/Youvataque/_Portfoliov2",
            type: <p>Commercial</p>,
            typeColor: "border-orange-400 text-orange-400 px-1 rounded-lg",
            tags: [
                <SiReact key="react4" className="w-5 h-5 text-orange-400" />,
                <SiNextdotjs key="next1" className="w-5 h-5 text-orange-400" />,
                <SiTailwindcss key="tailwind3" className="w-5 h-5 text-orange-400" />,
                <SiTypescript key="typescript3" className="w-5 h-5 text-orange-400" />,
                <SiFigma key="figma5" className="w-5 h-5 text-orange-400" />,
                <SiGithub key="github7" className="w-5 h-5 text-orange-400" />,
                <SiAdobephotoshop key="photoshop6" className="w-5 h-5 text-orange-400" />
            ]
        },
    ]

    /////////////////////////////////////////////////////////////////
    // zone de présentation (header)
    function header() {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col">
                <Title text="Retrouvez tous mes projets !" style="text-secondary text-center" />
                <MainText text="Sur cette page vous pourrez retrouver l'ensemble de mes projets. Qu'ils soient publics ou privés, terminés ou abandonnés, tous seront disponibles ici afin de vous faire une idée de la qualité de mon travail et de l'importance que j'accorde à l'évolution." style="text-primary text-center" />
            </div>
        );
    }

    /////////////////////////////////////////////////////////////////
    // zone des projets mobile
    function cardMobileZone() {
        return (
            <div className="flex flex-col w-full items-start max-md:items-center">
                <SousTitle text="Projets mobile :" style="text-secondary pb-8" />
                <div className="flex flex-wrap justify-center items-center w-full">
                    {cardMobileData.reverse().map((card, index) => (
                        <ProjectCard
                            key={index}
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
            <div className="flex flex-col w-full items-start max-md:items-center mt-16">
                <SousTitle text="Projets web :" style="text-secondary pb-8" />
                <div className="flex flex-wrap justify-center items-center w-full">
                    {cardDesktopData.reverse().map((card, index) => (
                        <ProjectCard
                            key={index}
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
            <div className="flex flex-col justify-center items-center w-[50vw] max-2xl:w-[80vw] max-md:w-[95vw]">
                {header()}
                <div className="min-h-screen flex items-center justify-center flex-col">
                    {cardMobileZone()}
                    {cardDesktopZone()}
                </div>
                <Footer />
                <div className="pb-4" />
            </div>
        </BodyTemplate>
    );
};

export default Projects;