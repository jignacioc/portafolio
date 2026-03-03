import ServiceCard from "./ServiceCard.jsx";
import { FaLaptopCode, FaBolt, FaRocket } from "react-icons/fa";

export default function Features() {
    return (
        <section className="site-container mt-14 mx-auto max-w-6xl px-4">
            <h2 className="text-4xl font-bold flex flex-col items-center gap-6 text-center whitespace-nowrap text-white md:flex-row md:items-center md:text-end">
                <span className="hidden h-1.5 grow rounded-lg drop-shadow-[2px_2px_0_#0debd8] bg-[#7836cf] md:block"></span>
                <span className="drop-shadow-[2px_2px_0_#7836cf]">Servicios</span>
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <ServiceCard
                    icon={FaLaptopCode}
                    title="Arquitectura Backend & APIs"
                    description="Diseño de servicios con Django/DRF, PostgreSQL y Redis, priorizando integridad de datos transaccionales, seguridad con JWT y despliegues reproducibles con Docker."
                />
                <ServiceCard
                    icon={FaBolt}
                    title="Plataformas IoT/OT y BMS"
                    description="Ingestión de datos en campo (Modbus TCP/RTU, SNMP) y orquestación de microservicios para Building Management Systems, con resiliencia en entornos offline."
                />

                <ServiceCard
                    icon={FaRocket}
                    title="Observabilidad y DevOps"
                    description="Dashboards y alertas con Prometheus, Grafana y Alertmanager; CI/CD ligero, Nginx reverse proxy y hardening en Linux para operaciones seguras."
                />
            </div>
        </section>
    );
}
