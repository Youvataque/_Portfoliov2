"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
/////////////////////////////////////////////////////////////////
// composant navBar de l'app
const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    /////////////////////////////////////////////////////////////////
    // control du scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /////////////////////////////////////////////////////////////////
    // partie de gauche de la navBar (titre + logo)
    function title() {
        return (
            <Link className="flex items-center justify-center pl-[15%] max-md:pl-3 group" href="/">
                <img src={"/Img/profilPic.webp"} className="h-12 max-md:h-10 border-2 border-solid border-primary rounded-full mr-2 group-hover:border-secondary" alt="Logo" />
                <h2 className="mt-1 font-semiBold text-2xl max-md:text-[22px] text-primary group-hover:text-secondary">Seguin-dev</h2>
            </Link>
        );
    }

    /////////////////////////////////////////////////////////////////
    // template de lien
    function linkTemplate(title:string, dest:string) {
        const linkClass = `font-semiBold text-lg hover:text-secondary text-primary`;
        return <Link className={linkClass} href={dest}>{title}</Link>;
    }

    /////////////////////////////////////////////////////////////////
    // partie droite de la navBar (links)
    function links() {
        return (
            <div className='flex items-center justify-center pr-[15%] max-md:pr-3'>
                {linkTemplate("Projets", '/projects')}
                <div className='w-6 max-md:w-2'/>
                {linkTemplate(" Propos", '/about')}
                <div className='w-6 max-md:w-4' />
            </div>
        );
    }

    /////////////////////////////////////////////////////////////////
    // code principale
    return (
        <div className={`w-screen h-16 fixed top-0 flex items-center justify-between backdrop-blur-xl z-10 transition-all duration-200 ease-in-out ${scrolled ? 'border-b border-solid border-gray-800' : 'border-b border-solid border-background'}`}>
            {title()}
            {links()}
        </div>
    );
};

export default NavBar;

