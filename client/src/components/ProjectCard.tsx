import {Code} from "lucide-react";

interface ProjectCardProps {
    name: string;
    description: string;
    codeLink: string;
    image: string;
}

function ProjectCard({ name, description, codeLink, image }: ProjectCardProps) {
    return (
        <div className="bg-neutral-900 rounded-xl overflow-hidden max-w-lg">
            <div className="w-full h-64 overflow-hidden bg-neutral-800">
                {image ? (
                    <img
                        src={image}
                        alt={`${name} project screenshot`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-600">
                        No image available
                    </div>
                )}
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Project Title */}
                <h3 className="text-white text-2xl font-bold mb-2">{name}</h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-6">{description}</p>


                {/* Links */}
                <div className="flex gap-4">
                    {codeLink && (
                        <a
                            href={codeLink}
                            className="flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                            <Code size={18} className="mr-2" />
                            Código
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;