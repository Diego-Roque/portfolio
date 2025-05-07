"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const sections = [
        { name: "Sobre mí",    href: "About" },
        { name: "Habilidades", href: "Habilidades" },
        { name: "Proyectos",   href: "Projects" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between">

            <div className="flex items-center gap-1 text-2xl font-bold text-white">
                DR <span className="text-green-400">.</span>
            </div>


            <div className="hidden md:flex space-x-8 text-2xl">
                {sections.map(({ name, href }) => (
                    <Link
                        key={href}
                        to={href}
                        smooth={true}
                        duration={300}
                        offset={-70}
                        className="relative px-2 py-1 text-gray-200 hover:text-white
                       after:content-[''] after:absolute after:left-0 after:bottom-0
                       after:h-[2px] after:w-0 after:bg-green-500
                       after:transition-all after:duration-300 hover:after:w-full
                       cursor-pointer"
                    >
                        {name}
                    </Link>
                ))}
            </div>


            <button
                className="md:hidden text-gray-200 hover:text-white"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>


            {open && (
                <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm flex flex-col items-center py-4 space-y-4 md:hidden ">
                    {sections.map(({ name, href }) => (
                        <Link
                            key={href}
                            to={href}
                            smooth={true}
                            duration={300}
                            offset={-70}
                            onClick={() => setOpen(false)}
                            className="text-gray-200 hover:text-white text-2xl cursor-pointer"
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
