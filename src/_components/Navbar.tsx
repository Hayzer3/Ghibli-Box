'use client';
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";



export const Navbar = () => {

    const [changeColor, setChangeColor] = useState(false);

    const changeColorNav = () => {
        if (window.scrollY > 100) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColorNav);
        return () => {
            window.removeEventListener('scroll', changeColorNav);
        };
    }, []);

    

    return (
        <nav className={`
            fixed z-50 top-0 w-full flex justify-between items-center py-10 px-40 transition-colors
            ${changeColor ? 'text-black bg-white' : 'text-gray-50'}
        `}>
            <Link href={'/'}>
                <Logo
                    className="w-60"
                />
            </Link>
            <section>
                <ul className="flex items-center gap-7 font-[rubik] font-semibold text-lg">
                    <li className="hover:border-b-3">
                        <Link href={'/login'}>
                            SIGN IN
                        </Link>
                    </li>
                    <li className="hover:border-b-3">
                        <Link href={'/cadastro'}>
                            SIGN UP
                        </Link>
                    </li>
                    <li className="hover:border-b-3">
                        <Link href={'/'}>
                            HOME
                        </Link>
                    </li>
                    <li className="hover:border-b-3">
                        <Link href={'/'}>
                            FILMS
                        </Link>
                    </li>
                    <li className="hover:border-b-3">
                        <Link href={'/'}>
                            ABOUT
                        </Link>
                    </li>
                    <li className="hover:border-b-3">
                        <Link href={'/'}>
                            <Search/>
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}
