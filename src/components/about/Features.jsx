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
                    title="Plataformas IoT/OT y SCADA"
                    description="Ingestión de datos en campo (Modbus TCP/RTU, SNMP) y orquestación de microservicios para sistemas SCADA de supervisión y control industrial, con resiliencia en entornos offline."
                />

                <ServiceCard
                    icon={FaRocket}
                    title="Observabilidad y DevOps"
                    description="Dashboards y alertas con Prometheus, Grafana y Alertmanager; CI/CD ligero, Nginx reverse proxy y hardening en Linux para operaciones seguras."
                />
            </div>
        </Reveal>
    );
}
