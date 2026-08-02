import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import MiFoto from "../../../assets/img/chido.jpeg";
import Reveal from "../../commons/Reveal.jsx";
import SectionHeading from "../../commons/SectionHeading.jsx";

export default function AboutHome() {
    return (
        <Reveal as="section" className="relative mx-auto max-w-6xl px-5 pt-20 md:px-6">
            <SectionHeading>Sobre mí</SectionHeading>
            <div className="mt-8 grid items-stretch gap-5 md:grid-cols-[0.65fr_1.35fr]">
                <div className="tech-panel group min-h-72 overflow-hidden">
                    <img
                        src={MiFoto}
                        alt="Foto de Joaquín Ignacio Clark"
                        className="h-full w-full object-cover grayscale-[18%] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0"
                    />
                </div>

                <div className="tech-panel flex flex-col justify-center p-6 md:p-8">
                    <span className="stack-chip mb-5">PROFILE: BACKEND · DEVOPS · IT/OT</span>
                    <h3 className="text-2xl font-semibold text-ink md:text-3xl">
                        Tecnología aplicada, de la idea a la operación.
                    </h3>
                    <p className="mt-4 leading-7 text-muted">
                        Soy Joaquín Ignacio Clark, Ingeniero en Informática. Tengo experiencia
                        diseñando y construyendo soluciones tecnológicas que conectan software,
                        datos, infraestructura y sistemas reales. Me motiva enfrentar problemas
                        nuevos, aprender rápido y convertir ideas complejas en resultados útiles.
                    </p>

                    <Link
                        to="/about"
                        className="group mt-6 inline-flex w-fit items-center font-technical text-sm font-semibold text-phosphor transition-colors hover:text-ink"
                    >
                        ./ver_perfil
                        <HiArrowRight
                            className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                            size={18}
                        />
                    </Link>
                </div>
            </div>
        </Reveal>
    );
}
