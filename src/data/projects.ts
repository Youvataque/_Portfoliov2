/////////////////////////////////////////////////////////////////
// titre avec un passage surligné (couleur d'accent du projet)
export interface MarkedTitle {
    before?: string;
    mark: string;
    after?: string;
}

/////////////////////////////////////////////////////////////////
// section de la page projet (01, 02, 03…, autant que voulu) :
// le visuel porte déjà numéro, titre et points clés, le texte n'apporte que le détail
// dans body, les passages entre `backticks` s'affichent en code
export interface ProjectSection {
    kicker: string;
    body: string[];
    // un visuel exporté (qui porte déjà son titre)…
    image?: { src: string; alt: string };
    // …ou un schéma dessiné en code, accompagné d'un titre affiché au-dessus du texte
    diagram?: "homeflix-stack";
    title?: MarkedTitle;
}

/////////////////////////////////////////////////////////////////
// catégories de la page /projects (dans cet ordre) ; l'accueil n'affiche que "principal"
export type ProjectCategory = "principal" | "mobile" | "web";

export const projectCategories: { id: ProjectCategory; title: string }[] = [
    { id: "principal", title: "Projets principaux" },
    { id: "mobile", title: "Mobile" },
    { id: "web", title: "Web" },
];

/////////////////////////////////////////////////////////////////
// projet : la tuile (couleurs du site) + la page /projects/[slug] (couleurs du projet)
export interface Project {
    slug: string;
    category: ProjectCategory;
    name: string;
    logo: string;
    // classe définie dans globals.css qui applique les couleurs et la police du projet
    theme: string;
    role: string;
    period: string;
    // site public du projet (optionnel) et texte du bouton (par défaut « Découvrir <domaine> »)
    url?: string;
    urlLabel?: string;
    // tuile : premier coup d'œil
    cover: string;
    summary: string;
    stack: string[];
    // page : en-tête
    hero: {
        title: MarkedTitle;
        lead: string;
        screen: string;
        // true si l'écran est déjà une maquette encadrée (bezel compris)
        screenFramed?: boolean;
        illustration?: string;
    };
    sections: ProjectSection[];
    // visuels alignés comme sur les stores, en fin de page
    gallery: { src: string; alt: string }[];
    // "card" : visuels store pleins (défaut), "device" : maquettes d'appareil détourées
    galleryStyle?: "card" | "device";
    // titre de la galerie (par défaut « L'app en images »)
    galleryTitle?: MarkedTitle;
}

