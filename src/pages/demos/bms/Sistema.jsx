import { useState } from "react";
import {
    ChartIcon,
    DiskIcon,
    GaugeIcon,
    CpuIcon,
    ChevronUp,
    ChevronDown,
    MailIcon,
    HourglassIcon,
    SirenIcon,
} from "./icons.jsx";

function Donut({ segments, size = 220 }) {
    const total = segments.reduce((s, x) => s + x.value, 0);
    const r = size / 2 - 18;
    const cx = size / 2;
    const cy = size / 2;
    const C = 2 * Math.PI * r;
    let offset = 0;

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f3f4f6" strokeWidth="32" />
            {segments.map((s, i) => {
                const len = (s.value / total) * C;
                const dasharray = `${len} ${C - len}`;
                const el = (
                    <circle
                        key={i}
                        cx={cx} cy={cy} r={r}
                        fill="none"
                        stroke={s.color}
                        strokeWidth="32"
                        strokeDasharray={dasharray}
                        strokeDashoffset={-offset}
                        transform={`rotate(-90 ${cx} ${cy})`}
                    />
                );
                offset += len;
                return el;
            })}
        </svg>
    );
}

function MetricCard({ icon: Icon, title, donutSegments, total, items }) {
    return (
        <div className="bg-white border border-gray-200 rounded-md p-5 flex flex-col">
            <div className="flex items-center gap-2 text-gray-600 mb-3">
                <Icon size={20} />
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="flex justify-center my-4">
                <Donut segments={donutSegments} />
            </div>
            <div className="text-center text-sm text-gray-700 mb-2">
                Total: <span className="font-bold">{total}</span>
            </div>
            <div className="flex flex-col gap-1 items-center text-sm text-gray-700">
                {items.map((it, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: it.color }}></span>
                        <span>{it.label}: <span className="font-bold">{it.value}</span></span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CollapsibleSection({ icon: Icon, title, defaultOpen = true, children }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-md bg-white mb-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-3 text-left bg-transparent border-none cursor-pointer"
            >
                <div className="flex items-center gap-2 text-gray-700">
                    <Icon size={18} className="text-emerald-600" />
                    <span className="text-base font-semibold text-gray-800">{title}</span>
                </div>
                <span className="text-gray-500">
                    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
            </button>
            {open && <div className="border-t border-gray-100 p-5">{children}</div>}
        </div>
    );
}

function FilesystemChart() {
    const data = [
        { fs: "/", used: 312.81, free: 155.54 },
        { fs: "/boot/efi", used: 0.05, free: 0.5 },
    ];
    const max = 500;
    const ticks = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

    return (
        <div>
            <div className="flex justify-center items-center gap-5 mb-4 text-xs text-gray-700">
                <span className="flex items-center gap-2"><span className="w-4 h-3" style={{ backgroundColor: "#3f5751" }}></span>Usado (GB)</span>
                <span className="flex items-center gap-2"><span className="w-4 h-3 bg-teal-500"></span>Libre (GB)</span>
            </div>

            <div className="flex flex-col gap-3">
                {data.map((d, i) => (
                    <div key={i} className="flex items-center">
                        <div className="w-16 text-xs text-gray-700 text-right pr-3">{d.fs}</div>
                        <div className="relative flex-1 h-8 bg-gray-50 border border-gray-200 flex">
                            <div style={{ width: `${(d.used / max) * 100}%`, backgroundColor: "#3f5751" }}></div>
                            <div style={{ width: `${(d.free / max) * 100}%`, backgroundColor: "#0d9488" }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex mt-1">
                <div className="w-16 pr-3"></div>
                <div className="flex-1 flex justify-between text-[10px] text-gray-600">
                    {ticks.map((t) => <span key={t}>{t} GB</span>)}
                </div>
            </div>
        </div>
    );
}

export default function Sistema() {
    return (
        <main className="px-6 py-6 bg-gray-50">
            <CollapsibleSection icon={ChartIcon} title="Salud del Sistema" defaultOpen>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MetricCard
                        icon={DiskIcon}
                        title="Disco"
                        donutSegments={[
                            { value: 312.81, color: "#3f5751" },
                            { value: 0.04, color: "#dc2626" },
                            { value: 155.54, color: "#0d9488" },
                        ]}
                        total="468.39 GB"
                        items={[
                            { label: "Usado", value: "312.81 GB", color: "#3f5751" },
                            { label: "<Generico>", value: "0.04 GB", color: "#dc2626" },
                            { label: "Libre", value: "155.54 GB", color: "#0d9488" },
                        ]}
                    />
                    <MetricCard
                        icon={CpuIcon}
                        title="Memoria RAM"
                        donutSegments={[
                            { value: 7.84, color: "#3f5751" },
                            { value: 2.68, color: "#dc2626" },
                            { value: 4.47, color: "#0d9488" },
                        ]}
                        total="14.99 GB"
                        items={[
                            { label: "Usado", value: "7.84 GB", color: "#3f5751" },
                            { label: "<Generico>", value: "2.68 GB", color: "#dc2626" },
                            { label: "Libre", value: "4.47 GB", color: "#0d9488" },
                        ]}
                    />
                    <MetricCard
                        icon={GaugeIcon}
                        title="CPU"
                        donutSegments={[
                            { value: 7.6, color: "#3f5751" },
                            { value: 5.7, color: "#dc2626" },
                            { value: 86.7, color: "#0d9488" },
                        ]}
                        total="100%"
                        items={[
                            { label: "Usado", value: "7.6%", color: "#3f5751" },
                            { label: "<Generico>", value: "5.7%", color: "#dc2626" },
                            { label: "Libre", value: "86.7%", color: "#0d9488" },
                        ]}
                    />
                </div>

                <div className="mt-5 border border-gray-200 rounded-md bg-white p-5">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <DiskIcon size={18} />
                        <h3 className="text-base font-semibold text-gray-800">Discos por filesystem (Usado vs Libre)</h3>
                    </div>
                    <FilesystemChart />
                </div>
            </CollapsibleSection>

            <CollapsibleSection icon={MailIcon} title="Configuración SMTP" defaultOpen={false}>
                <p className="text-sm text-gray-500">Contenido del panel SMTP.</p>
            </CollapsibleSection>

            <CollapsibleSection icon={HourglassIcon} title="Configuración Tiempo de Vida Logs" defaultOpen={false}>
                <p className="text-sm text-gray-500">Configuración del tiempo de vida de los logs.</p>
            </CollapsibleSection>

            <CollapsibleSection icon={SirenIcon} title="Configuración Tiempo de Vida Alertas" defaultOpen={false}>
                <p className="text-sm text-gray-500">Configuración del tiempo de vida de las alertas.</p>
            </CollapsibleSection>
        </main>
    );
}
