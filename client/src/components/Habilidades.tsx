import CardaAbility from "@/components/CardaAbility";
import {Code2, Database, FileText} from "lucide-react";

function Habilidades() {
    return (
        <div id="Habilidades" className="w-full text-white py-16 px-4  flex flex-col items-center justify-center text-center">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">HABILIDADES</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <CardaAbility
                    logo={<Code2/>}
                    title="Frontend"
                    description="Desarrollo interfaces de usuario modernas, responsivas y atractivas con HTML, CSS, JavaScript, TypeScript, Tailwind y React."
                />
                <CardaAbility
                    logo={<Database/>}
                    title="Backend"
                    description="Creación de APIs robustas y sistemas escalables con Node.js, SQL, MongoDB y Firebase para aplicaciones web."
                />
                <CardaAbility
                    logo={<FileText/>}
                    title="Lenguajes & Herramientas"
                    description="Dominio de diversos lenguajes como Java, Python, C#, C++ y herramientas como Git y Electron."
                />
            </div>

        </div>

    )
}

export default Habilidades;