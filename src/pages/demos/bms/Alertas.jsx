import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, BellIcon, BellOffIcon, EyeIcon } from "./icons.jsx";

function SeverityPie({ critica, media, baja, size = 320 }) {
    const total = critica + media + baja || 1;
    const cx = size / 2, cy = size / 2, r = size / 2 - 4;

    const segments = [
        { value: critica, color: "#dc2626" },
        { value: media, color: "#facc15" },
        { value: baja, color: "#22c55e" },
    ].filter((s) => s.value > 0);

    let startAngle = -Math.PI / 2;
    const slices = segments.map((s, i) => {
        const angle = (s.value / total) * Math.PI * 2;
        const endAngle = startAngle + angle;

        const x1 = cx + r * Math.cos(startAngle);
        const y1 = cy + r * Math.sin(startAngle);
        const x2 = cx + r * Math.cos(endAngle);
        const y2 = cy + r * Math.sin(endAngle);
        const largeArc = angle > Math.PI ? 1 : 0;

        const d =
            segments.length === 1
                ? `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.001} ${cy - r} Z`
                : `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;

        startAngle = endAngle;
        return <path key={i} d={d} fill={s.color} stroke="white" strokeWidth="2" />;
    });

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {slices}
        </svg>
    );
}

const ALERTAS = [
    { fecha: "29-01-2026 11:52:47 a. m.", sev: "crítica", equipo: "UPS B6 VERTIV", string: "Banco 3", bateria: "Batería 11", dispositivo: "Impedancia B11", subsitio: "Paine 2", valor: 0, resumen: "ALARMA BAJA IMPEDANCIA" },
    { fecha: "29-01-2026 11:52:47 a. m.", sev: "media", equipo: "UPS B6 VERTIV", string: "Banco 3", bateria: "Batería 11", dispositivo: "Impedancia B11", subsitio: "Paine 2", valor: 0, resumen: "WARNING BAJA IMPEDANCIA" },
    { fecha: "29-01-2026 11:52:42 a. m.", sev: "crítica", equipo: "UPS A6 VERTIV", string: "Banco 4", bateria: "Batería 6", dispositivo: "Impedancia B6", subsitio: "Paine 2", valor: 0, resumen: "ALARMA BAJA IMPEDANCIA" },
    { fecha: "29-01-2026 11:52:42 a. m.", sev: "media", equipo: "UPS A6 VERTIV", string: "Banco 4", bateria: "Batería 6", dispositivo: "Impedancia B6", subsitio: "Paine 2", valor: 0, resumen: "WARNING BAJA IMPEDANCIA" },
    { fecha: "29-01-2026 11:52:35 a. m.", sev: "crítica", equipo: "UPS B5 VERTIV", string: "Banco 1", bateria: "Batería 4", dispositivo: "Impedancia B4", subsitio: "Paine 2", valor: 0, resumen: "ALARMA BAJA IMPEDANCIA" },
    { fecha: "29-01-2026 11:52:35 a. m.", sev: "media", equipo: "UPS B5 VERTIV", string: "Banco 1", bateria: "Batería 4", dispositivo: "Impedancia B4", subsitio: "Paine 2", valor: 0, resumen: "WARNING BAJA IMPEDANCIA" },
    { fecha: "29-01-2026 11:52:30 a. m.", sev: "crítica", equipo: "UPS A5 VERTIV", string: "Banco 2", bateria: "Batería 8", dispositivo: "Impedancia B8", subsitio: "Paine 2", valor: 0, resumen: "ALARMA BAJA IMPEDANCIA" },
    { fecha: "29-01-2026 11:52:30 a. m.", sev: "media", equipo: "UPS A5 VERTIV", string: "Banco 2", bateria: "Batería 8", dispositivo: "Impedancia B8", subsitio: "Paine 2", valor: 0, resumen: "WARNING BAJA IMPEDANCIA" },
];

function severityColor(sev) {
    if (sev === "crítica") return "text-red-600 font-medium";
    if (sev === "media") return "text-yellow-600 font-medium";
    return "text-green-600 font-medium";
}

function AlertasTable() {
    return (
        <div className="bg-white">
            <div className="grid grid-cols-[1.4fr_0.7fr_1fr_0.8fr_0.8fr_1fr_0.8fr_0.5fr_1.5fr_0.3fr] px-6 py-3 text-sm font-bold text-gray-700 border-b border-gray-200">
                <span>Fecha de Inicio</span>
                <span>Severidad</span>
                <span>Equipo</span>
                <span>String</span>
                <span>Batería</span>
                <span>Dispositivo</span>
                <span>Subsitio</span>
                <span>Valor</span>
                <span>Resumen</span>
                <span></span>
            </div>
            {ALERTAS.map((a, i) => (
                <div key={i} className="grid grid-cols-[1.4fr_0.7fr_1fr_0.8fr_0.8fr_1fr_0.8fr_0.5fr_1.5fr_0.3fr] px-6 py-4 text-sm text-gray-700 border-b border-gray-100 items-center">
                    <span>{a.fecha}</span>
                    <span className={severityColor(a.sev)}>{a.sev}</span>
                    <span>{a.equipo}</span>
                    <span>{a.string}</span>
                    <span>{a.bateria}</span>
                    <span>{a.dispositivo}</span>
                    <span>{a.subsitio}</span>
                    <span>{a.valor}</span>
                    <span>{a.resumen}</span>
                    <span className="flex justify-end text-gray-500 hover:text-gray-700 cursor-pointer">
                        <EyeIcon size={18} />
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function Alertas() {
    const [tab, setTab] = useState("activas");
    const tabBtn = (id, label) => (
        <button
            onClick={() => setTab(id)}
            className={`px-2 pb-2 text-base font-medium border-b-2 transition-colors bg-transparent cursor-pointer ${tab === id ? "border-emerald-700 text-emerald-700" : "border-transparent text-gray-700 hover:text-gray-900"
                }`}
        >
            {label}
        </button>
    );

    return (
        <div className="bg-gray-50">
            <div className="flex items-center px-6 pt-5 relative">
                <div className="flex-1"></div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                    <HomeIcon size={16} />
                    <Link to="/proyectos/bms-core/inicio" className="text-emerald-700 font-medium hover:underline">
                        Inicio
                    </Link>
                    <span className="text-gray-400">&gt;</span>
                    <BellIcon size={16} />
                    <span className="text-gray-800">Alertas</span>
                </div>
                <div className="flex-1 flex justify-end">
                    <button className="text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer">
                        <BellOffIcon size={22} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center mt-6 mb-8">
                <h2 className="text-2xl text-gray-700 mb-4">Distribución de Severidad</h2>
                <SeverityPie critica={22} media={24} baja={0} />
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-sm text-gray-700">
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-600"></span>
                        <span className="font-semibold">Crítica: 22 alertas</span>
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="font-semibold">Media: 24 alertas</span>
                    </span>
                </div>
                <div className="mt-2">
                    <span className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="font-semibold">Baja: 0 notificaciones</span>
                    </span>
                </div>
            </div>

            <div className="px-6 pb-8">
                <div className="bg-white border border-gray-200 rounded-md">
                    <div className="flex justify-center gap-8 pt-4 border-b border-gray-200">
                        {tabBtn("activas", "Alertas Activas")}
                        {tabBtn("hist", "Histórico")}
                    </div>

                    <div className="flex justify-center py-4">
                        <button className="bg-[#3f5751] hover:bg-[#344843] text-white text-base font-semibold px-6 py-3 rounded shadow-sm cursor-pointer border-none">
                            Descargar Excel
                        </button>
                    </div>

                    <AlertasTable />
                </div>
            </div>
        </div>
    );
}
