import React from "react";
import "./slider.css"; // We will create this file for the animations

const technologies = [
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "Django / DRF",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    { name: "InfluxDB v2", icon: null },
    {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    { name: "Celery", icon: null },
    { name: "Gunicorn", icon: null },
    {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    { name: "Docker Compose", icon: null },
    {
        name: "Nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    },
    {
        name: "Prometheus",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    },
    {
        name: "Grafana",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    },
    { name: "Alertmanager", icon: null },
    { name: "Node Exporter", icon: null },
    { name: "cAdvisor", icon: null },
    {
        name: "Linux (Ubuntu)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    { name: "Modbus TCP/RTU", icon: null },
    { name: "SNMP", icon: null },
    { name: "Docker Networks", icon: null },
    { name: "JWT", icon: null },
    {
        name: "Azure / AzCopy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
];

export default function Slider() {
    const repeatedTechs = [...technologies, ...technologies, ...technologies];

    return (
        <div className="relative overflow-x-hidden px-8 py-8">
            <div className="animate-scroll hover:animate-paused flex w-max gap-12 md:gap-20">
                {repeatedTechs.map((tech, index) => {
                    const initials = tech.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 3)
                        .toUpperCase();

                    return (
                        <div
                            key={`${tech.name}-${index}`}
                            className="group flex items-center gap-2 transition-all duration-300"
                        >
                            {tech.icon ? (
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="h-7 w-auto object-contain transition-transform group-hover:scale-110"
                                    width="30"
                                    height="30"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            ) : (
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold uppercase text-white">
                                    {initials}
                                </div>
                            )}
                            <span className="text-lg font-medium text-white">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
