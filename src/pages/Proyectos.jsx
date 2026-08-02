import { useState } from "react";
import "../styles/projects.css";
import Hero from "../components/commons/hero/Hero.jsx";
import ProjectCard from "../components/project/ProjectCard.jsx";
import Banner from "../components/commons/banners/Banner.jsx";
import { proyectos } from "../data/projectData.js";

const INITIAL_VISIBLE = 12;

export default function Proyectos() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [itemsToShow, setItemsToShow] = useState(INITIAL_VISIBLE);

    const filteredProjects = proyectos.filter((proyecto) => {
        if (activeFilter === "all") return true;
        return proyecto.categoria && proyecto.categoria.toLowerCase() === activeFilter;
    });

    const visibleProjects = filteredProjects.slice(0, itemsToShow);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        setItemsToShow(INITIAL_VISIBLE);
    };

    const loadMore = () => {
        setItemsToShow((prev) => prev + INITIAL_VISIBLE);
    };

    return (
        <>
            <Hero titulo="Proyectos" />

            {/* Botones */}
            <div className="mx-auto mt-10 mb-4 flex max-w-6xl flex-wrap justify-center gap-3 px-5">
                <button
                    className={`filter-btn cursor-pointer border px-4 py-2 font-technical text-xs transition-colors ${activeFilter === "all" ? "active border-phosphor bg-phosphor text-void" : "border-line bg-panel text-muted hover:border-phosphor-dim hover:text-phosphor"
                        }`}
                    onClick={() => handleFilterClick("all")}
                >
                    Todos
                </button>
                <button
                    className={`filter-btn cursor-pointer border px-4 py-2 font-technical text-xs transition-colors ${activeFilter === "backend" ? "active border-phosphor bg-phosphor text-void" : "border-line bg-panel text-muted hover:border-phosphor-dim hover:text-phosphor"
                        }`}
                    onClick={() => handleFilterClick("backend")}
                >
                    Backend
                </button>
                <button
                    className={`filter-btn cursor-pointer border px-4 py-2 font-technical text-xs transition-colors ${activeFilter === "infra" ? "active border-phosphor bg-phosphor text-void" : "border-line bg-panel text-muted hover:border-phosphor-dim hover:text-phosphor"
                        }`}
                    onClick={() => handleFilterClick("infra")}
                >
                    Infra / DevOps
                </button>
                <button
                    className={`filter-btn cursor-pointer border px-4 py-2 font-technical text-xs transition-colors ${activeFilter === "iot" ? "active border-phosphor bg-phosphor text-void" : "border-line bg-panel text-muted hover:border-phosphor-dim hover:text-phosphor"
                        }`}
                    onClick={() => handleFilterClick("iot")}
                >
                    IoT / OT
                </button>
            </div>

            {/* Cards */}
            <div
                id="projects-container"
                className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5 px-5 pt-6 md:px-6"
            >
                {visibleProjects.map((proyecto) => (
                    <ProjectCard
                        key={proyecto.titulo}
                        titulo={proyecto.titulo}
                        slug={proyecto.slug}
                        descripcion={proyecto.descripcion}
                        imagen={proyecto.imagen}
                        tecnologias={proyecto.tecnologias}
                        demo={proyecto.demo}
                        codigo={proyecto.codigo}
                        codigoPrivado={proyecto.codigoPrivado}
                    />
                ))}
            </div>

            {/* Ver el resto de los proyectos */}
            {filteredProjects.length > itemsToShow && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={loadMore}
                        className="terminal-button terminal-button--solid cursor-pointer"
                    >
                        Ver más
                    </button>
                </div>
            )}

            <Banner />
        </>
    );
}
