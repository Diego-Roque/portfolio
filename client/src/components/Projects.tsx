import ProjectCard from "@/components/ProjectCard";

function Projects(){
    return(
        <div id="Projects" className="w-full bg-stone-950  text-white py-16 px-4  flex flex-col items-center justify-center text-center">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-center "> PROYECTOS </h2>
            </div>
            <div
                className="w-fulltext-white py-16 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    name="Página principal de Bite"
                    description="Pagina con información del proyecto Bite"
                    codeLink="https://github.com/Diego-Roque/bite_webpage"
                    image="../images/biteweb.png"
                />

                <ProjectCard
                    name="Demo tecnica de Bite"
                    description="Proyecto de delivery, pick-up y menu interactivo"
                    codeLink="..."
                    image="../images/Bite.png"
                />

                <ProjectCard
                    name="Página principal de Fennec"
                    description="Proximamente..."
                    codeLink="..."
                    image="../images/IconOnly.png"
                />
            </div>
        </div>

    )

}

export default Projects;