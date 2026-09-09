import ServiceCard from "./ServiceCard.jsx";
import { FaLaptopCode, FaBolt, FaRocket } from "react-icons/fa";
import Reveal from "../commons/Reveal.jsx";
import SectionHeading from "../commons/SectionHeading.jsx";

export default function Features() {
    return (
        <Reveal as="section" className="mt-20 mx-auto max-w-6xl px-5 md:px-6">
            <SectionHeading>Servicios</SectionHeading>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <ServiceCard
                    icon={FaLaptopCode}
                    title="Arquitectura Backend & APIs"
                    description="Diseño de servicios con Django/DRF, PostgreSQL y Redis, priorizando integridad de datos transaccionales, seguridad con JWT y despliegues reproducibles con Docker."
                />
                <ServiceCard
                    icon={FaBolt}
                    title="Integración de Sistemas y Protocolos"
                    description="Conexión de fuentes de datos heterogéneas — desde protocolos industriales hasta APIs de terceros — y orquestación de microservicios adaptados a cada proyecto."
                />

                <ServiceCard
                    icon={FaRocket}
                    title="Redes, Linux y Observabilidad"
                    description="Administración de servidores Linux, redes y reverse proxy con Nginx; dashboards y alertas con Prometheus, Grafana y Alertmanager para operaciones seguras."
                />
            </div>
        </Reveal>
    );
}
