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
            <div className="mt-6 mb-6 flex flex-wrap justify-center gap-3 px-2">
                <button
                    className={`filter-btn cursor-pointer rounded-full px-5 py-1.5 text-sm font-bold drop-shadow-[2px_2px_0_#7836cf] transition-all duration-150 active:translate-y-0.5 border-none ${activeFilter === "all" ? "bg-[#46caca] text-white" : "bg-[#69c7c7] text-[#1d1250]"
                        }`}
                    onClick={() => handleFilterClick("all")}
                >
                    Todos
                </button>
                <button
                    className={`filter-btn cursor-pointer rounded-full px-5 py-1.5 text-sm font-bold drop-shadow-[2px_2px_0_#7836cf] transition-all duration-150 active:translate-y-0.5 border-none ${activeFilter === "backend" ? "bg-[#46caca] text-white" : "bg-[#69c7c7] text-[#1d1250]"
                        }`}
                    onClick={() => handleFilterClick("backend")}
                >
                    Backend
                </button>
                <button
                    className={`filter-btn cursor-pointer rounded-full px-5 py-1.5 text-sm font-bold drop-shadow-[2px_2px_0_#7836cf] transition-all duration-150 active:translate-y-0.5 border-none ${activeFilter === "infra" ? "bg-[#46caca] text-white" : "bg-[#69c7c7] text-[#1d1250]"
                        }`}
                    onClick={() => handleFilterClick("infra")}
                >
                    Infra / DevOps
                </button>
                <button
                    className={`filter-btn cursor-pointer rounded-full px-5 py-1.5 text-sm font-bold drop-shadow-[2px_2px_0_#7836cf] transition-all duration-150 active:translate-y-0.5 border-none ${activeFilter === "iot" ? "bg-[#46caca] text-white" : "bg-[#69c7c7] text-[#1d1250]"
                        }`}
                    onClick={() => handleFilterClick("iot")}
                >
                    IoT / OT
                </button>
            </div>

            {/* Cards */}
            <div
                id="projects-container"
                className="4xl:px-96 flex flex-wrap justify-center gap-5 px-3 pt-5 xl:px-32 2xl:px-60"
            >
                {visibleProjects.map((proyecto) => (
                    <ProjectCard
                        key={proyecto.titulo}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        imagen={proyecto.imagen}
                        tecnologias={proyecto.tecnologias}
                        demo={proyecto.demo}
                        codigo={proyecto.codigo}
                    />
                ))}
            </div>

            {/* Ver el resto de los proyectos */}
            {filteredProjects.length > itemsToShow && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={loadMore}
                        className="px-6 py-2 cursor-pointer border-none bg-[#69c7c7] text-[#1d1250] font-bold rounded-full hover:bg-[#46caca] drop-shadow-[2px_2px_0_#7836cf] active:translate-y-0.5 active:drop-shadow-none transition-all"
                    >
                        Ver más
                    </button>
                </div>
            )}

            <Banner />
        </>
    );
}
