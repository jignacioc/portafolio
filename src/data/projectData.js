import urbanStyle from "../assets/img-projects/urbanStyle.png";
import seguritrans from "../assets/img-projects/seguritrans.png";

export const proyectos = [
  {
    titulo: "SCADA Software",
    slug: "bms-core",
    descripcion:
      "Plataforma SCADA con ingestión Modbus/SNMP, APIs Django/DRF y workers Celery/Redis para control de dispositivos y métricas en tiempo real.",
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
  {
    titulo: "Seguritrans",
    descripcion:
      "Sitio corporativo para Seguritrans, empresa de seguridad privada con 12 años de trayectoria: escoltas, guardias de seguridad y custodia de carga valorada.",
    imagen: seguritrans,
    tecnologias: ["HTML5", "CSS3", "Bootstrap", "jQuery"],
    demo: "https://seguritrans.cl/",
    codigo: "#",
    codigoPrivado: true,
    categoria: "frontend",
  },
];
