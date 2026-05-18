import MiFoto from "../../assets/img/MiFoto.png";

export default function AboutMe() {
    return (
        <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center gap-8 px-6 lg:flex-row " >
            {/* Imagen */}
            <div className="border-primary h-64 w-64 overflow-hidden rounded-2xl shadow-lg md:h-96 md:w-96 drop-shadow-[4px_4px_0_#7836cf]">
                <img
                    src={MiFoto}
                    alt="Foto de Joaquín Ignacio Clark"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Texto */}
            <div className="flex-1 text-center text-gray-300 lg:text-left">
                <h2 className="text-3xl font-bold text-white">
                    Mi nombre es <span className="text-white text-shadow">Joaquín Ignacio Clark</span>
                </h2>
                <p className="mt-4">
                    Soy Ingeniero en Informática (24) y trabajo como Ingeniero de Software y
                    Arquitecto de Soluciones IoT en Teknica by Legrand. Me especializo en
                    backend, DevOps y arquitectura distribuida para sistemas críticos.
                </p>
                <p className="mt-2">
                    Diseño soluciones end-to-end: desde la adquisición de datos en campo
                    (Modbus TCP/RTU, SNMP) y la integración con microservicios hasta la
                    exposición de APIs robustas (Django/DRF, Gunicorn, Celery/Redis) y la
                    orquestación de infraestructura con Docker y Nginx. Mi foco es garantizar
                    integridad de datos transaccionales, trazabilidad y operación en entornos
                    aislados (offline).
                </p>
                <p className="mt-2">
                    Crecí rápido en Teknica: inicié en práctica profesional y fui contratado
                    al terminarla como único desarrollador a cargo del proyecto end-to-end
                    — backend, infraestructura, base de datos y QA — instrumentando
                    observabilidad con Prometheus, Grafana/Alertmanager y automatizando
                    despliegues reproducibles.
                </p>
                <p className="mt-2">
                    Creo en la convergencia IT/OT como ventaja competitiva: combino protocolos
                    industriales, infraestructura Linux y pipelines de datos para entregar
                    plataformas resilientes, seguras y medibles.
                </p>
            </div>
        </div>
    );
}
