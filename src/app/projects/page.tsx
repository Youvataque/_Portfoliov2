import Github from "@/Icon/Github";
import CssIco from "@/Icon/tech/CssIco";
import Figma from "@/Icon/tech/Figma";
import Firebase from "@/Icon/tech/Firebase";
import Flutter from "@/Icon/tech/Flutter";
import NextIco from "@/Icon/tech/NextIco";
import Photoshop from "@/Icon/tech/Photoshop";
import ReactIco from "@/Icon/tech/ReactIco";
import Tailwind from "@/Icon/tech/Tailwind";
import Typescript from "@/Icon/tech/Typescript";
import Vite from "@/Icon/tech/Vite";
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
            tags: [
                <Flutter key="flutter1" width="27px" height="27px" color="text-primary fill-current"/>,
                <Firebase key="firebase1" width="30px" height="30px" color="text-primary fill-current"/>,
                <Github key="github1" width="30px" height="30px" color="text-primary fill-current"/>,
                <Photoshop key="photoshop1" width="27px" height="27px" color="text-primary fill-current"/>
            ]
        },
        {
            title: "Montpellier Transport",
            description: "Vous en avez assez d'utiliser une application mal conçue au quotidien ? Vous souhaitez profiter d'une ergonomie et d'un design adaptés aux goûts actuels ? Choisissez Montpellier Transport ! Attention est en cours de développement !",
            href: "https://notOnline.com",
            type: <p>Contribution</p>,
            typeColor: "border-yellow-400 text-yellow-400 px-1 rounded-lg",
            tags: [
                <Flutter key="flutter2" width="27px" height="27px" color="text-primary fill-current"/>,
                <Firebase key="firebase2" width="30px" height="30px" color="text-primary fill-current"/>,
                <Github key="github2" width="30px" height="30px" color="text-primary fill-current"/>
            ]
        },
        {
            title: "NewBat : l'informatique du bâtiment",
            description: "Entreprise du batiment ? Vous souhaitez passer au numérique ? Avec NewBat entamez votre transition ! Gérez vos entretiens, vos chantiers ainsi que vos devis avec une simplicité encore inégalé.",
            href: "https://www.youtube.com/watch?v=GpcRevrvhY8",
            type:  <p>Service</p>,
            typeColor: "border-green-400 text-green-400 px-1 rounded-lg",
            tags: [
                <Flutter key="flutter3" width="27px" height="27px" color="text-primary fill-current"/>,
                <Firebase key="firebase3" width="30px" height="30px" color="text-primary fill-current"/>,
                <Figma key="figma1" width="30px" height="30px" color="text-primary fill-current"/>,
                <Github key="github3" width="30px" height="30px" color="text-primary fill-current"/>,
                <Photoshop key="photoshop2" width="27px" height="27px" color="text-primary fill-current"/>
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
            type:  <p>Abandonné</p>,
            typeColor: "border-red-400 text-red-400 px-1 rounded-lg",
            tags: [
                <ReactIco key="react1" width="30px" height="30px" color="text-primary fill-current"/>,
                <CssIco key="css1" width="28px" height="28px" color="text-primary fill-current"/>,
                <Github key="github4" width="30px" height="30px" color="text-primary fill-current"/>,
                <Figma key="figma2" width="30px" height="30px" color="text-primary fill-current"/>,
                <Photoshop key="photoshop3" width="27px" height="27px" color="text-primary fill-current"/>
            ]
        },
        {
            title: "SolsÉnergiesBains",
            description: "SolsÉnergiesBains est aujourd'hui équipé d'un site internet sur mesure, piloté par une application mobile. Cela leur permet d'avoir toujours un site internet à la page, sans coûts mensuels.",
            href: "https://www.solsenergiesbains.com/",
            type:  <p>Prestation</p>,
            typeColor: "border-blue-400 text-blue-400 px-1 rounded-lg",
            tags: [
                <ReactIco key="react2" width="30px" height="30px" color="text-primary fill-current"/>,
                <Flutter key="flutter4" width="27px" height="27px" color="text-primary fill-current"/>,
                <Firebase key="firebase4" width="30px" height="30px" color="text-primary fill-current"/>,
                <Vite key="vite1" width="29px" height="29px" color="text-primary fill-current"/>,
                <Tailwind key="tailwind1" width="30px" height="30px" color="text-primary fill-current"/>,
                <Typescript key="typescript1" width="27px" height="27px" color="text-primary fill-current"/>,
                <Figma key="figma3" width="30px" height="30px" color="text-primary fill-current"/>,
                <Github key="github5" width="30px" height="30px" color="text-primary fill-current"/>,
                <Photoshop key="photoshop4" width="27px" height="27px" color="text-primary fill-current"/>
            ]
        },
        {
            title: "NewBat website",
            description: "Site vitrine servant à présenter plus en détail NewBat et son offre. Si vous êtes une entreprise du bâtiment, vous devriez jeter un œil.",
            href: "https://www.seguin-newbat.fr/",
            type:  <p>Commercial</p>,
            typeColor: "border-orange-400 text-orange-400 px-1 rounded-lg",
            tags: [
                <ReactIco key="react3" width="30px" height="30px" color="text-primary fill-current"/>,
                <Vite key="vite2" width="29px" height="29px" color="text-primary fill-current"/>,
                <Tailwind key="tailwind2" width="30px" height="30px" color="text-primary fill-current"/>,
                <Typescript key="typescript2" width="27px" height="27px" color="text-primary fill-current"/>,
                <Figma key="figma4" width="30px" height="30px" color="text-primary fill-current"/>,
                <Github key="github6" width="30px" height="30px" color="text-primary fill-current"/>,
                <Photoshop key="photoshop5" width="27px" height="27px" color="text-primary fill-current"/>
            ]
        },
        {
            title: "_PortfolioV2",
            description: "Le portfolio étant la devanture de tout développeur, voici une version revisitée du mien. Il utilise des technologies modernes, le code est bien plus propre et le design saura se faire apprécier.",
            href: "https://github.com/Youvataque/_Portfoliov2",
            type:  <p>Commercial</p>,
            typeColor: "border-orange-400 text-orange-400 px-1 rounded-lg",
            tags: [
                <ReactIco key="react4" width="30px" height="30px" color="text-primary fill-current"/>,
                <NextIco key="next1" width="30px" height="30px" color="text-primary fill-current"/>,
                <Tailwind key="tailwind3" width="30px" height="30px" color="text-primary fill-current"/>,
                <Typescript key="typescript3" width="27px" height="27px" color="text-primary fill-current"/>,
                <Figma key="figma5" width="30px" height="30px" color="text-primary fill-current"/>,
                <Github key="github7" width="30px" height="30px" color="text-primary fill-current"/>,
                <Photoshop key="photoshop6" width="27px" height="27px" color="text-primary fill-current"/>
            ]
        },
        
    ]

    /////////////////////////////////////////////////////////////////
    // zone de présentation (header)
    function header() {
        return (
            <div className="flex flex-col justify-center items-center">
                <Title text="Retrouvez tous mes projets !" style="text-secondary text-center"/>
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
            <div className="flex flex-col w-full items-start mt-16">
                <SousTitle text="Projets web :" style="text-secondary pb-8"/>
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