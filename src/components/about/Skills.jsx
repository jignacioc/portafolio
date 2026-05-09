import { useState } from "react";
import { technologies } from "../../data/technologies.js";

const FILTERS = [
    { key: "all", label: "Todas" },
    { key: "backend", label: "Backend" },
    { key: "infra", label: "Infra / DevOps" },
    { key: "iot", label: "IoT / OT" },
];

export default function Skills() {
    const [activeFilter, setActiveFilter] = useState("all");

    const visible = activeFilter === "all"
        ? technologies
        : technologies.filter((t) => t.category === activeFilter);

    return (
        <section className="site-container mt-14 mx-auto max-w-6xl px-4">
            <div className="site-container mt-14">
                <h2 className="text-4xl font-bold flex flex-col items-center gap-6 text-center whitespace-nowrap text-white md:flex-row md:items-center md:text-start">
                    <span className="drop-shadow-[2px_2px_0_#7836cf]">Tecnologias</span>
                    <span className="hidden h-1.5 grow rounded-lg drop-shadow-[2px_2px_0_#0debd8] bg-[#7836cf] md:block"></span>
                </h2>
            </div>

            {/* Filtros */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 px-2">
                {FILTERS.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveFilter(key)}
                        className={`filter-btn cursor-pointer rounded-full px-5 py-1.5 text-sm font-bold drop-shadow-[2px_2px_0_#7836cf] transition-all duration-150 active:translate-y-0.5 border-none ${activeFilter === key ? "bg-[#46caca] text-white" : "bg-[#69c7c7] text-[#1d1250]"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {visible.map((skill) => (
                    <div key={skill.name} className="relative group">
                        <div className="absolute inset-0 -z-10 rounded-lg blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

                        <div className="flex flex-col items-center bg-gray-900 p-4 drop-shadow-[4px_4px_0_#7836cf] rounded-lg shadow-md transition-transform hover:scale-105">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-12 h-12 object-contain"
                                loading="lazy"
                            />
                            <p className="mt-2 text-white text-lg font-semibold drop-shadow-[1px_1px_0_#7836cf] text-center">
                                {skill.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
