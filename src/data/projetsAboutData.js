import urbanStyle from "../assets/img-projects/urbanStyle.png";
import imgNote from "../assets/img-projects/note-app.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";

export const proyectos = [
  {
    titulo: "BMS Core Platform",
    imagen: urbanStyle.src,
    tecnologias: [
      "Python",
      "Django/DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
    demo: "#",
    codigo: "#",
  },
  {
    titulo: "Gateway IoT Edge",
    descripcion: "Captura Modbus/SNMP y publicación segura hacia microservicios.",
    imagen: imgNote.src,
    tecnologias: ["Python", "Modbus", "SNMP", "Docker Compose"],
    demo: "#",
    codigo: "#",
  },
  {
    titulo: "Observabilidad Multisitio",
    imagen: ReactEcommerce.src,
    tecnologias: ["Prometheus", "Grafana", "Alertmanager", "Node Exporter"],
    demo: "#",
    codigo: "#",
  },
  {
    titulo: "Orquestador de Tareas y Backups",
    imagen: ReactEcommerce.src,
    tecnologias: ["Celery", "Redis", "AzCopy", "Docker Compose"],
    demo: "#",
    codigo: "#",
  },
];
