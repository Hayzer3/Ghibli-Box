'use client';
import Image from "next/image";
import Link from "next/link";
import Logo from "@/src/assets/logo.svg";
import { usePathname } from "next/navigation";



export const Navbar = () => {

    const pathname = usePathname();

    return (
        <nav className="fixed z-50 top-0 w-full flex justify-between items-center py-10 px-40 text-gray-50">
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