import { Link } from "react-router-dom";
import HomeProjectCard from "./HomeProyectCard.jsx";
import { proyectos } from "../../../data/projetsAboutData.js";

export default function HomeProyect() {
    return (
        <section className="py-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 mx-auto px-6 text-center text-shadow">
                Proyectos Destacados
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-[930px] mx-auto px-4">
                {proyectos.map((p) => (
                    <HomeProjectCard key={p.titulo} {...p} />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Link
                    to="/proyectos"
                    className="px-6 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-3xl transition-all duration-150 drop-shadow-[2px_2px_0_#0debd8] active:translate-0.5 active:drop-shadow-none"
                >
                    Ver todos los proyectos
                </Link>
            </div>
        </section>
    );
}
