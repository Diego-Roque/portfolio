"use client";

import { Link } from "react-scroll";

function GreenButton() {
    return (
        <Link
            to='About'
            smooth={true}
            duration={100}
            offset={-70}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-full transition-colors duration-300 cursor-pointer"
        >
            Descubre más
            <span className="text-lg">↓</span>
        </Link>
    );
}

export default GreenButton;
