'use client';
import Image from "next/image";
import Link from "next/link";
import Logo from "@/src/assets/logo.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



export const Navbar = () => {

    const pathname = usePathname();

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
                    <li>
                        <Link href={'/'}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            FILMS
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            REVIEWS
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}