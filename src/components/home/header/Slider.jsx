import "./slider.css";
import { technologies } from "../../../data/technologies.js";

export default function Slider() {
    const repeatedTechs = [...technologies, ...technologies, ...technologies];

    return (
        <div className="relative overflow-x-hidden border-b border-line bg-panel/40 px-8 py-6">
            <div className="animate-scroll hover:animate-paused flex w-max gap-12 md:gap-20">
                {repeatedTechs.map((tech, index) => (
                    <div
                        key={`${tech.name}-${index}`}
                        className="group flex items-center gap-2 transition-all duration-300"
                    >
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-7 w-7 object-contain transition-transform group-hover:scale-110"
                            loading="lazy"
                        />
                        <span className="font-technical text-xs tracking-wide text-muted transition-colors group-hover:text-phosphor">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
