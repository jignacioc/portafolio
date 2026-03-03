const skillsData = [
    {
        name: "Python",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "Django / DRF",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
    },
    {
        name: "Java",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
        name: "JavaScript",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "PostgreSQL",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    { name: "InfluxDB v2", iconUrl: null },
    {
        name: "Redis",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    { name: "Celery / Celery Beat", iconUrl: null },
    { name: "Gunicorn", iconUrl: null },
    {
        name: "Docker",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    { name: "Docker Compose", iconUrl: null },
    { name: "Docker Networks", iconUrl: null },
    {
        name: "Nginx",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    },
    {
        name: "Linux (Ubuntu)",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
        name: "Prometheus",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    },
    {
        name: "Grafana / Alertmanager",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    },
    { name: "Node Exporter", iconUrl: null },
    { name: "cAdvisor", iconUrl: null },
    { name: "Modbus TCP/RTU", iconUrl: null },
    { name: "SNMP", iconUrl: null },
    { name: "JWT", iconUrl: null },
    {
        name: "Azure / AzCopy",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
        name: "Git",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
];

export default function Skills() {
    return (
        <section className="site-container mt-14 mx-auto max-w-6xl px-4">
            <div className="site-container mt-14">
                <h2 className="text-4xl font-bold flex flex-col items-center gap-6 text-center whitespace-nowrap text-white md:flex-row md:items-center md:text-start">
                    <span className="drop-shadow-[2px_2px_0_#7836cf]">Tecnologias</span>
                    <span className="hidden h-1.5 grow rounded-lg drop-shadow-[2px_2px_0_#0debd8] bg-[#7836cf] md:block"></span>
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skillsData.map((skill) => {
                    const initials = skill.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 3)
                        .toUpperCase();

                    return (
                        <div key={skill.name} className="relative group">
                            <div className="absolute inset-0 -z-10 rounded-lg blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

                            <div className="flex flex-col items-center bg-gray-900 p-4 drop-shadow-[4px_4px_0_#7836cf] rounded-lg shadow-md transition-transform hover:scale-105">
                                {skill.iconUrl ? (
                                    <img
                                        src={skill.iconUrl}
                                        alt={skill.name}
                                        className="w-12 h-12"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                ) : (
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xs font-bold uppercase text-white">
                                        {initials}
                                    </div>
                                )}
                                <p className="mt-2 text-white text-lg font-semibold drop-shadow-[1px_1px_0_#7836cf] text-center">
                                    {skill.name}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
