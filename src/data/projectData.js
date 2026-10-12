import scadaSoftware from "../assets/img-projects/scadaSoftware.png";
import bmsResidencial from "../assets/img-projects/bmsResidencial.png";
import ramsesJoyas from "../assets/img-projects/ramsesJoyas.png";
import suxen from "../assets/img-projects/suxen.png";

export const proyectos = [
  {
    titulo: "Suxen AI",
    descripcion:
      "SaaS que convierte consultas de WhatsApp en reservas confirmadas. Agentes LangGraph sobre un backend Django que valida cada operación: la IA nunca escribe en la base de datos.",
    imagen: suxen,
    tecnologias: [
      "Python",
      "Django/DRF",
      "LangGraph",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "React",
    ],
    demo: "https://suxen.cl/",
    codigo: "#",
    codigoPrivado: true,
    categorias: ["backend", "infra"],
    tipo: "personal",
  },
  {
    titulo: "SCADA Software",
    slug: "bms-core",
    descripcion:
      "Plataforma SCADA con ingestión Modbus/SNMP, APIs Django/DRF y workers Celery/Redis para control de dispositivos y métricas en tiempo real.",
    imagen: scadaSoftware,
    tecnologias: [
      "Python",
      "Django/DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Nginx",
    ],
    demo: true,
    codigo: "#",
    codigoPrivado: true,
    categorias: ["backend", "infra", "iot"],
    tipo: "laboral",
  },
  {
    titulo: "BMS Residencial",
    slug: "bms-residencial",
    descripcion:
      "Plataforma para edificios residenciales: factura cada mes el consumo eléctrico por departamento a partir de medidores Modbus, cobra la carga de autos eléctricos por kWh en la boleta del residente e integra domótica KNX.",
    imagen: bmsResidencial,
    tecnologias: [
      "Python",
      "Django/DRF",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Modbus",
      "KNX",
      "Docker",
    ],
    demo: true,
    codigo: "#",
    codigoPrivado: true,
    categorias: ["backend", "iot"],
    tipo: "laboral",
  },
  {
    titulo: "Ramses Joyas",
    descripcion:
      "E-commerce para una joyería con 30 años en Ñuñoa: catálogo, carrito con pago Webpay, cotización por WhatsApp y panel de gestión propio para administrar productos y contenido.",
    imagen: ramsesJoyas,
    tecnologias: [
      "Python",
      "Django/DRF",
      "PostgreSQL",
      "React",
      "Tailwind",
      "Webpay",
      "Docker",
    ],
    demo: "https://www.ramsesjoyas.cl/",
    codigo: "#",
    codigoPrivado: true,
    categorias: ["backend", "infra"],
    tipo: "laboral",
  },
];
