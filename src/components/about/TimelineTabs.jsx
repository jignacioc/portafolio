import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "../../styles/experiencie.css";
import Reveal from "../commons/Reveal.jsx";

export default function TimelineTabs({ title, items, align = "left" }) {
    const lastIndex = items.length - 1;
    const [activeIndex, setActiveIndex] = useState(lastIndex);
    const reduceMotion = useReducedMotion();
    const activeItem = items[activeIndex];

    return (
        <Reveal as="section" className="timeline-tabs mt-20 mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="section-heading">
                {`>> ${title}`}
            </h2>

            <section className="jobs">
                <div className="job-title">
                    {items.map((item, index) => (
                        <button
                            key={index}
                            className={`headline-3 tabbutton ${index === activeIndex ? "active" : ""}`}
                            aria-selected={index === activeIndex ? "true" : "false"}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span className="block"><span className="mr-2 text-phosphor-dim">0{index + 1}</span>{item.title}</span>
                            <span className="mt-1 block text-xs font-normal text-muted">
                                {item.time.join(" · ")}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="jobs-descriptions">
                    <AnimatePresence mode="wait">
                        <motion.article
                            key={activeItem.title}
                            className="description active tabcontent"
                            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
                        >
                            <h3 className="mb-3 text-xl font-semibold text-phosphor">{activeItem.title}</h3>
                            {activeItem.description && <p className="mb-4 text-muted">{activeItem.description}</p>}
                            {activeItem.list && (
                                <ul className="list-disc space-y-3 pl-5 text-muted marker:text-phosphor">
                                    {activeItem.list.map((it, idx) => (
                                        <li key={idx}>{it}</li>
                                    ))}
                                </ul>
                            )}
                        </motion.article>
                    </AnimatePresence>
                </div>
            </section>

            <div className="side-line"></div>
        </Reveal>
    );
}
