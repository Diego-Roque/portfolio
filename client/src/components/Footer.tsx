"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Muestra el botón solo cuando hay desplazamiento
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Función para volver al inicio
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full bg-black text-gray-400 p-10 flex justify-between items-center">
            <p >&copy; {new Date().getFullYear()} Diego Roque de Rosas. Todos los derechos reservados.</p>


            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-neutral-800/80 text-green-500 rounded-full p-3 shadow-md hover:bg-neutral-700 transition"
                    aria-label="Volver al inicio"
                >
                    <ArrowUp size={20} />
                </button>
            )}
        </footer>
    );
}

export default Footer;
