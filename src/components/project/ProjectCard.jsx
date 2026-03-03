import { HiArrowRight } from "react-icons/hi";

export default function ProjectCard({
    titulo,
    descripcion,
    imagen,
    tecnologias,
    demo,
    codigo,
}) {
    return (
        <div className="project-card z-10 flex w-[400px] flex-col overflow-hidden rounded-lg bg-gray-900 shadow-lg transition-transform hover:scale-[1.01] lg:w-[320px] drop-shadow-[4px_4px_0_#7836cf]">
            <img
                src={imagen}
                alt={`Imagen del proyecto ${titulo}`}
                className="h-50 w-full rounded-2xl object-cover p-3"
            />
            <div className="flex grow flex-col px-3 pb-3">
                <h3 className="text-xl font-semibold text-white drop-shadow-[1px_1px_0_#7836cf]">
                    {titulo}
                </h3>

                <div className="my-1.5 flex flex-wrap gap-2">
                    {tecnologias.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md bg-[#7836cf]/20 text-[#a27ed1] px-2 py-0.5 text-xs font-semibold"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="flex grow text-gray-400">{descripcion}</p>

                <div className="mt-auto flex justify-between">
                    <a
                        className="group text-primary mt-6 flex items-center justify-start p-0 font-bold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={demo}
                    >
                        Demo
                        <HiArrowRight
                            className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                            size={18}
                        />
                    </a>

                    <a
                        className="group text-primary mt-6 flex items-center justify-start p-0 font-bold text-lg"
                        href={codigo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Código
                        <HiArrowRight
                            className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                            size={18}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
