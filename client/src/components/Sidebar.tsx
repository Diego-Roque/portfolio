import { Github, Linkedin, Instagram } from "lucide-react";

function Sidebar() {
    return (
        <div className="fixed top-2/3 left-4 z-50 flex flex-col items-center space-y-6">



            {/* Íconos */}
            <a href="https://www.linkedin.com/in/diego-roque-251352293/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-400 hover:text-white transition-colors w-6 h-6" />
            </a>
            <a href="https://github.com/Diego-Roque" target="_blank" rel="noopener noreferrer">
                <Github className="text-gray-400 hover:text-white transition-colors w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/roque.06" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-gray-400 hover:text-white transition-colors w-6 h-6" />
            </a>
            <div className="w-[2px] h-32 bg-gray-400"></div>
        </div>
    );
}


export default Sidebar;
