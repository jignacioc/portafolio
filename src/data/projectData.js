import urbanStyle from "../assets/img-projects/urbanStyle.png";

export const proyectos = [
  {
    titulo: "BMS Core Platform",
    slug: "bms-core",
    descripcion:
      "Plataforma BMS con ingestión Modbus/SNMP, APIs Django/DRF y workers Celery/Redis para control de dispositivos y métricas en tiempo real.",
    imagen: urbanStyle,
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
    categoria: "backend",
  },
];
