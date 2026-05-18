export const jobs = [
  {
    title: "Teknica by Legrand — Práctica Profesional (Backend)",
    time: ["17/07/2024 - 17/10/2024"],
    description:
      "Práctica intensiva en microservicios y orquestación de infraestructura para monitoreo industrial.",
    list: [
      "Construí servicios de adquisición de datos Modbus y SNMP, normalizando métricas para APIs internas.",
      "Implementé pipelines de datos con PostgreSQL e InfluxDB v2 para métricas time-series y reporting.",
      "Desplegué entornos reproducibles con Docker Compose y configuré observabilidad base (Prometheus + Grafana).",
    ],
  },
  {
    title: "Teknica by Legrand — Ingeniero de Software / Arquitecto de Soluciones IoT",
    time: ["18/10/2024 - Presente"],
    description:
      "Plataformas backend y DevOps para BMS y sistemas críticos, conectando equipos industriales con servicios cloud/on-prem en entornos aislados.",
    list: [
      "Único desarrollador backend y arquitecto de software del sistema BMS, construido desde cero: ingestión Modbus TCP/RTU y SNMP, APIs Django/DRF, workers Celery/Redis y despliegue con Docker, Nginx y Gunicorn.",
      "Arquitectura distribuida con integridad de datos transaccionales, reintentos idempotentes y colas resilientes para operación offline/edge.",
      "Observabilidad end-to-end: Prometheus + Alertmanager, Grafana, Node Exporter y cAdvisor para detectar cuellos de botella y capacity planning.",
      "Automatización de backups y flujos de entrega con Docker Compose, hardening en Linux (Ubuntu) y seguridad con JWT.",
    ],
  },
];
