import { useState, useEffect, useRef } from "react";

function SemiGauge({ value, max = 100, label }) {
    const pct = Math.min(Math.max(value / max, 0), 1);
    const r = 48;
    const cx = 60;
    const cy = 60;

    const toXY = (angleDeg) => {
        const rad = (angleDeg * Math.PI) / 180;
        return {
            x: cx + r * Math.cos(rad),
            y: cy - r * Math.sin(rad),
        };
    };

    const start = toXY(180);
    const end = toXY(0);
    const fillEndAngle = 180 - pct * 180;
    const fillEnd = toXY(fillEndAngle);
    const largeArc = pct > 0.5 ? 1 : 0;

    const trackD = `M ${start.x} ${start.y} A ${r} ${r} 0 1 1 ${end.x} ${end.y}`;
    const fillD = pct === 0
        ? ""
        : `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${fillEnd.x} ${fillEnd.y}`;

    return (
        <div className="flex flex-col items-center">
            <svg width="120" height="72" viewBox="0 0 120 72">
                <path d={trackD} fill="none" stroke="#e5e7eb" strokeWidth="9" strokeLinecap="round" />
                {pct > 0 && (
                    <path d={fillD} fill="none" stroke="#16a34a" strokeWidth="9" strokeLinecap="round" />
                )}
                <text x="60" y="62" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#16a34a">
                    {value}%
                </text>
            </svg>
            <span className="text-xs text-gray-500 -mt-1">{label}</span>
        </div>
    );
}

function ColorBarChart({ colors, height = 120 }) {
    const cols = 30;
    const bars = Array.from({ length: cols }, (_, i) => ({
        color: colors[i % colors.length],
        h: 40 + ((i * 17 + 23) % 55),
    }));
    return (
        <div className="flex items-end gap-px" style={{ height }}>
            {bars.map((b, i) => (
                <div key={i} style={{ height: b.h, backgroundColor: b.color, width: 9, borderRadius: 2, flexShrink: 0 }} />
            ))}
        </div>
    );
}

const BLUE_BARS = ["#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a"];
const RED_BARS = ["#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#fca5a5", "#fecaca"];
const MIXED_BARS = [...BLUE_BARS.slice(0, 5), ...RED_BARS.slice(0, 5)];

function TempBar({ colors = MIXED_BARS }) {
    return (
        <div className="flex gap-0.5">
            {colors.map((c, i) => (
                <div key={i} style={{ backgroundColor: c, height: 16, width: 16, borderRadius: 2 }} />
            ))}
        </div>
    );
}

function PotenciasCard() {
    return (
        <div className="border border-gray-200 rounded bg-white p-4">
            <p className="text-xs text-gray-400 mb-3">Potencias AUX / EVP Fan</p>
            <div className="flex justify-around items-center py-2">
                <SemiGauge value={0} label="Fan exterior" />
                <SemiGauge value={100} label="Fan interior" />
            </div>
        </div>
    );
}

function PresionesCard() {
    return (
        <div className="border border-gray-200 rounded bg-white p-4 flex flex-col">
            <p className="text-xs text-gray-400 mb-4">Presiones HP / LP</p>
            <div className="flex justify-around items-center flex-1">
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">Presión HP</p>
                    <p className="text-4xl font-bold text-green-600 leading-tight">2.50</p>
                    <p className="text-sm text-gray-400">bar</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">Presión LP</p>
                    <p className="text-4xl font-bold text-green-600 leading-tight">2.40</p>
                    <p className="text-sm text-gray-400">bar</p>
                </div>
            </div>
        </div>
    );
}

function HumedadCard() {
    const colors = ["#f97316", "#22c55e", "#3b82f6", "#f43f5e", "#a3e635", "#60a5fa", "#fb923c", "#4ade80"];
    return (
        <div className="border border-gray-200 rounded bg-white p-4">
            <p className="text-xs text-gray-400 mb-2">Humedad</p>
            <div className="relative flex items-end">
                <div className="flex-1 overflow-hidden">
                    <ColorBarChart colors={colors} height={130} />
                </div>
                <span className="text-sm font-semibold text-green-500 ml-3 pb-2 whitespace-nowrap">
                    80.0 %H
                </span>
            </div>
        </div>
    );
}

function useOscillatingTemp(base, delta, interval = 80) {
    const [temp, setTemp] = useState(base);
    const dirRef = useRef(1);
    const tempRef = useRef(base);

    useEffect(() => {
        const id = setInterval(() => {
            tempRef.current = tempRef.current + dirRef.current * 0.05;
            if (tempRef.current >= base + delta) dirRef.current = -1;
            if (tempRef.current <= base - delta) dirRef.current = 1;
            setTemp(parseFloat(tempRef.current.toFixed(1)));
        }, interval);
        return () => clearInterval(id);
    }, [base, delta, interval]);

    return temp;
}

