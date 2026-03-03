import { useState } from "react";
import "../../styles/experiencie.css";
import { jobs } from "../../data/jobsData";

export default function Experience() {
    const lastIndex = jobs.length - 1;
    const [activeIndex, setActiveIndex] = useState(lastIndex);

    return (
        <section className="site-container experience mt-16 mx-auto max-w-6xl px-4">
            <h2 className="text-4xl font-bold flex flex-col items-center gap-6 text-center whitespace-nowrap text-white md:flex-row md:items-center md:text-start">
                <span className="drop-shadow-[2px_2px_0_#7836cf]">Mi Experiencia</span>
                <span className="hidden h-1.5 grow rounded-lg drop-shadow-[2px_2px_0_#0debd8] bg-[#7836cf] md:block"></span>
            </h2>

            <section className="jobs">
                <div className="job-title">
                    {jobs.map((job, index) => (
                        <button
                            key={index}
                            className={`headline-3 tabbutton ${index === activeIndex ? "active" : ""
                                }`}
                            aria-selected={index === activeIndex ? "true" : "false"}
                            onClick={() => setActiveIndex(index)}
                        >
                            {job.title}
                        </button>
                    ))}
                </div>

                <div className="jobs-descriptions">
                    {jobs.map(({ title, time, description, list }, index) => (
                        <div
                            key={index}
                            className={`description tabcontent ${index === activeIndex ? "active" : ""
                                }`}
                        >
                            <h3 className="mb-2 text-2xl font-bold text-[#7836cf]">{title}</h3>
                            <div className="job-time">
                                {time.map((t, idx) => (
                                    <time key={idx} className="headline-4 text-zinc-400 mb-1" dateTime={t}>
                                        {t}
                                    </time>
                                ))}
                            </div>
                            <p className="mb-2 text-white">{description}</p>
                            <ul className="marker:text-[#7836cf] list-disc space-y-2 pl-5 text-white">
                                {list.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <div className="side-line"></div>
        </section>
    );
}