export const projects: Project[] = [
    {
        slug: "neeko",
        category: "principal",
        name: "Neeko",
        logo: "/Img/Neeko/logo.svg",
        theme: "theme-neeko",
        role: "CTO salarié en CDI",
        period: "Depuis janvier 2026",
        url: "https://neekoapp.com/",
        cover: "/Img/Neeko/00_cover.jpg",
        summary:
            "Plateforme temps réel qui connecte restaurateurs et extras. À mon arrivée, le MVP affichait des fonctionnalités factices et le back tenait dans un contrôleur de 2500 lignes, sans temps réel ni traitement asynchrone. Je l'ai redressé en production pour un matching géolocalisé fiable, en direct et sans double acceptation.",
        stack: ["Flutter", "Laravel", "Next.js", "React", "Redis GEO", "H3", "WebSocket", "Stripe", "Coolify"],
        hero: {
            title: { before: "Des extras en ", mark: "moins de 2 heures" },
            lead: "La plateforme temps réel qui connecte restaurateurs et extras. Conçue, codée et déployée en solo, de l'app au back.",
            screen: "/Img/Neeko/screen-missions.webp",
            illustration: "/Img/Neeko/chef.svg",
        },
        sections: [
            {
                kicker: "Le produit",
                body: [
                    "Le parcours restaurateur tient en quatre écrans. Il choisit le profil recherché, pose ses exigences par ordre d'importance, publie la mission, puis confirme la présence de l'extra une fois sur place. Tout le reste, la recherche, la mise en relation et le suivi, se fait sans intervention.",
                    "Côté extra, la progression est gamifiée. De Novice à Master, l'XP récompense les missions complétées et les avis reçus, ce qui fait remonter les meilleurs profils et donne une raison de revenir.",
                ],
                image: { src: "/Img/Neeko/01_produit.jpg", alt: "Les quatre écrans du parcours restaurateur Neeko" },
            },
            {
                kicker: "Cycle de vie",
                body: [
                    "Une mission passe par cinq états, `open`, `matched`, `in_progress`, `waiting_feedback` puis `completed`. Toutes les transitions passent par une machine à états unique, exécutée en transaction. Deux extras ne peuvent donc pas accepter la même mission, même à quelques millisecondes d'écart.",
                    "Chaque changement est ensuite diffusé en WebSocket via Reverb. Les événements légers partent dans la foulée de la requête ; les plus coûteux, comme le recalcul de la carte de tension, transitent par la queue Horizon et ne sont diffusés qu'une fois prêts.",
                ],
                image: { src: "/Img/Neeko/02_lifecycle.jpg", alt: "Les cinq états d'une mission Neeko" },
            },
            {
                kicker: "Le back",
                body: [
                    "Laravel était déjà là. Changer de back en big bang sur un produit en production était inenvisageable, alors je l'ai gardé et redressé de l'intérieur, domaine par domaine, en m'appuyant sur ce que le framework fournit déjà (Reverb, Horizon, Redis, Passport).",
                    "Le contrôleur géant a été découpé en services métier injectés par constructeur, les opérations sensibles passent en transaction avec verrou, et les traitements lourds partent en queue. Côté infra, j'ai quitté AWS pour un serveur Hetzner piloté par Coolify.",
                ],
                image: { src: "/Img/Neeko/03_back.jpg", alt: "Avant / après du contrôleur de missions" },
            },
        ],
        gallery: [
            { src: "/Img/Neeko/store/01.webp", alt: "Des extras en moins de 2 heures" },
            { src: "/Img/Neeko/store/02.webp", alt: "Le bon profil au bout des doigts" },
            { src: "/Img/Neeko/store/03.webp", alt: "Configurez vos missions" },
            { src: "/Img/Neeko/store/04.webp", alt: "Une rémunération en toute transparence" },
            { src: "/Img/Neeko/store/05.webp", alt: "Gérer vos recherches en simultané" },
            { src: "/Img/Neeko/store/06.webp", alt: "Des missions accessibles en un clic" },
            { src: "/Img/Neeko/store/07.webp", alt: "La proximité, votre meilleur allié" },
            { src: "/Img/Neeko/store/08.webp", alt: "Une prise de poste sécurisée" },
            { src: "/Img/Neeko/store/09.webp", alt: "Hissez-vous parmi les meilleurs profils" },
            { src: "/Img/Neeko/store/10.webp", alt: "Tableau de bord de l'extra" },
        ],
    },
    {
        slug: "clane",
        category: "principal",
        name: "Clane",
        logo: "/Img/Clane/logo.svg",
        theme: "theme-clane",
        role: "Fondateur et développeur",
        period: "Depuis 2023",
        url: "https://www.clane.fr/",
        cover: "/Img/Clane/00_cover.jpg",
        summary:
            "Le SaaS des entretiens de clim, PAC et chaudières. Il fallait qu'un technicien travaille sans réseau au fond d'une cave, que ses saisies remontent sans doublon ni perte, et que les données de chaque entreprise restent étanches. Rapports et contrats signés partent seuls en PDF chez le client.",
        stack: ["Flutter", "Cubit", "Drift", "Laravel", "Livewire", "Stripe", "Next.js", "Docker"],
        hero: {
            title: { before: "Vos entretiens CVC, ", mark: "enfin simples" },
            lead: "Le SaaS qui gère contrats, rapports et rappels des entreprises de clim et de chauffage. Conçu, codé et déployé en solo, de l'app au back.",
            screen: "/Img/Clane/hero-accueil.webp",
            screenFramed: true,
            illustration: "/Img/Clane/logo.svg",
        },
        sections: [
            {
                kicker: "Le produit",
                body: [
                    "Sur place, le technicien retrouve chaque machine dans l'arborescence client, site, unité extérieure, unités intérieures et bouches. Chaque type d'équipement a son formulaire, de la clim gainable à la chaudière fioul, et des règles métier refusent les saisies incohérentes, comme des mesures relevées sur une machine à l'arrêt.",
                    "Le contrat et le rapport se signent sur l'écran. La signature est conservée en tracé vectoriel, le PDF est reconstruit côté serveur puis envoyé automatiquement au client. Au bureau, le gérant suit ses clients, ses contrats, ses statistiques et son chiffre d'affaires depuis un portail web.",
                ],
                image: { src: "/Img/Clane/01_produit.jpg", alt: "Le parcours d'une visite d'entretien dans Clane" },
            },
            {
                kicker: "L'histoire",
                body: [
                    "Tout part d'un outil d'interventions écrit pour un chauffagiste, d'abord en Swift puis réécrit en Flutter. NewBat l'a ensuite élargi en ERP du bâtiment, avec trois apps pour les interventions, les chantiers et les devis, vendu sur commande et toujours adossé à Firebase.",
                    "Clane resserre le périmètre sur le métier qui revenait toujours, l'entretien CVC, et repart d'une base saine. Un back Laravel remplace Firebase, l'app passe à Cubit et fonctionne hors connexion, et le produit se vend en libre service avec un essai gratuit puis des licences de 49 à 149 € par mois.",
                ],
                image: { src: "/Img/Clane/02_histoire.jpg", alt: "De l'outil sur mesure à NewBat puis à Clane" },
            },
            {
                kicker: "Le hors connexion",
                body: [
                    "Chaque saisie est d'abord écrite dans une base SQLite locale, puis rejouée vers le serveur en une seule transaction. Les identifiants sont générés sur l'appareil, ce qui rend le lot rejouable sans doublon, et le serveur fixe lui-même l'entreprise, l'auteur et les dates sans jamais faire confiance au téléphone.",
                    "Quand un lot est refusé, le serveur ne s'arrête pas à la première erreur. Il liste toutes les lignes fautives, celles qu'elles bloquent et l'endroit où la chaîne de références casse, puis l'app propose au technicien de corriger chaque champ. Côté données, des clés étrangères composites isolent chaque entreprise, si bien qu'une requête oubliée ne peut rien faire fuiter.",
                ],
                image: { src: "/Img/Clane/03_offline.jpg", alt: "La synchronisation hors connexion de Clane" },
            },
        ],
        gallery: [
            { src: "/Img/Clane/store/01.webp", alt: "Vos entretiens CVC, enfin simples" },
            { src: "/Img/Clane/store/02.webp", alt: "Le rapport se rédige tout seul" },
            { src: "/Img/Clane/store/03.webp", alt: "Valorisez votre entreprise" },
            { src: "/Img/Clane/store/04.webp", alt: "Un revenu récurrent sans effort" },
            { src: "/Img/Clane/store/05.webp", alt: "Moins d'allers-retours inutiles" },
            { src: "/Img/Clane/store/06.webp", alt: "Plus de techniciens, plus de chiffre" },
            { src: "/Img/Clane/store/07.webp", alt: "Sachez enfin combien vous gagnez" },
        ],
    },
    {
        slug: "homeflix",
        category: "mobile",
        name: "HomeFlix",
        logo: "/Img/HomeFlix/logo.webp",
        theme: "theme-homeflix",
        role: "Projet open source",
        period: "Arrêté en 2026",
        url: "https://github.com/Youvataque/HomeFlix-discontinued",
        urlLabel: "Voir le code sur GitHub",
        cover: "/Img/HomeFlix/00_cover.jpg",
        summary:
            "Un Netflix personnel branché sur un serveur maison. Il fallait retrouver le bon fichier pour chaque film ou épisode, suivre les téléchargements en direct, ranger la bibliothèque sans intervention et lire les vidéos en streaming depuis le téléphone. Projet aujourd'hui arrêté.",
        stack: ["Flutter", "Node.js", "Express", "TypeScript", "qBittorrent", "TMDB", "Docker"],
        hero: {
            title: { before: "Le Netflix ", mark: "du torrent" },
            lead: "Une app Flutter et une API Node.js pour télécharger, ranger et regarder ses films et séries depuis son propre serveur. Projet open source, aujourd'hui arrêté.",
            screen: "/Img/HomeFlix/screen-home.webp",
        },
        sections: [
            {
                kicker: "Le catalogue",
                body: [
                    "On parcourt films et séries comme sur une plateforme classique. Les fiches et les affiches viennent de TMDB, et un bouton suffit pour lancer le téléchargement d'un film, d'une saison ou d'un seul épisode, puis suivre sa progression depuis l'app.",
                    "Une fois sur le serveur, tout se regarde en streaming. La lecture passe par des requêtes HTTP par plages d'octets, ce qui permet d'avancer dans une vidéo sans la télécharger en entier. L'app se connecte à n'importe quel serveur HomeFlix avec son adresse IP et une clé d'API.",
                ],
                image: { src: "/Img/HomeFlix/01_catalogue.jpg", alt: "Le catalogue HomeFlix en streaming" },
            },
            {
                kicker: "Le serveur",
                body: [
                    "Le vrai casse-tête, ce sont les torrents eux-mêmes. Aucun nom n'arrive jamais au même format. Un coup en anglais, un coup en français, des mots séparés par des tirets ou par des points, la saison collée au titre ou rejetée à la fin, le tout suivi d'une traînée de mentions de qualité et de langue. Retrouver le bon épisode là-dedans a été, de loin, la partie la plus pénible du projet et la raison de son arrêt.",
                    "L'API pilote qBittorrent par son interface web et rapproche chaque nom du titre officiel par une distance de Levenshtein, avant de ranger le fichier au bon endroit. Un watcher surveille ensuite tout en continu, la progression des téléchargements, les dossiers et l'état de la machine, de la RAM au VPN.",
                ],
                image: { src: "/Img/HomeFlix/02_serveur.jpg", alt: "Le tableau de bord du serveur HomeFlix" },
            },
            {
                kicker: "Ce qu'il m'a appris",
                title: { before: "Le projet qui m'a mis ", mark: "dans le bain" },
                body: [
                    "HomeFlix est le projet qui m'a vraiment poussé à coder à peu près proprement. Pour la première fois, rien ne tenait tout seul. Il fallait un back-end fait maison, découpé en routes, en outils et en watcher, capable de tourner des jours entiers sans surveillance, et une app qui ne fasse confiance qu'à lui.",
                    "J'ai volontairement découpé le système en deux API. L'API A, publique, gère la bibliothèque, les téléchargements et le streaming. L'API B fait le pont avec la source des torrents et n'est pas fournie dans le dépôt. Tout ce qui est de nature litigieuse reste ainsi hors de l'app publique, chacun branchant sa propre source.",
                    "C'est aussi là que j'ai découvert la conteneurisation. L'API et qBittorrent tiennent dans un conteneur Docker monté par un seul script, pour que n'importe qui puisse l'installer chez lui. Penser un projet pour qu'il tourne ailleurs que sur ma machine, sécuriser une API par clé, journaliser chaque action, ce sont des réflexes nés ici que j'ai ensuite emmenés sur Clane et Neeko.",
                ],
                diagram: "homeflix-stack",
            },
        ],
        gallery: [
            { src: "/Img/HomeFlix/store/01.webp", alt: "Accueil et films populaires" },
            { src: "/Img/HomeFlix/store/02.webp", alt: "Séries présentes sur le serveur" },
            { src: "/Img/HomeFlix/store/03.webp", alt: "Fiche d'une série" },
            { src: "/Img/HomeFlix/store/04.webp", alt: "Téléchargements en cours" },
            { src: "/Img/HomeFlix/store/05.webp", alt: "État du serveur" },
        ],
    },
    {
        slug: "solsenergiesbains",
        category: "web",
        name: "Sols Énergies Bains",
        logo: "/Img/SEB/logo.webp",
        theme: "theme-seb",
        role: "Mission freelance",
        period: "2023, 6 mois",
        url: "https://www.solsenergiesbains.com/",
        cover: "/Img/SEB/00_cover.jpg",
        summary:
            "Le site vitrine d'une entreprise de chauffage, climatisation et salles de bain près de Montpellier. Le patron devait pouvoir publier ses chantiers lui-même, sans agence ni abonnement, être bien référencé localement et ne rater aucune demande de contact.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind", "Flutter", "Firebase"],
        hero: {
            title: { before: "Un site ", mark: "piloté", after: " depuis une app" },
            lead: "Le site vitrine de Sols Énergies Bains, administré depuis une application mobile. Le patron publie ses chantiers en une photo et reçoit ses demandes de contact dans sa poche.",
            screen: "/Img/SEB/screen-home.webp",
        },
        sections: [
            {
                kicker: "Le pilotage",
                body: [
                    "Tout le contenu du site se gère depuis l'app. Le patron prend une photo sur le chantier, choisit le métier, ajoute un texte, et la réalisation apparaît en ligne sur la bonne page. Pas de back-office web à apprendre, pas de CMS à payer chaque mois.",
                    "Les textes et le référencement se modifient de la même façon. Le site reste à jour sans coût mensuel et sans que j'aie à intervenir.",
                ],
                image: { src: "/Img/SEB/01_pilotage.jpg", alt: "Une photo publiée depuis l'app apparaît sur le site" },
            },
            {
                kicker: "Les galeries",
                body: [
                    "Chaque métier a sa page, salle de bain, climatisation et chauffage, et les projets clés en main ont leur propre galerie. Les rénovations se montrent en avant et après, avec un curseur pour comparer les deux photos.",
                    "Le site est rendu côté serveur avec Next.js. Les pages arrivent déjà construites chez Google, ce qui compte pour une entreprise qui vit de sa visibilité locale autour de Montpellier.",
                ],
                image: { src: "/Img/SEB/02_galeries.jpg", alt: "Les galeries avant après du site" },
            },
            {
                kicker: "Le suivi",
                body: [
                    "L'app affiche les visites du site et les demandes de contact. À chaque nouvelle demande, le patron reçoit une notification push et peut rappeler le prospect dans la foulée.",
                    "D'un seul geste, il convertit la demande en vrai client dans sa base [NewBat](/projects/newbat), l'ERP du bâtiment que je développais en parallèle. Le prospect capté sur le site devient directement une fiche client, prête pour le devis et le chantier.",
                ],
                image: { src: "/Img/SEB/03_suivi.jpg", alt: "Statistiques et demandes de contact dans l'app" },
            },
        ],
        galleryTitle: { before: "Le site et l'app en ", mark: "images" },
        gallery: [
            { src: "/Img/SEB/store/01.webp", alt: "Accueil du site sur mobile" },
            { src: "/Img/SEB/store/02.webp", alt: "Page rénovation salle de bain" },
            { src: "/Img/SEB/store/03.webp", alt: "Page installation climatisation" },
            { src: "/Img/SEB/store/04.webp", alt: "Page projets clés en main" },
            { src: "/Img/SEB/store/05.webp", alt: "Actualités par métier dans l'app" },
            { src: "/Img/SEB/store/06.webp", alt: "Modifier une actualité avant après" },
            { src: "/Img/SEB/store/07.webp", alt: "Galerie salle de bain dans l'app" },
            { src: "/Img/SEB/store/08.webp", alt: "Statistiques du site" },
            { src: "/Img/SEB/store/09.webp", alt: "Demande de contact à convertir en client" },
        ],
    },
];

/////////////////////////////////////////////////////////////////
// récupère un projet par son slug
export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
