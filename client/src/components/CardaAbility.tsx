interface CardaAbilityProps {
    logo: React.ReactNode;  // permite pasar íconos o cualquier JSX
    title: string;
    description: string;
}

function CardaAbility({ logo, title, description }: CardaAbilityProps) {
    return (
        <div className="bg-neutral-900 rounded-xl p-6 text-center max-w-sm">
            <div className="w-16 h-16 bg-green-900/60 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-2xl font-mono">{logo}</span>
            </div>

            <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>

            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    );
}

export default CardaAbility;
