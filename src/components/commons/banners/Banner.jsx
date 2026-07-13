import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="pt-16">
            <div className="bg-gray-900 py-24 text-center text-white">
                <h2 className="mb-4 text-4xl font-bold drop-shadow-[2px_2px_0_#7836cf]">
                    ¿Trabajamos juntos?
                </h2>
                <p className="mb-6 text-lg text-neutral-300 font-semibold">
                    Estoy disponible para nuevas oportunidades. ¡Hablemos!
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/contact"
                        className="rounded-lg bg-primary hover:bg-secondary drop-shadow-[2px_2px_0_#0debd8] px-6 py-3 text-lg font-semibold text-white transition active:translate-0.5 active:drop-shadow-none"
                    >
                        Contáctame
                    </Link>
                    <a
                        href={`${import.meta.env.BASE_URL}CV_Joaquin_Clark.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="rounded-lg bg-primary hover:bg-secondary drop-shadow-[2px_2px_0_#0debd8] px-6 py-3 text-lg font-semibold text-white transition active:translate-0.5 active:drop-shadow-none"
                    >
                        Curriculum
                    </a>
                </div>
            </div>
        </section>
    );
}
