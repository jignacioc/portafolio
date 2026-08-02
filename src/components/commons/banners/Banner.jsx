import { Link } from "react-router-dom";
import Reveal from "../Reveal.jsx";
import SectionHeading from "../SectionHeading.jsx";

const cvUrl = `${import.meta.env.BASE_URL}CV_Joaquin_Clark.pdf`;

export default function Banner() {
    return (
        <Reveal as="section" className="mx-auto max-w-6xl px-5 py-20 md:px-6">
            <SectionHeading>Contacto</SectionHeading>
            <div className="tech-panel mt-8 px-6 py-14 text-center md:px-10">
                <h2 className="mb-4 text-3xl font-semibold text-ink md:text-4xl">
                    Mantengamos el contacto.
                </h2>
                <p className="mb-7 text-lg text-muted">
                    Encuéntrame en LinkedIn, GitHub o por correo.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/contact"
                        className="terminal-button terminal-button--solid"
                    >
                        $ contactar
                    </Link>
                    <a
                        href={cvUrl}
                        download="CV_Joaquin_Clark.pdf"
                        className="terminal-button"
                    >
                        $ descargar_cv
                    </a>
                </div>
            </div>
        </Reveal>
    );
}
