import { Link } from "react-router-dom";
import Sidebar from "../bms/Sidebar.jsx";
import {
    HomeIcon,
    BuildingIcon,
    DollarIcon,
    PlugIcon,
    CpuIcon,
    BellIcon,
    UsersIcon,
    PinIcon,
    DashIcon,
    RemoteIcon,
    VideoIcon,
    FileIcon,
    ActivityIcon,
    CalendarIcon,
} from "../bms/icons.jsx";

export const BASE = "/proyectos/bms-residencial";
export const TITULO = "BMS Residencial";

const ENABLED = [
    { to: `${BASE}/inicio`, label: "Inicio", icon: HomeIcon },
    { to: `${BASE}/residencial`, label: "Residencial", icon: BuildingIcon },
    { to: `${BASE}/facturacion`, label: "Facturación", icon: DollarIcon },
    { to: `${BASE}/cargadores-ev`, label: "Cargadores EV", icon: PlugIcon },
];

const DISABLED = [
    { label: "Equipos", icon: CpuIcon },
    { label: "Alertas", icon: BellIcon },
    { label: "Usuarios", icon: UsersIcon },
    { label: "Sitios", icon: PinIcon },
    { label: "Dashboards", icon: DashIcon },
    { label: "Control KNX", icon: RemoteIcon },
    { label: "CCTV", icon: VideoIcon },
    { label: "Informe", icon: FileIcon },
    { label: "Sistema", icon: ActivityIcon },
    { label: "Logs", icon: CalendarIcon },
];

export function ResidencialSidebar() {
    return <Sidebar enabled={ENABLED} disabled={DISABLED} salir={BASE} />;
}

export function Breadcrumb({ items }) {
    return (
        <div className="flex justify-center items-center gap-2 text-sm text-gray-700 pt-5">
            <HomeIcon size={16} />
            <Link to={`${BASE}/inicio`} className="text-emerald-700 font-medium hover:underline">
                Inicio
            </Link>
            {items.map(({ label, to }) => (
                <span key={label} className="flex items-center gap-2">
                    <span className="text-gray-400">&gt;</span>
                    {to ? (
                        <Link to={to} className="text-emerald-700 font-medium hover:underline">{label}</Link>
                    ) : (
                        <span className="text-gray-800">{label}</span>
                    )}
                </span>
            ))}
        </div>
    );
}

export function Panel({ title, actions, children }) {
    return (
        <div className="bg-white border border-gray-200 rounded-md shadow-sm m-6">
            {(title || actions) && (
                <div className="flex items-center justify-between px-6 pt-5 pb-3">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    <div className="flex items-center gap-2">{actions}</div>
                </div>
            )}
            {children}
        </div>
    );
}

export function SearchBox({ placeholder = "Buscar..." }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="border border-gray-300 rounded px-3 py-1.5 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-emerald-700"
        />
    );
}

export function Table({ columns, rows }) {
    return (
        <div className="overflow-x-auto px-6 pb-6">
            <table className="w-full text-sm text-gray-700">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        {columns.map((c) => (
                            <th key={c} className="text-left font-bold px-3 py-3 whitespace-nowrap">{c}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r, i) => (
                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                            {r.map((cell, j) => (
                                <td key={j} className="px-3 py-3 whitespace-nowrap">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function Tabs({ tabs, active, onChange }) {
    return (
        <div className="flex gap-6 px-6 border-b border-gray-200">
            {tabs.map(({ id, label, disabled }) => (
                <button
                    key={id}
                    disabled={disabled}
                    onClick={() => onChange(id)}
                    className={`pb-2 pt-1 text-sm font-medium border-b-2 bg-transparent transition-colors ${active === id
                        ? "border-emerald-700 text-emerald-700 cursor-pointer"
                        : disabled
                            ? "border-transparent text-gray-300 cursor-not-allowed"
                            : "border-transparent text-gray-600 hover:text-gray-900 cursor-pointer"
                        }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export const clp = (n) => "$" + Math.round(n).toLocaleString("es-CL");

// 18 departamentos repartidos en 3 pisos, como el edificio piloto.
export const DEPARTAMENTOS = Array.from({ length: 18 }, (_, i) => {
    const piso = Math.floor(i / 6) + 1;
    const numero = piso * 100 + (i % 6) + 1;
    return {
        numero,
        piso: `PISO ${piso}`,
        residente: `Residente ${i + 1}`,
        m2: [54, 62, 71, 48, 85, 66][i % 6],
        kwh: [182, 214, 256, 141, 302, 198, 225, 167, 288, 154, 231, 276, 190, 207, 162, 245, 318, 173][i],
    };
});