function TempHLPCard() {
    const tempHP = useOscillatingTemp(-11.1, 3, 80);
    const tempLP = useOscillatingTemp(-11.6, 3, 95);

    const color = (v) => v > -11 ? "text-green-500" : v > -13 ? "text-blue-500" : "text-blue-700";

    return (
        <div className="border border-gray-200 rounded bg-white p-4">
            <p className="text-xs mb-3">
                <span className="text-cyan-500 font-semibold">Temperatura H</span>
                <span className="text-gray-400">/L-P</span>
            </p>
            <div className="mb-4">
                <p className="text-base font-bold text-gray-800 mb-1">Temperatura HP</p>
                <div className="flex items-center justify-between">
                    <TempBar />
                    <span className={`text-sm font-semibold ml-3 tabular-nums transition-colors duration-300 ${color(tempHP)}`}>
                        {tempHP > 0 ? "+" : ""}{tempHP.toFixed(1)} <span className="text-xs">°C</span>
                    </span>
                </div>
            </div>
            <div>
                <p className="text-base font-bold text-gray-800 mb-1">Temperatura LP</p>
                <div className="flex items-center justify-between">
                    <TempBar />
                    <span className={`text-sm font-semibold ml-3 tabular-nums transition-colors duration-300 ${color(tempLP)}`}>
                        {tempLP > 0 ? "+" : ""}{tempLP.toFixed(1)} <span className="text-xs">°C</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

function SetpointCard() {
    return (
        <div className="border border-gray-200 rounded bg-white p-4 flex flex-col items-center justify-center min-h-[160px]">
            <p className="text-sm text-gray-500 mb-3">Setpoint Sala</p>
            <div className="flex items-baseline gap-1">
                <span className="text-7xl font-bold text-green-500 leading-none">21.0</span>
                <span className="text-3xl text-gray-400 font-light">°C</span>
            </div>
        </div>
    );
}

function TempInteriorCard() {
    return (
        <div className="border border-gray-200 rounded bg-white p-4">
            <p className="text-xs text-gray-400 mb-3">Temperatura Interior</p>
            <div className="mb-4">
                <p className="text-base font-bold text-gray-800 mb-1">Temperatura exterior</p>
                <div className="flex items-center justify-between">
                    <TempBar />
                    <span className="text-sm font-semibold text-green-500 ml-3">24.0 <span className="text-xs">°C</span></span>
                </div>
            </div>
            <div>
                <p className="text-base font-bold text-gray-800 mb-1">Temperatura interior</p>
                <div className="flex items-center justify-between">
                    <TempBar />
                    <span className="text-sm font-semibold text-blue-400 ml-3">13.7 <span className="text-xs">°C</span></span>
                </div>
            </div>
        </div>
    );
}

function EquipoHeader() {
    return (
        <div className="border border-gray-200 rounded bg-white mb-4 text-xs">
            <div className="grid px-4 py-1.5 border-b border-gray-100 font-semibold text-gray-700"
                style={{ gridTemplateColumns: "2fr 1fr 0.8fr 1.5fr 0.8fr" }}>
                <span>Nombre</span>
                <span>Protocolos</span>
                <span>Estado</span>
                <span>Sitio</span>
                <span>Subsitio</span>
            </div>
            <div className="grid px-4 py-2 text-gray-600"
                style={{ gridTemplateColumns: "2fr 1fr 0.8fr 1.5fr 0.8fr" }}>
                <div className="flex gap-2">
                    <span className="text-cyan-500 cursor-pointer hover:underline">Climo Datatech</span>
                    <span className="text-gray-400">SR144221760</span>
                </div>
                <span className="text-cyan-500">Modbus TCP</span>
                <span>Activo</span>
                <span>Metropolitana, San Bernardo</span>
                <span>Bodega</span>
            </div>
        </div>
    );
}

function DownloadIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

function TopButtons() {
    return (
        <div className="flex justify-center gap-3 mb-4">
            <button className="bg-teal-600 hover:bg-teal-700 transition-colors text-white text-xs px-4 py-1.5 rounded flex items-center gap-1.5 shadow-sm cursor-pointer border-none">
                <DownloadIcon /> Descargar informe
            </button>
            <button className="bg-teal-600 hover:bg-teal-700 transition-colors text-white text-xs px-4 py-1.5 rounded flex items-center gap-1.5 shadow-sm cursor-pointer border-none">
                <DownloadIcon /> Descargar informe instantáneo
            </button>
        </div>
    );
}

export default function DetalleEquipo() {
    return (
        <div className="bg-gray-50 p-5">
            <TopButtons />
            <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
                Detalle del Equipo
            </h1>
            <EquipoHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <PotenciasCard />
                <PresionesCard />
                <HumedadCard />
                <TempHLPCard />
                <SetpointCard />
                <TempInteriorCard />
            </div>
        </div>
    );
}
