import scadaSoftware from "../assets/img-projects/scadaSoftware.png";
import bmsResidencial from "../assets/img-projects/bmsResidencial.png";
import ramsesJoyas from "../assets/img-projects/ramsesJoyas.png";
import suxen from "../assets/img-projects/suxen.png";

export const proyectos = [
  {
    titulo: "Suxen AI",
    imagen: suxen,
    tecnologias: [
      "Python",
      "Django/DRF",
      "LangGraph",
      "PostgreSQL",
      "Celery",
      "Docker",
    ],
    demo: "https://suxen.cl/",
    codigo: "#",
    codigoPrivado: true,
  },
  {
    titulo: "SCADA Software",
    slug: "bms-core",
    imagen: scadaSoftware,
    tecnologias: [
      "Python",
      "Django/DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
    demo: true,
    codigo: "#",
    codigoPrivado: true,
  },
  {
    titulo: "BMS Residencial",
    slug: "bms-residencial",
    imagen: bmsResidencial,
    tecnologias: ["Python", "Django/DRF", "PostgreSQL", "Celery", "Modbus", "KNX"],
    demo: true,
    codigo: "#",
    codigoPrivado: true,
  },
  {
    titulo: "Ramses Joyas",
    imagen: ramsesJoyas,
    tecnologias: ["Python", "Django/DRF", "PostgreSQL", "React", "Webpay", "Docker"],
    demo: "https://www.ramsesjoyas.cl/",
    codigo: "#",
    codigoPrivado: true,
  },
];
