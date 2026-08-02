import { Link } from "react-router-dom";
import HomeProjectCard from "./HomeProyectCard.jsx";
import { proyectos } from "../../../data/projetsAboutData.js";
import Reveal from "../../commons/Reveal.jsx";
import SectionHeading from "../../commons/SectionHeading.jsx";

export default function HomeProyect() {
    return (
        <Reveal as="section" className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-6">
            <SectionHeading>Proyectos</SectionHeading>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {proyectos.map((p) => (
                    <HomeProjectCard key={p.titulo} {...p} />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Link
                    to="/proyectos"
                    className="terminal-button"
                >
                    $ listar_todos
                </Link>
            </div>
        </Reveal>
    );
}
