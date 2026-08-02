import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import PrivateRepoModal from "../commons/PrivateRepoModal.jsx";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectCard({
    titulo,
    slug,
    descripcion,
    imagen,
    tecnologias,
    demo,
    codigo,
    codigoPrivado,
}) {
    const [showPrivateModal, setShowPrivateModal] = useState(false);
    const isInternalDemo = demo === true && slug;
    const hasDemo = isInternalDemo || (demo && demo !== "#");
    const reduceMotion = useReducedMotion();
    const stack = tecnologias.slice(0, 3).join(" · ");

    return (
        <motion.article
            className="project-card tech-panel group z-10 flex w-full max-w-[400px] flex-col overflow-hidden lg:w-[340px]"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
        >
            <div className="m-3 overflow-hidden border border-line">
                <img
                    src={imagen}
                    alt={`Imagen del proyecto ${titulo}`}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
            </div>
            <div className="flex grow flex-col px-4 pb-4">
                <span className="stack-chip mb-3">STACK: {stack}</span>
                <h3 className="text-xl font-semibold text-ink">
                    {titulo}
                </h3>

                <div className="my-3 flex flex-wrap gap-2">
                    {tecnologias.map((tech) => (
                        <span
                            key={tech}
                            className="border border-line bg-void/40 px-2 py-0.5 font-technical text-[0.65rem] text-muted"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="flex grow text-sm leading-6 text-muted">{descripcion}</p>

                <div className={`mt-auto flex ${hasDemo ? "justify-between" : "justify-center"}`}>
                    {hasDemo && (isInternalDemo ? (
                        <Link
                            to={`/proyectos/${slug}`}
                            className="group mt-6 flex items-center justify-start p-0 font-technical text-sm font-semibold text-phosphor"
                        >
                            Demo
                            <HiArrowRight
                                className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                                size={18}
                            />
                        </Link>
                    ) : (
                        <a
                            className="group mt-6 flex items-center justify-start p-0 font-technical text-sm font-semibold text-phosphor"
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
                    ))}

                    {codigoPrivado ? (
                        <button
                            type="button"
                            onClick={() => setShowPrivateModal(true)}
                            className="group mt-6 flex cursor-pointer items-center justify-start border-none bg-transparent p-0 font-technical text-sm font-semibold text-phosphor"
                        >
                            Código
                            <HiArrowRight
                                className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                                size={18}
                            />
                        </button>
                    ) : (
                        <a
                            className="group mt-6 flex items-center justify-start p-0 font-technical text-sm font-semibold text-phosphor"
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
                    )}
                </div>
            </div>

            <PrivateRepoModal
                open={showPrivateModal}
                onClose={() => setShowPrivateModal(false)}
            />
        </motion.article>
    );
}
