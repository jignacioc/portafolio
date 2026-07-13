export const jobs = [
  {
    title: "Teknica by Legrand — Práctica en desarrollo de software (Full-stack)",
    time: ["17/07/2024 - 17/10/2024"],
    description:
      "Desarrollo del MVP de una plataforma de telemetría industrial.",
    list: [
      "Desarrollo full-stack del MVP de la plataforma de telemetría (Modbus TCP / SNMP), con gestión centralizada de dispositivos y sistema de envío de alarmas.",
      "Servicios de adquisición de datos Modbus y SNMP, normalizando métricas para las APIs internas.",
      "Pipelines de datos con PostgreSQL y observabilidad base (Prometheus + Grafana), en entornos reproducibles con Docker Compose.",
    ],
  },
  {
    title: "Teknica by Legrand — Ingeniero de Software · Backend / DevOps IoT",
    time: ["18/10/2024 - Presente"],
    description:
      "Responsable end-to-end de plataformas SCADA/BMS de telemetría en producción real (datacenters, autopistas, edificios): del backend y la base de datos a la infraestructura y la puesta en marcha en terreno.",
    list: [
      "Responsable end-to-end del sistema BMS construido desde cero: modelado de base de datos relacional (PostgreSQL), APIs Django/DRF, workers Celery/Redis e ingestión Modbus TCP/RTU, SNMP y KNX.",
      "Optimización y administración de las bases de datos ya en operación; arquitectura con integridad transaccional, reintentos idempotentes y colas resilientes para operación offline/edge.",
      "Despliegue e infraestructura: aprovisionamiento y configuración de servidores Linux (Ubuntu), red Docker (~15 servicios), Nginx/Gunicorn y puesta en producción cloud / on-premise.",
      "Puesta en marcha en terreno: configuración de los equipos en sitio y habilitación de las funcionalidades desarrolladas, validadas con pruebas exhaustivas previas.",
      "Observabilidad end-to-end (Prometheus + Alertmanager, Grafana, Node Exporter, cAdvisor). Las plataformas operan en producción y el cliente sigue incorporando nuevas funcionalidades.",
    ],
  },
];
