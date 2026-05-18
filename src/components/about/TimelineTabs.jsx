import { useState } from "react";
import "../../styles/experiencie.css";

export default function TimelineTabs({ title, items, align = "left" }) {
    const lastIndex = items.length - 1;
    const [activeIndex, setActiveIndex] = useState(lastIndex);

    const alignClass = align === "right" ? "md:text-end" : "md:text-start";
    const line = (
        <span className="hidden h-1.5 grow rounded-lg drop-shadow-[2px_2px_0_#0debd8] bg-[#7836cf] md:block"></span>
    );
    const titleSpan = (
        <span className="drop-shadow-[2px_2px_0_#7836cf]">{title}</span>
    );

    return (
        <section className="site-container timeline-tabs mt-16 mx-auto max-w-6xl px-4">
            <h2 className={`text-4xl font-bold flex flex-col items-center gap-6 text-center whitespace-nowrap text-white md:flex-row md:items-center ${alignClass}`}>
                {align === "right" ? <>{line}{titleSpan}</> : <>{titleSpan}{line}</>}
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
                            <span className="block">{item.title}</span>
                            <span className="block text-sm font-normal text-white mt-1">
                                {item.time.join(" · ")}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="jobs-descriptions">
                    {items.map(({ title, description, list }, index) => (
                        <div
                            key={index}
                            className={`description tabcontent ${index === activeIndex ? "active" : ""}`}
                        >
                            <h3 className="mb-2 text-2xl font-bold text-[#7836cf]">{title}</h3>
                            {description && <p className="mb-2 text-white">{description}</p>}
                            {list && (
                                <ul className="marker:text-[#7836cf] list-disc space-y-2 pl-5 text-white">
                                    {list.map((it, idx) => (
                                        <li key={idx}>{it}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <div className="side-line"></div>
        </section>
    );
}
