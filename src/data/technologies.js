const devicon = (slug, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const local = (file) => `${import.meta.env.BASE_URL}icons/tech/${file}`;

export const technologies = [
  // Backend — lenguajes / framework / workers / datos / auth
  { name: "Python", icon: devicon("python"), category: "backend" },
  { name: "Django / DRF", icon: devicon("django", "plain"), category: "backend" },
  { name: "Java", icon: devicon("java"), category: "backend" },
  { name: "JavaScript", icon: devicon("javascript"), category: "backend" },
  { name: "PostgreSQL", icon: devicon("postgresql"), category: "backend" },
  { name: "Redis", icon: devicon("redis"), category: "backend" },
  { name: "Celery / Celery Beat", icon: local("celery.svg"), category: "backend" },
  { name: "Gunicorn", icon: local("gunicorn.svg"), category: "backend" },
  { name: "JWT", icon: local("jwt.svg"), category: "backend" },

  // Infra / DevOps — contenedores / proxy / OS / observabilidad / cloud / tooling
  { name: "Docker", icon: devicon("docker"), category: "infra" },
  { name: "Docker Compose", icon: local("docker-compose.svg"), category: "infra" },
  { name: "Docker Networks", icon: local("docker-networks.svg"), category: "infra" },
  { name: "Nginx", icon: devicon("nginx"), category: "infra" },
  { name: "Linux (Ubuntu)", icon: devicon("ubuntu", "plain"), category: "infra" },
  { name: "Prometheus", icon: devicon("prometheus"), category: "infra" },
  { name: "Grafana / Alertmanager", icon: devicon("grafana"), category: "infra" },
  { name: "Node Exporter", icon: local("node-exporter.svg"), category: "infra" },
  { name: "cAdvisor", icon: local("cadvisor.svg"), category: "infra" },
  { name: "Azure / AzCopy", icon: devicon("azure"), category: "infra" },
  { name: "Git", icon: devicon("git"), category: "infra" },

  // IoT / OT — protocolos industriales
  { name: "Modbus TCP/RTU", icon: local("modbus.svg"), category: "iot" },
  { name: "SNMP", icon: local("snmp.svg"), category: "iot" },
  { name: "KNX", icon: local("knx.svg"), category: "iot" },
];
