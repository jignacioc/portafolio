import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";

export const proyectos = [
  {
    titulo: "BMS Core Platform",
    descripcion:
      "Plataforma BMS con ingestión Modbus/SNMP, APIs Django/DRF y workers Celery/Redis para control de dispositivos y métricas en tiempo real.",
    imagen: urbanStyle.src,
    tecnologias: [
      "Python",
      "Django/DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Nginx",
    ],
    demo: "#",
    codigo: "#",
    categoria: "backend",
  },
  {
    titulo: "Gateway IoT Edge",
    descripcion:
      "Gateway para adquisición en campo (Modbus TCP/RTU y SNMP), normalización de payloads y envío seguro a microservicios internos.",
    imagen: imgNote.src,
    tecnologias: ["Python", "Modbus", "SNMP", "Docker Compose", "JWT"],
    demo: "#",
    codigo: "#",
    categoria: "iot",
  },
  {
    titulo: "Observabilidad Multisitio",
    descripcion:
      "Stack de monitoreo con Prometheus + Alertmanager, Grafana, Node Exporter y cAdvisor, con alertas accionables para sitios aislados.",
    imagen: mediCare.src,
    tecnologias: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Node Exporter",
      "cAdvisor",
      "Nginx",
    ],
    demo: "#",
    codigo: "#",
    categoria: "infra",
  },
  {
    titulo: "Pipeline de Telemetría Offline",
    descripcion:
      "Ingesta de telemetría hacia InfluxDB v2 y PostgreSQL con Celery Beat, ventanas de reintento e integración con dashboards en edge.",
    imagen: Verbenas.src,
    tecnologias: [
      "InfluxDB v2",
      "PostgreSQL",
      "Celery Beat",
      "Redis",
      "Docker Networks",
    ],
    demo: "#",
    codigo: "#",
    categoria: "backend",
  },
  {
    titulo: "Orquestador de Tareas y Backups",
    descripcion:
      "Celery + Redis para tareas programadas (backups AzCopy, limpieza de colas, healthchecks) desplegado en Docker con métricas expuestas.",
    imagen: ReactEcommerce.src,
    tecnologias: [
      "Celery",
      "Redis",
      "Docker Compose",
      "AzCopy",
      "Ubuntu",
      "JWT",
    ],
    demo: "#",
    codigo: "#",
    categoria: "infra",
  },
  {
    titulo: "API de Dispositivos Industriales",
    descripcion:
      "API con Django/DRF + Gunicorn para exponer control y monitoreo de equipos, autenticación JWT y reverse proxy con Nginx.",
    imagen: legalWeb.src,
    tecnologias: ["Django/DRF", "Gunicorn", "JWT", "Nginx", "Modbus", "SNMP"],
    demo: "#",
    codigo: "#",
    categoria: "backend",
  },
  {
    titulo: "Panel de Métricas BMS",
    descripcion:
      "Dashboards Grafana para facilities, con consultas a PostgreSQL/InfluxDB y publicación segura detrás de Nginx reverse proxy.",
    imagen: Verbenas.src,
    tecnologias: ["Grafana", "Prometheus", "PostgreSQL", "Nginx"],
    demo: "#",
    codigo: "#",
    categoria: "infra",
  },
  {
    titulo: "Playground de Arquitectura Distribuida",
    descripcion:
      "Laboratorio personal para probar patrones de colas, resiliencia y despliegues Docker en redes aisladas antes de pasar a producción.",
    imagen: mediCare.src,
    tecnologias: [
      "Redis",
      "PostgreSQL",
      "Docker Networks",
      "JWT",
      "Prometheus",
    ],
    demo: "#",
    codigo: "#",
    categoria: "backend",
  },
];
