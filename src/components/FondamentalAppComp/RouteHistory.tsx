"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/////////////////////////////////////////////////////////////////
// note qu'une navigation interne a eu lieu (document.referrer ne suit pas les navigations Next)
// le bouton retour s'en sert pour savoir s'il peut revenir à la page précédente
export const IN_APP_NAV_KEY = "seguin:in-app-nav";

const RouteHistory: React.FC = () => {
    const pathname = usePathname();
    const first = useRef(true);

    useEffect(() => {
        if (first.current) {
            first.current = false;
            return;
        }
        try {
            sessionStorage.setItem(IN_APP_NAV_KEY, "1");
        } catch {
            // stockage indisponible : le bouton retour retombera sur /projects
        }
    }, [pathname]);

    return null;
};

export default RouteHistory;
