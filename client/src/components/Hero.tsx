"use client";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import GreenButton from "@/components/GreenButton";

export default function Hero() {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center px-8 py-16 bg-black text-white text-center">
            <h2 className="text-6xl md:text-6xl font-extrabold justify-center leading-tight mb-6">
                <TextGenerateEffect
                    words="¡Hola! Soy"
                    duration={2}
                />
                <TextGenerateEffect
                    words="Diego Roque de Rosas"
                    className="text-green-500 text-6xl md:text-6xl font-extrabold"
                    duration={1.5}
                />
            </h2>

            <p className="text-2xl md:text-2xl text-gray-200 mb-4">
                Desarrollador Full-Stack y estudiante del Tec de Monterrey
            </p>

            <p className="italic text-gray-400 font-light mb-8 text-2xl">
                Resolviendo problemas de capa 8 desde 2020
            </p>

            <GreenButton/>
        </section>
    );
}
