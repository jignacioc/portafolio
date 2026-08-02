import { useState } from "react";
import { technologies } from "../../data/technologies.js";
import Reveal from "../commons/Reveal.jsx";
import SectionHeading from "../commons/SectionHeading.jsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const FILTERS = [
    { key: "all", label: "Todas" },
    { key: "backend", label: "Backend" },
    { key: "infra", label: "Infra / DevOps" },
    { key: "iot", label: "IoT / OT" },
];

export default function Skills() {
    const [activeFilter, setActiveFilter] = useState("all");
    const reduceMotion = useReducedMotion();

    const visible = activeFilter === "all"
        ? technologies
        : technologies.filter((t) => t.category === activeFilter);

    return (
        <Reveal as="section" className="mt-20 mx-auto max-w-6xl px-5 md:px-6">
            <SectionHeading>Tecnologías</SectionHeading>

            {/* Filtros */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 px-2">
                {FILTERS.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveFilter(key)}
                        className={`cursor-pointer border px-4 py-2 font-technical text-xs transition-colors ${activeFilter === key ? "border-phosphor bg-phosphor text-void" : "border-line bg-panel text-muted hover:border-phosphor-dim hover:text-phosphor"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <AnimatePresence mode="popLayout">
                    {visible.map((skill) => (
                    <motion.article
                        key={skill.name}
                        layout
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: -8 }}
                        whileHover={reduceMotion ? undefined : { y: -4, scale: 1.015 }}
                        transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
                        className="tech-panel group flex flex-col items-center p-4"
                    >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="h-12 w-12 object-contain transition-transform duration-200 group-hover:scale-110"
                                loading="lazy"
                            />
                            <p className="mt-3 text-center font-technical text-sm font-medium text-ink">
                                {skill.name}
                            </p>
                    </motion.article>
                ))}
                </AnimatePresence>
            </div>
        </Reveal>
    );
}
