import { useState } from "react";
import { Link } from "react-router-dom";
import PrivateRepoModal from "../../commons/PrivateRepoModal.jsx";
import { motion, useReducedMotion } from "framer-motion";

export default function HomeProjectCard({ titulo, slug, imagen, tecnologias, demo, codigo, codigoPrivado }) {
    const [showPrivateModal, setShowPrivateModal] = useState(false);
    const isInternalDemo = demo === true && slug;
    const reduceMotion = useReducedMotion();
    const stack = tecnologias.slice(0, 3).join(" · ");

    return (
        <motion.article
            className="tech-panel group mx-auto flex w-full max-w-xl flex-col overflow-hidden"
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.18 }}
        >
            <div className="m-3 overflow-hidden border border-line">
                <img
                    src={imagen}
                    alt={`Proyecto: ${titulo}`}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
            </div>

            <div className="flex grow flex-col px-4 pb-4">
                <span className="stack-chip mb-3">STACK: {stack}</span>
                <h3 className="mb-4 text-lg font-semibold text-ink">
                    {titulo}
                </h3>

                <div className="mt-auto flex justify-between gap-3">
                    {isInternalDemo ? (
                        <Link
                            to={`/proyectos/${slug}`}
                            className="terminal-button w-full py-2"
                        >
                            Demo
                        </Link>
                    ) : (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="terminal-button w-full py-2"
                        >
                            Demo
                        </a>
                    )}

                    {codigoPrivado ? (
                        <button
                            type="button"
                            onClick={() => setShowPrivateModal(true)}
                            className="terminal-button w-full cursor-pointer py-2"
                        >
                            Código
                        </button>
                    ) : (
                        <a
                            href={codigo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="terminal-button w-full py-2"
                        >
                            Código
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
