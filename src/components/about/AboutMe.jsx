import MiFoto from "../../assets/img/MiFoto.png";
import Reveal from "../commons/Reveal.jsx";
import SectionHeading from "../commons/SectionHeading.jsx";

export default function AboutMe() {
    return (
        <Reveal as="section" className="mx-auto mt-20 max-w-6xl px-5 md:px-6">
            <SectionHeading>Sobre mí</SectionHeading>
            <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="tech-panel group mx-auto h-72 w-full max-w-sm overflow-hidden md:h-96">
                <img
                    src={MiFoto}
                    alt="Foto de Joaquín Ignacio Clark"
                    className="h-full w-full object-cover grayscale-[18%] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0"
                />
            </div>

            <div className="text-left text-muted">
                <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                    Mi nombre es <span className="text-phosphor">Joaquín Ignacio Clark</span>
                </h2>
                <p className="mt-5 leading-7">
                    Soy Ingeniero en Informática (24) y trabajé como Ingeniero de Software y
                    Arquitecto de Soluciones IoT en Teknica by Legrand hasta agosto de 2026.
                    Me especializo en backend, DevOps y arquitectura distribuida para sistemas
                    críticos.
                </p>
                <p className="mt-3 leading-7">
                    Diseñé soluciones end-to-end: desde la adquisición de datos en campo
                    (Modbus TCP/RTU, SNMP) y la integración con microservicios hasta la
                    exposición de APIs robustas (Django/DRF, Gunicorn, Celery/Redis) y la
                    orquestación de infraestructura con Docker y Nginx. Mi foco fue garantizar
                    integridad de datos transaccionales, trazabilidad y operación en entornos
                    aislados (offline).
                </p>
                <p className="mt-3 leading-7">
                    Crecí rápido en Teknica: inicié en práctica profesional y fui contratado
                    al terminarla como único desarrollador a cargo del proyecto end-to-end
                    — backend, infraestructura, base de datos y QA — instrumentando
                    observabilidad con Prometheus, Grafana/Alertmanager y automatizando
                    despliegues reproducibles.
                </p>
                <p className="mt-3 leading-7">
                    Creo en la convergencia IT/OT como ventaja competitiva: combino protocolos
                    industriales, infraestructura Linux y pipelines de datos para entregar
                    plataformas resilientes, seguras y medibles.
                </p>
            </div>
            </div>
        </Reveal>
    );
}
